// server.js

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const { createClient } = require("@supabase/supabase-js");
const { sampleOrderSKULab, sampleNoShipmentSKULab } = require("./sampleOrder");
const { DateTime } = require("luxon");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

function getTimestamp() {
  return DateTime.now().setZone("America/Los_Angeles").toISO();
}

/**
 *
 * @param {*} input - "UTC" | "PST"
 * @returns
 * Example Input:
 * '2024-06-10T19:30:23.627Z' -> 2024-06-10T12:30:23.627-07:00
 * 1718015931000 -> 2024-06-10T12:30:23.627-07:00
 */
function formatTime(input, timezone = "UTC") {
  let dateTime;

  if (typeof input === "string") {
    dateTime = DateTime.fromISO(input, { zone: "utc" });
  } else if (typeof input === "number") {
    dateTime = DateTime.fromMillis(input, { zone: "utc" });
  } else {
    throw new Error("Invalid input type. Expected a string or number.");
  }

  if (timezone === "PST") {
    dateTime = dateTime.setZone("America/Los_Angeles");
  } else if (timezone === "UTC") {
    dateTime = dateTime.setZone("utc");
  } else {
    throw new Error('Invalid timezone. Expected "UTC" or "PST".');
  }

  return dateTime.toISO();
}

const supabaseUrl =  process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Define a route for handling webhooks
app.post("/sku-labs/orders/status/webhook", async (req, res) => {
  const webhookData = req.body;
  console.log(`${getTimestamp()} Webhook received:`, webhookData);
  console.log(`Time: ${formatTime(webhookData.data.time, "PST")}`);
  //   const webhookData = {
  //     type: "order.status",
  //     data: {
  //       store_id: "6471d3977dc537d10219fad4",
  //       order_number: "CL-WY-TEST-0002",
  //       original_status: "partially shipped",
  //       status: "delayed",
  //       user_id: "62f0fcbffc3f4e916f865d69",
  //       time: "2024-06-10T19:30:23.627Z",
  //     },
  //   };
  //   console.log(`${getTimestamp()}: Received webhook data:`, webhookData);

  // Once received webhook, get the order number and store number
  if (
    !webhookData.data ||
    !webhookData.data.store_id ||
    !webhookData.data.order_number
  ) {
    return res
      .status(500)
      .send(
        `${getTimestamp()} Webhook Data did not container store id or order number`
      );
  }
  const { store_id, order_number } = webhookData.data;
  //   const store_id = "6471d3977dc537d10219fad4";
  //   const store_id = "62f0fcbffc3f4e916f865d6a";
  //   const order_number = "CL-TEST-240607-SE-0062";
  //   const order_number = "CL-240614-CC-0132";
  const apiUrl = `https://api.skulabs.com/order/get_single?store_id=${store_id}&order_number=${order_number}`;
  const processWebhook = async () => {
    try {
      // Make the request to the SKU Labs API
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${process.env.SKU_LAB_TOKEN}`,
          Accept: "application/json",
        },
      });
      const orderData = response.data.order;
      console.log(
        `${getTimestamp()} OrderData Shipments:`,
        orderData?.shipments
      );
      // const orderData = sampleOrderSKULab.order;
      // const orderData = sampleNoShipmentSKULab.order;

      if (orderData && orderData.shipments && orderData.shipments.length > 0 && order_number.startsWith('CL')) {
        const shipment = orderData.shipments[0].response;

        // Extract necessary data for the Supabase update
        const shipping_carrier = shipment.provider || "";
        const shipping_service = shipment.service || "";
        const shipping_tracking_number = shipment.tracking_number || "";
        const shipping_status_last_updated_pst = formatTime(
          webhookData.data.time,
          "PST"
        );
        const shipping_status_last_updated = formatTime(webhookData.data.time);
        const shipping_previous_status = webhookData.data.original_status;
        const shipping_status = webhookData.data.status;

        const TABLE_NAME = order_number.includes("TEST")
          ? "_Orders_TEST"
          : "_Orders";
        // Update the _Orders table in Supabase
        const { data, error } = await supabase
          .from(TABLE_NAME)
          .update({
            shipping_carrier,
            shipping_service,
            shipping_tracking_number,
            shipping_status_last_updated,
            shipping_status_last_updated_pst,
            shipping_previous_status,
            shipping_status,
          })
          .eq("order_id", order_number)
          .select();

        if (error) {
          throw error;
        } else {
          console.log("Updated Data received: ", data)
        }

        console.log(
          `${getTimestamp()} Order updated successfully: ${order_number}`
        );

        // Have to update Stripe and Paypal Tracking Number Here too

        // Respond to the webhook
        // res.status(200).send("Webhook received and processed.");
      } else {
        return {
          message: `${getTimestamp()} No shipments found in the order data: ${order_number}`,
        };
        // throw new Error(
        //   `${getTimestamp()} No shipments found in the order data: ${order_number}`
        // );
      }
      return {
        message: `${getTimestamp()} Order updated successfully: ${order_number}`,
      };
    } catch (error) {
      console.error(
        `${getTimestamp()} Error caught: No shipments found in the order data: ${order_number}`
      );
      console.error(`${getTimestamp()}: Inside catch ${error}`);
      return {
        message: `${getTimestamp()} No shipments found in the order data or does not start with CL: ${order_number}`,
      };

      //   console.error(`${getTimestamp()} Error processing webhook:`, error);
      //   throw new Error(`${getTimestamp()} No shipments found in the order data: ${order_number}`);

      // Respond with an error status
      //   res.status(500).send("Error processing webhook.");
    }
  };
  try {
    const data = await processWebhook();
    return res.status(200).send({ message: data.message });
  } catch (e) {
    console.error(
      `${getTimestamp()} No shipments found in the order data: ${order_number}`
    );
    console.error(`${getTimestamp()}: Outside catch: ${e}`);
    return res.status(500).send({ message: e.message });
  }
  // Respond to the webhook sender
});

// app.post("products/update-quantities", async (req, res) => {
//   try {
//     const skuResponse = await axios.get('https://api.skulabs.com/v1/your-endpoint', {
//       headers: {
//         'Authorization': `Bearer ${SKU_LABS_API_KEY}`
//       }
//     });

//     const skus = skuResponse.data.skus;

//   }
// })
// Start the server
app.listen(PORT, () => {
  console.log(`${getTimestamp()} Server is running on port ${PORT}`);
});

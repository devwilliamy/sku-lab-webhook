const sampleOrderSKULab = {
  order: {
    items: [],
    scans: [],
    shipments: [
      {
        response: {
          provider: "UPS",
          service: "Ground",
          label_url:
            "https://easypost-files.s3.us-west-2.amazonaws.com/files/postage_label/20240614/e8a29979109c804974b1880e3a97379cb0.pdf",
          raw_label_url:
            "https://easypost-files.s3.us-west-2.amazonaws.com/files/postage_label/20240614/e8a29979109c804974b1880e3a97379cb0.pdf",
          commercial_invoice_url: "",
          currency: "USD",
          tracking_number: "1ZA039660301813115",
          amount: 11.5,
          list_amount: 20.78,
          retail_amount: 14.92,
          shipment_id: "shp_aa78855f76214bed8df1111e0db09bfe",
        },
        request: {
          _id: "666c7d7b7d552c0ab5c5c91d",
          sessionId: "666c7d7ac850b329a4899f2d",
          carrier_account_ids: [
            "6318d07a3f09a9894a5dad08",
            "63236b959351f09939849ed1",
            "63222c9c50c457a4f0b0a742",
            "64bef32c69e0aeafdcd3d01f",
            "64befa0603a04b8f4e348a28",
          ],
          batch_number: "",
          reference_1: "CL-240614-SE-0038",
          reference_2: "Ref# CL-240614-SE-0038",
          reference_invoice_number: "CL-240614-SE-0038",
          hazmat: "",
          saturday_delivery: false,
          provider: "ups",
          signature_confirmation: null,
          insurance_amount: 0,
          insurance: null,
          value: 199.95,
          shipping_charge: 0,
          origin: "62f0fcc0fc3f4e916f865d70",
          return_label: false,
          address: {
            name: "Andrew Beggs",
            company: null,
            street1: "5609 chatmoss road",
            street2: null,
            city: "Midlothian",
            state: "VA",
            zip: "23112",
            country: "US",
            email: "andrew.beggs@hotmail.com",
            phone: "+1 425 698 3166",
            address_type: "residential",
            method: "2 day free shipping",
            is_residential: true,
            residential: true,
            order_number: "CL-240614-SE-0038",
            federal_tax_id: "",
            state_tax_id: "",
          },
          return_address: {
            name: "Shipping Department",
            street1: "15529 Blackburn Ave.",
            city: "Norwalk",
            state: "CA",
            zip: "90650",
            country: "US",
            email: "info@coverland.com",
            phone: "800) 000-0000",
            company: "",
          },
          origin_address: {
            name: "Shipping Department",
            street1: "15529 Blackburn Ave",
            city: "Norwalk",
            state: "CA",
            zip: "90650",
            country: "US",
            email: "info@coverland.com",
            phone: "800) 000-0000",
          },
          order_items: [
            {
              quantity: 1,
              sku: "CA-SC-10-F-10-BE-1TO",
              location_id: "62f0fcc0fc3f4e916f865d71",
              item_id: "65ea058dc232eeedf72687ac",
              line_id: "666c79ec45326e872cca20b1",
              kit_id: null,
              _id: "666c7e271ae1037b5b26a207",
            },
          ],
          customs_items: [],
          parcel: {
            length: 6,
            width: 6,
            height: 5,
            weight: 16,
            weight_unit: "ounces",
            dimensions_unit: "inches",
          },
          rate: {
            carrier_account: {
              _id: "64befa0603a04b8f4e348a28",
              type: "ups",
              integration: "easypost",
              name: "UPS",
            },
            service_code: "Ground",
            name: "Ground",
          },
          third_party_billing: null,
          shipping_date: null,
          payer_federal_tax_id: "",
          payer_state_tax_id: "",
          dry_ice_weight: 0,
          dry_ice_is_for_medical_use: false,
          currency: "USD",
          incoterm: "",
          suppress_etd: "false",
          package_number: 1,
          num_packages: 1,
          tax_identifiers: [],
          ship_by_date: "2024-06-14T06:59:59.000Z",
          recipient_federal_tax_id: "",
          recipient_state_tax_id: "",
          memorize: true,
        },
        user_id: "64777d7a1ddfcd197d9835ef",
        state: "shipped",
        deducted: true,
        return_label: false,
        time: "2024-06-14T17:30:15.000Z",
        tracking_status: "Created",
        last_tracking_update: "2024-06-14T17:30:15.960Z",
        carrier_account_id: "64befa0603a04b8f4e348a28",
        _id: "666c7e271ae1037b5b26a1fe",
      },
    ],
    fulfillments: [],
    transactions: [],
    tags: ["6328f5c3c3ea0aede729f817", "631fb999d84943436d7707ce"],
    log: [
      {
        user_id: "66635182b8f5193504fa3d35",
        action: "added tag",
        details: {
          tag_id: "6328f5c3c3ea0aede729f817",
        },
        time: "2024-06-14T03:45:39.593Z",
        _id: "666bbce322e40aecdd543ebc",
      },
      {
        user_id: "64777d7a1ddfcd197d9835ef",
        action: "overrode",
        time: "2024-06-14T17:12:12.052Z",
        _id: "666c79ec45326e872cca20b3",
      },
      {
        user_id: "64777d7a1ddfcd197d9835ef",
        action: "added tag",
        details: {
          tag_id: "631fb999d84943436d7707ce",
        },
        time: "2024-06-14T17:12:12.064Z",
        _id: "666c79ec45326e872cca20bb",
      },
      {
        user_id: "64777d7a1ddfcd197d9835ef",
        action: "shipped",
        details: {
          notes: "",
        },
        time: "2024-06-14T17:30:16.766Z",
        _id: "666c7e28193dffb8d3ff13c7",
      },
    ],
    purchase_orders: [],
    _id: "666bbce322e40aecdd543eb4",
    store_id: "62f0fcbffc3f4e916f865d6a",
    order_number: "CL-240614-SE-0038",
    status: "shipped",
    processing: false,
    type: "manual",
    stash: {
      store_id: "62f0fcbffc3f4e916f865d6a",
      id: "CL-240614-SE-0038",
      items: [
        {
          id: "65ea058dc232eeedf72687ac",
          metadata: "",
          price: 199.95,
          quantity: 1,
          dropshipped: false,
          fulfillments: [],
          type: "item",
          line_id: "666c79ec45326e872cca20b1",
          lineName: "Car Seat Cover F-10 (Front) - Beige",
          lineSku: "CA-SC-10-F-10-BE-1TO",
          discount: 0,
          serial_numbers: [],
          _id: "666c79ec45326e872cca20b4",
        },
      ],
      total: 199.95,
      shipping: 0,
      tax: 0,
      discount: 0,
      date: "2024-06-14T03:45:38.098Z",
      notes:
        "Payment Method: Paypal CL-SC-10-F-10-BE-1TO-30100 2015-2024 Ford F-150 SuperCrew Cab Seat Covers Leather Beige Quantity: 1",
      shipping_information: {
        name: "Andrew Beggs",
        company: "",
        address: "5609 chatmoss road ",
        address_2: "",
        city: "Midlothian",
        state: "VA",
        zip: "23112",
        country: "US",
        method: "2 day free shipping",
        address_type: "residential",
        phone: "+1 425 698 3166",
        email: "andrew.beggs@hotmail.com",
        username: "",
        federal_tax_id: "",
        state_tax_id: "",
      },
      tags: ["Coverland"],
      returns: [],
      tax_identifiers: [],
      carrier: "",
      financial_status: "",
      incoterm: "",
      payer_federal_tax_id: "",
      payer_state_tax_id: "",
      ship_by_date: "2024-06-14T06:59:59.000Z",
      terms: "",
      trailer_id: "",
      weight: "",
    },
    combined_order_numbers: [],
    misscans: [],
    returns: [],
    notes: [],
    backup_stash: {
      store_id: "62f0fcbffc3f4e916f865d6a",
      id: "CL-240614-SE-0038",
      items: [
        {
          price: 199.95,
          quantity: 1,
          fulfillments: [],
          type: "item",
          line_id: "666bbce222e40aecdd543ead",
          serial_numbers: [],
          _id: "666bbce322e40aecdd543eb5",
        },
      ],
      total: 199.95,
      shipping: 0,
      tax: 0,
      discount: 0,
      date: "2024-06-14T03:45:38.098Z",
      notes:
        "Payment Method: Paypal CL-SC-10-F-10-BE-1TO-30100 2015-2024 Ford F-150 SuperCrew Cab Seat Covers Leather Beige Quantity: 1",
      shipping_information: {
        name: "Andrew Beggs",
        phone: "+1 425 698 3166",
        email: "andrew.beggs@hotmail.com",
        company: "",
        city: "Midlothian",
        country: "US",
        state: "VA",
        zip: "23112",
        address: "5609 chatmoss road ",
        address_2: "",
        method: "2 day free shipping",
        hash: "d61d873e3d7d0150d76be57f501f381a",
        cached: true,
        last_updated: "2024-06-14T03:45:38.895Z",
        is_residential: true,
        is_commercial: false,
        is_valid: true,
        address_type: "residential",
        channel_id: "",
      },
      tags: ["Coverland"],
      returns: [],
      tax_identifiers: [],
    },
    overriden: true,
    opened_date: "2024-06-14T17:30:16.766Z",
    shipped_date: "2024-06-14T17:30:16.766Z",
    barcodes: [
      {
        id: "65ea058dc232eeedf72687ac",
        kit_name: null,
        kit_sku: null,
        barcode: "SC-10-F-10-BE-1TO",
        identifier: "CA-SC-10-F-10-BE-1TO",
        quantity: 1,
        quantity_per_unit: 1,
        metadata: "",
        weight: null,
        weight_unit: null,
        listing_key: "manual:item:65ea058dc232eeedf72687ac",
        line_item_id: "666c79ec45326e872cca20b4",
        line_id: "666c79ec45326e872cca20b1",
        price: 199.95,
      },
    ],
    inventory: [
      {
        location_id: "62f0fcc0fc3f4e916f865d71",
        item_id: "65ea058dc232eeedf72687ac",
        on_hand: 58,
        inbound: null,
        alert: 0,
      },
    ],
    shipment_memory_hash: "154e835de7594599443dc644b72576ea",
    shipment_memory: [
      {
        dimensions: {
          length: 6,
          width: 6,
          height: 5,
          unit: "in",
        },
        dimensions_unit: "inches",
        weight: 16,
        weight_unit: "ounces",
      },
    ],
    packaging: "6 x 6 x 5 in<br>",
  },
  metrics: {
    find_one_order: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 4.562346994876862,
      median: null,
    },
    get_order_purchase_orders: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 3.005585014820099,
      median: null,
    },
    get_inventory_total: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 2535.4580260515213,
      median: null,
    },
    get_inventory_get_catalog: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 2506.9034660458565,
      median: null,
    },
    get_inventory_find_order_barcodes: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 0.04082101583480835,
      median: null,
    },
    get_inventory_shipment_memory_hash: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 0.1660049557685852,
      median: null,
    },
    get_inventory_inventory_module_get_items: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 28.252720952033997,
      median: null,
    },
    get_shipment_memory: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 10.424003005027771,
      median: null,
    },
  },
};

const sampleNoShipmentSKULab = {
  order: {
    items: [],
    scans: [],
    shipments: [],
    fulfillments: [],
    transactions: [],
    tags: ["6328f5c3c3ea0aede729f817"],
    log: [
      {
        user_id: "66635182b8f5193504fa3d35",
        action: "added tag",
        details: {
          tag_id: "6328f5c3c3ea0aede729f817",
        },
        time: "2024-06-14T21:12:39.610Z",
        _id: "666cb247314160437e239771",
      },
    ],
    _id: "666cb247314160437e239769",
    store_id: "62f0fcbffc3f4e916f865d6a",
    order_number: "CL-240614-CC-0132",
    status: "unstarted",
    processing: true,
    type: "manual",
    stash: {
      store_id: "62f0fcbffc3f4e916f865d6a",
      id: "CL-240614-CC-0132",
      items: [
        {
          price: 169.95,
          quantity: 1,
          fulfillments: [],
          type: "item",
          line_id: "666cb246314160437e239761",
          serial_numbers: [],
          _id: "666cb247314160437e23976a",
        },
      ],
      total: 169.95,
      shipping: 0,
      tax: 0,
      discount: 0,
      date: "2024-06-14T21:12:37.746Z",
      notes:
        "Payment Method: Paypal CL-CC-15-CHCM16-BKRD-STR-PP-100472 2012-2015 Chevrolet Camaro ZL1 Car Covers Chevrolet Premium Plus Black Red Stripe Quantity: 1",
      shipping_information: {
        name: "Jeffrey Madia",
        phone: "",
        email: "jmaddog112@yahoo.com",
        company: "",
        city: "Baldwinsville",
        country: "US",
        state: "NY",
        zip: "13027",
        address: "3746c Helios  Court",
        address_2: "",
        method: "2 day free shipping",
        hash: "cba16f2f7558abf9054e5e8e536a86e0",
        cached: true,
        last_updated: "2024-06-14T21:12:38.945Z",
        is_residential: true,
        is_commercial: false,
        is_valid: true,
        address_type: "residential",
        channel_id: "",
      },
      tags: ["Coverland"],
      returns: [],
      tax_identifiers: [],
    },
    combined_order_numbers: [],
    misscans: [],
    returns: [],
    notes: [],
    purchase_orders: [],
    barcodes: [],
    inventory: [],
    shipment_memory_hash: "d751713988987e9331980363e24189ce",
  },
  metrics: {
    find_one_order: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 3.0840269923210144,
      median: null,
    },
    get_order_purchase_orders: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 3.131507992744446,
      median: null,
    },
    get_inventory_total: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 4.4979559779167175,
      median: null,
    },
    get_inventory_get_catalog: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 1.5912449955940247,
      median: null,
    },
    get_inventory_find_order_barcodes: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 0.022251009941101074,
      median: null,
    },
    get_inventory_shipment_memory_hash: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 0.04654097557067871,
      median: null,
    },
    get_inventory_inventory_module_get_items: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 2.795448958873749,
      median: null,
    },
    get_shipment_memory: {
      EC2_INSTANCE_ID: "i-093179b7554b69547",
      calls: 1,
      time: 1.2369250059127808,
      median: null,
    },
  },
};
module.exports = {
  sampleOrderSKULab,
  sampleNoShipmentSKULab
};

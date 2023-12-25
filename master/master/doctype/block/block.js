// Copyright (c) 2023, Bittu Kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Block", {
    refresh(frm) {
        frm.fields_dict["state"].get_query = function (doc) {
            return {
                filters: {
                    "country": 'Please select country',
                },
            };
        }
        frm.fields_dict["district"].get_query = function (doc) {
            return {
                filters: {
                    "state": 'Please select state',
                },
            };
        }
    },
    country: function (frm) {
        frm.fields_dict["state"].get_query = function (doc) {
            if (doc.country) {
                return {
                    filters: {
                        "country": doc.country,
                    },
                };
            } else {
                return { filters: { "country": 'Please select country', }, };
            }

        },
            frm.fields_dict["district"].get_query = function (doc) {
                // if(doc.district ==''){
                //     frappe.show_alert({message:'District not found',indicator:'yellow'})
                // }
                if (doc.state) {
                    return {
                        filters: {
                            "state": doc.state,
                        },
                    };
                } else {
                    return { filters: { "state": 'Please select state', }, };
                }

            },
            frm.set_value('state', '')
        frm.set_value('district', '')
    },
    state: function (frm) {
        frm.set_value('district', '')
    }
});

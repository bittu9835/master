// Copyright (c) 2023, Bittu Kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("District", {
	refresh(frm) {
        frm.fields_dict["state"].get_query = function (doc) {
            return {
                filters: {
                    "country": 'Please select country',
                },
            };
        }
	},

    country:function (frm) {
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
            frm.set_value('state', '')
    }
});

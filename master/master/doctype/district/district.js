// Copyright (c) 2023, Bittu Kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("District", {
	refresh(frm) {
        frm.fields_dict["state"].get_query = function (doc) {
            return {
                filters: {
                    "state": 'Please select state',
                },
            };
        }
	},
    dis:function (frm) {
        frm.fields_dict["district"].get_query = function (doc) {
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
            frm.set_value('district', '')
    }
});

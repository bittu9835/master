// Copyright (c) 2023, Bittu Kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Block", {
	refresh(frm) {
        frm.fields_dict["district"].get_query = function (doc) {
            return {
                filters: {
                    "district": 'Please select district',
                },
            };
        }
	},
    blo:function (frm) {
        frm.fields_dict["block"].get_query = function (doc) {
            if (doc.district) {
                return {
                    filters: {
                        "district": doc.district,
                    },
                };
            } else {
                return { filters: { "district": 'Please select district', }, };
            }

        },
            frm.set_value('block', '')
    }
});

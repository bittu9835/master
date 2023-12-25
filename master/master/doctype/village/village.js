// Copyright (c) 2023, Bittu Kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Village", {
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
        frm.fields_dict["block"].get_query = function (doc) {
            return {
                filters: {
                    "district": 'Please select district',
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

            }
        frm.set_value('state', '')
        frm.set_value('district', '')
        frm.set_value('block', '')
    },
    state: function (frm) {
        frm.set_value('district', '')
        frm.set_value('block', '')
    },
    district: function (frm) {
        frm.set_value('block', '')
    }

});

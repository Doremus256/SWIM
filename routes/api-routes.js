// DEPENDENCIES //
// REQUIRING index.js by requiring models folder it lives in //
var db = require("../models");

// ROUTES //

module.exports = function (app) {

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    // ROUTES for items table //
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

    // GET route for getting all ITEMS in current inventory seeded on the backend //
    app.get("/api/items", function (req, res) {
        // sequelize findAll() so we get every row in the Items table
        db.Items.findAll({}).then(function (dbItems) {
            // Next line, "dbItems" will change to Handlebars file name //
            res.render(dbItems);
        });
    });

    // PUT route for updating current inventory given :item //
    app.put("/api/items/:id", function (req, res) {
        console.log(req.body);
        // sequelize update() so we can change item_QOH (quantity on hand) //
        // of a single given item_name (selected from dropdown menu to avoid typos) //
        db.Items.update({
            item_QOH: req.body.item_QOH,
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (dbItems) {
            // Next line, "dbItems" will change to Handlebars file name //
            res.render(dbItems);
        });
    });

    // DELETE route for deleting items from inventory (from items table within swim_db)
    app.delete("/api/items/:id", function (req, res) {
        // sequelize destroy() so we can delete items completely from our items table //
        db.Items.destroy({
            where: {
                id: req.body.id
            }
        }).then(function (dbItems) {
            // Next line, "dbItems" will change to Handlebars file name //
            res.render(dbItems);
        });
    });

    // POST route for creating new items into inventory 
    app.post("/api/items", function (req, res) {
        // sequelize destroy() so we can delete items completely from our items table //
        db.Items.create(
            req.body
        ).then(function (dbItems) {
            // Next line, "dbItems" will change to Handlebars file name //
            res.render(dbItems);
        });
    });

    // ROUTES FOR VENDOR TABLE //

    // GET route for getting all ITEMS in current inventory seeded on the backend //
    app.get("/api/itemVendors/:id", function (req, res) {
        // sequelize findAll() so we get every row in the Items table
        db.vendors.findAll({
            where: {
                item_id: req.params.id
            }
        }).then(function (dbVendors) {
            // Next line, "dbItems" will change to Handlebars file name //

            res.render(dbVendors);
        });
    });
};

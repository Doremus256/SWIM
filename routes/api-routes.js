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
            res.json(dbItems);
        });
    });

    // PUT route for updating current inventory given :item //
    app.put("/api/items/:item_name", function (req, res) {
        console.log(req.body);
        // sequelize update() so we can change item_QOH (quantity on hand) //
        // of a single given item_name (selected from dropdown menu to avoid typos) //
        db.Items.update({
            item_QOH: req.body.item_QOH,
        }, {
            where: {
                item_name: req.body.item_name
            }
        }).then(function (dbItems) {
            res.json(dbItems);
        });
    });

    // DELETE route for deleting items from inventory (from items table within swim_db)
    app.delete("/api/items/:item_name", function (req, res) {
        // sequelize destroy() so we can delete items completely from our items table //
        db.Items.destroy({
            where: {
                item_name: req.body.item_name
            }
        }).then(function (dbItems) {
            res.json(dbItems);
        });
    });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ROUTES for vendors table //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ROUTES for orders table //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

};

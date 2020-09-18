// DEPENDENCIES //
var express = require("express");
var router = express.Router();
// REQUIRING index.js by requiring models folder it lives in
var db = require("../models");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ROUTES // ROUTES // ROUTES // ROUTES // ROUTES  //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ROUTES for ITEMS table //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

    // GET route for getting all ITEMS in current inventory seeded on the backend //
router.get("/", function (req, res) {
    // sequelize findAll() so we get every row in the Items table
    db.Items.findAll({}).then(function (dbItems) {
        res.render("views", {
            data: dbItems
        });
    });
});



// PUT route for updating current inventory given :item //
router.put("/items/:id", function (req, res) {
    console.log(req.body);
    // sequelize update() so we can change item_QOH (quantity on hand)
    // of a single given item_name (selected from dropdown menu to avoid typos)
    try
    {
        console.log(`Hit router.get("/items/:id")`);
        db.Items.update({
            item_QOH: req.body.item_QOH,
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (dbItems) {

            res.render("views");
        }).catch(err => {
            console.log(`Error:${err}`);
            return err;

        });
    }
    catch
    {
        error => console.log(error);
    }
});

// DELETE route for deleting items from inventory (from items table within swim_db)
router.delete("/items/:id", function (req, res) {
    // sequelize destroy() so we can delete items completely from our items table //
    try
    {
        console.log(`Hit router.delete("/items/:id")`);
        db.Items.destroy({
            where: {
                id: req.body.id
            }

        }).then(dbItems => {
            res.render("views");

        });
    }
    catch
    {
        error => console.log(error);
    }
});


// POST route for creating new items into inventory 
router.post("/items", function (req, res) {
    // sequelize destroy() so we can delete items completely from our items table //
    try
    {
        console.log(`Hit router.post("/items")`);
        console.log(req.body);
        db.Items.create(
            req.body
        ).then(dbItems => {
            res.render("views", { data: dbItems });

        });
    }
    catch
    {
        error=> console.log(error);
    }
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ROUTES for VENDORS table //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// GET route for getting all ITEMS in current inventory seeded on the backend //
router.get("/itemVendors/:id", function (req, res) {
    // sequelize findAll() so we get every row in the Items table
    try
    {
        console.log(`Hit router.get("/itemVendors/:id")`);
        db.vendors.findAll({
            where: {
                item_id: req.params.id
            }
        }).then(function (dbVendors) {
            res.render("views", {
                Vendors: dbVendors
            });
        });
    }
    catch
    {
        error=> console.log(error);
    }
});

module.exports = router;
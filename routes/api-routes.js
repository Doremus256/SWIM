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

// GET ALL ITEMS - - ALREADY IN HTML ROUTES  //
// router.get("/get_all_items", function (req, res) {
    // sequelize findAll() so we get every row in the Items table
//         console.log(`Hit router.get("/get_all_items")`);
//         db.Item.findAll({}).then(function (dbItems) {
//             console.log(dbItems);
//             res.render("views", {
//                 dbItems: JSON.stringify(dbItems)}
//                 );
//         }).catch(err=>res.json(err));
// });

// PUT route for updating current inventory given :item //
router.put("/items/:id", function (req, res) {
    console.log(req.body);
    // sequelize update() so we can change item_QOH (quantity on hand)
    // of a single given item_name (selected from dropdown menu to avoid typos)
        console.log(`Hit router.get("/items/:id")`);
        db.Item.update({
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

        }).catch(err=>res.json(err));
});

// DELETE route for deleting items from inventory (from items table within swim_db)
router.delete("/items/:id", function (req, res) {
    // sequelize destroy() so we can delete items completely from our items table //
        console.log(`Hit router.delete("/items/:id")`);
        db.Item.destroy({
            where: {
                id: req.body.id
            }

        }).then(dbItems => {
            res.render("views");
        }).catch(err=>res.json(err));
});


// POST route for creating new items into inventory 
router.post("/add_item", function (req, res) {
    // sequelize destroy() so we can delete items completely from our items table //
        console.log(`Hit router.post("/items")`);
        console.log(req.body);
        db.Item.create(
            req.body
        ).then(dbItems => {
            console.log(dbItems);
            res.json(dbItems);

        }).catch(err=>res.json(err));
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ROUTES for VENDORS table //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// GET route for getting all VENDORS in current inventory seeded on the backend //
router.get("/get_vendor/:id", function (req, res) {
    // sequelize findOne() so we get every row in the Items table
        console.log(`Hit router.get("/get_vendor/:id")`);
        db.Vendor.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbVendors) {
            console.log(dbVendors);
            res.json(dbVendors);
        }).catch(err=>res.json(err));
});

router.get("/get_all_vendors", function (req, res) {
    // sequelize findAll() so we get every row in the Items table
        console.log(`Hit router.get("/get_all_vendors")`);
        db.Vendor.findAll({}).then(function (dbVendors) {
            console.log(dbVendors);
            res.json(dbVendors);
        }).catch(err=>res.json(err));
});

router.post("/add_vendor", function (req, res) {
    // sequelize create() so we can create new a vendor in our vendors table //
        console.log(`Hit router.post("/add_vendor")`);
        db.Vendor.create(
            req.body
        ).then(newVendor => {
            console.log(newVendor);
            res.json(newVendor);
        }).catch(err=>res.json(err));
});

router.delete("/delete_vendor/:id", function (req, res) {
    // sequelize findAll() so we get every row in the Items table
        console.log(`Hit router.get("/get_vendor/:id")`);
        db.Vendor.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbVendors) {
            console.log(dbVendors);
            res.json(dbVendors);
        }).catch(err=>res.json(err));
});

module.exports = router;
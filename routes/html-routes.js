var express = require("express");
var router = express.Router();
var db = require("../models");

var db = require("../models");

// GET route for getting all ITEMS in current inventory seeded on the backend //
router.get("/", function (req, res) {
    // sequelize findAll() so we get every row in the Items table
    try {
        console.log("Hit router.get(items)");
        db.Item.findAll({})
            .then(function (dbItems) {
                console.log(dbItems)
                res.render("views", { data: dbItems })
            })
            .catch(error => res.json(error)
            );
    } catch {
        error => console.log(error);
    }
});

module.exports = router;
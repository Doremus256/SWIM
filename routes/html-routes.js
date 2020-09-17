var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    // sequelize findAll() so we get every row in the Items table
    try {
            console.log("Hit router.get(items)");
            db.Items.findAll({}).then(function (dbItems) {
            res.render("views", { data: dbItems });
        });
    } catch {
        error => console.log(error);
    }
});

module.exports = router;
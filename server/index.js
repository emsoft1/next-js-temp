const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db/db");
var cors = require("cors");
const port = 5051;

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

//route APi
app.get("/", (request, response) => {
    response.json({ info: "Node.js, Express, and Postgres API" });
    console.log(db.checkDb);
});
// check the database
app.get("/check", async function (req, res) {
    try {
        const dbdata = await db.checkDb();
        res.json({ data: dbdata.rows });
    } catch (err) {
        console.log(err);
    }
});
//get category's list return *
app.get("/cat_list", async function (req, res) {
    try {
        const dbdata = await db.cat_list();
        res.json({ data: dbdata.rows });
    } catch (err) {
        console.log(err);
    }
});
//get category by ID return *
app.get("/cat_item_id/:id", async function (req, res) {
    try {
        const dbdata = await db.cat_item_id(req.params.id);
        res.json({ data: dbdata.rows });
    } catch (err) {
        console.log(err);
    }
});
//get business by ID return *
app.get("/buss_item/:id", async function (req, res) {
    try {
        const dbdata = await db.buss_item(req.params.id);
        res.json({ data: dbdata.rows });
    } catch (err) {
        console.log(err);
    }
});
//get coupon list return *
app.get("/coupon_list", async function (req, res) {
    try {
        const dbdata = await db.coupon_list_new();

        res.json({ data: dbdata.rows });
    } catch (err) {
        console.log(err);
    }
});
//get coupon by ID return *
app.get("/coupon_item/:id", async function (req, res) {
    try {
        const dbdata = await db.coupon_item(req.params.id);
        res.json({ data: dbdata.rows });
    } catch (err) {
        console.log(err);
    }
});

//get launcher post and user  by ID return *
app.get("/post_list", async function (req, res) {
    try {
        const dbdata = await db.post_list();
        res.json({ data: dbdata.rows });
    } catch (err) {
        console.log(err);
    }
});
//get launcher user by ID return *

app.get("/user/:id", async function (req, res) {
    try {
        const dbdata = await db.user_item(req.params.id);
        res.json({ data: dbdata.rows });
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

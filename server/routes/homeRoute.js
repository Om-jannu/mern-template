const express = require("express");
const router = express.Router();

const homeController = require("../controller/homeController");
const testController = require("../controller/testController");

//localhost:5000/
router.get("/",homeController.get);
router.get("/test",testController.get);

module.exports = router;

const express = require("express")
const router = express.Router()
const PlansController = require("../controllers/PlansController")

router.get("/plans", PlansController.index)

module.exports = router
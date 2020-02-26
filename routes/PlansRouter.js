const express = require("express")
const router = express.Router()
const PlansController = require("../controllers/PlansController")

router.get("/admin/plans", PlansController.index)
router.get("/admin/plans/create", PlansController.create)
router.post("/plans/update", PlansController.update)
router.post("/plans/store", PlansController.store)
router.get("/admin/plans/edit/:id", PlansController.edit)


module.exports = router
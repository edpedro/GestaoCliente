const express = require("express")
const router = express.Router()
const PlansController = require("../controllers/PlansController")

router.get("/admin/plans", PlansController.index)
router.get("/plans/deactivated/:id", PlansController.deactivated)
router.get("/plans/active/:id", PlansController.active)
router.get("/admin/plans/create", PlansController.create)
router.post("/plans/update", PlansController.update)
router.post("/plans/store", PlansController.store)
router.get("/plans/edit/:id", PlansController.edit)


module.exports = router
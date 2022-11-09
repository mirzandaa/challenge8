const express = require("express")
const router = express.Router()
const appController = require("../controller/controller")
const employeeController = require("../controller/employeeController")


router.get("/", appController.getHome)
router.get("/home", (req,res) => {
    res.redirect("/")
})

router.get("/detailEmployee/:id", appController.detailEmployee)
router.get("/getDeleteEmployee/:id",appController.getDeleteEmployee)
router.get("/getFormAdd", appController.getFormAdd)
router.get("/updateEmployee/:id", appController.getFormEdit)
router.post("/addEmployee", employeeController.createEmployee)
router.put("/updateEmployee/:id", employeeController.updateEmployee)
router.delete("/deleteEmployee/:id", employeeController.deleteEmployee)

module.exports = router


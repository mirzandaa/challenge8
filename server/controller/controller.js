const { employee } = require("../models")

class appController {

    static async getHome (req, res){
        const getHomePage = await employee.findAll({
            attributes: ["birthdate","name","email","mobile","id"]
        })
        if (!getHomePage) {
            res.render("index", {
                data: ""
            })
        } else {
            res.render("index", {
                data: getHomePage,
                title: "Employee Management System"
            })
        }
    }

    static async getFormAdd (req, res) {
        res.render("formAdd", {
            title:"Add Employee"
        })
    }

    static async getFormEdit (req, res){
        const result = await employee.findOne ({
            where: {
                id: req.params.id
            }
        })
        console.log(result)
        res.render("formEdit", {data:result})
    }

    static async detailEmployee (req, res) {
        
        const result = await employee.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
        res.render("detailEmployee", {data:result})
       
    }

    static async getDeleteEmployee (req, res) {
        const resultEmployee = await employee.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
        console.log(resultEmployee)
        res.render("deleteEmployee", {
            data: resultEmployee   
        })
    }
}

module.exports = appController
const { employee } = require ("../models")

class employeeController {

    static async createEmployee (req, res) {
        const data = req.body
        console.log(data)
        try {
            await employee.addEmployee(data)
            res.redirect("/")
        } catch (error) {
            res.status(500).json({
                message: "Internal Server Error",
                error
            })
        }
    }

    static async updateEmployee (req, res) {
        const data = req.body
        console.log(data)
        const id = {
            where: {
                id:  Number(req.params.id)
            }
        }

        try {
            await employee.update(data,id)
        } catch (error) {
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    static async deleteEmployee (req, res) {
        let id = req.params.id

        try {
            await employee.destroy({
                where: {
                    id:Number(id)
                }
            })
        } catch (error) {
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

}

module.exports = employeeController
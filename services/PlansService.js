const Database = require("../models/index")

class PlansService {

    constructor() {
        this.Plan = Database["Plan"]
    }
    //salvar planos no banco
    async store(plans) {
        //Tratar erros
        var errors = {}
        //Tratar import boolean
        if (plans.import != undefined) {
            plans.import = true
        } else {
            plans.import = false
        }
        //Trarar validacaos
        var isValid = this.validate(plans, errors)
        //Verificar ser tem erros
        if (isValid) {
            try {
                await this.Plan.create(plans)
                return true
            } catch (error) {
                errors.system_msg = "Não foi possivel salvar o plano"
                return errors
            }
        } else {
            return errors
        }

    }
    //validação
    validate(plan, errors) {
        //validacao de titulo
        if (plan.title == undefined) {
            errors.title_msg = "O titulo é invalido!"
            erroCount++
        } else {
            if (plan.title.length < 3) {
                errors.title_msg = "O titulo é invalido"
                erroCount++
            }
        }
        if (plan.list == undefined) {
            errors.list_msg = "Listar invalido!"
            erroCount++
        } else {
            if (plan.list < 1) {
                errors.list_msg = "Quantidade de listar invalido"
                erroCount++
            }
        }
        var erroCount = 0
        if (erroCount == 0) {
            return true
        } else {
            return false
        }
    }
}
module.exports = new PlansService()
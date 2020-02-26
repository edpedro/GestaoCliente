const Database = require("../models/index")

class PlansService {

    constructor() {
        this.Plan = Database["Plan"]
    }

    //Listar todos planos
    async getAll() {
        try {
            return await this.Plan.findAll()
        } catch (error) {
            return error
        }
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
                errors.list_msg = "Quantidade de lista invalido"
                erroCount++
            }
        }
        if (plan.client == undefined) {
            errors.client_msg = "Favor preencher dados!"
            erroCount++
        } else {
            if (plan.client < 1) {
                errors.client_msg = "Quantidade de cliente invalido"
                erroCount++
            }
        }
        if (plan.value == undefined) {
            errors.value_msg = "Favor preencher dados!"
            erroCount++
        } else {
            if (plan.value < 1) {
                errors.value_msg = "Preço não poder ser menor quer R$0"
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
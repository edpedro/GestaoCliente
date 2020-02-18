class PlansController {

    index(req, res){
        res.render("plans")
    }
}

module.exports = new PlansController()
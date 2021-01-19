const _ = require('lodash')
const GitCtrl = require("../controllers/gitCtrl")
const baseModuleRoute = "/gitHub"

class GitRouter {
    constructor(app, appBaseRoute) {
        this.app = app
        this.baseRoute = appBaseRoute + baseModuleRoute
    }

	init() {
        this.app.get(`${this.baseRoute}/getCarrouselData/:query`, this.getCarrousell.bind(this))
    }
	
    async getCarrousell(req, res) {
        let response = {}
        try {
            const gitCtrl = new GitCtrl()
            const resp = await gitCtrl.getCarrousell(req.params.query)

            response = resp
            res.status(200)

        } catch (err) {
            console.log(err)
            response.message = "Erro ao realizar recuperação dos repositórios: " + err
            res.status(500)
        } finally {
            res.send(response)
        }
    }
}

module.exports = GitRouter
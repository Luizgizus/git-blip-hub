const GitRouter = require('./gitRouter')

const appBaseRoute = "/git-blip/app"

class RouteService {
    constructor(expressInstance) {
        this.app = expressInstance
        this.gitRouter = new GitRouter(this.app, appBaseRoute)
    }

    init() {
        this.gitRouter.init()
    }
}

module.exports = RouteService
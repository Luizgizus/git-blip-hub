const _ = require('lodash')
const axios = require('axios').default

class DefaultItem {
    constructor(){
        this.header = {
            type: "application/vnd.lime.media-link+json",
            value: {
                title: null,
                text: null,
                type: "image/jpeg",
                uri: "https://avatars1.githubusercontent.com/u/4369522?s=200&v=4"
            }
        }
    }
}

class GitCtrl {
    constructor() {}

    async getRepositories() {
        const url = "https://api.github.com/graphql";
        const repos = []

        let body = {
            query: `
                {
                    organization(login: "takenet") {
                        repositories(orderBy: {field: CREATED_AT, direction: ASC}, first: 100) {
                            nodes {
                                primaryLanguage{
                                    name
                                }
                                name
                                description
                            }
                        }
                    }
                }`,
            variables: {},
        };

        try{
            const gitData = await axios.post(url, body, 
                {
                    headers: {
                        'Authorization': `Bearer ab2835e0b19c7f6d77b90dab9b28b178f9182932`,
                        'User-Agent': 'Awesome-Octocat-App'
                    }
                }
            );

            const repositories = gitData.data.data.organization.repositories.nodes
    
            if (repositories && repositories.length) {
                for (let i = 0; i < repositories.length; i++) {
                    const repository = repositories[i]
    
                    if (repository && repository.primaryLanguage && repository.primaryLanguage.name === "C#") {
                        repos.push(repository)
                    }
                }
            }

            return repos
        } catch (err){
            console.log(err)
        }
    }

    async getCarrousell(query) {

        const defaultRepo = {
            itemType: "application/vnd.lime.document-select+json",
            items: []
        }

        const repo = _.clone(defaultRepo)
        const repos = await this.getRepositories()

        for (let i = 0; i < repos.length; i++) {
            const item = new DefaultItem
            if (
                (repos[i].name !== null && repos[i].name.indexOf(query) !== -1) ||
                (repos[i].description !== null && repos[i].description.indexOf(query) !== -1)
            ) {
                console.log(repos[i])

                item.header.value.title = repos[i].name
                item.header.value.text = repos[i].description

                repo.items.push(item)
            }
        }
        return repo
    }
}

module.exports = GitCtrl
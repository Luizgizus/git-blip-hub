# git-blip-hub

Projeto ultilizado como teste técnico da empresa Take.

Pré-requisitos:
- Ter o nodeJS na versão mais atual instalada no PC

Para startar o projeto o seguinte passo a passo deve ser cumprido anteriormente:

- Abrir o comand na pasta raiz do projeto e executar o comando 'npm install'
- Fazer uma cópia do arquivo .env.default, renomea-lo para .env, abrir o arquivo .env e preencher o unico campo contido nele para ser possivel conectar com a API do git, para isso deve ser gerado a chave pessoal no github.
- No mesmo local que foi executado o priemiro passo deve ser exeutado o comando 'npm run app' e dessa forma a aplicação backend estará em funcionamento.


<h1>Rotas da API</h1>

<h3>Git Hub</h3>
<p>rota que retorna os dados de um carossel para o formato do blip</p>

<ul>
    <li>getCarrouselData</li>
        <ul>
            <li>rota que retorna os dados de um carossel para o formato do blip</li>
            <li>Metodo: GET</li>
            <li>Rota: /git-blip/app/gitHub/getCarrouselData/:query</li>
            <li>Retorna um objeto com um array de repositórios do git que são da blid e que tem o nome ou a descrição palavras iguais ou parecidas com o conteudo da variavel query enviada pelos parametross</li>
        </ul>
</ul>

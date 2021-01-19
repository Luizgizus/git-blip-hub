# git-blip-hub

Projeto ultilizado como teste técnico da empresa Take.

Pré-requisitos:
- Ter o nodeJS na versão mais atual instalada no PC

Para startar o projeto o seguinte passo a passo deve ser cumprido anteriormente:

- Abrir o comand na pasta raiz do projeto e executar o comando 'npm install'
- Fazer uma cópia do arquivo .env.default, renomea-lo para .env, abrir o arquivo .env e preencher o unico campo contido nele para ser possivel conectar com a API do git, para isso deve ser gerado a chave pessoal no github.
- No mesmo local que foi executado o priemiro passo deve ser exeutado o comando 'npm run app' e dessa forma a aplicação backend estará em funcionamento.

<h1>Observação sobre o chatbot</h1>
<h3>Roteamento para a API</h3>

<p>Como o blip não comunica diretamente com o meu PC, foi necessário utilizar o ngrok</p>
<p>A aplicação roda na porta 8081 que é necessário para startar o ngrok</p>
<p>Como as rotas do ngrok não são constantes, é necessário que sejam trocadas na apliação do biulder do chatbot</p>
<p>O lugar onde está a rota que faz a requisição é dentro do bloco 'Requisição carrousell'</p>


<h3>Sobre o flow do chatbot</h3>

<p>O flow está na raiz do projeto, e tem nome 'FluxoChat-gitbliphub.json'</p>

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

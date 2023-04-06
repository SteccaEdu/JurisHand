# Documentação da API RESTful de Artigos Jurídicos utilizando Node.js, Sequelize e Express

Este arquivo contém informações sobre a API RESTful de Artigos Jurídicos construída com as tecnologias Node.js, Sequelize e Express.

## Requisitos do Software

Para executar corretamente o software, certifique-se de ter as seguintes tecnologias instaladas em sua máquina:

- Node.js
- MySQL
- Python3

Ferramentas e bibliotecas utilizadas nesta aplicação:

- Sequelize
- Express
- BodyParser

## Comandos a serem executados

Para executar o software, siga os seguintes passos:

1. Clone o repositório do projeto para sua máquina local.
2. Abra um terminal e navegue até a pasta do projeto.
3. Execute o comando `npm install` para instalar as dependências do projeto.
4. Acessar o terminal do mysql inserindo as credenciais do seu banco.
5. Utilize `create database jurishand` para criar um novo banco de dados.
6. Saia do terminal, a partir de agora utilizaremos apenas o sequelize ORM para interagir com o banco.
7. Navegue até o arquivo do projeto `api/config/config.json` e altere os campos para permitir com que a aplicação conecte-se com o banco. Neste exemplo, utilizaremos a aplicação em modo desenvolvimento.
8. Execute as migrações utilizando o comando `npx sequelize-cli db:migrate`
9. Para popular as tabelas com dados para teste vamos utilizar as seeds rodando o comando `npx sequelize-cli db:seed:all`
4. Execute o comando `npm start` para iniciar o servidor ou `npm run start` para iniciar a aplicação em modo desenvolvedor.
5. Acesse a API através do endpoint `http://localhost:3000/articles`.


## Informações adicionais

A API RESTful foi desenvolvida com o objetivo de fornecer um serviço de gerenciamento de artigos jurídicos. 

Os endpoints disponíveis na API são:

- GET /articles: retorna uma lista de artigos cadastrados em ordem de publicação.
- GET /articles/cat/:category: retorna uma lista de todos os artigos filtrados por categoria.
- GET /articles/key/:keyword: retorna uma lista de todos os artigos com termo-chave no título ou conteúdo;

## Arquivo. CSV

Para obter um arquivo.csv atualizado, rode o comando `python report.py` para inicializar o script que irá gerar o arquivo.

O mesmo irá aparecer na raiz do projeto, basta abri-lo para ver os relatórios.

A estrutura de um artigo jurídico cadastrado na API segue o seguinte formato:

## Sobre a estrutura do projeto

Devido a utilização do sequelize.js um ORM com o intuito de facilitar e trabalhar boas praticas de desenvolvimento de software, algumas pastas são criadas para organizar e estruturar os arquivos do banco, são elas:
- /api/migrations -> Responsável por lidar com as migrações do banco.
- /api/seeder -> Popular tabelas com dados de teste, no caso a tabela Articles
- /api/models -> Responsável por gerar os modelos de tabela.

Para fazer a logíca de programação responsável por consultar o banco e retornar os dados na API os diretórios:

- /api/controllers -> Apresenta todos os algoritmos de consulta e retorno no banco utilizando o ORM.
- /api/routes -> Em conjunto com o express.js aloca os métodos da classe controller às rotas configuradas.
- /api/index.js Entrypoint da aplicação.

OBS: o arquivo .sequelizerc é um arquivo de configuração que tem a função de apontar o local das configurações do sequelize.
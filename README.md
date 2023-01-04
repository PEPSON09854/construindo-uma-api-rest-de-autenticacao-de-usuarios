# Api Rest de autenticação de usuários

<div style='display: inline-block'>
  <img aling='center' alt= 'NODE JS' src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'/>
  <img aling='center' alt= 'MONGODB' src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'/>
  <img aling='center' alt= 'EXPRESS' src='https://img.shields.io/badge/Express.js-404D59?style=for-the-badge'/>
</div><br>

## Introdução

Nesse repositório contém o código de uma aplicação backend em node.js e express.
Uma API REST de autenticação de usuários em um sistema, utizando uma arquitetura de projeto MVC, fiz a integração com o banco mongodb atlas, utilizando 
o ODM mongoose,e criei um modelo de usuário para uma collection no banco utilizando mongoose, criei funções no controller para cadastro, login, verificação, 
atualização e resgate de usuário pelo id, nas funções de middlewares criei um token de validação utilizando o pacote jwt, também utilizei o pacate bcriptjs para criar uma senha criptografada, utilizei o software Insomnia para fazer os teste de rotas e a API está funcionando perfeitamente e pronta para escalonar ou uma integração com o front-end.

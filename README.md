# Testes com aplicações WEB usando Cypress 💻

Este projeto contém testes automatizados para a WEB qazando usando o framework Cypress.

## Pré-requisitos 🛠️

- Visual Studio Code
- Node.js
- Cypress

Ao realizar o clone do projeto, executar *npm i* em seu terminal para instalar as dependências do projeto.

## Cenários de teste 📋

### Buscar dispositivos 🔍

- **Realizar o login com sucesso:**
  - Informar os dados e-mail, senha válidos e clicar no botão Login.
  - Validar Login com Sucesso.

- **Senha inválida:**
  - Informar apenas o e-mail válido, senha inválida e clicar em Login.
  - Verificar se a resposta é **"Senha inválida."**.

- **E-mail inválido:**
  - Informar o e-mail inválido, a senha válida e clicar em Login.
  - Verificar se a resposta é **"E-mail inválido."**.
 
- **Senha não informada:**
  - Informar apenas o e-mail e clicar em Login.
  - Verificar se a resposta é **"Senha inválida."**.
 
- **E-mail não informado:**
  - Informar apenas a senha e clicar em Login.
  - Verificar se a resposta é **"E-mail inválido."**.

## Elaborado por

Este projeto foi desenvolvido 💜 por Mateus Oliveira 👋 &nbsp;[Meu LinkedIn](https://www.linkedin.com/in/mateus-oliveira-pereira-dos-santos-b07953151/)

## Aprendizado

Este projeto foi desenvolvido durante o [LIVE] Bootcamp Cypress - Dia 2 - 5 PASSOS PARA AUTOMATIZAR WEB COM CYPRESS ([Assista aqui](https://www.youtube.com/watch?v=IiCXU8VX_MM)).

## Site Utilizado

Os testes foram realizados utilizando o site disponível em [automationpratice.com.br](https://automationpratice.com.br/).

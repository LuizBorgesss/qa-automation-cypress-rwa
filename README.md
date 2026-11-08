# QA Automation — Cypress Real World App

## Sobre o projeto

Projeto de automação de testes funcionais desenvolvido durante meus estudos em Quality Assurance (QA), utilizando o Cypress Real World App como aplicação de prática.

O objetivo foi aplicar conhecimentos de automação de testes, JavaScript, Page Object Model (POM), fixtures e validações de funcionalidades.

Os cenários foram desenvolvidos com base nos exercícios do curso Profissão QA, da Lumestack.

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Page Object Model (POM)
- JSON Fixtures
- Git e GitHub

## Cenários implementados

### Autenticação e cadastro

- Login com credenciais válidas.
- Login com credenciais inválidas.
- Cadastro de novo usuário com informações válidas.
- Validação de formulário de cadastro com campos obrigatórios não preenchidos.

### Transferências

- Realização de transferência com sucesso.
- Investigação de transferência com saldo insuficiente.

### Histórico de transações

- Navegação e consulta do histórico de transações.
- Verificação da mensagem apresentada quando não existem transações.

## Organização dos testes

O projeto utiliza Page Object Model para separar as interações com as páginas dos cenários de teste.

Os dados de autenticação são organizados em fixtures JSON, facilitando sua reutilização.

## Execução do projeto

O ambiente utiliza o Cypress Real World App, disponibilizado originalmente pela equipe do Cypress.

Após instalar as dependências conforme as instruções do projeto original, inicie a aplicação:

```bash
yarn dev
```

Em outro terminal, abra o Cypress:

```bash
npx cypress open
```

Selecione os testes E2E para executar os cenários implementados.

## Limitações e comportamentos identificados

Durante os testes, foram observadas situações que exigem atenção:

**Transferência com saldo insuficiente:** a aplicação permitiu concluir uma transferência cujo valor aparentemente ultrapassava o saldo disponível. O comportamento foi registrado para investigação, pois depende da confirmação da regra de negócio.

**Histórico de transações:** a ausência de filtros específicos dificultou a localização e a validação de determinadas transações.

Alguns cenários automatizados verificam a execução das ações ou elementos da interface, mas ainda não possuem validações completas de todas as regras de negócio.

## Aprendizados

Durante o desenvolvimento deste projeto, pratiquei:

- Criação e execução de testes automatizados com Cypress.
- Organização de código com Page Object Model.
- Reutilização de dados com fixtures.
- Construção de cenários positivos e negativos.
- Uso de seletores e asserções.
- Investigação de comportamentos inesperados.
- Versionamento de código com Git e GitHub.

## Referências

- [Cypress Real World App](https://github.com/cypress-io/cypress-realworld-app)
- [Documentação oficial do Cypress](https://docs.cypress.io)

---

Projeto desenvolvido para fins de estudo e portfólio profissional em Quality Assurance.
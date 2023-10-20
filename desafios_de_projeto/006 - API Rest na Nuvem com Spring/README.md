# Desafio de projeto -  Publicando Sua API REST na Nuvem Usando Spring Boot 3

Projeto desenvolvido para o desafio de projeto do Bootcamp Santander Fullstack Developer na plataforma [Digital Innovation One](https://digitalinnovation.one/), baseado nas aulas de @falvojr

## Endpoints e funcionalidades
- Por padrão a aplicação está rodando na porta 8080, pode ser acessado em [http://localhost:8080](http://localhost:8080). Isso pode ser alterado nos arquivos [application-dev.yml](https://github.com/ogihromero/Bootcamp-Santander-Java-Angular/blob/main/desafios_de_projeto/006%20-%20API%20Rest%20na%20Nuvem%20com%20Spring%20e%20Railway/rest-railway/src/main/resources/application-dev.yml)
- O Banco H2 está disponível em: [/h2-console](http://localhost:8080/h2-console)
- O Swagger está disponível em: [/swagger-ui.html ](http://localhost:8080/swagger-ui/index.html)


## Diagrama de classes
```mermaid
classDiagram
  class User {
    -String name
    -Account account
    -Feature[] features
    -Card card
    -News[] news
  }

  class Account {
    -String number
    -String agency
    -Number balance
    -Number limit
  }

  class Feature {
    -String icon
    -String description
  }

  class Card {
    -String number
    -Number limit
  }

  class News {
    -String icon
    -String description
  }

  User "1" *-- "1" Account
  User "1" *-- "N" Feature
  User "1" *-- "1" Card
  User "1" *-- "N" News
``````
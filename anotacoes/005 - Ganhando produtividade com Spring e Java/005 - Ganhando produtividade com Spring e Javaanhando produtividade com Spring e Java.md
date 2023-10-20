# Ganhando produtividade com Spring e Java

#  Gerenciamento de Dependências e Build em Java com Maven
- O Maven permite que você defina as dependências do seu projeto e ele se encarrega de baixar as dependências necessárias para executá-lo.
- Através do POM.xml são definidas as dependências do projeto, como será o build, como será o deploy, etc.
- `mvn archetype:generate -DgroupId="com.example.com" -DartifactId=quick-start-maven -Darchetype=maven-archetype-quickstart -DinteractiveMode=false` - Cria um projeto maven com o archetype maven-archetype-quickstart
- Os comandos principais do maven são:
  - `mvn clean` - Limpa o projeto, apagando a pasta target
  - `mvn compile` - Compila o projeto, gerando os arquivos .class
  - `mvn test` - Executa os testes unitários
  - `mvn package` - Gera o pacote do projeto, que pode ser um .jar ou .war
- Maven archetype é um modelo de projeto, que define a estrutura de diretórios e arquivos do projeto.
- O super-POM contém as configurações padrão do Maven, como a versão do Java, a versão do encoding, etc a partir do qual os projetos herdam.
- O settings.xml contém as configurações do Maven, como o repositório remoto, o repositório local, etc.
- Uma dependência é um artefato que o projeto precisa para ser executado, por exemplo, o Spring Framework.
- Para adicionar uma dependência no projeto, basta adicionar a dependência no arquivo pom.xml, dentro da tag `<dependencies>`, por exemplo:
```xml
<dependencies>
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>5.0.0.RELEASE</version>
  </dependency>
```
- `groupId` - É o identificador do grupo do projeto, usa a notação de pacotes Java, por exemplo: com.example
- `artifactId` - É o identificador do artefato, ou seja, o nome do projeto, por exemplo: quick-start-maven
- `Version` - É a versão do projeto, por exemplo: 1.0-SNAPSHOT
- Com `mvn install` o Maven instala o artefato no repositório local, que fica no diretório `~/.m2/repository`
- O Maven divide os escopos das dependências em:
  - `compile` - A dependência é necessária para compilar o projeto e para executá-lo
  - `provided` - A dependência é necessária para compilar o projeto, mas não é necessária para executá-lo, pois a dependência será fornecida pelo ambiente de execução
  - `test` - A dependência é necessária apenas para compilar e executar os testes unitários
  - `runtime` - A dependência não é necessária para compilar o projeto, mas é necessária para executá-lo
  - `system` - A dependência é necessária para compilar e executar o projeto, mas não será procurada no repositório, pois ela está disponível no sistema de arquivos
  - `import` - A dependência é necessária apenas para importar outro POM
  - `default` - Se o escopo não for especificado, o Maven usa o escopo `default
  - `optional` - A dependência não é necessária para compilar e executar o projeto, mas é necessária para executar uma funcionalidade específica
- Dependências transitivas são dependências de dependências, por exemplo, se o projeto A depende do projeto B e o projeto B depende do projeto C, então o projeto A depende do projeto C.
- `provided` e `test` não são transitivos.
- O Maven possui três tipos de repositórios:
  - Local - É o repositório local, que fica no diretório `~/.m2/repository`
  - Central - É o repositório remoto padrão do Maven, que fica em https://repo.maven.apache.org/maven2/
  - Remoto - É um repositório remoto configurado no arquivo settings.xml
- O Maven Build Lifecycle é dividido em três fases:
  - `validate` - Valida se o projeto está correto e se todas as informações necessárias estão disponíveis
  - `compile` - Compila o código-fonte do projeto
  - `test` - Executa os testes unitários do projeto
  - `package` - Empacota o código compilado em um formato distribuível, como um JAR
  - `verify` - Executa verificações nos pacotes gerados pelo projeto
  - `install` - Instala o pacote no repositório local, para ser usado como dependência de outros projetos localmente
  - `deploy` - Copia o pacote final para o repositório remoto, para ser usado como dependência de outros projetos remotamente

## Testes Unitários Com JUnit
- O JUnit é um framework para testes unitários em Java.
- Testes unitários são testes para a menor unidade de código, como uma classe ou um método.
- Geralmente os testes unitários são escritos durante o desenvolvimento.
- Entre as vantagens dos testes unitários estão:
  - Garantir que o código funciona
  - Facilitar a refatoração
  - Facilitar a manutenção
  - Facilitar a integração contínua
  - Facilitar a documentação
  - Facilitar a colaboração
- O JUnit possui algumas anotações:
  - `@Test` - Indica que o método é um teste
  - `@Before` - Indica que o método será executado antes de cada teste
  - `@After` - Indica que o método será executado depois de cada teste
  - `@BeforeClass` - Indica que o método será executado antes de todos os testes
  - `@AfterClass` - Indica que o método será executado depois de todos os testes
  - `@Ignore` - Indica que o teste será ignorado
- O JUnit possui algumas asserções:
  - `assertEquals` - Verifica se dois valores são iguais
  - `assertNotEquals` - Verifica se dois valores são diferentes
  - `assertTrue` - Verifica se o valor é verdadeiro
  - `assertFalse` - Verifica se o valor é falso
  - `assertNull` - Verifica se o valor é nulo
  - `assertNotNull` - Verifica se o valor não é nulo
  - `assertSame` - Verifica se dois objetos são os mesmos
  - `assertNotSame` - Verifica se dois objetos não são os mesmos
  - `fail` - Faz o teste falhar
  - `assertArrayEquals` - Verifica se dois arrays são iguais
  - `assertThat` - Verifica se o valor atende a uma condição

```java
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator calculator = new Calculator();
        int result = calculator.add(2, 3);
        assertEquals(5, result);
    }

    @Test
    public void testSubtract() {
        Calculator calculator = new Calculator();
        int result = calculator.subtract(5, 3);
        assertEquals(2, result);
    }

    @Test
    public void testMultiply() {
        Calculator calculator = new Calculator();
        int result = calculator.multiply(2, 3);
        assertEquals(6, result);
    }

    @Test
    public void testDivide() {
        Calculator calculator = new Calculator();
        double result = calculator.divide(6, 3);
        assertEquals(2.0, result, 0.0001);
    }
}
```

## Contextualizando o Desenvolvimento Web com Spring Boot 3
- A Arquitetura de API pode ser sumarizada pela aplicação enviar uma requisição para o servidor, que processa a requisição e envia uma resposta para a aplicação.
- As soliticitações são feitas através de métodos HTTP, como GET, POST, PUT, DELETE, etc.
- APIs SOAP são APIs baseadas em XML, que usam o protocolo SOAP para fazer a comunicação entre a aplicação e o servidor.
- APIs REST são APIs baseadas em JSON, que usam o protocolo HTTP para fazer a comunicação entre a aplicação e o servidor.
- APIs RPC são APIs baseadas em JSON, que usam o protocolo HTTP para fazer a comunicação entre a aplicação e o servidor.
- APIs WebSocket são APIs baseadas em JSON, que usam o protocolo WebSocket para fazer a comunicação entre a aplicação e o servidor.
- O Spring Boot é um framework para desenvolvimento de aplicações Java baseadas em Spring.
- O REST não guarda estado, ou seja, cada requisição é independente.
- Status Code é um código numérico que indica o status da requisição, por exemplo, 200 indica que a requisição foi bem sucedida, 404 indica que o recurso não foi encontrado, 500 indica que ocorreu um erro no servidor, etc.
- A arquitetura em 3 camadas divide a aplicação em 3 camadas:
  - Controller - Camada de apresentação, que recebe as requisições e envia as respostas
  - Service - Camada de negócio, que processa as requisições
  - Repository - Camada de persistência, que acessa o banco de dados


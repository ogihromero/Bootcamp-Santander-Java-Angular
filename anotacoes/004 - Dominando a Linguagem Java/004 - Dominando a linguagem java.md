# Dominando a linguagem java

## Conhecendo Collections Java
- Collections são estruturas de dados que permitem armazenar vários objetos em uma única estrutura.
- Collections não aceitam tipos primitivos, apenas objetos. Assim, uma coleção de inteiros é uma coleção de objetos do tipo `Integer`.
- Podem ter coleções homogêneas ou heterogêneas.
- São quatro tipos de coleções: `List`, `Set`, `Queue` e `Map`.
- A interface `Collection` é a interface raiz de todas as coleções.
- A interface `List` é uma coleção ordenada e indexada, que permite elementos duplicados.
  - Classes que implementam `List`: `ArrayList`, `LinkedList` e `Vector`.
- A interface `Set` é uma coleção que não permite elementos duplicados.
  - Classes que implementam `Set`: `HashSet`, `LinkedHashSet` e `TreeSet`.
- A interface `Queue` é uma coleção que representa uma fila.
  - Classes que implementam `Queue`: `LinkedList` e `PriorityQueue`.
- A interface `Map` é uma coleção que representa um mapa, ou seja, uma coleção de pares chave-valor.
  - Classes que implementam `Map`: `HashMap`, `LinkedHashMap` e `TreeMap`.
  - `Map` não faz parte de `Iterable` > `Collection`. 
- Todas as classes estão dentro de `java.util`.	
- `Comparable` e `Comparator` são interfaces que permitem a ordenação de objetos.
- `Comparable` é uma interface que permite a ordenação de objetos de uma classe, presente no pacote `java.lang`. 
- `Comparable` fornece o método `compareTo()`, que retorna um inteiro negativo, zero ou positivo, se o objeto for menor, igual ou maior que o objeto passado como parâmetro.
- `Comparator` é uma interface que permite a ordenação de objetos de uma classe, sem que a classe implemente a interface `Comparable`. Está presente no pacote `java.util`.
- `Comparator` fornece o método `compare()`, que retorna um inteiro negativo, zero ou positivo, se o objeto for menor, igual ou maior que o objeto passado como parâmetro.

## Ganhando Produtividade com Stream API
- `Stream` é uma sequência de elementos que suporta operações agregadas.
- `Stream` não armazena dados, apenas os processa.
- `Stream` é uma interface que está presente no pacote `java.util.stream`.
- Utiliza programação funcional, como funções lambda.
- As expressões lambda são funções anônimas que podem ser passadas como parâmetro.
- A method reference é uma forma de referenciar um método sem executá-lo.
```java
// Stream com Expressão Lambda
Stream.of(1, 2, 3, 4, 5).forEach(n -> System.out.println(n));
// Method Reference
Stream.of(1, 2, 3, 4, 5).forEach(System.out::println);
```
```
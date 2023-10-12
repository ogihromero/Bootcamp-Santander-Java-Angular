/**
 * variáveis
 */

// tipos primitivos
let nome: string = "Luiz"; // qualquer tipo de string
let idade: number = 30; // qualquer tipo de number
let altura: number = 1.75; // qualquer tipo de number
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol("qualquer-symbol"); // symbol

// tipos especiais
let nulo: null = null; // null
let indefinido: undefined = undefined; // undefined

// tipos genéricos
let qualquerTipo: any = "qualquer coisa"; // qualquer tipo
qualquerTipo = 1; // qualquer tipo
let voidTipo: void = undefined; // undefined

// Objetos
let produto: object = {
  nome: "Sabão",
  preco: 1.99,
};

type ProdutoLoja = {
  nome: string;
  preco: number;
};

let produtoLoja: ProdutoLoja = {
  nome: "Sabão",
  preco: 1.99,
};

// Arrays
let frutas: string[] = ["Uva", "Banana", "Abacaxi"];
let frutas2: Array<string> = ["Uva", "Banana", "Abacaxi"];
let frutas3: Array<string | number> = ["Uva", "Banana", "Abacaxi", 1];
let frutas4: (string | number)[] = ["Uva", "Banana", "Abacaxi", 1];

// Tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""];
let endereco2: [rua: string, numero: number, bairro: string] = [
  "Av Principal",
  99,
  "",
];

// Enums
enum Cor {
  Cinza,
  Verde,
  Azul,
}
let minhaCor: Cor = Cor.Verde;

// Datas
let data: Date = new Date("2021-01-01 00:00:00");
console.log(data.toDateString());

// Funções
function retornaMeuNome(): string {
  return nome;
}
function digaOi(): void {
  console.log("Oi");
}
function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}
const resultado = multiplicar(3.8, 5);

// Funções como tipos
let calculo: (x: number, y: number) => number;
calculo = multiplicar;
console.log(calculo(5, 6));

// Funções como tipos de objetos
let calculos: {
  multiplicar: (x: number, y: number) => number;
};
calculos = {
  multiplicar: multiplicar,
};
console.log(calculos.multiplicar(5, 6));

// Funções multi types
function multiTipos(x: number | string): number | string {
  return x;
}

// Funções async
function promiseAsync(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolvido");
    }, 2000);
  });
}
promiseAsync().then((resultado) => console.log(resultado));

async function promiseAsyncAwait(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolvido 2");
    }, 2000);
  });
}
promiseAsyncAwait().then((resultado) => console.log(resultado));

// Union Types
let nota: number | string = 10;
nota = "10";
console.log(`Minha nota é ${nota}!`);

// Interfaces
interface Pessoa {
  readonly nome: string;
  idade: number;
  sexo?: string;
  sayHello(): void;
}
let pessoa: Pessoa = {
  nome: "Ogih",
  idade: 30,
  sayHello() {
    console.log(`Hello, ${this.nome}!`);
  },
};

pessoa.sayHello();

// Classes
class Cliente implements Pessoa {
  nome: string = "";
  idade: number = 0;
  saldo: number = 0;
  constructor(nome: string, idade: number, saldo: number) {
    this.nome = nome;
    this.idade = idade;
    this.saldo = saldo;
  }

  sayHello(): void {
    console.log(`Hello, ${this.nome}!`);
  }
}

const client1 = new Cliente("Ogih", 30, 1000);

// Data Modifiers (public, private, protected)
class Conta {
  private saldo: number = 0;
  constructor(saldo: number) {
    this.saldo = saldo;
  }

  getSaldo(): number {
    return this.saldo;
  }

  sacar(valor: number): void {
    this.saldo -= valor;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }
}

const conta1 = new Conta(1000);
conta1.sacar(100);
conta1.depositar(100);
console.log(conta1.getSaldo());

// Subclasses
class ContaCorrente extends Conta {
  constructor(saldo: number) {
    super(saldo);
  }
}

const contaCorrente1 = new ContaCorrente(1000);

// Generics
function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens);
}

const arrayNumeros = concatArray<number[]>([1], [2], [3], [4], [5]);
const arrayStrings = concatArray<string[]>(["a"], ["b"], ["c"], ["d"], ["e"]);
const arrayNumerosStrings = concatArray([1], ["a"], [2], ["b"], [3], ["c"]);
console.log(arrayNumeros);
console.log(arrayStrings);
console.log(arrayNumerosStrings);

// Decorators
function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version });
  };
}

@apiVersion("1.0.0")
class API {}

const api = new API();
console.log(api.__version);

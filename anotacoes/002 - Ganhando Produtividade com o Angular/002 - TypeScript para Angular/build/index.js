"use strict";
/**
 * variáveis
 */
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// tipos primitivos
let nome = "Luiz"; // qualquer tipo de string
let idade = 30; // qualquer tipo de number
let altura = 1.75; // qualquer tipo de number
let adulto = true; // true ou false
let simbolo = Symbol("qualquer-symbol"); // symbol
// tipos especiais
let nulo = null; // null
let indefinido = undefined; // undefined
// tipos genéricos
let qualquerTipo = "qualquer coisa"; // qualquer tipo
qualquerTipo = 1; // qualquer tipo
let voidTipo = undefined; // undefined
// Objetos
let produto = {
    nome: "Sabão",
    preco: 1.99,
};
let produtoLoja = {
    nome: "Sabão",
    preco: 1.99,
};
// Arrays
let frutas = ["Uva", "Banana", "Abacaxi"];
let frutas2 = ["Uva", "Banana", "Abacaxi"];
let frutas3 = ["Uva", "Banana", "Abacaxi", 1];
let frutas4 = ["Uva", "Banana", "Abacaxi", 1];
// Tuplas
let endereco = ["Av Principal", 99, ""];
let endereco2 = [
    "Av Principal",
    99,
    "",
];
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
// Datas
let data = new Date("2021-01-01 00:00:00");
console.log(data.toDateString());
// Funções
function retornaMeuNome() {
    return nome;
}
function digaOi() {
    console.log("Oi");
}
function multiplicar(numA, numB) {
    return numA * numB;
}
const resultado = multiplicar(3.8, 5);
// Funções como tipos
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// Funções como tipos de objetos
let calculos;
calculos = {
    multiplicar: multiplicar,
};
console.log(calculos.multiplicar(5, 6));
// Funções multi types
function multiTipos(x) {
    return x;
}
// Funções async
function promiseAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolvido");
        }, 2000);
    });
}
promiseAsync().then((resultado) => console.log(resultado));
function promiseAsyncAwait() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Resolvido 2");
            }, 2000);
        });
    });
}
promiseAsyncAwait().then((resultado) => console.log(resultado));
// Union Types
let nota = 10;
nota = "10";
console.log(`Minha nota é ${nota}!`);
let pessoa = {
    nome: "Ogih",
    idade: 30,
    sayHello() {
        console.log(`Hello, ${this.nome}!`);
    },
};
pessoa.sayHello();
// Classes
class Cliente {
    constructor(nome, idade, saldo) {
        this.nome = "";
        this.idade = 0;
        this.saldo = 0;
        this.nome = nome;
        this.idade = idade;
        this.saldo = saldo;
    }
    sayHello() {
        console.log(`Hello, ${this.nome}!`);
    }
}
const client1 = new Cliente("Ogih", 30, 1000);
// Data Modifiers (public, private, protected)
class Conta {
    constructor(saldo) {
        this.saldo = 0;
        this.saldo = saldo;
    }
    getSaldo() {
        return this.saldo;
    }
    sacar(valor) {
        this.saldo -= valor;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
const conta1 = new Conta(1000);
conta1.sacar(100);
conta1.depositar(100);
console.log(conta1.getSaldo());
// Subclasses
class ContaCorrente extends Conta {
    constructor(saldo) {
        super(saldo);
    }
}
const contaCorrente1 = new ContaCorrente(1000);
// Generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const arrayNumeros = concatArray([1], [2], [3], [4], [5]);
const arrayStrings = concatArray(["a"], ["b"], ["c"], ["d"], ["e"]);
const arrayNumerosStrings = concatArray([1], ["a"], [2], ["b"], [3], ["c"]);
console.log(arrayNumeros);
console.log(arrayStrings);
console.log(arrayNumerosStrings);
// Decorators
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototype, { __version: version });
    };
}
let API = (() => {
    let _classDecorators = [apiVersion("1.0.0")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var API = _classThis = class {
    };
    __setFunctionName(_classThis, "API");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        API = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return API = _classThis;
})();
const api = new API();
console.log(api.__version);

alert("Tudo certo com o script");

// Tipos primitivos
var VouF = true; // Boolean
console.log(VouF);
console.log(typeof VouF);

// Number
var numero = 10;
console.log(numero);
console.log(typeof numero);
// String
var nome = "Adriano";
console.log(nome);
console.log(typeof nome);

var VariavelNaoDefinida;
console.log(VariavelNaoDefinida);
console.log(typeof VariavelNaoDefinida);

let variavelLet = 10;
console.log(variavelLet);
variavelLet = 11;
console.log(variavelLet);

const variavelConst = "constante";
console.log(variavelConst);
// variavelConst = 'constante 2'; // Erro

function escopo() {
  var escopoFuncao = "escopo local";
  console.log(escopoFuncao);
}
// console.log(escopoFuncao) // Erro
escopo();

// Arrays
let array = ["string", 10, true, { nome: "Adriano" }];
console.log(array);
array.push(10);
console.log(array);
console.log(array[3].nome);

// Objetos
let objeto = { nome: "Adriano", idade: 999, profissao: "Desenvolvedor" };
console.log(objeto);
console.log(objeto.nome);
var { nome, idade, profissao } = objeto;

// Condicionais
if (idade > 18) {
  console.log("Maior de idade");
} else if (idade == 18) {
  console.log("Tem 18 anos");
} else {
  console.log("Menor de idade");
}

// Repetição
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Função
function soma(a, b) {
  return a + b;
}
console.log(soma(10, 20));

// Arrow function
const somaArrow = (a, b) => a + b;

function calculadora() {
  const operacao = prompt(
    "Digite a operação desejada: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão real \n 5 - Resto Divisão \n 6 - Potenciação"
  );

  let numero1 = prompt("Digite o primeiro número: ");
  let numero2 = prompt("Digite o segundo número: ");
  let resultado = 0;
  function soma() {
    resultado = parseFloat(numero1) + parseFloat(numero2);
    alert(` ${numero1} + ${numero2} =  ${resultado}`);
    novaOperacao();
  }

  function subtracao() {
    resultado = parseFloat(numero1) - parseFloat(numero2);
    alert(` ${numero1} - ${numero2} =  ${resultado}`);
  }

  function multiplicacao() {
    resultado = parseFloat(numero1) * parseFloat(numero2);
    alert(` ${numero1} * ${numero2} =  ${resultado}`);
    novaOperacao();
  }

  function divisaoReal() {
    resultado = parseFloat(numero1) / parseFloat(numero2);
    alert(` ${numero1} / ${numero2} =  ${resultado}`);
    novaOperacao();
  }

  function divisaoInteira() {
    resultado = parseInt(numero1) % parseInt(numero2);
    alert(` ${numero1} % ${numero2} =  ${resultado}`);
    novaOperacao();
  }

  function potenciacao() {
    resultado = parseFloat(numero1) ** parseFloat(numero2);
    alert(` ${numero1} ^ ${numero2} =  ${resultado}`);
    novaOperacao();
  }

  function novaOperacao() {
    let novaOperacao = prompt("Deseja realizar uma nova operação? (S/N)");
    if (novaOperacao == "S" || novaOperacao == "s") {
      calculadora();
    } else if (novaOperacao == "N" || novaOperacao == "n") {
      alert("Obrigado por utilizar nossa calculadora!");
    } else {
      alert("Opção inválida!");
      novaOperacao();
    }
  }

  if (operacao == 1) {
    soma();
  } else if (operacao == 2) {
    subtracao();
  } else if (operacao == 3) {
    multiplicacao();
  } else if (operacao == 4) {
    divisaoReal();
  } else if (operacao == 5) {
    divisaoInteira();
  } else if (operacao == 6) {
    potenciacao();
  }
}

calculadora();

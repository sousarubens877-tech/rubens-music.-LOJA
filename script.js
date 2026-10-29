// Preços e nomes dos produtos (devem ser iguais aos exibidos no index.html)
const produtos = [
  { nome: "Violão acústico", preco: 899.90 },
  { nome: "Teclado 61 teclas", preco: 1249.00 },
  { nome: "Bateria", preco: 2499.00 }
];

// Formata um número como moeda brasileira
function formatarReais(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function simularCompra() {
  const quantidades = [];

  // 1. Pergunta a quantidade de cada produto
  for (let i = 0; i < produtos.length; i++) {
    const resposta = prompt(
      "Quantas unidades de " + produtos[i].nome +
      " (" + formatarReais(produtos[i].preco) + ") você quer?\nDigite 0 para não comprar."
    );

    // Usuário clicou em "Cancelar"
    if (resposta === null) {
      alert("Simulação cancelada.");
      return;
    }

    // 2. Converte a resposta em número
    const quantidade = Number(resposta);

    // Valida: vazio, texto, decimal ou negativo
    if (resposta.trim() === "" || !Number.isInteger(quantidade) || quantidade < 0) {
      alert("Quantidade inválida para " + produtos[i].nome +
            ". Digite um número inteiro igual ou maior que 0. Clique em \"Simular compra\" para tentar de novo.");
      return;
    }

    quantidades.push(quantidade);
  }

  // 3 e 4. Calcula o valor de cada produto e o total
  let total = 0;
  let resumo = "RESUMO DA COMPRA - RUBENS MUSIC\n\n";

  for (let i = 0; i < produtos.length; i++) {
    const subtotal = produtos[i].preco * quantidades[i];
    total += subtotal;
    resumo += produtos[i].nome + ": " + quantidades[i] +
              " x " + formatarReais(produtos[i].preco) +
              " = " + formatarReais(subtotal) + "\n";
  }

  // Regra: nenhuma quantidade selecionada
  if (total === 0) {
    alert("Nenhum produto foi selecionado.");
    return;
  }

  resumo += "\nTOTAL DA COMPRA: " + formatarReais(total);

  // 5. Exibe o resultado
  alert(resumo);
}

# Minha Loja: Simulador de Compras

Projeto do **Desafio 1** da trilha **Desenvolvimento Mobile** (Programa Trilhas 2026).
Modalidade individual.

**Aluno:** Rubens Sousa dos Santos

## Sobre o projeto

A **Rubens Music** é uma loja fictícia de instrumentos musicais. A página apresenta três instrumentos e um simulador de compras que calcula o valor total a partir das quantidades digitadas pelo usuário.

## Produtos

| Produto | Descrição | Preço |
|---|---|---|
| Violão acústico | Cordas de aço, acabamento brilhante, ótimo para iniciantes | R$ 899,90 |
| Teclado 61 teclas | Sons variados, ritmos prontos e função de gravação | R$ 1.249,00 |
| Bateria | Bateria acústica de 5 peças com pratos, pedal e banco | R$ 2.499,00 |

## Como usar

1. Abra o arquivo `index.html` no navegador (basta dar dois cliques).
2. Clique no botão **Simular compra**.
3. Digite a quantidade de cada instrumento nas caixas que aparecerem. Use `0` para não comprar um item.
4. Veja o resumo com quantidades, valores por produto e total.

Se todas as quantidades forem `0`, o sistema avisa que nenhum produto foi selecionado.

## Como funciona o JavaScript

A função `simularCompra()`, chamada pelo botão com `onclick`:

1. pergunta a quantidade de cada produto com `prompt()`;
2. converte cada resposta em número com `Number()`;
3. calcula o valor de cada produto (preço × quantidade);
4. soma os valores de todos os produtos;
5. mostra o resultado com `alert()`.

Também há validação: cancelamento, campo vazio, texto, números decimais e números negativos exibem uma mensagem e encerram a simulação.

## Estrutura de arquivos

```
rubens-music/
├── index.html   # estrutura e conteúdo da loja
├── style.css    # cores, organização, espaçamento e aparência
├── script.js    # perguntas, cálculos e resultado da compra
└── README.md    # documentação do projeto
```

## Tecnologias

HTML5, CSS3 e JavaScript puro, sem bibliotecas externas e sem imagens (os produtos usam emojis).

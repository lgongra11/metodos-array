// Exemplos misturando métodos - Fase de Fixação

console.log(" === 8. Combinando Métodos === ");

// Exemplo 1 - Lista de alunos (includes e indexOf)
const alunos = [
"Carlos",
"Ana",
"Pedro",
"João",
"Mariana"

];

console.log("Tem João?", alunos.includes("João")); // true
console.log("Posição de Mariana:", alunos.indexOf("Mariana")); // 4

// Exemplo 2 - Organizar e transformar (sort + join)
const nomes = [
"Carlos",
"Ana",
"Pedro",
"João"
];

console.log("Nomes organizados e formatados:", resultadoNomes);

// Exemplo 3 - Pegar uma parte e mostrar (slice + join)
const produtos = [
"Mouse", //0
"Teclado", //1
"Monitor",//2
"Headset",//3
"Webcam"//4
];
    
nomes.sort(); // 1. Ordena
const resultadoNomes = nomes. join(" - "); // 2. Transforma em texto "Ana - Carlos - Joao - Pedro"

// slice(2, 5) pega itens dos indices 2, 3 e 4 ("Monitor", "Headset", "Webcam")
const destaque = produtos.slice(2, 5);
console.log("Produtos em destaque:", destaque. join(", ")); // "Monitor, Headset, Webcam"
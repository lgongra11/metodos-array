// 2. indexOf() - "Onde está?"
//Procura a primeira posição do elemento. Retorna o índice (0, 1 ,2...) ou -1 se não encontrar.

console.log("=== 2. indexOf() ===");

//Exemplo 1 - lista de frutas
const frutas = ["Maçã", "Banana", "Laranja"];
// Índices: 0 -> Maçã, 1 -> Banana, 2 -> Laranja
console.log("Posição da Banana:" , frutas.indexOf("Banana")); // 1

//Exemplo 2 - procurando aluno
const alunos = ["Ana", "João", "Carlos", "Mariana "];
console.log("Posição do Mariana:" , alunos.indexOf("Mariana")); // 3

//Exemplo 3 - Quando não existe (retorna -1)
console.log("Posição do Pedro:" , alunos.indexOf("Pedro")); // -1

//Exemplo 4 - usando com if
const posicao = alunos.indexOf("João");

if (posicao !== -1) {
    console.log("Aluno encontrado na posição:", posicao);
} else {
    console.log ("Aluno não encontrado");
}
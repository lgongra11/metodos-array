// 5. join() - Transformando array em texto
// Une todos os elementos do array em uma única String usando um separador.

console.log(" === 5. join() === ");

//Exemplo 1 - separador padrão (vírgula)
const nomes = ["Ana", "João", "Carlos"];
console.log("Com separadpr padrão:", nomes.join()); // "Ana,João,Carlos"

// Exemplo 2 - escolhendo separador personalizado
console.log("Com hífen:", nomes.join(" - ")); // "Ana - João - Carlos"

// Exemplo 3 - lista de tecnologia
const tecnologias = ["HTML", "CSS", "JavaScript", "React"];
const texto = tecnologias.join(" | ");
console.log("Tecnologias formatadas:", texto); // "HTML | CSS | JavaScript | React"

// Dica: O array guarda os dados. O join() ajuda a transformar esses dados em apresentação textual!
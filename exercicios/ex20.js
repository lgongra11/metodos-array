let produtos = [
    "Arroz",
    "Feijão",
    "Macarrão",
    "Leite",
    "Café",
    "Açúcar"
];

console.log(produtos.includes("Café"));
console.log(produtos.indexOf("Café"));
let parcial = produtos.slice(0, 4);
console.log(parcial);
produtos.splice(3, 1);
console.log(produtos);
console.log(produtos.join(" | "));

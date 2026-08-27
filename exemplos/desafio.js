//Mini desafio de fixação

/*
Array inicial:
const jogos = [
    "Minecraft",
    "FIFA",
    "GTA",
    "Valorant",
    "Fortnite"
];

Passos pedidos:
1. Verifique se "Minecraft" existe.
2. Descubra a posição de "Valorant".
3. Crie um novo array contendo apenas "GTA", "Valorant" e "Fortnite".
4. Organize o array em ordem alfabética.
5. Transforme o resultado em texto usando " | ".


-------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------
--


Resultado esperado final:
"Fortnite | GTA | Valorant"
*/

console.log(" === 9. Mini Desafio de Fixação === ");

const jogos = [
    "Minecraft", //0
    "FIFA", //1
    "GTA", //2
    "Valorant", //3
    "Fortnite" //4
];

// 1. Verifique se "Minecraft" existe
const temMinecraft = jogos.includes("Minecraft");
console.log("1. Minecraft existe?", temMinecraft);

// 2. Descubra a posição de "Valorant"
const posicaoValorant = jogos.indexOf("Valorant");
console.log("2. Posição de Valorant:", posicaoValorant);

// 3. Crie um novo array contendo apenas "GTA", "Valorant" e "Fortnite"
// Podemos usar slice(2) ou slice(2, 5)
const jogosSelecionados = jogos.slice(2);
console.log("3. Array fatiado:", jogosSelecionados);

// 4. Organize esse novo array em ordem alfabética
jogosSelecionados.sort();
console.log("4. Array ordenado:", jogosSelecionados);

// S. Transforme o resultado em texto usando
const textoFinal = jogosSelecionados.join(" | ");
console.log("5. Resultado final formatado:", textoFinal);
// Saída: "Fortnite | GTA | Valorant"
let nomes = ["Bruno", "Augusto", "Lucas", "Sarah", "Maria", "Yasmin", "Kauan", "Gabriel", "Vitor", "João"];
console.log(nomes.includes("Lucas"));
console.log(nomes.indexOf("Luiza"));
console.log(nomes.slice(2, 5));
nomes.splice(4,1)
console.log(nomes)
nomes.splice(2, 0, "Luiza")
console.log(nomes)
console.log(nomes.sort())
console.log(nomes.reverse())
console.log(nomes.join("  "))
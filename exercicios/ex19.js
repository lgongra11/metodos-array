let numeros = [50, 10, 100, 5, 25, 1];
console.log("Jeito errado" , numeros.sort());
numeros.sort((a, b) => a - b);
console.log("Jeito certo: " , numeros);
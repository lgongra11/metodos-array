let playlist = [
    "Numb",
    "In The End",
    "Enter Sandman",
    "Fear of the Dark",
    "Breaking the Law",
    "Master of Puppets",
    "The Trooper",
    "Paranoid"
];

alert (`===== MINHA PLAYLIST =====
1 - Pesquisar música
2 - Criar seleção
3 - Remover música
4 - Inserir música
5 - Ordenar A-Z
6 - Inverter playlist
7 - Exibir playlist
0 - Sair `);
let opcao = prompt("Escolha uma opção: ");
if (opcao === "1") {
    let musica = prompt("Digite o nome da música: ");
    console.log(playlist.includes(musica));
} else if (opcao === "2") {
    let inicio =(prompt("Digite o índice inicial: "));
    let fim = (prompt("Digite o índice final: "));
    console.log(playlist.slice(inicio, fim));
} else if (opcao === "3") {
    let musica = prompt("Digite o nome da música a ser removida: ");
    let indice = playlist.indexOf(musica);
    if (indice !== -1) {
        playlist.splice(indice, 1);
        console.log(playlist);
    }
} else if (opcao === "4") {
    let musica = prompt("Digite o nome da música a ser inserida: ");
    let indice = prompt("Digite o índice onde inserir a música: ");
    playlist.splice(indice, 0, musica);
    console.log(playlist);
} else if (opcao === "5") {
    console.log(playlist.sort());
} else if (opcao === "6") {
    console.log(playlist.reverse());
} else if (opcao === "7") {
    console.log(playlist.join(" | "));
} else if (opcao === "0") {
    alert("Saindo do programa...");
}

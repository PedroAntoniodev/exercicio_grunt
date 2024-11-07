let placarJogador = 0;
let placarComputador = 0;

function jogar(escolhaUsuario) {
    const escolhas = ["pedra", "papel", "tesoura"];
    const escolhaComputador = escolhas[Math.floor(Math.random() * 3)];

    let resultado;

    if (escolhaUsuario === escolhaComputador) {
    resultado = "Empate!";
    } else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
    resultado = "Você ganhou!";
    placarJogador++;
    } else {
    resultado = "Computador ganhou!";
    placarComputador++;
    }

    document.getElementById("resultado").innerText = `Você pegou ${escolhaUsuario}, o computador pegou ${escolhaComputador}. ${resultado}`;
    document.getElementById("placarJogador").innerText = placarJogador;
    document.getElementById("placarComputador").innerText = placarComputador;
}

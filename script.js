function mudar() {
    //DECLARANDO AS VARIÁVEIS
    let novo = document.getElementById("idTexto")

    //CHAMANDO O TÍTULO
    document.getElementById("titulo")
    document.getElementById("titulo").innerHTML = novo.value;
}

function trocar(cor) {
    document.body.style.background = cor;
}
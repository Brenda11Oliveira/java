function mudarFrase() {
    var elemento = document.getElementById("frase")
    elemento.innerHTML = "Qualquer frase"
    elemento.style.color = "red";
    elemento.style.fontSize = "25px";
    elemento.style.backgroundColor = "yellow";
    //altera o fundo da página
    document.body.style.backgroundColor = "blue";
    elemento.innerHTML = "<img src=\'img/mm.jpg\' />"
}

function trocarTexto(){
    var elemento = document.getElementById("frase")
    var nova = document.getElementById("novaFrase").value
elemento.innerHTML = nova
}

function gabi(id){
    return document.getElementsBy(Id)
}
// e --> enter
// o --> ober
// i --> imes
// a --> ai
// u --> ufat

function encriptar() {
    var texto = document.getElementById("inputText").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("frame5").style.display = "none";
    document.getElementById("rectangle1").innerHTML = txtCifrado;
    document.getElementById("Copy").style.display = "show";
    document.getElementById("Copy").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("inputText").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("frame5").style.display = "none";
    document.getElementById("rectangle1").innerHTML = txtCifrado;
    document.getElementById("Copy").style.display = "show";
    document.getElementById("Copy").style.display = "inherit";
}

function copy() {
    var contenido = document.getElementById("rectangle1");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió!");
}


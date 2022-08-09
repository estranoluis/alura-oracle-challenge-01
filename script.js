function encriptar(){
    var mensaje = document.getElementById("input").value;
    var texto = mensaje.replace(/i/igm, "imes");
    var texto = texto.replace(/a/igm, "ai");
    var texto = texto.replace(/e/igm, "enter");
    var texto = texto.replace(/o/igm, "ober");
    var texto = texto.replace(/u/igm, "ufat");
    document.getElementById("resultado").innerHTML = texto;
    document.querySelector('.area-resultado > img').style.display = "none";
    document.getElementById("input").value = "";
    document.querySelector('.caja-textos').style.display="none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var mensaje = document.getElementById("input").value;
    var texto = mensaje.replace(/imes/igm, "i");
    var texto = texto.replace(/ai/igm, "a");
    var texto = texto.replace(/enter/igm, "e");
    var texto = texto.replace(/ober/igm, "o");
    var texto = texto.replace(/ufat/igm, "u");
    document.getElementById("resultado").innerHTML = texto;
    document.querySelector('.area-resultado > img').style.display = "none";
    document.getElementById("input").value = "";
    document.querySelector('.caja-textos').style.display="none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var texto = document.getElementById("resultado");
    texto.select();
    navigator.clipboard.writeText(texto.value);
}



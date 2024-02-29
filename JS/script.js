let textoCop = document.getElementById("copiar");

function copiback(){
    document.getElementById("copiado").style.display = "block";
    document.getElementById("titulo").style.display = "none";
    document.getElementById("paragrafo").style.display = "none";
}
function trocar(){
    document.getElementById("inicial").style.display = "none";
    document.getElementById("oculto").style.display = "flex";
    textInput = document.querySelector(".main-input-text");
    textInput.value = "";
}
function coperro(){
    document.getElementById("copiado").style.display = "none";
    document.getElementById("titulo").style.display = "block";
    document.getElementById("paragrafo").style.display = "block";
}
function voltar(){
    document.getElementById("inicial").style.display = "flex";
    document.getElementById("oculto").style.display = "none";
}

function btnEncriptar() {

    const textInput = document.querySelector(".main-input-text").value;
    const textOutput = document.querySelector(".main-output-oculto-text");
    
    let textoCriptografado = textInput
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    if (textInput.length != 0) {
        textOutput.value = textoCriptografado;
        textoCop = "copiar";
        trocar();
    } else{
        voltar();
        coperro();
    } 
}

function btnDesencriptar() {

    const textInput = document.querySelector(".main-input-text").value;
    const textOutput = document.querySelector(".main-output-oculto-text");

    let textoDescriptografado = textInput
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (textInput.length != 0) {
        textOutput.value = textoDescriptografado;
        textoCop = "copiar";
        trocar();
    } else{
        voltar();
        coperro();
    } 
}

function copiar() {
    let textoCop = document.getElementById("texto");
  
      textoCop.select();
      document.execCommand("copy");
      voltar();
      copiback();
}
var botonEncriptar = document.querySelector(".botonEncriptar");
var botonDesencriptar = document.querySelector(".botonDesencriptar");
var muneco= document.querySelector(".contenedorMuneco");
var contenedor = document.querySelector(".contenedorParrafo");
var resultado = document.querySelector(".contenedorRespuesta");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto =document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i=0; i<texto.lenght; i++)
    {
        if(texto[i] == "e")
            {
            textoFinal = textoFinal +"enter"
            }
        else if(texto[i] == "i")
            {
            textoFinal = textoFinal +"imes"
            }
        else if(texto[i] == "a")
            {
            textoFinal = textoFinal +"ai"
            }
        else if(texto[i] == "o")
            {
            textoFinal = textoFinal +"ober"
            }
        else if(texto[i] == "u")
            {
            textoFinal = textoFinal +"ufat"
            }
    }
    return textoFinal;
}

function desenencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i=0; i<texto.lenght; i++)
    {
        if(texto[i] == "e")
            {
            textoFinal = textoFinal +"e"
            i=i+4;
            }
        else if(texto[i] == "i")
            {
            textoFinal = textoFinal +"i"
            i=i+3;
            }
        else if(texto[i] == "a")
            {
            textoFinal = textoFinal +"a"
            i=i+1;
            }
        else if(texto[i] == "o")
            {
            textoFinal = textoFinal +"o"
            i=i+3;
            }
        else if(texto[i] == "u")
            {
            textoFinal = textoFinal +"u"
            i=i+3;
            }
    }
    return textoFinal;
}

const botonCopiar = document.querySelector(".botonCopiar");
    botonCopiar.addEventListener("click",copiar=()=>{
        var contenido=document.querySelector("textoRespuesta").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola");
    })
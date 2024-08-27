// Filtra la entrada para permitir solo letras minusculas y espacios
function filtrarEntrada() {
    let input = document.getElementById('inputText').value;
   // Eliminar caracteres especiales y convertir a minúsculas
   input = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    input = input.replace(/[^a-z\s.,]/g, '');
    document.getElementById("inputText").value = input;
    document.getElementById('activarEncriptado').removeAttribute('disabled');
    document.getElementById('activarDesencriptado').removeAttribute('disabled');
    document.getElementById('limpiarTodo').removeAttribute('disabled');
}
// Encripta el texto de la textarea y lo muestra en la salida
function encriptar() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
       x.style.display = 'none';
    }
    let input = document.getElementById('inputText').value;
    let encrypted = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').innerText = encrypted;
    //document.getElementById('activarDesencriptado').removeAttribute('disabled');
    activarBotonCopiar();
}
// Desencripta el texto de la textarea y lo muestra en la salida
function desencriptar() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
       x.style.display = 'none';
    }
    let input = document.getElementById('inputText').value;
    let decrypted = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').innerText = decrypted;
    activarBotonCopiar();
}
// Activa o desactiva el botón de copiar basado en la salida de texto
function activarBotonCopiar() {
    let outputText = document.getElementById('outputText').innerText;
    let limpiar = document.getElementById('limpiar');
    if (outputText.trim() === '') {
        limpiar.style.display = 'none';
    } else {
        limpiar.style.display = 'block';
    }
}
// Copia el texto de salida al portapapeles
function copiar() {
    let outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
// Limpia la textarea y la salida de texto, y reinicia el estado inicial
function limpiar() {
    // Limpiar el contenido de la textarea
    document.getElementById('inputText').value = '';
    // Limpiar el contenido de la salida de texto
    document.getElementById('outputText').innerText = '';
    // Mostrar la imagen y el mensaje de "Ningún mensaje fue encontrado"
    document.getElementById('myDIV').style.display = 'block';
    //Ocultar botón copiar
    limpiar.style.display = 'none';
    // Desactivar botones encriptar, desencriptar, limpiar
    document.getElementById('activarEncriptado').disabled = true;
    document.getElementById('activarDesencriptado').disabled = true;
    document.querySelector('#limpiarTodo').setAttribute('disabled','true');
    
}
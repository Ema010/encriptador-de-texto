const botonEncriptar = document.getElementById("encriptar");
const botonDesencriptar = document.getElementById("desencriptar");
const botonCopiar = document.getElementById("copiar");

botonEncriptar.addEventListener("click", btnEncriptar);
botonDesencriptar.addEventListener("click", btnDesencriptar);
botonCopiar.addEventListener("click", copiarTexto);

/* La letra "a" es convertida en "ai".
   La letra "e" es convertida en "enter".
   La letra "i" es convertida en "imes".
   La letra "o" es convertida en "ober".
   La letra "u" es convertida en "ufat".
*/

function btnEncriptar() {
  const textArea = document.getElementById("textoArea");
  const mensaje = document.getElementById("mensaje");

  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;

  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptar) {
  let matrizCodigo = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  let stringEncriptado = stringEncriptar.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }

  return stringEncriptado;
}

function btnDesencriptar() {
  const textArea = document.getElementById("textoArea");
  const mensaje = document.getElementById("mensaje");

  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;

  textArea.value = "";
}

function desencriptar(stringDesencriptar) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
    ["a", "ai"],
  ];

  let stringDesencriptado = stringDesencriptar.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }

  return stringDesencriptado;
}

async function copiarTexto() {
  const mensaje = document.getElementById("mensaje");

  try {
    await navigator.clipboard.writeText(mensaje.value);
    alert("Texto copiado al portapapeles");
  } catch (err) {
    console.error("Error al copiar el texto: ", err);
  }
}

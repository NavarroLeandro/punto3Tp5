let lista = [];

const ingresarTexto = () => {
  const textoIngresado = document.querySelector("#texto-input").value;
  lista.push(textoIngresado);
  console.log("El texto ingresado al final fue: ", textoIngresado);
}


const eliminarTexto = () => {
  const textoIngresado2 = document.querySelector("#texto-input2").value;
  console.log("El texto ingresado para eliminar de la lista: ", textoIngresado2);
  const index = lista.indexOf(textoIngresado2);
  if (index !== -1) {
    lista.splice(index, 1);
    console.log(`El texto ${textoIngresado2} ha sido eliminado de la lista.`);
  } else {
    console.log(`El texto ${textoIngresado2} no se encontró en la lista.`);
  }
}


const mostrarLista = () => {
  console.log("La lista hasta este momento es: [ ");
  for (let elemento of lista) {
    console.log(elemento);
  }
  console.log(" ]");
}





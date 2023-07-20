const resultado = document.getElementById("resultado");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault()
  const numeros = document.getElementById("numeros");
  const arrayString = numeros.value.split(",") 

  if (validarNumerico(arrayString)) {
    const arrayNumerico = arrayString.map(Number)
    let i = 0;
    let sum = 0;
    for (i; i < arrayNumerico.length; i++) {
      sum += arrayNumerico[i]; 
    }

    let prom = sum / arrayNumerico.length

    if (Number.isInteger(prom)) {
      resultado.innerHTML = `Resultado: ${prom}`;
    } else {
      resultado.innerHTML = `Resultado: ${prom.toFixed(2) }`;
    }
    
  } else {
    resultado.innerHTML = `Ingresar solamente números`;
  }
})

const validarNumerico = (array) => {
  for (var i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      return false;
    }
  }
  return true;
}

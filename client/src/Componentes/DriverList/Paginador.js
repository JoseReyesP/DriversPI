const Paginador = (drivers, elementosPagina = 9) => {
  let arrayOriginal = Array.from(drivers);
  //console.log(arrayOriginal);
  let arraysDivididos = [];
  const tamanoSubArray = elementosPagina;
  for (let i = 0; i < arrayOriginal.length; i += tamanoSubArray) {
    const subArray = arrayOriginal.slice(i, i + tamanoSubArray);
    arraysDivididos.push(subArray);
  }
  return arraysDivididos;
};

export default Paginador;

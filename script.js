<!-- To Real -->
function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;

  //console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  document.getElementById("valorConvertido");
  var valorConvertido = "O Resultado em Real é R$: " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

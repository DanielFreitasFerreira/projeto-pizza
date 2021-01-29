pizzaJson.map((item, index) => {
  let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
  
  // preencher as informações
  document.querySelector('.pizza-area').append(pizzaItem);

});
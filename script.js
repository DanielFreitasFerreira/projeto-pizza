const query = (el) => document.querySelector(el);
const all = (el) => document.querySelectorAll(el);

// Listando as pizzas
pizzaJson.map((item, index) => {
  const pizzaItem = query('.models .pizza-item').cloneNode(true);

  pizzaItem.setAttribute('data-key', index);
  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    const key = e.target.closest('.pizza-item').getAttribute('data-key');
    
    query('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    query('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
    query('.pizzaBig img').src = pizzaJson[key].img;
    query('.pizzaInfo--price').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2).replace('.',',')}`;
    all('.pizzaInfo--size').forEach((size, sizeIndex) => {
      size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
    });



    // Interação modal
    query('.pizzaWindowArea').style.opacity = 0;
    query('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
      query('.pizzaWindowArea').style.opacity = 1;
    }, 200);
  });
  
  // preencher as informações
  query('.pizza-area').append(pizzaItem);

});

// Evento Modal
function closeModal() {
  query('.pizzaWindowArea').style.opacity = 0;
  setTimeout(() => {
    query('.pizzaWindowArea').style.display = 'none';
  }, 500);
}
query('pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
  item.addEventListener('click', closeModal);
});




const query = (el) => document.querySelector(el);
const all = (el) => document.querySelectorAll(el);

pizzaJson.map((item, index) => {
  let pizzaItem = query('.models .pizza-item').cloneNode(true);

  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Clicou na pizza!");

    query('.pizzaWindowArea').style.opacity = 0;
    query('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
      query('.pizzaWindowArea').style.opacity = 1;
    }, 200);
  });
  
  // preencher as informações
  query('.pizza-area').append(pizzaItem);

});




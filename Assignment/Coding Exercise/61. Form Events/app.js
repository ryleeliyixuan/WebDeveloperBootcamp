// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const qty = form.elements.qty;
    const product = form.elements.product;
    var grocery = document.createElement('li');
    grocery.innerText = `${product.value}: ${qty.value}`;
    document.querySelector('ul').appendChild(grocery);
    qty.value = '';
    product.value = '';
})
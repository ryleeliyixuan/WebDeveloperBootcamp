// WRITE YOUR CODE IN HERE:

var container = document.getElementById('container');
for (let i = 0; i < 100; i++) {
    var button = document.createElement('button');
    button.innerText = 'Hey!';
    container.appendChild(button);
}
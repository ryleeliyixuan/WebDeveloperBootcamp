var input = document.querySelector('input');
var h1 = document.querySelector('h1');

input.addEventListener('input', () => {
    if (input.value == '') {
        h1.innerText = 'Enter Your Username';
        return;
    }
    h1.innerText = `Welcome, ${input.value}`;
})
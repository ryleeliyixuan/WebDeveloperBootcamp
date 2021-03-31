const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
var letters = document.getElementsByTagName('span');
let len = letters.length;
for (let i = 0; i < len; i++) {
    letters[i].style.color = colors[i];
}
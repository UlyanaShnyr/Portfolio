let canvas_element = document.getElementById('canvas_element');
canvas_element.width=window.innerWidth;
canvas_element.height=700;
console.log(canvas_element.offsetHeight)
console.log(document.getElementById('canvas_element').style.height);
let matrix_context = canvas_element.getContext('2d');

let font = 'arial';
let fontSize = 15;
matrix_context.font = fontSize + 'em' + font;
let cols = canvas_element.width / fontSize;

let symbols;
symbols = '0123456789ABCDEF'; 
symbols = symbols.split(''); 

let drops = [];
for (let i = 0; i < cols; i++) {
    drops[i] = Math.floor(Math.random() * canvas_element.height);
}

setInterval(rain, 250); 

function rain() {    
   
matrix_context.fillStyle = 'rgba(255, 255, 255, 0.1)';
matrix_context.fillRect(0, 0, canvas_element.width, canvas_element.height);        
for (let i = 0; i < drops.length; i++) {        
let char = symbols[Math.floor(Math.random() * symbols.length)];        
matrix_context.fillStyle = 'rgb(0, 0, 0)';        
matrix_context.fillText(char, i * fontSize, drops[i] * fontSize);        
if (Math.random() > 0.99) drops[i] = 0;
drops[i]++; 
}
}
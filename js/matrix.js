let canvas_element = document.getElementById('canvas_element');
let canvas_element2 = document.getElementById('canvas_element2');
let canvas_element3 = document.getElementById('canvas_element3');
let canvas_element4 = document.getElementById('canvas_element4');

canvas_element.width=window.innerWidth;
canvas_element.height=window.innerHeight;
canvas_element2.width=window.innerWidth;
canvas_element2.height=window.innerHeight;
canvas_element3.width=window.innerWidth;
canvas_element3.height=window.innerHeight;
canvas_element4.width=window.innerWidth;
canvas_element4.height=window.innerHeight;

let matrix_context = canvas_element.getContext('2d');
let matrix_context2 = canvas_element2.getContext('2d');
let matrix_context3 = canvas_element3.getContext('2d');
let matrix_context4 = canvas_element4.getContext('2d');

let font = 'arial';
let fontSize = 15;
matrix_context.font = fontSize + 'em' + font;
matrix_context2.font = fontSize + 'em' + font;
matrix_context3.font = fontSize + 'em' + font;
matrix_context4.font = fontSize + 'em' + font;

let cols = canvas_element.width / fontSize;
let cols2 = canvas_element2.width / fontSize;
let cols3 = canvas_element3.width / fontSize;
let cols4 = canvas_element4.width / fontSize;

let symbols;
symbols = '0123456789ABCDEF'; 
symbols = symbols.split(''); 

let drops = [];
for (let i = 0; i < cols; i++) {
    drops[i] = Math.floor(Math.random() * canvas_element.height);
}

let drops2 = [];
for (let i = 0; i < cols2; i++) {
    drops2[i] = Math.floor(Math.random() * canvas_element2.height);
}

let drops3 = [];
for (let i = 0; i < cols3; i++) {
    drops3[i] = Math.floor(Math.random() * canvas_element3.height);
}

let drops4 = [];
for (let i = 0; i < cols4; i++) {
    drops4[i] = Math.floor(Math.random() * canvas_element4.height);
}


setInterval(rain, 250); 
setInterval(rain2, 250); 
setInterval(rain3, 250); 
setInterval(rain4, 250); 


function rain() {  
matrix_context.fillStyle = 'rgba(231, 229, 228, 0.5)';
matrix_context.fillRect(0, 0, canvas_element.width, canvas_element.height);        
for (let i = 0; i < drops.length; i++) {        
let char = symbols[Math.floor(Math.random() * symbols.length)];        
matrix_context.fillStyle = 'rgb(0, 0, 0)';        
matrix_context.fillText(char, i * fontSize, drops[i] * fontSize);        
if (Math.random() > 0.99) drops[i] = 0;
drops[i]++; 
}
}


function rain2() {    
   
    matrix_context2.fillStyle = 'rgba(231, 229, 228, 0.5)';
    matrix_context2.fillRect(0, 0, canvas_element2.width, canvas_element2.height);        
    for (let i = 0; i < drops2.length; i++) {        
    let char = symbols[Math.floor(Math.random() * symbols.length)];        
    matrix_context2.fillStyle = 'rgb(0, 0, 0)';        
    matrix_context2.fillText(char, i * fontSize, drops2[i] * fontSize);        
    if (Math.random() > 0.99) drops2[i] = 0;
    drops2[i]++; 
    }
    }


    function rain3() {    
   
        matrix_context3.fillStyle = 'rgba(231, 229, 228, 0.5)';
        matrix_context3.fillRect(0, 0, canvas_element3.width, canvas_element3.height);        
        for (let i = 0; i < drops3.length; i++) {        
        let char = symbols[Math.floor(Math.random() * symbols.length)];        
        matrix_context3.fillStyle = 'rgb(0, 0, 0)';        
        matrix_context3.fillText(char, i * fontSize, drops3[i] * fontSize);        
        if (Math.random() > 0.99) drops3[i] = 0;
        drops3[i]++; 
        }
        }
    
        function rain4() {    
   
            matrix_context4.fillStyle = 'rgba(231, 229, 228, 0.5)';
            matrix_context4.fillRect(0, 0, canvas_element4.width, canvas_element4.height);        
            for (let i = 0; i < drops4.length; i++) {        
            let char = symbols[Math.floor(Math.random() * symbols.length)];        
            matrix_context4.fillStyle = 'rgb(0, 0, 0)';        
            matrix_context4.fillText(char, i * fontSize, drops4[i] * fontSize);        
            if (Math.random() > 0.99) drops4[i] = 0;
            drops4[i]++; 
            }
            }


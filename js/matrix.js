const canvas_element = document.getElementById('canvas_element');
const canvas_element2 = document.getElementById('canvas_element2');
const canvas_element3 = document.getElementById('canvas_element3');
const canvas_element4 = document.getElementById('canvas_element4');

canvas_element.width = window.innerWidth;
canvas_element.height = window.innerHeight;
canvas_element2.width = window.innerWidth;
canvas_element2.height = window.innerHeight;
canvas_element3.width = window.innerWidth;
canvas_element3.height = window.innerHeight;
canvas_element4.width = window.innerWidth;
canvas_element4.height = window.innerHeight;

const matrix_context = canvas_element.getContext('2d');
const matrix_context2 = canvas_element2.getContext('2d');
const matrix_context3 = canvas_element3.getContext('2d');
const matrix_context4 = canvas_element4.getContext('2d');

const font = 'arial';
const fontSize = 15;
matrix_context.font =  `${fontSize}em${font}`;
matrix_context2.font = `${fontSize}em${font}`;
matrix_context3.font = `${fontSize}em${font}`;
matrix_context4.font = `${fontSize}em${font}`;

const cols = canvas_element.width / fontSize;
const cols2 = canvas_element2.width / fontSize;
const cols3 = canvas_element3.width / fontSize;
const cols4 = canvas_element4.width / fontSize;

const symbols= '0123456789ABCDEF'.split(''); 

const drops = [];
for (let i = 0; i < cols; i++) {
    drops[i] = Math.floor(Math.random() * canvas_element.height);
}

const drops2 = [];
for (let i = 0; i < cols2; i++) {
    drops2[i] = Math.floor(Math.random() * canvas_element2.height);
}

const drops3 = [];
for (let i = 0; i < cols3; i++) {
    drops3[i] = Math.floor(Math.random() * canvas_element3.height);
}

const drops4 = [];
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
        const char = symbols[Math.floor(Math.random() * symbols.length)];        
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
        const char = symbols[Math.floor(Math.random() * symbols.length)];        
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
        const char = symbols[Math.floor(Math.random() * symbols.length)];        
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
        const char = symbols[Math.floor(Math.random() * symbols.length)];        
        matrix_context4.fillStyle = 'rgb(0, 0, 0)';        
        matrix_context4.fillText(char, i * fontSize, drops4[i] * fontSize);        
        if (Math.random() > 0.99) drops4[i] = 0;
        drops4[i]++; 
    }
}


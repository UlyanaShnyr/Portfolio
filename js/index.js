


let menu=document.getElementById('burger-menu');
let button = document.getElementById('burger-menu-button');
let linkHome=document.getElementById('nav-home');
let linkProject=document.getElementById('nav-projects');
let linkAbout=document.getElementById('nav-about');
let linkContact=document.getElementById('nav-contact');
let overlay=document.getElementById('burger-menu-overlay');
button.onclick = function() {
    menu.classList.toggle('burger-menu-active');   
};

linkHome.onclick = function() {
    menu.classList.toggle('burger-menu-active');   
};
linkProject.onclick = function() {
    menu.classList.toggle('burger-menu-active');   
};
linkAbout.onclick = function() {
    menu.classList.toggle('burger-menu-active');   
};
linkContact.onclick = function() {
    menu.classList.toggle('burger-menu-active');   
};
overlay.onclick = function() {
    menu.classList.toggle('burger-menu-active');   
};





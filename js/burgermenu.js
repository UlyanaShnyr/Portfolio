const menu = document.getElementById('burger-menu');
const button = document.getElementById('burger-menu-button');
const linkHome = document.getElementById('nav-home');
const linkProject = document.getElementById('nav-projects');
const linkAbout = document.getElementById('nav-about');
const linkContact = document.getElementById('nav-contact');
const overlay = document.getElementById('burger-menu-overlay');
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





import home from './home';
import menu from './menu';
import contact from './contact';

home()
const homeLink = document.querySelector('#home')
const menuLink = document.querySelector('#menu')
const contactLink = document.querySelector('#contact')
const content = document.querySelector('#content')

function homeFunction() {
    content.textContent = ''
    home()
}

function menuFunction() {
    content.textContent = ''
    menu()
}

function contactFunction() {
    content.textContent = ''
    contact()
}


homeLink.addEventListener('click', homeFunction)
menuLink.addEventListener('click', menuFunction)
contactLink.addEventListener('click', contactFunction)
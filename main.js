const animtxt = document.querySelector('.container p')
console.log(animtxt);

new Typewriter(animtxt, {
 loop: true,
 deleteSpeed: 20
 
})
.typeString('Salut !')
.pauseFor(800)
.deleteChars(7)
.typeString('Bienvenue sur mon site web')
.pauseFor(600)
.deleteChars(26)
.typeString('Scroll pour en découvir plus')
.pauseFor(2000)
.start();

const menuHamburger = document.getElementById('menu-hamburger');
console.log(menuHamburger);
const card = document.getElementById('card');

menuHamburger.addEventListener("click", () => {
    console.log('coucou');
    
});
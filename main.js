const animtxt = document.querySelector('.container p')
console.log(animtxt);

new Typewriter(animtxt, {
 loop: true,
 deleteSpeed: 20
 
})
.typeString('Salut !')
.pauseFor(1000)
.deleteChars(7)
.typeString('Bienvenue sur mon site web')
.deleteChars(26)
.typeString('Scroll pour en découvir plus')
.start()
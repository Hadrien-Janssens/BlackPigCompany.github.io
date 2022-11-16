const card = document.querySelector('.card');
const container = document.querySelector(".container");

container.addEventListener("mousemove",(e) => {
    let xAxis =(window.innerWidth/2 - e.pageX)/15;
    let yAxis =(window.innerHeight/2 - e.pageY)/15;
    
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
    image.style.transition = '0.5s ease';
});
const image = document.querySelector('.img ');
const titre= document.querySelector('h1');
container.addEventListener('mouseenter',(e)=>{
    card.style.transition = '0s';
    image.style.transform ='translateZ(70px) rotateZ(-30deg)' ;
    titre.style.transform ='translateZ(20px)';
});

container.addEventListener('mouseleave',(e)=>{
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = '0.5s ease';
    image.style.transform ='translateZ(0px) rotateZ(0deg)' ;
});
const vraiImage =document.querySelector('.img');
const fanta = document.getElementById('fanta');
fanta.addEventListener('click',(e)=>{
    titre.innerText='Fanta';
    document
    .getElementById('fanta-img')
    .classList.remove('hidden');
    document
    .getElementById('coca-img')
    .classList.add('hidden');
    document
    .getElementById('sprite-img')
    .classList.add('hidden');
    fanta.classList.add('fantaactive');
    coca.classList.remove('cocaactive');
    sprite.classList.remove('spriteactive');

});
const sprite = document.getElementById('sprite');
sprite.addEventListener('click',(e)=>{
    titre.innerText='Sprite';
    document
    .getElementById('sprite-img')
    .classList.remove('hidden');
    document
    .getElementById('coca-img')
    .classList.add('hidden');
    document
    .getElementById('fanta-img')
    .classList.add('hidden');
    sprite.classList.add('spriteactive');
    fanta.classList.remove('fantaactive');
    coca.classList.remove('cocaactive')
});
const coca = document.getElementById('coca');
coca.addEventListener('click',(e)=>{
    titre.innerText='Coca-Cola';
    document
    .getElementById('fanta-img')
    .classList.add('hidden');
    document
    .getElementById('sprite-img')
    .classList.add('hidden');
    document
    .getElementById('coca-img')
    .classList.remove('hidden');
    coca.classList.add('cocaactive');
    fanta.classList.remove('fantaactive');
    sprite.classList.remove('spriteactive');
});
const water = document.getElementById('water');
water.addEventListener('click',(e)=>{
    titre.innerText='Water'
    
    
});
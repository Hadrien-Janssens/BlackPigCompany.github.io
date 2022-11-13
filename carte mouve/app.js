const card = document.querySelector('.card');
const container = document.querySelector(".container");
console.log(container);
container.addEventListener("mousemove",(e) => {
    let xAxis =(window.innerWidth/2 - e.pageX)/15;
    let yAxis =(window.innerHeight/2 - e.pageY)/15;
    console.log(yAxis);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
    img.style.transition = '0.5s ease';
});
const img = document.querySelector('.img img');
const titre= document.querySelector('h1');
container.addEventListener('mouseenter',(e)=>{
    card.style.transition = '0s';
    img.style.transform ='translateZ(70px) rotateZ(-30deg)' ;
    titre.style.transform ='translateZ(20px)';
});

container.addEventListener('mouseleave',(e)=>{
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = '0.5s ease';
    img.style.transform ='translateZ(0px) rotateZ(0deg)' ;
});

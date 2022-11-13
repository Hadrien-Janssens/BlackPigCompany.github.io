const card = document.querySelector('.card');
const container = document.querySelector(".container");
console.log(container);
container.addEventListener("mousemove",(e) => {
    let xAxis =(window.innerWidth/2 - e.pageX)/10;
    let yAxis =(window.innerHeight/2 - e.pageY)/10;
    console.log(yAxis);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
});

container.addEventListener('mouseenter',(e)=>{
    card.style.transition = '0s';
});

container.addEventListener('mouseleave',(e)=>{
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = '0.5s ease';
});

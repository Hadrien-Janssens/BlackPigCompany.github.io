console.log('coucou');
/////////Show LIKE////////////
let sum ='';

let numberOfLike = document
.getElementById('numberoflike');

numberOfLike.innerHTML=0+' LIKE';

let likeClick = document
.getElementById('like')
.addEventListener('click', ()=> {

    sum ++
    if (sum<=1)
    numberOfLike.innerHTML = sum + ' LIKE';
    else
    numberOfLike.innerHTML = sum + ' LIKES';
});

let disLikeClick = document
.getElementById('dislike')
.addEventListener('click', ()=> {

    sum --
    if (sum<=1)
    numberOfLike.innerHTML = sum + ' LIKE';
    else
    numberOfLike.innerHTML = sum + ' LIKES';
});

/////////////togglePhoto/////////////////////
let photo = document.querySelector('.photo');

photo.addEventListener('click',()=> {

    photo.classList.toggle('phototoggle');
});




let lightMode = document.querySelector('.lightmode');
let body = document.getElementsByTagName('body');
lightMode.addEventListener('click',()=>{
   body.classList.toggle('bodylight');
})




const container = document.querySelector('.container');
const card =document.querySelector('.card');


container.addEventListener('mousemouve',(e)=>{
    let yaxe = (window.innerWidth /2 -e.pageX);
    let xaxe =(window.innerHeight /2 -e.pageY);
    card.style.transform = `rotateY(${yaxe}deg) , rotateX(${xaxe}deg)`;
});




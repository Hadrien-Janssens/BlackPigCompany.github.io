const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answervisible');
console.log(answers);
console.log(questions);



questions[0].addEventListener('click', () => {
    answers[0].classList.toggle('hidden');
    console.log(answers[1,2,3,4,5]);
})

questions[1].addEventListener('click', () => {
    answers[1].classList.toggle('hidden');
    answers[0,2,3,4,5].classList.add('hidden');
})

questions[2].addEventListener('click', () => {
    answers[2].classList.toggle('hidden');
})

questions[3].addEventListener('click', () => {
    answers[3].classList.toggle('hidden');
})

questions[4].addEventListener('click', () => {
    answers[4].classList.toggle('hidden');
})

questions[5].addEventListener('click', () => {
    answers[5].classList.toggle('hidden');
})




 
    
   

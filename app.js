const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answervisible');
console.log(answers);
console.log(questions);
let i=0;
questions[i].addEventListener('click', () => {
    answers[i].classList.toggle('hidden');
})


 
    
   

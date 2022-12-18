const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const inscriptionButton = document.getElementById('inscription');

inscriptionButton.addEventListener('click',()=>{
    
        fetch(`https://www.portfolio-hadrien.com/backend/auth/`,
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "post",
        body : JSON.stringify({email: userEmail.value, password:userPassword.value })
        
    })
    .then(function(res){
        console.log(res);
        window.location.href ='https://www.blackpigcompany.github.io/frontend/home.html';
        
    })
    .catch(function(res){ console.log(res) });

});


    

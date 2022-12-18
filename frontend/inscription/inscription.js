const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const inscriptionButton = document.getElementById('inscription');

inscriptionButton.addEventListener('click',()=>{
    
        fetch(`http://localhost:3000/api/auth/`,
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
        window.location.href ='http://127.0.0.1:5501/frontend/home.html';
        
    })
    .catch(function(res){ console.log(res) });

});


    

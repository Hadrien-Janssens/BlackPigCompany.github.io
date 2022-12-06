const btnConnexion = document.getElementById('connexion');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

btnConnexion.addEventListener('click',()=>{
    
    fetch(`http://localhost:3000/api/auth/`,
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "post",
        body : JSON.stringify({ password:passwordInput.value })
        
    })
    .then(function(res){
        
        console.log(res);
        
    })
    .catch(function(res){ console.log(res) });

});

  

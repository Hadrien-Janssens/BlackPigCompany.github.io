const nameProduit = document.getElementById('nameProduit');
const plu = document.getElementById('plu');
const submit= document.getElementById('submit');

class reponse {
    constructor(title,plu) {
    this.title = title,
    this.plu = plu
    }
};
let R = null;

   submit.addEventListener('click', ()=>{
     R = new reponse (nameProduit.value, plu.value);
     JSON.stringify(R);
     fetch("http://localhost:3000/api/produit",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(R)
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) });
     
});
    

  

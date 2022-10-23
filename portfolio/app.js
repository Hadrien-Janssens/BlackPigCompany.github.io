class utilisateur {
    constructor(name,firstname,age)
    {
        this.name=name;
        this.firstname=firstname;
        this.age=age;
    }
}
const laura = new utilisateur("Blanni","Laura",25);
const hadrien = new utilisateur("Janssens","Hadrien",27);
const maxime = new utilisateur("Janssens","Maxime",22);



let array=[
    laura,
    hadrien,
    maxime
]


console.log(array);
document
.querySelector('#utilisateur')
.innerHTML = array[0].name +array[0].age;





// utiliser les donnees des input et les passer dans une variable
//plutot dans une constante new utilisateur 
// les push directmeent dans le tableau
// parcourir chaque element du tableau avec une boucle FOR
// bouton valider ( recherche a faire )
//le bouton peut push les donnée

// if arrray[i]===true (donc existe) alors
// crée un element LI
//créer un noeud texte contenant l'info dans le LI





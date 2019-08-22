class Employe{ 
    constructor(matricule,nom,prenom,dateNaissance,dateEmbauche, salaire){
    this.matricule = matricule;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.dateEmbauche = dateEmbauche;
    this.salaire = salaire;
    } 

    getDateNaissance(){
        return this.dateNaissance;
    }
    setDateNaissance(date){
        this.dateNaissance = date;
    }
    getMatricule(){
        return this.matricule;
    }
    setMatricule(number){
        this.matricule = number;
    }
    getNom(){
        return this.nom;
    }
    setNom(name){
        this.nom = name;
    }
    getPrenom(){
        return this.prenom;
    }
    setPrenom(firstname){
        this.prenom = firstname;
    }
    getDateNaissance(){
        return this.dateNaissance;
    }
    setDateNaissance(dateN){
        this.dateNaissance = dateN;
    }
    getDateEmbauche(){
        return this.dateEmbauche;
    }
    setDateEmbauche(dateE){
        this.dateEmbauche = dateE;
    }
    getSalaire(){
        return this.salaire;
    }
    setSalaire(numberS){
        this.salaire = numberS;
    }
}

function onClick(){
var matricule = document.getElementById('matricule').value;
var nom = document.getElementById('nom').value;
var prenom = document.getElementById('prenom').value;
var dateNaissance = document.getElementById('datenaissance').value;
var dateEmbauche = document.getElementById('dateembauche').value;
var salaire = document.getElementById('salaire').value;

const affichEmploye = new Employe( matricule,nom,prenom,dateNaissance,dateEmbauche, salaire)


console.log(affichEmploye)
var dated = new Date() ;
//affichage du matricule
document.getElementById('matricule_output').innerHTML = affichEmploye.getMatricule();
//nom complet avec majuscule sur tout le nom et majuscule seulement sur la première lettre
document.getElementById('nomComplet_output').innerHTML = (`${affichEmploye.getNom()}`).toUpperCase() + " " + (`${affichEmploye.getPrenom()}`).charAt(0).toUpperCase() + this.prenom.value.slice(1);
//affichage de l'age
document.getElementById('age_output').innerHTML = (dated.getFullYear() - parseInt(affichEmploye.getDateNaissance()));
//affichage de l'ancienneté
document.getElementById('anciennete_output').innerHTML = parseInt(dated.getFullYear()- parseInt(affichEmploye.getDateEmbauche()));
//calcul salaire selon ancienneté
if(document.getElementById('anciennete_output') > 5 ){
    document.getElementById('salaire_output').innerHTML = parseInt(affichEmploye.getSalaire()) +  parseInt(affichEmploye.getSalaire()*2/100);
}
else if (document.getElementById('anciennete_output') > 10) {
    document.getElementById('salaire_output').innerHTML = parseInt(affichEmploye.getSalaire()) +  parseInt(affichEmploye.getSalaire()*5/100);
}
else{
    document.getElementById('salaire_output').innerHTML = parseInt(affichEmploye.getSalaire()) +  parseInt(affichEmploye.getSalaire()*10/100);
}

}
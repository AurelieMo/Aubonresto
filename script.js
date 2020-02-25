var bouton=document.querySelector(".button");
var Cadrea=document.querySelector("#cadreA");
var nosmenus=document.querySelector("#nosmenus");
var reservation=document.querySelector("#reservation");
var Cadreb=document.querySelector("#cadreB");
var Cadrec=document.querySelector("#cadreC");
var messageerreur=document.querySelectorAll(".tooltip");

var nomSaisi =document.querySelector("#nom");
var prenomSaisi=document.querySelector("#prenom");
var telephoneSaisi=document.querySelector("#telephone");
var emailSaisi=document.querySelector("#email");
var objetSaisi=document.querySelector("#objet");
var boutonFormulmaire=document.querySelector("#boutonformulaire");



//permuter opacité
function permuterOpacite(){
    var opaciteActuelle = Cadrea.style.opacity;
    if (opaciteActuelle == 0.8)
       Cadrea.style.opacity=1;
    else
       Cadrea.style.opacity=0.8;

}

//ancre en js
function afficherCadreB() {
    Cadreb.scrollIntoView(
        {block:"end",behavior:"smooth"});//alignement sur le bas

}

function afficherCadreC() {
    Cadrec.scrollIntoView(
        {block:"end",behavior:"smooth"});//alignement sur le bas
    objetSaisi.value= "Réservation";

}

function masquerLesElement(){
    for (var i=0;i<messageerreur.length;i++)
    {
        messageerreur[i].style.display="none";
    }
}

function verifierFormulaire(){
    //verifier  qu'il y a au moins 3 caracteres de saisi
    if (nomSaisi.value.length <3){
        messageerreur[0].style.display= "inline-block";
    }
    else
        messageerreur[0].style.display="none";
    if (prenomSaisi.value.length <3){
        messageerreur[1].style.display= "inline-block";
    }
    else
        messageerreur[1].style.display="none";
    if ((telephoneSaisi.value =="")&&(emailSaisi.value =="")){
        messageerreur[2].style.display= "inline-block";
    }
    else
        messageerreur[2].style.display="none";

}

function changeObjet(){
    objetSaisi.value= "Réservation";
}




bouton.addEventListener("mouseover",permuterOpacite);
bouton.addEventListener("mouseout",permuterOpacite);

nosmenus.addEventListener("click",afficherCadreB);
reservation.addEventListener("click",afficherCadreC);
bouton.addEventListener("click",afficherCadreB);

masquerLesElement();

boutonFormulmaire.addEventListener("click", verifierFormulaire);
reservation.addEventListener("click",changeObjet);
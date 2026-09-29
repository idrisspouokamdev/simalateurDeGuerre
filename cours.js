/*function addition(nombreA,nombreB) {
    return nombreA+nombreB;
}
function multiplication(nombreA,nombreB){
    return nombreA*nombreB; 
}
function soustraction(nombreA,nombreB){
    return nombreA-nombreB;
}
function division(nombreA,nombreB){
        if (nombreB == 0) {
            throw new Error("Division par zéro impossible");
        }
        return nombreA/nombreB;
    } 

do{
    var choix = Number(prompt("Que souhaitez-vous faire ?\n\n1-Addition\n \n2-Multiplication\n \n3-soustraction\n \n4-Division"));  
}while(choix != 1 && choix != 2 && choix != 3 && choix != 4);
do {
    var premierNombre     =    Number(prompt("Entrez le premier nombre :"));
    var deuxiemeNombre    =    Number(prompt("Entrez le deuxième nombre :"));
}while(isNaN(premierNombre) || isNaN(deuxiemeNombre));

try{
    switch(choix){
    case 1: 
        var resultat = addition(premierNombre,deuxiemeNombre);
        break;
    case 2:
        var resultat = multiplication(premierNombre,deuxiemeNombre);
        break;
    case 3: 
        var resultat = soustraction(premierNombre,deuxiemeNombre);
        break;
    case 4 :
        var resultat = division(premierNombre,deuxiemeNombre);
        break;
    default :
        throw new Error("Choix invalide");
}
alert("voici le resultat de votre operation: " + resultat);
}
catch(error){
    alert('Erreur: ' + error.message);
}*/


// FONCTION RECURSIVES
/*function factoriel(n){
    if(n == 0){
        return 1;
    }else{
        return n*factoriel(n-1);
    }
}
//console.log(factoriel(5));

// FUNCTION PGCD
function pgcd(nombreA,nombreB){
    if(nombreB == 0){
        return nombreA;
    }else{
        return pgcd(nombreB,nombreA%nombreB);
    }
}
console.log(pgcd(30,20));*/

/*let monTableau = ['un','deux','trois' ];
console.log(monTableau[1]);*/

/*let monTableau = [
    ['chomnou','pouokam'],
    ['Idriss','stevy']
];
console.log(monTableau[0][1]);*/

/*let montableau = {
    'prenom' : 'Idriss',
    'nom'   : 'pouokam',
    'poste' : 'PDG de DevSecure Tech'
};

console.log(montableau['poste']);*/

/*fonction avec flèche*/
/*let mafonction = function(){
    console.log("bonjour Idriss");
}
mafonction();*/

/*let mafonction = ()=>{
    console.log("Bonjour Alice");
}
mafonction();

let addtion = (nombreUn,nombreDeux)=>{
    return nombreDeux+ nombreUn;
}
console.log(addtion(10,5));*/
/*function bonjour(prenom){
    let resultat = "Bonjour" +prenom;
    maclosure = ()=> console.log(resultat);
    return maclosure;
}

let mafonction = bonjour(" Alice");
mafonction();*/
/* la programmation oriente objet*/ 
/*let chien ={
    race :'Berger Allemand',
    couleur : 'Noir et feu',
    aboyer : function(){
        console.log("Wouaf Wouaf");
    }
}
chien.aboyer();*/
// sans decomposition
/*let informations = ['Idriss','Pouokam',30];
let prenom = informations[0];
let nom = informations[1];
let age = informations[2];

console.log(prenom,nom,age);

//avec décomposition
let informations2 = ['Idriss','Pouokam',30];
let [prenom2,nom2,age2] = informations2;
console.log(prenom2,nom2,age2);*/

/*let nombres = [1,2,3,4,5,3,1,10];
//let monSet = new Set(nombres);
let monSet = new Set();
nombres.forEach((nombre)=>{
    monSet.add(nombre);
});
monSet.add(100);
console.log(monSet);*/

/*let monMap = new Map();
monMap.set('prenom','Idriss');
monMap.set('nom','Pouokam');
monMap.set('age',30);
console.log(monMap);*/

/*let monMap = new Map([
    ['prenom','Idriss'],
    ['nom','CHOMNOU'],
    ['poste','PDG de DevSecure Tech']
]);
monMap.set('age',25);
monMap.delete('age');
monMap.set('vision','Devenir le leader de la cybersécurité en Afrique et miliadaire avant 30 ans');
console.log(monMap);*/

/*let voitures = new WeakSet();
let voituresA = {
    constructeur : 'tesla',
    modele: 'spaceX'
}
voitures.add(voituresA);
console.log(voitures);*/
/*function addition(...nombres){
    let result = 0;
    nombres.forEach(nombres =>{
        result += nombres;
    );
    console.log(result);
}
addition(1,2,3,4,5);*/
/*document.title = "CoursjavaScript";
let header = document.querySelector('header');
header.style.backgroundColor = "#ffbd69";
let logo        = document.getElementById('logo');
let container   = document.getElementsByClassName('container');
document.querySelector('header').className = "ma_class";
document.querySelector('h1').style.color = "blue";
document.querySelector('h1').style.textAlign = "center";
let p           = document.querySelectorAll('p');*/

/*let header = document.createElement('header');
header.textContent= "Bienvenue sur mon site";
document.body.append(header);
let p = document.createElement('p');
let menu = document.createElement('menu');
menu.innerHTML= "<a href='#'>Accueil </a> /<a href='#'>une autre page </a>";
document.body.append(menu);
menu.style.backgroundColor ='#f1d6ab';
menu.style.margin  = "0";
menu.style.padding  = "12px";
p.textContent = "paragraphe creé par javaScript";
document.body.append(p);
document.querySelector('header').style.color='#fff';
document.querySelector('header').style.backgroundColor='yellow';
document.querySelector('header').style.textAlign= 'center';
document.querySelector('header').style.padding = "16px";
document.querySelector('header').style.fontSize = '32px';
document.querySelector('header').style.fontWeight=  'bold';
document.querySelector('header').innerText('div');
document.querySelector('#supprimer').remove();*/

/*let a = document.querySelector('a');
let button = document.querySelector('button');

a.addEventListener('click',()=>{
    if(confirm('Êtes-vous sûr de supprimer de article?')){
        location.href="google.com";
    }
});
button.addEventListener('mouseover',() =>{
        document.body.style.backgroundColor= "orange";
})

button.addEventListener('mouseout',() =>{
        document.body.style.backgroundColor= "#fff";
});*/


/*let article      = document.querySelector('article');
let h1           = document.querySelector('h1');

article.addEventListener('click',()=>{
    alert('article cliqué');
});
h1.addEventListener('click',()=>{
    alert('titre cliqué');
});*/

// setTimeout 
//setTimeout('alert("Bonjour Idriss")',3000);

// setInterval
//setInterval('alert("Bonjour Idriss")',5000);
/*let btn = document.querySelector('button');
btn.addEventListener('click',start)
let interval = 0;
let secondes = 10;

function start(){
    interval = setInterval(decompte,1000);
}

function decompte(){
    secondes--;
    if(secondes == 0){
        stop();
    }
    else{
        document.body.innerHTML += secondes + '<br>';
    }
}
function stop(){
    clearInterval(interval);
    document.body.innerHTML += "Stop !";
}*/

/**let button      = document.querySelector('button');
let div         = document.querySelector('div');
let hidden      = true;


button.addEventListener('click',()=>{
    if (hidden) {
        button.textContent = "Afficher";
        div.style.display = "block";
        hidden = false;
    } else {
        button.textContent = "Cacher";
        div.style.display = "none";
        hidden  =   true;
    }
});*/

/*let client = {
    prenom:"Idriss",
    nom : "CHOMNOU",
    poste : "PDG de DevSecure Tech",
    sePresenter: function(){
        console.log('Bonjour monsieur' +client.poste);
    }
}
client.sePresenter();*/

/*function Utilisateur(prenom,nom,poste){
    this.prenom  = prenom;
    this.nom    = nom;
    this.poste  = poste;
}
Utilisateur.prototype.sePresenter = function(){
    console.log(`Bonjour je me nomme ${this.prenom} ${this.nom} et je suis ${this.poste}`)
}
u1 = new Utilisateur("Idriss","CHOMNOU","PDG de DevSecure Tech");
u1.sePresenter();
console.log(u1);
var monObject = new Object();
monObject.titre = "Le titre de l'objet";
console.log(monObject);*/

// heritage
/*function Animal(nombreDePattes,poids){
    this.nombreDePattes = nombreDePattes;
    this.poids          = poids;
}
A1 = new Animal(2,"3 kg");
console.log(A1);

function Oiseau(longueurDesAilles){
    this.longueurDesAilles = longueurDesAilles;
}

function Mamifere(typeDePoils){
    this.typeDePoils    = typeDePoils;
}*/

// le BOM: Browser Object Model et interface window
/*let p1  =   document.querySelector('#p1');
let p2  =   document.querySelector('#p2');
let b1 =    document.querySelector('#b1');
let b2 =    document.querySelector('#b2');
let b3 =    document.querySelector('#b3');*/


/*let b4 =    document.querySelector('#b4');
let b5 =    document.querySelector('#b5');
let b6 =    document.querySelector('#b6');

p1.innerHTML = +window.outerWidth+ "*" +window.outerHeight;
p2.innerHTML = +window.innerWidth+ "*" +window.innerHeight;
let winSize  = 'width=500, heigth=500';
b1.addEventListener('click',()=>{
    fenetre = window.open('','',winSize);
});
b2.addEventListener('click',()=>{
    fenetre.resizeBy(200,100);
});
b3.addEventListener('click',()=>{
    fenetre.resizeTo(960,720);
});
b4.addEventListener('click',()=>{
    fenetre.moveBy(100,100);
});
b5.addEventListener('click',()=>{
    fenetre.moveTo(0,0);
});
b6.addEventListener('click',()=>{
    fenetre.scrollBy(0,200);
});
b6.addEventListener('click',()=>{
    fenetre.scrollBy(0,200);
});*/

/*p1.innerHTML = 'langue du navigateur'  +navigator.language+
'<br> cookies autorisés'  +navigator.cookieEnabled+
'<br> la plateforme utilise' +navigator.platform+
'<br> le nom du navigateur' +navigator.userAgent;*/ 
/*function coordonnes(pos){
    let crd = pos.coords;
    let latitude = crd.latitude;
    let longitude = crd.longitude;
    p1.innerHTML = 'latitude' +latitude.toFixed(2);
    p2.innerHTML = 'longitude' +longitude.toFixed(2);
}
navigator.geolocation.getCurrentPosition(coordonnes);*/

/*p1.innerHTML = 'la page visités' + history.length;
b1.addEventListener('click',()=>{
   location.reload();
});
b2.addEventListener('click',()=>{
    location.assign('/home/idriss-chomnou/Bureau/premierProgramme/index.html');
});
b3.addEventListener('click',()=>{
    location.replace('');
});*/

/*let gramme  =   document.querySelector('#gramme');
let kilos   =   document.querySelector('#kilos');
let livres  =   document.querySelector('#livres');

gramme.addEventListener('input',()=>{
    convPoids(this.id, this.valeur);
});
kilos.addEventListener('input',()=>{
    convPoids(this.id, this.valeur);
});
livres.addEventListener('input',()=>{
    convPoids(this.id, this.valeur);
});
function convPoids(id,valeur) { 
    if (id == "gramme") {
        kilos.value = valeur/1000;
        livres.value = valeur* 0.0022046;
    } else if(id == "kilos") {
        gramme.value = valeur*1000;
        livres.value = valeur *2.2046; 
    }else if(id == "livres"){
        livres.value = valeur/ 0.0022046;
        livres.value = valeur/2.2046;
    }
}*/
/*const symbole1 = Symbol();
const symbole2 = Symbol('symbole2');
const symbole3 = Symbol.for('symbole3');
const x42      = Symbol(42);
alert(symbole3.toString());*/

/*let html    = document.querySelector('html');
let bgColor = document.querySelector('bgtheme');

if (localStorage.getItem('bgtheme')) {
    updateBg();
} else {
    setBg();
}
function updateBg(){
    let bg = localStorage.getItem('bgtheme');
    html.style.backgroundColor = '#' +bg;
    bgColor.value = bg;
}
function setBg(){
    localStorage.setItem('bgtheme',bgColor.value);
    updateBg();
}
bgColor.addEventListener('change',setBg);*/
/*let database = '';
let openResquest = indexedDB.open('database',1);

openResquest.onupgradeneeded = ()=>{
    database = openResquest.result;
    if(database.objectStoreNames.contains('users')){
        database.createObjectStore('users',{keyPath:id});
    }
}
openResquest.onerror = ()=>{
    alert('la connexion impossible à indexDB')
}
openResquest.onsuccess = ()=>{
    database = openResquest.result;
    transaction.oncomplete = ()=>{
        alert('transaction terminée');
    }
    let users = transaction.objectStore('users');
    let user = {
        id : '1',
        prenom : 'Pierre',
        mail : 'idrisspouokam@gmail.com',
        inscription: new Date()
    };
    let ajout = users.add(user);
    users.put(user);
    ajout.onsuccess = ()=>{
        alert('utilisateur ajouté avec la clef' +ajout.result);
    }
    ajout.onerror = ()=>{
        alert('Erreur' +ajout.error);
    }
    let lire = user.get(1);
    lire.onsuccess = ()=>{
        alert('name of users :' +lire.result.prenom);
    }
    lire.onerror = ()=>{
        alert('Error :' +lire.error);
    }
};*/
class Personnage {
  constructor(pseudo, classe, sante, attaque) {
    this.pseudo     = pseudo;
    this.classe     = classe;
    this.sante      = sante;
    this.attaque    = attaque;
    this.niveau     = 1;
  }
  
  get informations() {
    return this.pseudo + " (" + this.classe + ") a " + this.sante + " points de vie et est au niveau " + this.niveau + ".";
  }
  
  evoluer() {
    this.niveau++;
    console.log(this.pseudo + ' passe au niveau ' + this.niveau + ' !');
  }
  
  verifierSante() {
    if(this.sante <= 0) {
      this.sante = 0;
      console.log(this.pseudo + " a perdu !");
    }
  }
}

class Magicien extends Personnage {
  constructor(pseudo) {
    super(pseudo, "magicien", 170, 90);
  }
  
  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(this.pseudo + ' attaque ' + personnage.pseudo + ' en lançant un sort (' + this.attaque + ' dégâts)');
    
    this.evoluer();
    personnage.verifierSante();
  }
  
  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(this.pseudo + ' attaque avec son coup spécial puissance des arcanes ' + personnage.pseudo + ' (' + this.attaque * 5 + ' dégâts)');
    personnage.verifierSante();
  }
}

class Guerrier extends Personnage {
  constructor(pseudo) {
    super(pseudo, "guerrier", 350, 50);
  }
  
  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(this.pseudo + ' attaque ' + personnage.pseudo + ' avec son épée (' + this.attaque + ' dégâts)');
    
    this.evoluer();
    personnage.verifierSante();
  }
  
  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(this.pseudo + ' attaque avec son coup spécial haches de guerre ' + personnage.pseudo + ' (' + this.attaque * 5 + ' dégâts)');
    personnage.verifierSante();
  }
}

var gandalf = new Magicien('Gandalf');
var thor    = new Guerrier('Thor');
console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);
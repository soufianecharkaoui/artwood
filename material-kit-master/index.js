var acheter1 = document.getElementById('acheter1');
var acheter2 = document.getElementById('acheter2');
var acheter3 = document.getElementById('acheter3');
var total = document.getElementById('total');
var commande = document.getElementById('commande');

var somme = 0;

acheter1.addEventListener("click", function() {
    somme += 550;
    total.innerText = somme;
});

acheter2.addEventListener("click", function() {
    somme += 470;
    total.innerText = somme;
});

acheter3.addEventListener("click", function() {
    somme += 680;
    total.innerText = somme;
});

commande.addEventListener("click", function() {
    somme = 0;
    total.innerText = somme;
})
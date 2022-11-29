
// id en classes 
let voornaam = document.getElementById('voornaam');
let achternaam = document.getElementById('achternaam');
let adress = document.getElementById('adress');
let postcode = document.getElementById('postcode');
let bon = document.getElementById('bon');
// let reset  = document.getElementById('reset')



var bestelKnop = document.querySelector('.bestel')
// let resetKnop = document.getElementsByClassName('reset')

bestelKnop.addEventListener("click", () => {
    if (voornaam.value == '') {
        alert('voornaam moet niet leeg!! vul uw voornaam in!!')
    }
    else if (achternaam.value == '') {
        alert('achternaam moet niet leeg!! vul uw achternaam!!')
    }
    else if (adress.value == '' || postcode.value == '') {
        alert('adres of postcode moet niet leeg!! vul uw adres of postcode in')
    }
    else {
        bon.innerHTML = '<u>Besteller naam</u>: '+ voornaam.value + ' '+ achternaam.value + '<br>'
                    + '<u>adress</u>: '+ adress.value + ', '+ postcode.value + '<br>'
                    totalP()
    }
    
})


// berekenen voor totale prijs
function totalPrijs(){

    //Haal geselcteerde data van pizzas
    var elt = document.getElementById("pizza");
    var pizzaPr = elt.options[elt.selectedIndex].value;

    elt = document.getElementById("hoeveelP");
    var hoeveel = elt.options[elt.selectedIndex].value;
    
    // Haal geselcteerde datas van  drinken
    var drnk = document.getElementById("frisDrank");
    var drankPr = drnk.options[drnk.selectedIndex].value;

    drnk = document.getElementById("hoeveelD");
    var hoeveelD = drnk.options[drnk.selectedIndex].value;
    
    // Haal geselcteerde datas van  desserten
    var dsrt = document.getElementById("dessertKeuze");
    var dessertPr = dsrt.options[dsrt.selectedIndex].value;

    dsrt = document.getElementById("hoeveelDz");
    var hoeveelDsrt = dsrt.options[dsrt.selectedIndex].value;

    //converteren data naar integers
    pizzaPr = parseFloat(pizzaPr);
    hoeveel = parseFloat(hoeveel);
    drankPr = parseFloat(drankPr);
    hoeveelD = parseFloat(hoeveelD);
    dessertPr = parseFloat(dessertPr);
    hoeveelDsrt = parseFloat(hoeveelDsrt);

    //berekenen totaal   
    var total = pizzaPr * hoeveel + drankPr * hoeveelD + dessertPr * hoeveelDsrt
    // console.log()

    //print value naar  totalPr
    totalP = () => {
        document.getElementById("totalPr").innerHTML= 'Total: € '+ total.toFixed(2);
        // console.log(document.getElementById('dessertKeuze')[1].innerHTML) // om te laten zien de gekozen product
    }
}

totalPrijs()


// NIET GELUKT!!
// Bestel Knop lukt niet
// resetKnop = () => {
//     reset.reset()
// }


// Variabili ed oggetti
const ticket = document.getElementById("ticket");


// Listener 
document.getElementById("generate-btn").addEventListener ( "click",
function (){
    
    const username = document.getElementById("user-name").value;
    const km = parseInt(document.getElementById("kilometer").value);
    const select = document.getElementById("age");
    const range = select.options[select.selectedIndex];
    let offer = "standard";
    if (username == "") {
        alert ("Dammi un nome"); 
        return 1;       
    }
    if (range.value == "") {
        alert ("Dammi una fascia d'età"); 
        return 1;       
    }
    if (isNaN(km)) {
        alert ("Dammi un numero nei chilometri");
        return 1;
    }
    let price = 0.21 * km;
    if (range.value == "under") {
        price = price * 0.8;
        offer = "minori";
    }
    else if (range.value == "over") {
        price = price * 0.6;
        offer = "argento";
    }
    


    // fill camp 
    // Nome 
    document.querySelector("#res-name p").innerHTML = username;
    // tipo offerta 
    document.querySelector("#res-offer p").innerHTML = "Offerta " + offer;
    // numero di carrozza 
    document.querySelector("#res-carriage p").innerHTML = Math.floor(Math.random() * 9 + 1);
    // cp del biglietto 
    document.querySelector("#res-cp p").innerHTML = Math.floor(Math.random() * 90000 + 10000);
    // prezzo 
    document.querySelector("#res-cost p").innerHTML = price.toFixed(2) + "€";





    ticket.classList.remove("d-none");
});
document.getElementById("back-btn").addEventListener ( "click",
function (){
    ticket.classList.add("d-none");
});


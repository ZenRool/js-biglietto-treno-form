
// Variabili ed oggetti
let ticket = document.getElementById("ticket");


// Listener 
document.getElementById("back-btn").addEventListener ( "click",
function (){
    ticket.classList.add("d-none");

});
document.getElementById("generate-btn").addEventListener ( "click",
function (){
    ticket.classList.remove("d-none");
});

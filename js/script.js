/*
 - prompt
 - const/let
 - backticks `${}`
 - 
 */


//  chiedi all'utente come si chiama e lo salvi in una variabile
const user_name = prompt('Come ti chiami?');

// chiedi all'utente il suo cognome
const user_lastname = prompt('Quale è il tuo cognome?');

// chiedi all'utenete qualeè il suo colore preferito
const user_fav_color = prompt('Quale è il tuo colore preferito?');

// crea la password dalla somma delle risposte date dall'utente
const password = (user_name + user_lastname + user_fav_color + 23);

// CONSOLE LOG
console.log(password);

// Scrivi sulla pagina la password generata
document.getElementById('password').innerHTML = password;




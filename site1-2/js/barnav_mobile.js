// Get the modal
var modale = document.getElementById("barnav");
// Get the button that opens the modal
var bttn = document.getElementById("nav-button");
// Get the <span> element that closes the modal
var spane = document.getElementsByClassName("fermer")[0];

// When the user clicks the button, open the modal 
bttn.onclick = function() {
        modale.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
spane.onclick = function() {
    modale.style.display = "none";
}



jQuery(document).ready(function() {
    jQuery('#hideshow').live('click', function(event) {
        jQuery('#barnav').toggle('show');
        jQuery('#nav-button').toggle('show');
    });
});

/*
<div id='content'>Hello World</div>
<input type='button' id='hideshow' value='hide/show'></input>
*/

/*
var fermer = document.getElementsByClassName("fermer");
var modale = document.getElementById("barnav");
var bttn = document.getElementById("nav-button");
var push = fermer.onclick();


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modale) {
        modale.style.display = "none";
    }
}


function fermer() {
    var fermer = document.getElementsByClassName("fermer");
    var modale = document.getElementById("barnav");
    var bttn = document.getElementById("nav-button");
    var push = fermer.onclick();

    if (push) {
        modale.style.display = "none";
    } else {
        modale.style.display = "block";
    }
}
*/
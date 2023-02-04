function login() {
    // Get the modal
    var modale = document.getElementById("myModalLogin");
    // Get the button that opens the modal
    var bttn = document.getElementById("myBtn2");
    // Get the <span> element that closes the modal
    var spane = document.getElementsByClassName("close2")[0];

    // When the user clicks the button, open the modal 
    bttn.onclick = function() {
            modale.style.display = "block";
        }
        // When the user clicks on <span> (x), close the modal
    spane.onclick = function() {
            modale.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modale) {
            modale.style.display = "none";
        }
    }
}


/*
// Get the modal
var modale2 = document.getElementById("barnav");
// Get the button that opens the modal
var bttn2 = document.getElementsByClassName("nav-button");
// Get the <span> element that closes the modal
var spane2 = document.getElementsByClassName("nav-buttone")[0];


// When the user clicks the button, open the modal 
bttn2.onclick = function() {
        modale2.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
spane2.onclick = function() {
        modale2.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modale) {
        modale2.style.display = "none";
    }
}
*/
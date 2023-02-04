function myFunction() {
    var x = document.getElementById("barnav");
    if (x.className === "barnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


/**!
Navigation Button Toggle class
*/
(function() {

    function toggleNav() {

        // Define targets by their class or id
        var button = document.querySelector('.nav-button');
        var target = document.querySelector('.plop');

        // click-touch event
        if (button) {
            button.addEventListener('click',
                function(e) {
                    button.classList.toggle('is-active');
                    target.classList.toggle('is-opened');
                    e.preventDefault();
                }, false);
        }
    } // end toggleNav()

    toggleNav();
}());
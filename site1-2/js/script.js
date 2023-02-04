$(document).ready(function() {
    /*
    var innerWidth = window.innerWidth;
    var innerHeight = window.innerHeight;

    //alert("Your screen resolution is: " + window.innerWidth + "x" + window.innerHeight);
    if (innerWidth < 700) {
        //if (window.matchMedia("(max-width: 700px)").matches) {
        // La largeur de la fenêtre de visualisation est inférieure ou égale à 700 pixels 
    document.location.reload();
    alert("Your screen resolution is: " + innerWidth + "x" + innerHeight);
    break;
} else {} 
*/

    /* La fenêtre de visualisation a une largeur supérieure à 700 pixels */
    var $headline = $('.headline'),
        $inner = $('.inner'),
        $nav = $('nav'),
        $logo = $('.logo'),
        $mesbuttons = $('.mesbuttons'),
        $red = $('.red'),
        $section_caroussel = $('.section_caroussel'),
        $carousel = $('.carousel'),
        navHeight = 75,
        //navHeighte = 75,
        $left = $('.leftimg'),
        $right = $('.rightimg');
    var navHeightes = 10;

    $logo.children().css({
        'display': 'none'
    });
    $mesbuttons.children().css({
        'display': 'none'
    });
    $red.children().css({
        'display': 'none'
    });

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop(),
            headlineHeight = $headline.outerHeight() - navHeight,
            navOffset = $nav.offset().top;

        var scrollTope = $(this).scrollTop();

        /*
        var scrollTope = $(this).scrollTop(),
            headlineHeight = $headline.outerHeight() - navHeighte,
            navOffset = $nav.offset().top;
        */

        /*
        var scrollTope = $(this).scrollTop(),
            headlineHeight = $headline.outerHeight(),
            navOffset = $nav.offset().top;
        */

        $headline.css({
            'opacity': (1 - scrollTop / headlineHeight),
            'z-index': (7),
        });
        $inner.children().css({
            'transform': 'translateY(' + scrollTop * 0.4 + 'px)',
            'z-index': (7),
        });

        /*
        $left.children().css({
            'transform': 'translateY(' + scrollTope + 'px)'
            //'transform': 'translateY(' + scrollTop * 1 + 'px)'

        });
        $right.children().css({
            'transform': 'translateY(' + scrollTope + 'px)'
            //'transform': 'translateY(' + scrollTop * 1 + 'px)'
        });
        */



        if (navOffset > headlineHeight) {
            $nav.addClass('scrolled');
            $logo.children().css({
                'display': 'block'

            });
            $mesbuttons.children().css({
                'display': 'block'
            });
            $red.children().css({
                'display': 'block'
            });

        } else {
            $nav.removeClass('scrolled');
            $logo.children().css({
                'display': 'none'
            });
            $mesbuttons.children().css({
                'display': 'none'
            });
            $red.children().css({
                'display': 'none'
            });

        }
    });



    var slogan = document.getElementById("slogan");
    var barnav = document.getElementById("barnav");
    var sticky = barnav.offsetTop;

    window.onscroll = function() {
        myFunction()
    };

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            slogan.classList.remove("nosticky");
            barnav.classList.remove("nosticky2");
            slogan.classList.add("sticky");
            barnav.classList.add("sticky");
        } else {
            slogan.classList.remove("sticky");
            barnav.classList.remove("sticky");
            slogan.classList.add("nosticky");
            barnav.classList.add("nosticky2");
        }

    }


});


function reverseNumber(input) {
    return [].map.call(input, function(x) {
        return x;
    }).reverse().join('');
}

function plainNumber(number) {
    return number.split('.').join('');
}

function splitInDots(input) {

    var value = input.value,
        plain = plainNumber(value),
        reversed = reverseNumber(plain),
        reversedWithDots = reversed.match(/.{1,2}/g).join('.'),
        normal = reverseNumber(reversedWithDots);

    console.log(plain, reversed, reversedWithDots, normal);
    input.value = normal;
}



var submit = document.getElementById('submit');
submit.addEventListener('click', function() {
    var content = '<pre>';
    var textContent = document.querySelector('textarea').value;
    content += textContent;
    content += '</pre>';
    document.getElementById('output').innerHTML = content;
});
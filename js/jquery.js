
"use strict";

// BODY //
$('body')
    .css('background-image', "url('css/img/matrix image.gif')")
    .css('background-repeat', 'repeat')
    .css('background-size', 'cover');

// TEXT
$('#main-header, #main-text, #instructions')
    .css('text-align', 'center')
    .css('font-family', 'IBM Plex Mono')
    .css('color', '#ffffff')
    .css('margin-top', '80px');

//HIDDEN MESSAGE
$('#hidden-message').hide()


$(document).keyup(function(event){
    console.log(event.keyCode);
});

function onKonamiCode(cb) {
    var input = '';
    var key = '3838404037393739666513';
    document.addEventListener('keydown', function (e) {
        input += ("" + e.keyCode);
        if (input === key) {
            return cb();
        }
        if (!key.indexOf(input)) return;
        input = ("" + e.keyCode);
    });
}

onKonamiCode(function () {
    alert('You gained 30 lives!')
    $('body')
        .css('background-image', "url('../css/img/cat matrix.jpeg')")
        .css('object-fit', 'cover')
        .css('background-size', 'cover')
        .css('background-repeat', 'no-repeat');


    $('#main-header, #main-text, #instructions').hide()
    $('#hidden-message').show()
        .css('text-align', 'center')
        .css('font-family', 'IBM Plex Mono')
        .css('color', '#ffffff')
        .css('margin-top', '80px');
});



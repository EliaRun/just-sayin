//This is my promt alert button
function myFunction() {
    alert('Hello "you\'re a beatififul unicorn princess!" but first i need your name...');
    var name = prompt("Please enter your name", "Harry Potter");
    if (name != null) {}
    if (name !== '') {
        alert("Hello " + name + " I just wanted to tell you your a beautiful unicorn princess");
    }
    else if (name !== false) {
        prompt("Oops, looks like you didn't enter anything");

    }
}
//---------------------------------------------------------------------------------------------------------------            

//
new WOW().init();
//---------------------------------

//This is my counter
var clicks = 0;

function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}

//--------------------------------------------------------

$('#countAlert').show();
 -           $('#countAlert #number').text(count);
 -           var name = $('#nameField').val();
//-------------------------------------------------------------------------------------------

var firstName = $('#firstName').val();
 +$('.hide-me').hide();
 +$('#countAlert').show();
 +$('#countAlert #number').text(count);
 +
 +$("#div").mouseenter(function() {
 +    var $div2 = $("#div2");
 +    if ($div2.is(":visible")) { return; }
 +    $div2.show();
 +    setTimeout(function() {
 +        $div2.hide();
 +    }, 10000);
 +}); 


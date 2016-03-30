
//This is for my button
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
//-------------------------------------------------------------------------------------------
 
            //This is for homework
           $('#countAlert').show();
           $('#countAlert #number').text(count);
           var name = $('#nameField').val();
           
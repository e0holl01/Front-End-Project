
// Jquery


$(function(){
    $('#flashMessage').hide();

    $(".mobileToggle").click(function(){
        $(".main-nav").slideToggle();
    })

    $('#submit').on("click",function() {
        showMessage();
    });

    $(document).on('submit', function (event) {
        event.preventDefault();
        return false;
    })

 
 


})


// Javascript

function showMessage() {
    var form = $("form")[0]
    if(form.checkValidity()) 
        {
        $('#flashMessage').slideDown(900).delay(3000).slideUp(900);
        setTimeout(function() {
        const inputBoxes = document.getElementsByClassName('inputBoxes');
                for (var i=0; i<inputBoxes.length; i+=1) {
                    inputBoxes[i].value = "";
                }

         }, 4000);
    }
    // This script is to run after the flash message and resets the form
}

function myFunction(x) {
    x.classList.toggle("change");
}



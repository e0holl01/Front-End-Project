$(function(){
    $(".mobileToggle").click(function(){
        $(".main-nav").slideToggle();
    })
})


$(document).ready(function(){
    $('.button').click(function(){
        alert("Your information has not been submitted because I do not know back-end programming.");
    });
});


$('#flashMessage').hide().slideDown(1000).delay(3000).slideUp();
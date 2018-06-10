$(function(){
    $(".mobileToggle").click(function(){
        $(".main-nav").slideToggle();
    })
})



function DisplayMultiLineAlert() {
    var newLine = "\r\n"
    var message = "I have not learned how to make a form submit in CodeLouisville yet. Therefore, this form will not submit."
   alert(message);
}
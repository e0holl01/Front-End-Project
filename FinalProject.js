
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

function showMessage() {
    var form = $("form")[0]
    if(form.checkValidity()) {
        $('#flashMessage').slideDown(900).delay(3000).slideUp(900);
    }
}
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav').addClass("blue");
        }else{
            $('.nav').removeClass("blue");
        }
    });
})

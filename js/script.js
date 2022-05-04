$(document).ready(function(){

    $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
});
    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        if($(window).scrollTop() > 0) {
            $('.top').show();
            }else{
            $('.top').hide();
            }
        
    });
    $('a [href="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
        scrollTop : $($(this) .attr('href')).offset().top,
    },
    500,
    linear,
    );
});
let button = document.querySelector("body a");
button.addEventListener("click",()=>{ 
    const span = document.querySelector ("a span");
button.style.paddingRight='10px';
span.style.visibility ="visible";
setTimeout(()=>{
span.style.visibility="hidden";
button.style.paddingRight="0px";
},1000);
})


});
    
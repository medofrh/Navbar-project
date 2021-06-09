$(document).ready(()=>{
    $('.navbar').addClass('navbar-ready');
    
    $(".navbar a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('.container-sec').animate({
                scrollTop: $(hash).offset().top
            },300, function(){
            window.location.hash = hash;
          });
        }
    });
    //TODO: fix hash href onload and moveing to selected section
    //TODO: change navbar color when sliding
});
$('.container-sec').scroll(function(){
    $('section').each(function(){
        if(isScrolledIntoView($(this))){
            $('.navbar-collapse ul li a').removeClass('active');
            $(`a[href$="${this.id}"]`).addClass('active');
        }
    });
});

function isScrolledIntoView(elem){

    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$('#navbarNav ul li a').click(function(){
    $('.navbar-collapse ul li a').removeClass('active');
    $(this).addClass('active');
});
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('#btnMore').click(function(){
    $('.container-sec').animate({
        scrollTop: $("#service").offset().top
    }, 300);
})
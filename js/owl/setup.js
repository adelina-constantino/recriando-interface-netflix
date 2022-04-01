$('.owl-carousel').owlCarousel({
    loop:true, /*efeito de looping*/
    margin:5, /*margem normalmente */
    nav:true,
    /*responsavidade, se adapta ao tamanho da tela*/
    responsive:{ 
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
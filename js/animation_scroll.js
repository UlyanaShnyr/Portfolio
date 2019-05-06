
$(window).scroll(function(){
    $('.mov').each(function(){
        const imagePos = $(this).offset().top;
        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+window.innerHeight){
            $(this).addClass('rotateIn');
        }
    })

    $('.mov1').each(function(){
        const imagePos = $(this).offset().top;
        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+window.innerHeight){
            $(this).addClass('fadeInRight');
        }
    })
    })
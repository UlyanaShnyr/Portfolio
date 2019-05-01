
$(window).scroll(function(){
    $('.mov').each(function(){
        let imagePos=$(this).offset().top;
        let topOfWindow=$(window).scrollTop();
        if(imagePos<topOfWindow+window.innerHeight){
            $(this).addClass('rotateIn');
        }
        
        console.log(this)
    })

    $('.mov1').each(function(){
        let imagePos=$(this).offset().top;
        let topOfWindow=$(window).scrollTop();
        if(imagePos<topOfWindow+window.innerHeight){
            $(this).addClass('fadeInRight');
        }
        
        console.log(this)
    })
    })
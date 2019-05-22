
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
            $(this).addClass('fadeInLeft');
        }
    })

    $('.movfadeInRight').each(function(){
        const imagePos = $(this).offset().top;
        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+window.innerHeight){
            $(this).addClass('fadeInRight');
        }
    })

    $('.percentages90').each(function(){
        const imagePos = $(this).offset().top;
        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+window.innerHeight){            
            $(this).addClass('html');
        }
    })

    $('.percentages80').each(function(){
        const imagePos = $(this).offset().top;
        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+window.innerHeight){            
            $(this).addClass('css');
        }
    })

    $('.percentages75').each(function(){
        const imagePos = $(this).offset().top;
        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+window.innerHeight){            
            $(this).addClass('js');
        }
    })

    $('.percentages40').each(function(){
        const imagePos = $(this).offset().top;
        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+window.innerHeight){            
            $(this).addClass('canvas');
        }
    })

    $('.percentages60').each(function(){
        const imagePos = $(this).offset().top;
        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+window.innerHeight){            
            $(this).addClass('jquery');
        }
    })

    $('.percentages65').each(function(){
        const imagePos = $(this).offset().top;
        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+window.innerHeight){            
            $(this).addClass('react');
        }
    })

    $('.percentages55').each(function(){
        const imagePos = $(this).offset().top;
        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+window.innerHeight){            
            $(this).addClass('sql');
        }
    })

    $('.percentages70').each(function(){
        const imagePos = $(this).offset().top;
        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+window.innerHeight){            
            $(this).addClass('photoshop');
        }
    })
    })

   
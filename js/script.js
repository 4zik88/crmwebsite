$(document).ready(function () {

    $('.theme-switcher').on('click', function(){
       let theme = $('.theme-switcher-item.active').data('theme');
  
       if(theme == 'light'){
        $('.theme-light-item').removeClass('active');
        $('.theme-dark-item').addClass('active');
        $('body').addClass('dark');
       } else {
        $('.theme-light-item').addClass('active');
        $('.theme-dark-item').removeClass('active');
        $('body').removeClass('dark');
       }
    })



    $('li.dropdown>a').on('click', function(event){
        event.preventDefault(); 
        let name = event.target.parentElement.parentElement.className;  
        
        if($(this).closest('li').hasClass('open')){
            $(this).closest('li').removeClass('open');

            if(name == 'mobile-menu menu'){
                 $('.header').removeClass('menu-open');
                $('.mobile__bg').removeClass('active');
            }
            
        } else {
            $('.menu li.dropdown').each(function(i,item){
                $(item).removeClass('open');
            })
            $(this).closest('li').addClass('open');

             if(name == 'mobile-menu menu'){
                 $('.header').addClass('menu-open');
                $('.mobile__bg').addClass('active');
            }
   
        }   
    })

    $('.nav .menu li.dropdown>a').on('click', function(event){
        //$(this).closest('li').removeClass('open');
    })



    $('.slider-section .slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
    });

    $('.slider .btn-next').on('click', function(){
        $('.slider .slick-next').trigger('click');
    })
    $('.slider .btn-prev').on('click', function(){
        $('.slider .slick-prev').trigger('click');
    })


    $('.quest-item-title').on('click', function(){
        if($(this).closest('.quest-item').hasClass('open')){
            $(this).closest('.quest-item').removeClass('open');
        } else {
            $('.quest-item').each(function(i,item){
                $(item).removeClass('open');
            });
            $(this).closest('.quest-item').addClass('open');
        }
    })

    $('.lang-current').on('click', function(){
        $(this).closest('.lang-switcher').find('.lang-list').addClass('show');
    })

    $('body').on('click', function(event){
        let target = event.target; 

        if(target.className != 'lang-current lang-item' && target.parentNode.className != 'lang-current lang-item' && target.className != 'lang-list show'){
            $('.lang-list').removeClass('show');
        }
    })

    $('.mobile-btn').on('click', function(){
        $('.mobile-wrap').toggleClass('active');
        $(this).toggleClass('active');
    })


    /* Price */
    $('.price-tab-title').on('click', function(){
        $('.price-tab-title').each(function(i,item){
            $(item).removeClass('active');
        })
        $(this).addClass('active');
        let discount = +$(this).data('discount');

        $('.price-tab-item').each(function(i,item){
            let price = +$(item).find('.item__price .num').data('price'); 
            price = Math.floor((price - ((price / 100) * discount)));  console.log(price);
            $(item).find('.item__price .num').text(price);
        })
    })



  
 
    $('.advice-nav .mobile__title').on('click', function(){
        $('.advice-nav').toggleClass('active');
    })

    $('.body__content .view-more').on('click', function(){
        $(this).closest('.body__content').addClass('open');
        $(this).hide();
    })

    $('.docs-dark-block .switcher-title').on('click', function(){
        if($(this).closest('.docs-dark-block').find('.switcher-list').hasClass('active')){
            $(this).closest('.docs-dark-block').find('.switcher-list').removeClass('active');
        } else {
             $(this).closest('.docs-dark-block').find('.switcher-list').addClass('active');
        }
       
    })

    $('.docs-dark-block .switcher-list-item').on('click', function(){
        let item = $(this).data('item');
        let text = $(this).text();

        $(this).closest('.docs-dark-block').find('.switcher-list-item').each(function(i,item){
            $(item).removeClass('active');
        })

        $(this).closest('.docs-dark-block').find('.block__content').each(function(i,item){
            $(item).removeClass('active');
        })

        $(this).addClass('active');
        $(this).closest('.docs-dark-block').find('.block__content[data-item="' + item + '"]').addClass('active');
        $(this).closest('.docs-dark-block').find('.switcher-title').text(text);
        $(this).closest('.docs-dark-block').find('.switcher-list').removeClass('active');  
    })

    $('.docs-dark .tab__title').on('click', function(){
        let tab = $(this).data('item');
        $('.docs-dark .tab__title').each(function(i,item){
            $(item).removeClass('active');
        })
        $('.docs-dark .tab__item').each(function(i,item){
            $(item).removeClass('active');
        })
        $(this).addClass('active');
        $('.docs-dark .tab__item[data-item="' + tab + '"]').addClass('active');
    })


    /* register page */
    let ind = 0;

   $('.register-select .role').on('click', function(){
        let role = $(this).data('role');

        $('.register-item').each(function(i,item){
            $(item).removeClass('active');
        })

        $('.register-item[data-item="' + role + '"]').addClass('active');

        ind++;
   })

   $('#back').on('click', function(event){
        if(ind > 0){
            event.preventDefault();
            ind--;
            $('.register-item').each(function(i,item){
                $(item).removeClass('active');
            })

            $('.register-item[data-item="0"]').addClass('active');

        }
   })

   $(window).scroll(function(){

    let top = $('.advice-nav-inner').scrollTop();
    let pos = $('.advice-nav').offset().top; 
    let width = $(window).width();
    let h = $(window).height(); 
    


    let coord = document.querySelector('.advice-nav-inner').getBoundingClientRect();
    let nav = document.querySelector('.advice-nav').getBoundingClientRect();
    
    if(width > 900){

        if(Math.floor(coord.top) == Math.floor(nav.top) && coord.top < 0 && nav.top < 0){
         $('.advice-nav-inner').addClass('fixed');
        }

        if(coord.top >= 0 && nav.top > 0){
            $('.advice-nav-inner').removeClass('fixed');
        }

        if(coord.bottom >= nav.bottom){
            $('.advice-nav-inner').removeClass('fixed');
            $('.advice-nav-inner').addClass('static');
        }

        if(Math.floor(coord.bottom) == Math.floor(nav.bottom)  && coord.top > 0){
            $('.advice-nav-inner').addClass('fixed');
            $('.advice-nav-inner').removeClass('static');
        }
    }

   })

   
})


/**  Price slider **/

let slider = document.getElementById('slider');


if(slider){

    let qty = document.querySelector('.program-desc .num');
    let num = document.querySelector('.program-num .num span'); 
    let start = 10;

    noUiSlider.create(slider, {
        start: [start],
        connect:[true, false],
        range: {
            'min': [1],
            'max': [100]
        }
    });

    num.innerText = +num.getAttribute('data-start') * start;

    jQuery('.program-slider-switcher input').on('change', function(){
        $('.program-slider-switcher label').each(function(i,item){
            $(item).removeClass('active');
        })
        $(this).closest('label').addClass('active');
        
        getValue();
        })




    function getValue()
    {
        let value = +Math.floor(slider.noUiSlider.get());
        let check = document.querySelector('.program-slider-switcher input:checked').value; 
        let n = Math.floor(value * num.getAttribute('data-start') * check);  
        num.innerText = n;
        qty.innerHTML = value;
    }

    function posElement(){
        if(jQuery(window).width() > 800){

            let pos = jQuery('.program .noUi-touch-area').offset(); console.log(pos);
            let topArrow = +pos.top + 40;
            let leftArrow = +pos.left + 10;
            jQuery('.slider-wrapper .arrow').offset({top: topArrow, left: leftArrow});
            let topText = +pos.top + 60;
            let leftText = +pos.left - 90;
            jQuery('.slider-wrapper .text').offset({top: topText, left: leftText});

        } 
    }

    posElement();

    slider.noUiSlider.on('slide', function(){   
        getValue();
        posElement();
    })

}



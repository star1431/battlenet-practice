$(function(){
    swal("배틀넷 연습코딩 사이트입니다.(PC용)", "실제사이트와 연관이 없음을 알립니다.", "warning");
    //메뉴바 fixed
    var menuBar= $(".menu-container").offset();
    function headerFixed(){
        if ($(document).scrollTop() > menuBar.top ) {
            $('.header').addClass('fixed-active');
            $(".menu-container").addClass("scroll-fixed");
        }else {
            $('.header').removeClass('fixed-active');
            $(".menu-container").removeClass("scroll-fixed");
        }
    }
    //owl plugin
    $('.banner-box').owlCarousel({
        margin:0,
        loop:true,
        items:1,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        mouseDrag:false,
        smartSpeed:1000,
        nav:true,
    });
    // play button
    $('.banner-autoplay .play').hide();
    $('.banner-autoplay .play').on('click',function(){
        $('.banner-box').trigger('play.owl.autoplay',[3000]);
        $(this).hide();
        $(this).siblings().show();
    });
    $('.banner-autoplay .stop').on('click',function(){
        $('.banner-box').trigger('stop.owl.autoplay');
        $(this).hide();
        $(this).siblings().show();
    });
    //user modal
    //각 토글 지정함수
     $.userToggle = function(){
        $('.nav-item-modal').toggleClass('_none');
        $('.modal-background').toggleClass('_none');
        $('.user span').toggleClass('active');
     };
     $.menuToggle = function(){
         $('.game-menu .menu-list').toggleClass('_none');
         $('#game-select').toggleClass('active');
     };
     $.coinToggle = function(){
        $('.coin-menu .menu-list').toggleClass('_none');
        $('#coin-select').toggleClass('active');
     };
    //클릭시 드롭
    $('.nav-item .user').on('click',function(){
        $.userToggle()
    });
    $('.modal-background').on('click',function(){
        $.userToggle()
    });
    $('#game-select').on('click',function(){
        $.menuToggle()
        $('.coin-menu .menu-list').addClass('_none');
        $('#coin-select').removeClass('active');
    });
    $('#coin-select').on('click',function(){
        $.coinToggle()
        $('.game-menu .menu-list').addClass('_none');
        $('#game-select').removeClass('active');
    });
    //드롭메뉴 외 클릭(수정중)
    // $('body').click(function(e){ 
    //     if($('.menu-button').has(e.target).length==0){
    //         $('.drop-menu .menu-list').addClass('_none');
    //         $('.menu-button').removeClass('active');
    //         console.log('11')
    //     };  
    //     console.log('22')
    // });
    
    $(window).on('load scroll',function(){
        headerFixed();
    });
});
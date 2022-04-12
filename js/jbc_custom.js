$(function(){
    swal("배틀넷 연습코딩 사이트입니다.(PC용)", "이 사이트는 상업목적이 아니며 실제사이트와 연관이 없음을 알립니다.", "warning");
    //메뉴바 fixed
    var menuBar= $(".menu-container").offset();
    function headerFixed(){
        if ($(document).scrollTop() > menuBar.top ) {
            $('.header').addClass('fixed-active');
            $(".menu-bar").addClass("scroll-fixed");
            $('.scroll-up').fadeIn();
        }else {
            $('.header').removeClass('fixed-active');
            $(".menu-bar").removeClass("scroll-fixed");
            $('.scroll-up').hide();
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
    //각 토글이벤트 지정함수
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

    //클릭시 드롭 (상단 내계정)
    $('.nav-item .user').on('click',function(){
        $.userToggle()
    });
    $('.modal-background').on('click',function(){
        $.userToggle()
    });
    //메뉴바 게임,코인메뉴
    $('body').mouseup(function(e){ 
        if($('.game-menu').has(e.target).length == 0){
            $('.game-menu .menu-list').addClass('_none');
            $('#game-select').removeClass('active');
        } 
        if($('.coin-menu').has(e.target).length == 0){
            $('.coin-menu .menu-list').addClass('_none');
            $('#coin-select').removeClass('active');
        }
    });
    $('#game-select').on('click',function(){
        $.menuToggle()
    });
    $('#coin-select').on('click',function(){
        $.coinToggle()
    });
    
    $('.scroll-up').click(function() {
        $('html, body').animate({scrollTop:0}, 600);
    });
    // 윈도우 로드 스크롤
    $(window).on('load scroll',function(){
        headerFixed();
    });
});
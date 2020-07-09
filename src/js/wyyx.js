// var spanArr = $('.nav-we>span')
var ul = $('.nav-es')
var aArr = $('.nav-es li')



aArr.hover(function(){
   
   
    $(this).css("border-bottom", "3px solid #cc9756"); 
    $(this).css("color", "#cc9756");    
    $(this).css("padding-bottom", "7px");    
          
    },function(){
        $(this).css("border-bottom", "white"); 
        $(this).css("color", "black");   
    })

    $('.newul>li a').css({'background':'#e36844', 'color': 'white', 'width' : '80px' ,'height': '20px','display': 'block', 'font-size': '12px','margin':' auto', 'padding': '5px 0', 'text-align': 'center'})


 
 $('.newul>li h3').css({ 'color': 'black', 'width' : '256px' ,'display': 'block', 'font-size': '20px','margin':' auto', 'text-align':'center' ,'padding':'8px 0'})

 $('.newul>li b').css({ 'color': '#e36844', 'width' : '256px' ,'display': 'block', 'margin':' auto', 'text-align':'center' })     


// $('#box li img').css({'width':'100%','display':'block'})



var navTop = $('.navTop')
$('navTop').scrollTop   


    $(function(){ 
var winHeight = $(document).scrollTop();

$(window).scroll(function() {
var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少

if (scrollY <170){ //如果滚动距离小于190px则隐藏，不添加类型
// $('.topNav').removeClass('hiddened');
$('.topNav').removeClass('showed');
} 

if (scrollY > 170){ //如果滚动到高度为190，则添加显示类
// $('.topNav').removeClass('showed');

$('.topNav').addClass('showed');
}    

});
});


// newNav固定导航

var newNav = $('.newNav')
var restTop = $('.restTop')
$('newNav').scrollTop   
$('restTop').scrollTop

    $(function(){ 
var winHeight = $(document).scrollTop();

$(window).scroll(function() {
var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少

if (scrollY <557){ //如果滚动距离小于190px则隐藏，不添加类型
// $('.topNav').removeClass('hiddened');
$('.newNav').removeClass('show');
$('.restTop').removeClass('show');

} 

if (scrollY > 557){ //如果滚动到高度为190，则添加显示类
// $('.topNav').removeClass('showed');

$('.newNav').addClass('show');
$('.restTop').addClass('show');
// $('.newNav').css({'position': 'sticky'})
}

if(scrollY < 1400){
    $('.restTop>li:last-child').css({'opacity':'0'})
}
if(scrollY > 1400){
    $('.restTop>li:last-child').css({'opacity':'1'})
}

$('.restTop>li:last-child').on('click',function(){
    $('body,html').stop().animate({
        scrollTop: 0
      },500);
        // return false
})

});
});


// foot 脚页轮播 


  

    
  var mySwiper = new Swiper ('.swiper-container', {
 
    loop: true, // 循环模式选项
    
    slidesPerView : 3,

    autoplay:true,
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        




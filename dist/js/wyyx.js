"use strict";var ul=$(".nav-es"),aArr=$(".nav-es li");aArr.hover(function(){$(this).css("border-bottom","3px solid #cc9756"),$(this).css("color","#cc9756"),$(this).css("padding-bottom","7px")},function(){$(this).css("border-bottom","white"),$(this).css("color","black")}),$(".newul>li a").css({background:"#e36844",color:"white",width:"80px",height:"20px",display:"block","font-size":"12px",margin:" auto",padding:"5px 0","text-align":"center"}),$(".newul>li h3").css({color:"black",width:"256px",display:"block","font-size":"20px",margin:" auto","text-align":"center",padding:"8px 0"}),$(".newul>li b").css({color:"#e36844",width:"256px",display:"block",margin:" auto","text-align":"center"});var navTop=$(".navTop");$("navTop").scrollTop,$(function(){$(document).scrollTop();$(window).scroll(function(){var o=$(document).scrollTop();o<170&&$(".topNav").removeClass("showed"),170<o&&$(".topNav").addClass("showed")})});var newNav=$(".newNav"),restTop=$(".restTop");$("newNav").scrollTop,$("restTop").scrollTop,$(function(){$(document).scrollTop();$(window).scroll(function(){var o=$(document).scrollTop();o<557&&($(".newNav").removeClass("show"),$(".restTop").removeClass("show")),557<o&&($(".newNav").addClass("show"),$(".restTop").addClass("show")),o<1400&&$(".restTop>li:last-child").css({opacity:"0"}),1400<o&&$(".restTop>li:last-child").css({opacity:"1"}),$(".restTop>li:last-child").on("click",function(){$("body,html").stop().animate({scrollTop:0},500)})})});var mySwiper=new Swiper(".swiper-container",{loop:!0,slidesPerView:3,autoplay:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});
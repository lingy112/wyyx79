"use strict";function getStyle(t,e){return window.getComputedStyle?window.getComputedStyle(t)[e]:t.currentStyle[e]}function $id(t){return document.getElementById(t)}function move(r,l){clearInterval(r.timer),r.timer=setInterval(function(){var t=r.offsetLeft,e=t+(t<l?20:-20);Math.abs(l-e)<=20?(r.style.left=l+"px",clearInterval(r.timer)):r.style.left=e+"px"},1e3/60)}function animate(r,l,a){clearInterval(r.timer),r.timer=setInterval(function(){var t=r.offsetLeft,e=(t<l?Math.ceil((l-t)/10):Math.floor((l-t)/10))+t;e==l?(r.style.left=l+"px",clearInterval(r.timer),a&&a()):r.style.left=e+"px"},1e3/60)}function opacitymove(r,l,a){clearInterval(r.timer),r.timer=setInterval(function(){var t=parseInt(100*getStyle(r,"opacity")),e=t+(t<l?Math.ceil((l-t)/10):Math.floor((l-t)/10));e==l?(r.style.opacity=l/100,r.style.filter="alpha(opacity="+l+")",clearInterval(r.timer),a&&a()):(r.style.opacity=e/100,r.style.filter="alpha(opacity="+e+")")},2e3/60)}var imgArr=document.getElementById("box").children,pointArr=document.getElementById("uu").children,flag=0,timer=setInterval(function(){++flag>=imgArr.length&&(flag=0);for(var t=0;t<imgArr.length;t++)pointArr[t].className="",opacitymove(imgArr[t],0);pointArr[flag].className="current",opacitymove(imgArr[flag],100)},2e3);

//----------------js文件----------------------------

//获取元素的样式:第一个参数是你要获取样式的dom节点,第二个参数是你要获取的样式名字(字符串)
function getStyle(dom,attr){
   if(window.getComputedStyle){
       return window.getComputedStyle(dom)[attr]
   }else{
       return dom.currentStyle[attr]
   }
}


//根据id获取元素
function $id(id){
   return document.getElementById(id);
}


//封装好的运动函数直接调用
function move(dom,target){
   //要用定时器,先清定时器
   clearInterval(dom.timer);
   //每隔一段时间运动一段距离
   dom.timer = setInterval(function(){
       //1)获取元素当前位置
       var current = dom.offsetLeft;
       //2)设置速度
       var speed = target>current?20:-20;
       //3)计算元素下一个位置
       var next = current + speed;
       //4)有条件的定位元素
       //如果元素距离当前位置不足一步,直接到位
       if(Math.abs(target - next)<=20){
           dom.style.left = target+"px";
           clearInterval(dom.timer);
       }else{
           dom.style.left = next+"px";
       } 
       
   },1000/60)
}


//缓动函数
function animate(dom,target,fn){
   clearInterval(dom.timer);
   dom.timer = setInterval(function(){
       var current = dom.offsetLeft;
       var speed = target > current?Math.ceil((target - current)/10):Math.floor((target - current)/10);
       var next = speed + current;
       if(next==target){
           dom.style.left = target+"px";
           clearInterval(dom.timer)
           fn&&fn()
           
       }else{
           dom.style.left = next+"px";   
       }
   },1000/60)
}

//透明度缓动函数,target必须是0-100之间的整数
function opacitymove(dom,target,fn){
   clearInterval(dom.timer);
   dom.timer = setInterval(function(){
       //1 获取元素当前透明度
       var current = parseInt(getStyle(dom,'opacity')*100);
       //2 设置速度
       var speed = target>current?Math.ceil((target-current)/10):Math.floor((target-current)/10)
       //3 计算元素下一次的透明度
       var next = current + speed;
       //4 有条件的设置透明度
       if(next==target){
           dom.style.opacity = target/100;
           dom.style.filter = "alpha(opacity="+target+")";
           clearInterval(dom.timer);
           //动画完成后执行函数fn
           fn&&fn()
       }else{
           dom.style.opacity = next/100;
           dom.style.filter = "alpha(opacity="+next+")";
       }
       
   },2000/60)
}



// ----------------------html的 js----------------

       

  


var imgArr = document.getElementById('box').children
        var pointArr = document.getElementById('uu').children
        // console.log(imgArr)
        // console.log(pointArr)

        var flag = 0
        var timer = setInterval(function (){
            flag++
            if (flag >= imgArr.length){
                flag = 0
            }
            for (var i = 0 ;  i < imgArr.length ; i++){
                pointArr[i].className = ''
                opacitymove(imgArr[i],0)

            }
            pointArr[flag].className = 'current'
            opacitymove(imgArr[flag],100)
        } ,2000)

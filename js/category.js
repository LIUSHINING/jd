/**
 * Created by ������ on 2016/7/7.
 */
'use strict';
window.onload = function() {
    swipeleft();
    swiperight();
}
function swiperight(){
    var categoryright = document.querySelector(".category-right");
    var swipeUl = categoryright.querySelector(".category-right-content");
    var startY = 0;//��ʼ������λ��
    var moveY = 0;//�����е�λ��
    var distanceY = 0;//�����ľ���
    var currentY = 0;//��¼��ǰ��λ��λ��
    var maxPosition = 0;//���Ķ�λλ��
    var minPosition = -(swipeUl.offsetHeight - categoryright.offsetHeight);
    var buffer = 150;//�������ľ���
    var maxSwipe = maxPosition + buffer;//��󻬶��ľ���
    var minSwipe = minPosition - buffer;//��С�����ľ���
    //var lis = swipeUl.querySelector("li");
    swipeUl.addEventListener("touchstart",function(e){
        startY = e.touches[0].clientY;
    })
    swipeUl.addEventListener("touchmove", function (e) {
        moveY = e.touches[0].clientY;
        //console.log(moveY);
        distanceY = moveY - startY;
        if((currentY + distanceY) < maxSwipe &&  (currentY + distanceY) > minSwipe){
            setTranslayeY(currentY + distanceY);
            removetransition();
        }
    })

    swipeUl.addEventListener("touchend", function (e) {
        currentY = currentY + distanceY;
        //console.log(currentY);
        if(currentY > maxPosition){
            currentY = maxPosition;
            setTranslayeY(currentY);
            addTransition()
        }else if(currentY < minPosition){
            currentY = minPosition;
            setTranslayeY(currentY);
            addTransition()
        }
    })



    //��װ
    function setTranslayeY(y){
        swipeUl.style.transform = "translateY("+ y +"px)";
    }
    function addTransition(){
        swipeUl.style.transition = "all 0.2s";
    }
    function removetransition(){
        swipeUl.style.transition = "nill";
    }

}
function swipeleft(){
    var categoryLeft = document.querySelector(".category-left");
    var swipeUl = categoryLeft.querySelector("ul");
    var startY = 0;//��ʼ������λ��
    var moveY = 0;//�����е�λ��
    var distanceY = 0;//�����ľ���
    var currentY = 0;//��¼��ǰ��λ��λ��
    var maxPosition = 0;//���Ķ�λλ��
    var minPosition = -(swipeUl.offsetHeight - categoryLeft.offsetHeight);
    var buffer = 150;//�������ľ���
    var maxSwipe = maxPosition + buffer;//��󻬶��ľ���
    var minSwipe = minPosition - buffer;//��С�����ľ���
    var lis = swipeUl.querySelectorAll("li");
    swipeUl.addEventListener("touchstart",function(e){
        startY = e.touches[0].clientY;
    })
    swipeUl.addEventListener("touchmove", function (e) {
        moveY = e.touches[0].clientY;
        //console.log(moveY);
        distanceY = moveY - startY;
        if((currentY + distanceY) < maxSwipe &&  (currentY + distanceY) > minSwipe){
            setTranslayeY(currentY + distanceY);
            removetransition();
        }
    })

    swipeUl.addEventListener("touchend", function (e) {
        currentY = currentY + distanceY;
        //console.log(currentY);
        if(currentY > maxPosition){
            currentY = maxPosition;
            setTranslayeY(currentY);
            addTransition()
        }else if(currentY < minPosition){
            currentY = minPosition;
            setTranslayeY(currentY);
            addTransition()
        }
    });

    swipeUl.addEventListener("click", function (e) {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
            lis[i].index = i;
        }
        e.target.parentNode.className = "now"
        var height = -e.target.parentNode.index * 50;
        if(height > minPosition){
            currentY = height;
            setTranslayeY(currentY);
            addTransition();
        }else{
            currentY = minPosition;
            setTranslayeY(currentY);
            addTransition();
        }
    })


    //��װ
    function setTranslayeY(y){
        swipeUl.style.transform = "translateY("+ y +"px)";
    }
    function addTransition(){
        swipeUl.style.transition = "all 0.2s";
    }
    function removetransition(){
        swipeUl.style.transition = "nill";
    }

}













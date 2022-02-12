window.addEventListener('load',function() {
    var tejia = document.querySelector('.tejia');
    var ul = tejia.children[0];
    var ol = tejia.children[1];
    var w = tejia.offsetWidth;
    var index = 0;
    // 设置定时器，图片定时播放
    var timer = setInterval(function() {
        index++;
        var transX = -index * w;
        // 过渡效果
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + transX + 'px)';
    },2000);
    // 让图片无缝滚动
    ul.addEventListener('transitionend',function() {
        if(index >= 2) {
            index = 0;
            ul.style.transition = 'none';
            var transX = -index * w;
            ul.style.transform = 'translateX(' + transX + 'px)';
        }else if(index < 0) {
            index = 1;
            ul.style.transition = 'none';
            var transX = -index * w;
            ul.style.transform = 'translateX(' + transX + 'px)';
        }
        // 让小圆点随着图片变化而变化
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    });
    // 手指滑动轮播图
    var startX = 0;
    var moveX = 0;
    ul.addEventListener('touchstart',function(e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    });
    // 节流阀,手指按下移动了再进行判断是否变换图片，如果没有移动就不用判断
    var flag = false;
    ul.addEventListener('touchmove',function(e) {
        // 手指移动距离
        moveX = e.targetTouches[0].pageX - startX;
        // 图片移动距离
        var transX = -index * w + moveX;
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + transX + 'px)';
        // 节流阀,手指按下移动了
        flag = true;
        // 阻止屏幕默认滚动
        e.preventDefault();
    });
    ul.addEventListener('touchend',function(e) {
        if(flag) {
            // 防止因多次点击图片滚动速度变得越来越快
            flag = false;
            // moveX取绝对值
            if(Math.abs(moveX) > 50) {
                // 右滑，上一张
                if(moveX > 0) {
                    index--;
                }else { //左滑，下一张
                    index++;
                }
                var transX = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + transX + 'px)';
            }else { // 回弹效果
                var transX = -index * w;
                ul.style.transition = 'all .1s';
                ul.style.transform = 'translateX(' + transX + 'px)';
            };
        };
        // 手指离开后先清除所有定时器，再开启新的定时器
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            var transX = -index * w;
            // 过渡效果
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + transX + 'px)';
        },2000);
    })
})
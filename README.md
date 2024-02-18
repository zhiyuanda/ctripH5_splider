# HTML+CSS+JS作品展示(仿写携程网移动端首页②)
>  参考来源：
>
> [黑马程序员pink老师前端入门教程，零基础必看的h5(html5)+css3+移动端前端视频教程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV14J4114768?p=502&spm_id_from=333.1007.top_right_bar_window_history.content.click)

## 效果展示：

![img](https://img-blog.csdnimg.cn/f44fe9d8f0df48e796ba65c09c254cff.gif)

## 网页GitHub地址如下：（若加载较慢建议刷新后耐心等待一会~）

https://zhiyuanda.github.io/ctripH5_splider/

## 主要功能：

接上篇文章，加了轮播图效果

### 

## 网页代码如下：

### HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ctripH5</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="index.js"></script>
</head>
<body>
    <header class="search">
        <div class="search-inner">
            <span class="search-icon icon-search"></span>
            <span>搜索:目的地/酒店/景点/航班号</span>
        </div>
    </header>
    <nav class="top-nav">
        <div class="top-nav-inner">
            <ul>
                <li class="top-nav-hd-bj1">
                    <span class="top-nav-icon-icon1"></span>
                    <span>酒店</span>
                </li>
                <li class="top-nav-bd-bj1">
                    <span class="top-nav-icon-icon2"></span>
                    <span>民宿/客栈</span>
                </li>
                <li class="top-nav-bt-bj1">
                    <span class="top-nav-icon-icon3"></span>
                    <span>特价/爆款</span>
                </li>
            </ul>
            <ul>
                <li class="top-nav-hd-bj2">
                    <span class="top-nav-icon-icon4"></span>
                    <span>机票</span>
                </li>
                <li class="top-nav-bd-bj2">
                    <span  class="top-nav-icon-icon5"></span>
                    <span>接送机/包车</span>
                </li>
                <li class="top-nav-bt-bj2">
                    <span class="top-nav-icon-icon6"></span>
                    <span>航班助手</span>
                </li>
            </ul>
            <ul>
                <li class="top-nav-hd-bj3">
                    <span class="top-nav-icon-icon7"></span>
                    <span>火车票</span>
                </li>
                <li class="top-nav-bd-bj3">
                    <span class="top-nav-icon-icon8"></span>
                    <span>汽车/船票</span>
                </li>
                <li class="top-nav-bt-bj3">
                    <span class="top-nav-icon-icon9"></span>
                    <span>租车</span>
                </li>
            </ul>
            <ul>
                <li class="top-nav-hd-bj4">
                    <span class="top-nav-icon-icon10"></span>
                    <span>旅游</span>
                </li>
                <li class="top-nav-bd-bj4">
                    <span class="top-nav-icon-icon11"></span>
                    <span>门票/活动</span>
                </li>
                <li class="top-nav-bt-bj4">
                    <span class="top-nav-icon-icon12"></span>
                    <span>周边游</span>
                </li>
            </ul>
            <ul>
                <li class="top-nav-hd-bj5">
                    <span class="top-nav-icon-icon13"></span>
                    <span>攻略/景点</span>
                </li>
                <li class="top-nav-bd-bj5">
                    <span class="top-nav-icon-icon14"></span>
                    <span>美食</span>
                </li>
                <li class="top-nav-bt-bj5">
                    <span class="top-nav-icon-icon15"></span>
                    <span>购物/免税</span>
                </li>
            </ul>
        </div>
    </nav>
    <nav class="switch1">
        <span class="switch1-item1"></span>
        <span class="switch1-item2"></span>
    </nav>
    <section class="product">
        <div class="product-left">
            <div class="product-left-hd">
                <img src="images/zhibo-left.png" alt="">
                <span>特价好货直播中</span>
            </div>
            <div class="product-left-bd">
                <img src="upload/zhibo1.jpg" alt="">
                <div class="tag1">酒店套餐</div>
                <span class="fuhao">￥</span>
                <span class="xprice">2022</span>
                <span class="yprice">4009</span>
                <span class="lijian">立减￥1987</span>
            </div>
        </div>
        <div class="product-right">
            <div class="product-right-hd">
                <img src="images/jingxuan-right.png" alt="" class="product-right-hd-img">
                <span class="product-right-hd-span">权威排行榜</span>
            </div>
            <div class="product-right-bd">
                <div class="jingxuan1">
                    <img src="upload/jingxuan1.jpg" alt="">
                    <div class="tag2">华东</div>
                    <span class="left">华东奢华酒店榜</span>
                </div>
                <div class="jingxuan2">
                    <img src="upload/jingxuan2.jpg" alt="">
                    <div class="tag2">华东</div>
                    <span class="right">华东滑雪景点榜</span>
                </div>
            </div>
        </div>
    </section>
    <banner class="tejia">
        <ul>
            <li><img src="upload/tejia2.png" alt=""></li>
            <li><img src="upload/tejia.jpg" alt=""></li>
            <li><img src="upload/tejia2.png" alt=""></li>
            <li><img src="upload/tejia.jpg" alt=""></li>
        </ul>
        <ol>
            <li class="current"></li>
            <li></li>
        </ol>
    </banner>
    <footer class="toolbox">
        <div class="toolbox-hd">
            <a href="#" class="phone">
                <i class="icon-phone"></i>
                <span class="phone-span">电话预定</span>
            </a>
            <a href="#" class="download">
                <i class="icon-download3"></i>
                <span class="download-span">下载携程</span>
            </a>
            <a href="#" class="language">
                <i class="icon-sphere"></i>
                <span class="language-span">Language</span>
                <i class="triangle"></i>
            </a>
        </div>
        <div class="toolbox-bd">
            <a href="#" class="map">网站地图</a>
            <a href="#" class="computer">电脑版</a>
            <p class="link">©2022携程旅行 沪ICP备08023580号</p>
        </div>
    </footer>
    <nav class="bottom-nav">
        <a href="#">
            <span></span>
            <span>首页</span>
        </a>
        <a href="#">
            <span></span>
            <span>社区</span>
        </a>
        <a href="#">
            <span></span>
            <span>消息</span>
        </a>
        <a href="#">
            <span></span>
            <span>我的</span>
        </a>
    </nav>
    <a href="#" class="qiandao"></a>
</body>
</html>
```

### CSS:

```css
body {
    max-width: 540px;
    min-width: 320px;
    margin: 0 auto;
    padding: 0;
    font: normal 16px/1.5 PingFangSC-regular,Tahoma,Lucida Grande,Verdana,Microsoft Yahei,STXihei,hei;
    color: #000;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
    background: #f4f4f4;
}
ul,
ol,
li {
    margin: 0;
    padding: 0;
    list-style: none;
}
.search {
    position: fixed;
    max-width: 540px;
    min-width: 320px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 50px;
    background-color: #fff;
    box-sizing: border-box;
    z-index: 1;
}
.search-inner {
    box-sizing: border-box;
    margin: 12px 8px;
    border: 1.8px solid #0086f6;
    border-radius: 15px;
}
.search-inner span {
    box-sizing: border-box;
    margin-left: 6px;
    font-size: 15px;
    line-height: 21px;
    color: #999;
}
.search-icon {
    box-sizing: border-box;
    color: #666;
    font-size: 20px;
    margin-left: 12px;
    font-family: "icomoon";
}
.top-nav {
    box-sizing: border-box;
    max-width: 540px;
    min-width: 320px;
    margin-top: 50px;
    height: 184px;
    display: flex;
    background-color: #fff;
    
}
.top-nav-inner {
    display: flex;
    flex: 95%;
    margin: 0 12px 0;
    /* background-color: pink; */
}
.top-nav ul {
    display: flex;
    flex: 1;
    margin: 0;
    padding: 0;
    list-style: none;
    flex-direction: column;
    width: 20%;
    /* background-color: purple; */
}
.top-nav-inner ul li {
    flex: 1;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
.top-nav-hd-bj1 span:nth-child(2) {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #fff;
}
.top-nav-hd-bj2 span:nth-child(2) {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #fff;
}
.top-nav-hd-bj3 span:nth-child(2) {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #fff;
}
.top-nav-hd-bj4 span:nth-child(2) {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #fff;
}
.top-nav-hd-bj5 span:nth-child(2) {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #fff;
}
.top-nav-bd-bj1 span:nth-child(2) {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #000;
}
.top-nav-bd-bj2 span:nth-child(2) {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #000;
}
.top-nav-bd-bj3 span:nth-child(2) {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #000;
}
.top-nav-bd-bj4 span:nth-child(2) {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #000;
}
.top-nav-bd-bj5 span:nth-child(2) {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #000;
}
.top-nav-bt-bj1 span:nth-child(2)  {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #000;
}
.top-nav-bt-bj2 span:nth-child(2)  {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #000;
}
.top-nav-bt-bj3 span:nth-child(2)  {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #000;
}
.top-nav-bt-bj4 span:nth-child(2)  {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #000;
}
.top-nav-bt-bj5 span:nth-child(2)  {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #000;
}
.top-nav-inner ul span[class^="top-nav-icon"] {
    display: block;
    margin: 5px auto 0 auto;
    width: 28px;
    height: 28px;
    background: url(../images/stprites1.png) no-repeat 0 -84px;
    background-size: 28px auto;
}
.top-nav-inner ul li .top-nav-icon-icon2 {
    background: url(../images/stprites1.png) no-repeat 0 -335px;
    background-size: 28px auto;
}
.top-nav-inner ul li .top-nav-icon-icon3 {
    background: url(../images/stprites1.png) no-repeat 0 0px;
    background-size: 28px auto;
}
.top-nav-inner ul li .top-nav-icon-icon4 {
    background: url(../images/stprites1.png) no-repeat 0 -168px;
    background-size: 28px auto;
}
.top-nav-inner ul li .top-nav-icon-icon5 {
    background: url(../images/stprites1.png) no-repeat 0 -56px;
    background-size: 28px auto;
}
.top-nav-inner ul li .top-nav-icon-icon6 {
    background: url(../images/stprites1.png) no-repeat 0 -280px;
    background-size: 28px auto;
}
.top-nav-inner ul li .top-nav-icon-icon7 {
    background: url(../images/stprites1.png) no-repeat 0 -364px;
    background-size: 28px auto;
}
.top-nav-inner ul li .top-nav-icon-icon8 {
    background: url(../images/stprites1.png) no-repeat 0 -224px;
    background-size: 28px auto;
}
.top-nav-inner ul li .top-nav-icon-icon9 {
    background: url(../images/stprites1.png) no-repeat 0 -250px;
    background-size: 28px auto;
}
.top-nav-inner ul li .top-nav-icon-icon10 {
    background: url(../images/stprites1.png) no-repeat 0 -140px;
    background-size: 28px auto;
}
.top-nav-inner ul li .top-nav-icon-icon11 {
    background: url(../images/stprites1.png) no-repeat 0 -196px;
    background-size: 28px auto;
}
.top-nav-inner ul li .top-nav-icon-icon12 {
    background: url(../images/stprites1.png) no-repeat 0 -392px;
    background-size: 28px auto;
}
.top-nav-inner ul li .top-nav-icon-icon13 {
    background: url(../images/stprites1.png) no-repeat 0 -28px;
    background-size: 28px auto;
}
.top-nav-inner ul li .top-nav-icon-icon14 {
    background: url(../images/stprites1.png) no-repeat 0 -112px;
    background-size: 28px auto;
}
.top-nav-inner ul li .top-nav-icon-icon15 {
    background: url(../images/stprites1.png) no-repeat 0 -308px;
    background-size: 28px auto;
}
.top-nav-hd-bj1 {
    border-top-left-radius: 10px;
    border-right: 1px solid #fff;
    background-image: linear-gradient(180deg,#fa5956,#fb8650);
}
.top-nav-hd-bj2 {
    border-right: 1px solid #fff;
    background-image: linear-gradient(180deg,#3c83fa,#50b2fa);
}
.top-nav-hd-bj3 {
    border-right: 1px solid #fff;
    background-image: linear-gradient(0deg,#66a4ff,#5e80ff);
}
.top-nav-hd-bj4 {
    border-right: 1px solid #fff;
    background-image: linear-gradient(180deg,#2fc3b6,#52d9b3);
}
.top-nav-hd-bj5 {
    border-top-right-radius: 10px;
    background-image: linear-gradient(0deg,#ffa846,#ff8939 99%);
}
.top-nav-bd-bj1 {
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    background-color: #fff5f1;
}
.top-nav-bt-bj1 {
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    background-color: #fff5f1;
}
.top-nav-bd-bj2 {
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    background-color: #eff9ff;
}
.top-nav-bt-bj2 {
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    background-color: #eff9ff;
}
.top-nav-bd-bj3 {
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    background-color: #f2f5ff;
}
.top-nav-bt-bj3 {
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    background-color: #f2f5ff;
}
.top-nav-bd-bj4 {
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    background-color: #ecfcf8;
}
.top-nav-bt-bj4 {
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    background-color: #ecfcf8;
}
.top-nav-bd-bj5 {
    border-top: 1px solid #fff;
    background-color: #fff9f2;
}
.top-nav-bt-bj5 {
    border-top: 1px solid #fff;
    background-color: #fff9f2;
}
.switch1 {
    display: flex;
    justify-content: center;
    padding-top: 4px;
    height: 20px;
    width: 100%;
    background-image: linear-gradient(0deg,#f4f4f4,#fff);
}
.switch1-item1 {
    margin-right: 4px;
    width: 14px;
    height: 4px;
    border-radius: 2px;
    background-color: #0086f6;
}
.switch1-item2 {
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: #ccc;
}
a {
    text-decoration: none;
    color: #000;
}
.product {
    display: flex;
    margin-left: -8px;
    margin-bottom: 10px;
    padding: 0 12px;
    background-color: #f4f4f4;
    box-sizing: border-box;
}
.product-left {
    flex: 50%;
    margin: 5px;
    background-color: #fff;
    border-radius: 10px;
}
.product-left-hd {
    height: 20px;
    margin: 8px;
}
.product-left-hd img {
    float: left;
    width: 73px;
    height: 20px;
}
.product-left-hd span {
    float: right;
    padding: 0 4px;
    font-size: 10px;
    color: #ff4607;
    border-radius: 2px;
    background-color: #ffebe3;
}
.product-left-bd {
    position: relative;
}
.product-left-bd img {
    width: 238px;
    height: 84px;
    border-radius: 5px;
    margin: 0 5px;
}
.fuhao {
    float: left;
    margin-left: 5px;
    font-size: 11px;
    color: #f60;
    line-height: 2.2;
}
.product-left-bd .xprice {
    float: left;
    font-size: 16px;
    color: #f60;
    font-weight: 700;
}
.product-left-bd .yprice {
    float: left;
    margin: 0 3px;
    font-size: 10px;
    color: #666;
    line-height: 1.8;
    vertical-align: middle;
    text-decoration: line-through;
}
.lijian {
    float: left;
    padding: 3px;
    background-image: linear-gradient(90deg,#fa5956,#fb8650);
    border-radius: 2px;
    font-size: 10px;
    line-height: 1.1;
    color: #fff;
}
.product-right {
    flex: 50%;
    margin: 5px;
    background-color: #fff;
    border-radius: 10px;
}
.product-right-hd {
    height: 20px;
    margin: 8px;
    box-sizing: border-box;
}
.product-right-hd-img {
    float: left;
    width: 73px;
    height: 20px;
}
.product-right-hd-span {
    float: right;
    padding: 0 4px;
    font-size: 10px;
    color: #ae6e15;
    border-radius: 2px;
    background-color: #fdefd2;
}
.product-right-bd {
    text-align: center;
    padding: 0 5px;
    box-sizing: border-box;
}
.jingxuan1 {
    width: 48%;
    float: left;
    margin: 1%;
    position: relative;
    overflow: hidden;
}
.jingxuan1 img {
    width: 100%;
    height: 84px;
    margin: 0;
    padding: 0;
    border-radius: 6px;
}
.product-right-bd span {
    display: block;
    margin-left: -28px;
    font-size: 11px;
    color: #333;
    line-height: 11px;
    height: 11px;
}
.jingxuan2 {
    width: 48%;
    float: left;
    margin: 1%;
    position: relative;
    overflow: hidden;
}
.jingxuan2 img {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 84px;
    border-radius: 6px;
}
.tag1 {
    position: absolute;
    top: 0;
    left: 5px;
    padding: 0 3px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;
    font-size: 10px;
    line-height: 14px;
    background: rgba(51,51,51,.8);
    color: #fff;
}
.tag2 {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 3px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;
    font-size: 10px;
    line-height: 14px;
    color: #663c00;
    background-image: linear-gradient(270deg,#f8e1bd,#e2c089);
}
.tejia {
    position: relative;
    margin-top: 10px;
    padding: 0;
    width: 100%;
    display: block;
    /* display: flex; */
    position: relative;
    background-color: #f4f4f4;
    box-sizing: border-box;
    overflow: hidden;
}
.tejia ul {
    width: 400%;
    overflow: hidden;
    margin-left: -100%;
}
.tejia ul li {
    float: left;
    width: 25%;
    overflow: hidden;
    border-radius: 10px;
}
.tejia img {
    width: 100%;
}
.tejia ol {
    position: absolute;
    bottom: 5px;
    right: 50%;
}
.tejia ol li {
    display: inline-block;
    width: 5px;
    height: 5px;
    z-index: 1;
    background-color: #fff;
    border-radius: 2px;
    transition: all .3s;
}
.tejia ol li.current {
    width: 10px;
}
.toolbox {
    height: 100px;
    padding-top: 12px;
    padding-bottom: 50px;
}
.toolbox-hd {
    display: flex;
    justify-content: space-around;
    margin: 0 12px;
}
.toolbox-hd a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    border: 1px solid #999;
    background-color: transparent;
    border-radius: 4px;
    min-width: 100px;
}
.toolbox-hd span {
    font-size: 13px;
    color: #333;
    line-height: 17px;
    margin-right: 4px;
}
.toolbox-hd i[class^=icon-] {
    color: #ccc;
    font-size: 13px;
    line-height: 17px;
    margin-right: 4px;
}
.triangle {
    display: inline-block;
    border-top: 5px solid #666;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
}
.toolbox-bd {
    text-align: center;
    font-size: 12px;
    line-height: 15px;
    margin-top: 13px;

}
.toolbox-bd a,
.toolbox-bd p {
    color: #666;
}
.map {
    margin-right: 24px;
    padding-right: 24px;
}
.bottom-nav {
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    position: fixed;
    justify-content: center;
    align-items: center;
    height: 49px;
    max-width: 540px;
    background-color: #fff;
    box-shadow: 0 -5px 15px 0 rgb(0 0 0 / 5%);
}
.bottom-nav a {
    margin-top: 1px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 5px;
    color: #666;
    font-size: 11px;
    line-height: 12px;
}
.bottom-nav a:nth-child(1) span:nth-child(1) {
    width: 32px;
    height: 32px;
    background: url(../images/stprites2.png) no-repeat 0 0;
    background-size: 32px auto;
}
.bottom-nav a:nth-child(2) span:nth-child(1) {
    width: 32px;
    height: 32px;
    background: url(../images/stprites2.png) no-repeat 0 -32px;
    background-size: 32px auto;
}
.bottom-nav a:nth-child(3) span:nth-child(1) {
    width: 32px;
    height: 32px;
    background: url(../images/stprites2.png) no-repeat 0 -64px;
    background-size: 32px auto;
}
.bottom-nav a:nth-child(4) span:nth-child(1) {
    width: 32px;
    height: 32px;
    background: url(../images/stprites2.png) no-repeat 0 -96px;
    background-size: 32px auto;
}
.qiandao {
    position: fixed;
    bottom: 55px;
    right: 0;
    height: 76px;
    width: 76px;
    background: url(../images/qiandao.png) no-repeat;
    background-size: 76px;
}
```

### JS:

```javascript
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
```

/**
 * Created by hanshiqiang1 on 2017/2/21.
 */
$(function () {
    var pages={
        '关于我们':'About',
        '业务单元':'Unit',
        '服务案例':'Service',
        '团队':'Team',
        '加入我们':'Join',
        '联系我们':'Contact'
    };
    //底部导航

    var shFirst=true;
    var activeIndex=$('.active').index();
        // console.log(activeIndex);
    var enter=function (title) {
        console.log('entering');
        $('#content').stop().hide();
        if(shFirst){
            shFirst=false;
            $('#content').stop().delay(2600).fadeIn(1000);
            // $('#footer').fadeOut(500).delay(1000).fadeIn(500);
        }else{
            $('#content').stop().delay(2000).fadeIn(1000);
            // $('#footer').fadeOut(500).delay(1000).fadeIn(500);
        }
        $('#mainContent').load('html/'+pages[title]+'.html');
    }

    $('#nav .show').on('click',function () {
        $(this).addClass('active').siblings().removeClass('active');
        // 控制进入

        //导航切换
        ($('#container-navs ').children().length>1)?$('#container-navs li:last-child').remove():'';

        var title=$(this).text();
        $('#container-navs').append('<li><small>>> </small><span>'+title+'</span></li>');
        $('#content').scrollTop(0);


        // 控制摄像头拉近

        var currentIndex=$(this).index();

        /*if(currentIndex==activeIndex){
            return;
        }
        if(currentIndex==props.index){
            return;
        }*/
        switchFocus(currentIndex);
        //切换弹框内容
        ((currentIndex!=activeIndex)&&(currentIndex!=props.index)) ? enter(title):'';

        activeIndex=currentIndex;

    });
    //关闭按钮
    var shut=function () {
        console.log('shutting');
        $('#container-nav').stop().fadeOut(100);
        $('#content').stop().fadeOut(100);
        $('.show').removeClass('active');
        $('#footer').fadeOut(500).delay(1000).fadeIn(1500);
        onLeave();
    };

    $('#home').click(shut);
    $('#logo').click(shut);
    $('#closeD').click(shut);


});
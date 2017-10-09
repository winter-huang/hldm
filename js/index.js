/**
 * Created by hyd on 2017/9/20.
 */
$(function () {

    //获取轮播图的数据
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:8888/api/getlunbo',
        success: function (result) {
            var carouselHtml = template('carousel', {items: result});
            $('.carousel-inner').html(carouselHtml);

            $('.carousel-inner').children().eq(0).addClass('active');

        }
    });

    //封装获取tab栏数据的函数
    function getTab(type) {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:8888/api/gethometab/'+type+'',
            // data: {'type': type || 1},
            success: function (result) {
                var tabHtml = template('tabList_1', {items: result});
                $('.tabList_1').html(tabHtml);

            }
        });
    };

    //默认显示tab-1
    getTab(1);

    //切换tab获取数据
    $('.tab-nav').on('click', "li", function () {
        var index = $(this).index();
        $(this).css({
            color: '#666',
            'borderBottom': '2px solid red'
        }).siblings().css({
            color: '#000',
            'borderBottom': ''
        });
        getTab(index + 1);
    });

    $('.fa-bars').on('click',function (){
        $('aside').css('zIndex',1);        
        $('aside ul').animate({
            left:0
        }).show();
        $('.cover').show();
        $('.content').animate({
            left:'40%'
        });
        $('body').css('overflow','hidden');
    });
    $('.cover').on('click',function (){
        $('aside').css('zIndex',-1);        
        $('aside ul').animate({
            left:'-40%'
        }).hide();
        $('.cover').hide();
        $('.content').animate({
            left:0
        });
        $('body').css('overflow','auto');
    });
    $('.loaded').on('click',function(){
        alert('没做');
    });
    $('.list').on('click',function(){
        alert('没做');
    });


});

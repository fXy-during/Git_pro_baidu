

/**
 * initData  : getChartData
 * changeSelect ： On_Select
 * 
 *
 *
 *  On_  初始化组件
 * 
 *//*
*
*   Global Variable
*/
    window.currPage = 1;  //当前页数
    window.role = localStorage.getItem("role"); //角色权限
    window.active_flag = true; // 拓展标记
    window.userName = localStorage.getItem('loginName');
/*
*
*
*
*/ 
/*
*
*   Local Variable
 */
    var flag_module_roma = true;
    var flag_module_act = true;
/*
*  hide : hide
*  show : show
*  reClass : reClass
*  
 */
var Init = {
    getChartData : function(st,et,source_type,_table){/*获取折线图数据并绘制图形*/
        var chart = echarts.init(document.getElementById("main"));
        var FLLOW_xAxis = [];
        var FLLOW_yAxis = [];
        var POST_xAxis = [];
        var POST_yAxis = [];
        var token = "Bearer "+localStorage.getItem("token");
        $('.startTime').val(st);
        $('.endTime').val(et);
        et = Init.format((new Date(et)).getTime(),"MM/dd/yyyy");
        st = Init.format((new Date(st)).getTime(),"MM/dd/yyyy");
        chart.showLoading({
            text : '数据获取中',
            maskColor:'#4c4c4c',
            textColor:'#fff'
        });
        $.ajax({
            url: '/event/chart',
            //url: 'http://127.0.0.1:8888/' + new Date().getTime(),
            type: 'get',
            dataType: 'json',
            beforeSend:function(request) {
                request.setRequestHeader("Authorization", token);
            },
            data:{
                source: '西南石油大学',
                //data : source_type,
                data : "双折线图",
                beginTime :st,
                endTime : et,
                table : _table
            },
            success : function(date) {
                chart.hideLoading();

                $.each(date.followCountPoints, function(index, val) {
                     FLLOW_xAxis.push(val.x.slice(-5));
                     FLLOW_yAxis.push(val.y);
                });
                $.each(date.postCountPoints, function(index, val) {
                     POST_xAxis.push(val.x.slice(-5));
                     POST_yAxis.push(val.y);
                });

                initEchart(FLLOW_xAxis,
                        FLLOW_yAxis,
                        POST_xAxis,
                        POST_yAxis,
                        chart);
            },
            error : function(xhr) { 
                if (xhr.status==400) {
                    alert("日期错误或者没有相关数据");
                }else{
                    alert("请求失败!");
                }
            }
        });
        return this ;
    },
    getPackage : function(){
        On_reporter(); /*初始化生成报表组件*/
        //On_Select();   /*      下拉框*/
        On_UserHead(); /*      用户信息头部*/
        
        $( ".chart_date_input" ).datepicker();//初始日期组件
        return this;
    },
    getPage : function(uri,row){/*获取总页数并初始化页码（选中第一页）*/
        var $pageWrap = $(".page_wrap");
        $pageWrap.children().remove();
        $pageWrap.append('<div class="zxf_pagediv"></div>');
        //重置事件绑定
        var token = "Bearer "+localStorage.getItem("token");
        var more = 0;
        if (arguments.length == 2) {
            more = (row - 5);
        }
        $.ajax({
             url: uri,
             type: 'get',
             dataType: 'json',
             data:{
                more : more
             },
             beforeSend:function(request) {
                request.setRequestHeader("Authorization", token);
             },
             success:function(page){
                window.sumPage = page;
                $(".zxf_pagediv").createPage({
                    pageNum: page,//总页码
                    current: 1,//当前页
                    shownum: 9,//分页数
                    activepaf: "",
                    backfun: function(e) {
                        if (!active_flag ) {
                            updata(e.current,12);
                        }
                        else{
                            updata(e.current);
                        }
                    }
                });
             },
             fail:function(){
                alert("总页数请求失败");
            }
        });
        return this;
    },
    userCheck : function(){
        var token = localStorage.getItem("token");
        var check_flag = true ;
        if (token==null) {
            confirm("请登录！");
            window.location.href = "http://182.150.37.58:81/dist";
            check_flag = false;
        }
        return check_flag;
        return false;
    },
    bindEvent : function(){
        gevent_select(); /*绑定下拉框事件*/
        On_Timebtn(); /*綁定日期选择事件*/
        return this;
    },
    format : function(mTime,mat){
        if (arguments.length==1) {
            var format = "MM-dd hh:mm"; //默认日期格式
        }
        else{
            var format = mat; 
        }
        if (mTime==null) {
            return " "; 
        }
        var time = new Date(mTime);
        var o = {
          "M+" : time.getMonth()+1, //month
          "d+" : time.getDate(), //day
          "h+" : time.getHours(), //hour
          "m+" : time.getMinutes(), //minute
          "s+" : time.getSeconds(), //second
          "q+" : Math.floor((time.getMonth()+3)/3), //quarter
          "S" : time.getMilliseconds() //millisecond
          }
          if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
          (time.getFullYear()+"").substr(4- RegExp.$1.length));
          for(var k in o)if(new RegExp("("+ k +")").test(format))
          format = format.replace(RegExp.$1,
          RegExp.$1.length==1? o[k] :
          ("00"+ o[k]).substr((""+ o[k]).length));
          return format;  
    },
    bindModule_RoMa: function(){
        $('.trigger_user_list').click(function(event) {
            /* Act on the event */
            if (flag_module_roma) {
                require.ensure([],function(e){
                    require('./jquery.reveal.js');
                    var _RoMa = require('./index_register&manage.js').getRoMaObj();
                    _RoMa.bindEvent().init();
                    $('.trigger_user_list').trigger('click');
                });
                flag_module_roma = false;
            }
        });
        return this;
    },
    bindModule_Act: function(){
        $('.active-up').click(function(event) {
            /* Act on the event */
            if (flag_module_act) {
                require.ensure([],function(e){
                    var _Act = require('./index-active.js').getActiveObj();
                    _Act.bindEvent();
                    $('.active-up').trigger('click');
                })
                flag_module_act = false;
            }
        });
        return this;
    },
    checkDate: function(){
        var startTime = $('.startTime').val(); //开始时间
        var endTime = $('.endTime').val();  //结束时间
        var source_type = $('#source_name').text();
        var table = $(".wrap")[0].getAttribute('data-table'); //
        if (startTime!=""&&endTime!=""){
            var et = endTime.substr(0, 4)+endTime.substr(5, 2)+endTime.substr(8, 2);
            var st = startTime.substr(0, 4)+startTime.substr(5, 2)+startTime.substr(8, 2);
            if(Number(et)-Number(st)>0){
                    Init.getChartData(startTime,endTime,source_type,table);
                    //alert("日期选择正确");
            }
            else{
                alert("日期选择错误");
            }
        }
    },
    signOut: function(flag){
        if (flag) {
            if (confirm("确认注销,并返回登录界面？")) {
                localStorage.removeItem("userName");
                localStorage.removeItem("token");
                window.location.href = "http://182.150.37.58:81/dist";
            }
        }
        else{
            localStorage.removeItem("userName");
            localStorage.removeItem("token");
            window.location.href = "http://182.150.37.58:81/dist";
        }
    }
};


function format(mTime,mat){  //将毫秒时间时间格式化为mat
    
}
/**/


function gevent_select(){
    hideOnlight();
    $(".select_drop").hide();

    $('.select_btn').click(function(e) {
        /* 鼠标点击事件 */
        var $ul = $(e.currentTarget).find("ul");
        if ( !$ul.is(":animated") ){
            if ($ul.css('display')=="none") {
                $ul.slideDown(150);
            }else{
                $ul.slideUp(150);
            }
        }
    });
    $(".select_btn").hover(function(e) {
        /* 鼠标悬浮事件 */
        e.stopPropagation;
        var $ul = $(e.currentTarget).find("ul");
        if ( !$ul.is(":animated") ){
            $ul.slideDown(150);
        }
    }, function(e) {
        /* 鼠标离开事件 */
        e.stopPropagation;
            $(e.currentTarget).find("ul").slideUp(150);
        // var $ul = $(e.currentTarget).find("ul");
        // if ( !$ul.is(":animated") ){
        // }
    });
    $(".select_drop li").click(function(e) {
        $(e.target).parent().siblings(".select_tap").text($(e.target).text());
        $(".select_btn").trigger('mouseleave');
        hideOnlight();
    });  //选中li即显示
}

function On_Select(){  /*初始化下拉框 无事件注册*/
    var type = new Array;

    type["微博"] = ["微博数据来源1","微博数据来源2","微博数据来源3"];
    type["微信"] = ["微信数据来源1","微信数据来源2","微信数据来源3"];
    type["百度贴吧"] = ["发帖量","跟帖量"];
    if ($('.select_type').children().length==0) {
        for(var tap in type){
            $('.select_type').append("<li>"+tap+"</li>");
            }
    }

    var typeName = $('.source_type').text();
    $(".source_name_ul").children().remove();
    for(var ver in type[typeName]){
        $(".source_name_ul").append("<li>"+type[typeName][ver]+"</li>");

    }

    $('#source_name').text($('.source_name_ul li:first-child').text());  // 统计量

    hideOnlight();//隐藏选中项



    $(".select_type li").click(function(event) {
        On_Select();
    });  //数据来源 点击切换数据类型
    $(".source_name_ul li").click(function(event) {
        Init.checkDate();
    });
    // var source = document.getElementById("source_name");
    // source.options.length = 0 ;
    // for(var ver in type[typeName]){
    //     source.options.add(new Option(type[typeName][ver],ver+1));
    // }
}
function On_reporter(){  //初始化月份选择、绑定事件
    var $mouth_wrap = $("<tbody></tbody>");
    var $tr;
    for(let i = 1,j = 2; j<=12; i++,j++){
        if (i==1||i==5||i==9) {
            $tr = $('<tr></tr>');
            $mouth_wrap.append($tr);
        }
        $tr.append("<td data-month="+i+">"+i+"-"+j+"月</td>");
    }
    $(".toTable_month_table").append($mouth_wrap);
    currMonth();
    $('.toTable_month_table tr td').click(function(event) {
        /* 月份选择 */
        $('.toTable_month_table tr td').removeClass('toTable_month_onlight');
        $(this).addClass('toTable_month_onlight');
    });
    $(".toTable").click(function(event) {
        /* 显示时间段选择框 */
        $('.toTable_month').fadeIn(200);
        popUps("toTable_month");
    });
    var _year = true;
    $('.toTable_month_year').click(function(event) {
        /* 切换年份 */
        if (_year) {
            $(this).text("2016").removeClass('year_17').addClass('year_16');
            _year = !_year;
        }
        else{
            $(this).text("2017").removeClass('year_16').addClass('year_17');
            _year = !_year;
        }
      
    });

    $('.initForm').click(function(event) {
        /* 下载文档 */
        var token = "Bearer " + localStorage.getItem("token");
        var _month = $(".toTable_month_onlight").attr("data-month");
        var year = _year ? 2017 : 2016;
        var url = "/event/report/" + year + "/" + _month;
        var fileName = "西南石油大学"+ year + "年" + _month +"-"+(_month+1)+"月舆情报表"; //
        $.ajax({
            url: '/event/report/permission',
            type: 'GET',
            beforeSend:function(request) {
                request.setRequestHeader("Authorization" , token);
            },
            success:function(data){
                var a = document.createElement('a');
                url = url + "?permission=" + data ;
                a.setAttribute('href' , url);
                a.setAttribute('download' ,  fileName);
                a.click();
                $(a).remove();
            },
            complete:function(xml){
                if (xml.status==403) {
                    alert("无权操作");
                }else if (xml.status==200) {
                    return;
                }
                else{
                    error(xml);
                }
            }
        });
    });
}
function On_UserHead(){/*初始化用户头部信息*/
    var role = localStorage.getItem('role') || 'ADMIN'; 
    var userRole ;
    if (role=="VIP") {userRole = "特权用户";}
    else if (role=="ADMIN") {userRole = "管理员";}
    else {userRole = "普通用户";}

    var $user = $('.header_user');
    
    var userName = localStorage.getItem("userName");
    $user.append("<span>欢迎"+userRole + ": " + userName+" </span>");
    $user.append("<span><a href='javascript:void(0);' class='g-signout'>注销</a></span>");
    if (role=="ADMIN") {
        $user.append("<a href='javascript:void(0);' data-reveal-id='control-wrap' class='big-link trigger_user_list' data-animation='fade'>权限管理</a>");
    }
    //
    //
    //
    //
    //
    //
    $('.chart_date_input').keydown(function(event) {
        /* Act on the event */
        return false;
    });


}
function On_Timebtn(){

    $('.chart_date_input').change(function(event) {
        /* Act on the event */
        Init.checkDate();
    });
    $('.g-currMonth').click(function(event) {
        /* Act on the event */
        currMonth();
    });
    $('.g-signout').click(function(event) {
        /* Act on the event */
        Init.signOut();
    });
}








            /********** 内嵌功能方法 *************/

/*日期选择*/ 
function checkDate(){

}  
//图表初始化
function initEchart(F_x, F_y, P_x, P_y, chart){  
    var maxY =eval("Math.max(" + F_y.toString() + ")") > eval("Math.max(" + P_y.toString() + ")") ? eval("Math.max(" + F_y.toString() + ")"):eval("Math.max(" + P_y.toString() + ")");
    var MaxY = (Math.ceil((maxY+(maxY/4))/10)*10);

    var option = {
            legend: {
                left:"2%",
                data:['发帖量','跟帖量'],
                show : true
            },
            grid: {
                top:"40px",
                bottom:'10%',
                left:'3%',
                right:'3%'
            },
            tooltip: {
                show:true,
                trigger: 'axis'
            },
            toolbox: {
                right:"2%",
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    magicType: {
                        show: true, 
                        type: ['stack', 'tiled', 'bar','line']
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            xAxis: {
                type: 'category',
                data: F_x,
                boundaryGap : true,
                axisLine: { lineStyle: { color: '#777' } },
                //interval:2,
                axisTick:{    //x轴刻度
                    interval:0
                },
                // min: 0,
                // max: 21,
                axisLabel:{ //x轴标签
                    //interval:2,
                    textStyle:{
                        color:'#000',
                        fontSize:12
                    }
                },
                axisPointer: {
                    show: true
                }
            },
            yAxis: {
                // type: 'value',
                // min:0,
                // max:MaxY,
                // splitNumber:5,
                // axisLabel:{ 
                //     textStyle:{
                //         color:'#000',
                //         fontSize:12
                //     }
                // }
            },
            series:[{
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'}
                    ]
                },
                name:"跟帖量",
                type:'line',
                lineStyle:{normal:{color: '#145861',width:2} },
                itemStyle:{normal:{color: '#004c5d'}},
                data: F_y,
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                },
                areaStyle: {
                    normal: {  /* 蓝色 */
                        alpha :0.5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1,
                            color: '#f2f5f2'
                        }, {
                            offset: 0.5,
                            color: '#65c8d0'
                        },{
                            offset:0,
                            color: '#004c5d'
                        }
                        ])
                    }
                }            
                },{
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'}
                    ]
                },
                name:"发帖量",
                type:'line',
                lineStyle:{normal:{color: '#9c9c9c',width:2} },
                itemStyle:{normal:{color: '#572015'}},
                data: P_y,
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                },
                areaStyle: {
                    normal: {
                        alpha :0.2,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1,
                            color: '#fff'
                        },{
                            offset: 0.75,
                            color: '#ccc'
                        }, {
                            offset: 0.3,
                            color: '#999'                            
                        },
                            {
                            offset: 0,
                            color: '#7e7e7e'
                        }])
                    }
                }
            }]
        };

    chart.setOption(option);
    window.onresize = function () {
        chart.resize();  //echarts 图表自适应
    }
}
 /*下拉框 隐藏选中项*/
function hideOnlight(){ 
    $('.select_drop li').show();
    $('.select_drop li').each(function(index, val) {
         /* iterate through array or object */
         if($(val).text()==$(val).parent().siblings().text()){
            $(val).hide();
        };
    });
}
/*报表组件 选中当前月份*/
function currMonth(){
    var _month = (new Date()).getMonth();
    $('.toTable_month_table tr td').each(function(index, el) {
        $(el).removeClass('toTable_month_onlight');
        if ($(el).attr("data-month")==_month) {
            $(el).addClass('toTable_month_onlight');
        };
    });
}

                        /*功能类方法*/


// function signOut(flag){ /*注销*/
//     if (flag) {
//         if (confirm("确认注销,并返回登录界面？")) {
//             localStorage.removeItem("userName");
//             localStorage.removeItem("token");
//             window.location.href = "http://182.150.37.58:81/Baidu/BDo-Login.html";
//         }
//     }
//     else{
//         localStorage.removeItem("userName");
//             localStorage.removeItem("token");
//             window.location.href = "http://182.150.37.58:81/Baidu/BDo-Login.html";
//     }
// }
window.popUps = function (ancestor){  //弹窗
    var oneTime = false;
    $(document).bind('click keydown',function(event) {
            /* Act on the event */
            var $aim = $(event.target);
            if( ($aim.parents().filter('section').prop('className')!=ancestor && oneTime) || event.keyCode==27 ){
                $('#rollback').trigger('click');
                $('.rollback').trigger('click');
                $('.toTable_month').fadeOut(200);
                $(document).unbind('keydown');
                $(document).unbind('click');
            }
            else{
                oneTime = true;
            }
    });
    // $(document).click(function(event) {
    //     /* Act on the event */
    //     //event.stopPropagation();
    //     var $aim = $(event.target);
    //     if($aim.parents().filter('section').prop('className')!=ancestor && oneTime ){
    //         $('#rollback').trigger('click');
    //         $('.rollback').trigger('click');
    //         $('.toTable_month').fadeOut(200);
    //     }
    //     else{
    //         oneTime = true;
    //     }
    // });
}




function userCheck(){
    var token = localStorage.getItem("token");
    var check_flag = true ;
    if (token==null) {
        confirm("请登录！");
        window.location.href = "http://182.150.37.58:81/Baidu/BDo-Login.html";
        check_flag = false;
    }
    return check_flag;
}

module.exports = {
    getInitObj : function(){
        return Init;
    }
}
import '../style/type.css';
import '../style/type-event-new.css';
import '../style/zxf_page.css';
import '../style/jquery-ui.css';



var Init = require('./index-init.js').getInitObj();

var error = require('./error.js').getErrorObj();


var userName = localStorage.getItem('loginName');

var diff_obj ={
    isHandled: 2,
    isFeedBack: 2,
    isAll: true,
    more: 0
}

window.updata = function(page, row, index){
    console.log(page);
    currPage=page;
    var $table = $('.tableEvent');
    $table.children().remove();
    var token = "Bearer "+localStorage.getItem("token");

    var default_obj = {
        isHandled: 2,
        isFeedBack: 2,
        isAll: true,
        more: 0
    }
    if (arguments.length>=2) {
        default_obj.more = (row - 5);
    }


    $.extend(default_obj, diff_obj);

    $.ajax({
        url:'/event/handledEvent/' + page,
        type: 'get',
        dataType: 'json',
        data:default_obj,
        beforeSend:function(request) {
            request.setRequestHeader("Authorization", token);
        },
        success:function(data) {

            if (!!index) {
                $(".zxf_pagediv").createPage({  //分类页数初始化
                    pageNum: data.pages,//总页码
                    current: currPage,//当前页
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
            };
            
            $.each(data.eventPageList, function(index, val) {
                 var $tr =$("<tr></tr>");
                 $tr.append("<td><a title=\'"+val.theme+"\' class='Onlight' target='_blank' href=\'"+val.url+"\'>" + val.theme + "</a></td>");
                     $tr.append("<td title=\'"+val.mainView+"\'>"+val.mainView+"</td>");
                     $tr.append("<td>"+val.postType+"</td>");
                     $tr.append("<td>"+val.handledCondition+"</td>");
                     $tr.append("<td >"+val.feedbackCondition+"</td>"); 
                     $tr.append("<td>"+val.recorder+"</td>"); //归集人 
                     $tr.append("<td>"+Init.format(val.collectedTime)+"</td>"); //归集时间
                     $tr.append("<td>"+val.eventHandler+"</td>"); //处置人
                     $tr.append("<td>"+Init.format(val.handledTime)+"</td>"); //处置时间
                     $tr.append("<td>"+val.detail+"</td>"); //具体处置
                     //$tr.append("<td>"+val.remark+"</td>"); 
                     $table.append($tr);
                     $('.tableEvent tr:last').data('id', val.id);
                     $('.tableEvent tr:last td:gt(0)').dblclick(function(event) {
                            $('.tableEvent tr').removeClass('Onlight_tr');
                            $(this).parent().addClass('Onlight_tr')
                            Handled.show(val);
                     }).click(function(event){
                        $(this).parent().toggleClass('Onlight_tr_del');
                     });
            });
        },
        error:function(xml){
             error(xml);
        }
    });
} 





$(document).ready(function() {
    // if (!Init.userCheck()) {
    //     return;
    // }
    var currDate = new Date();  //获取当前日期
    var table = $(".wrap")[0].getAttribute('data-table');

    Init.getChartData(Init.format(currDate.getTime()-60*24*60*60*1000,"yyyy-MM-dd"),Init.format(currDate,"yyyy-MM-dd"),'发帖量',table)
        .getPackage()  //加载组件
       // .getPage('/event/handledEvent/pageCount') //获得总页数并且初始化页码
        .bindEvent() //绑定事件
        .bindModule_RoMa()
        .bindModule_Act();

    updata(1, 5, true);

    Handled.bindEvent();
});
var Handled ={
    show : function (obj) { 
        // body...   
        if($('.tableAim').children().eq(0).children().length==0){
        /*清除上一次的事例*/
           $('.tableAim td:eq(0)').remove();
        }

        var $parent = $(this).parent();  //列表中的tr
        var $sentry_one = $('.tableAim td:first');
        $sentry_one.before('<td>'+obj.theme+'</td>');
        $('.tableAim').data('id', obj.id);
        Handled.initPop(obj);
        popUps("readlyWrap");
        $('.readlyWrap').show();
    },
    bindEvent : function(){
        event_handled();//归集请求事件绑定,取消事件绑定
        //event_select_handled_trigger();
        event_radio(); //单选逻辑
        event_del();
    },
    initPop : function(obj){
        var handled = obj.handledCondition;
        var feedback = obj.feedbackCondition;
        $('.select_handled').text(handled); //未反馈 已处置
        $('.select_feedback').text(feedback);

        //下拉框重置
        $('.select_feedback_ul li').css("display","list-item");
        $('.select_feedback_ul li:contains('+ feedback +')').css("display","none");

        if (handled=="未处置") {
            Handled.inner.feedback_input_hide(); //隐藏输入框
        }
        else{
            Handled.inner.feedback_input_show(obj); //显示具体处置、备注输入框
        }


        $(".select_handled_ul li").click(function(event) {
            /* 具体处置 */
            if ( $(event.target).text()!="未处置" ) {
                Handled.inner.feedback_input_show(obj);
            }
            else{
                Handled.inner.feedback_input_hide();
            }
        });
    },
    inner : {
        feedback_input_show : function(obj){
                $('.event_add_detail').remove();
                //$('.event_add_remark').remove();
                $('.tableAim').append("<td colspan='2' class='event_add_detail'><input type='text' class='event_add_detail_input' value="+obj.detail+"></td>");
                // $('.tableAim').append("<td class='event_add_remark'><input type='text' class='event_add_remark_input' placeholder="+$('.tableAim').data('remark')+"></td>");
        },
        feedback_input_hide : function(obj){
            $('.event_add_detail').hide();
        },
        list_filter : function(){
            var _handled = $('.radio-wrap input[name= handled]:checked').val();
            var _feedback = $('.radio-wrap input[name= feedback]:checked').val();
            var _all = $('#event-radio-all').prop('checked');
            diff_obj ={
                isHandled: parseInt(_handled)  || 2,
                isFeedBack: parseInt(_feedback) || 2,
                isAll: _all,
            }
            if (_handled==0) {
                diff_obj.isHandled = 0;
            }
            if (_feedback==0) {
                diff_obj.isFeedBack = 0;
            }
            if ($('.tableEvent').children().length!=0) {
                if (!active_flag ) {
                    updata(1, 12, true);
                }
                else{
                    updata(1, 5, true);
                }
            }
        }
    },
}

function event_handled(){  //归集请求事件绑定
    $('.saveBtn').click(function(event) {
        /* Act on the event */
        var handled = $('.select_handled').text();
        if(handled=="未处置"){
            alert("错误处置条件,请检查再试");
            return;
        }
        var id = $('.tableAim').data('id');
        var feedback = $('.select_feedback').text();
        var currDate = new Date();
        var detail = $('.event_add_detail_input').val();
        var remark = $('.event_add_remark_input').val() || "待更新";

        var token = "Bearer "+localStorage.getItem("token");
        var obj = {
            id: id,
            theme: "null",
            mainView: "null",
            url: "null",
            handledCondition: handled,
            feedbackCondition: feedback,
            collectedTime: 0,
            handledTime: 0,
            recorder: "null",
            detail: detail,
            eventHandler : userName
        }

        $.ajax({
            url:  "/event/handledEvent/"+id+"/handle",
            type: 'POST',
            dataType: 'json',
            contentType:"application/json;charset=utf-8",
            data:JSON.stringify(obj),
            beforeSend:function(request) {
                request.setRequestHeader("Authorization", token);
            },
            complete:function(XML){
                if(XML.status==200){
                    //$('.Onlight_tr td:eq(8)').text(remark); // 备注
                    $(".Onlight_tr td:eq(3)").text(handled); // 处置情况
                    $(".Onlight_tr td:eq(4)").text(feedback); // 反馈情况
                    $(".Onlight_tr td:eq(7)").text(userName);
                    $(".Onlight_tr td:eq(8)").text( Init.format(currDate.getTime() ) ); //处置时间
                    $('.Onlight_tr td:eq(9)').text(detail); //具体处置
                    alert("处置成功");
                    $('#rollback').trigger('click'); 
                }
                else{
                    error(XML);
                }
            }
        });
        
    });

    $('#rollback').click(function(event) {
        /* Act on the event */
        $('.readlyWrap').hide();
        $(document).unbind('click');
        $('.tableEvent tr').removeClass('Onlight_tr');
        $('.tableAim td:eq(0)').remove();
        $(document).unbind('click');
    });
}

function event_radio(){
    $('#handled-not').click(function(event) { //未处置
        /* Act on the event */
        $('#event-radio-all').prop('checked', false);
        $('#feedback-done').prop('disabled', 'disabled');
    })

    $('#handled-done').click(function(event) { //已处置
        /* Act on the event */
        $('#event-radio-all').prop('checked', false);
        $('#feedback-done').removeAttr('disabled');
    })

    $('#feedback-not').click(function(event) { //未反饋
        /* Act on the event */
        $('#event-radio-all').prop('checked', false);
        $('#handled-not').removeAttr('disabled');
    })

    $('#feedback-done').click(function(event) { //已反饋
        /* Act on the event */
        $('#event-radio-all').prop('checked', false);
        $('#handled-done').prop('checked', 'checked');
        $('#handled-not').prop('disabled', 'disabled');
    })

    $('#event-radio-all').click(function(event) { // 全选
        /* Act on the event */
        $('input[type=radio]').removeAttr('disabled');
        $('.radio-wrap input:lt(4)').prop('checked', false);
        $(this).prop('checked', true);
    });

    $('.radio-wrap input').click(function(event) {
        /* Act on the event */
        Handled.inner.list_filter(); 
    });

    $('#event-radio-all').trigger('click');
}

function event_del(){
    $('.event-del').click(function(event) {
        /* Act on the event */
        var _ids = [];
        var _flag = true;
        $('.Onlight_tr_del').each(function(index, el) {
            if($(el).find('td').eq(3).text()=="未处置"){
               _ids.push($(el).data('id'));
            }else{
                _flag = false;
                return _flag;
            }
        })
        console.log(_ids);
        if(!_flag){
            alert("删除失败，包含已处置事件！");    
        }else{
            if (!confirm('确认删除?')) {
                return;
            }
            var token = "Bearer "+localStorage.getItem("token");
            $.ajax({
                url: '/event/handledEvent',
                type: 'POST',
                contentType:"application/json;charset=utf-8",
                data: JSON.stringify(_ids),
                success: function(data){
                    updata(currPage, 5, true);
                },
                beforeSend:function(request) {
                    request.setRequestHeader("Authorization", token);
                },
                complete: (msg,xml)=>{
                    console.log(msg,xml);
                },
                error: function(xml){
                    error(xml);
                }
            });   
        }
    });
}
/*
*
*
* 功能方法
*
* 
* 
 */

  
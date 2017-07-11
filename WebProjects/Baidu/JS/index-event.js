$(document).ready(function() {

    var currDate = new Date();  //获取当前日期
    var table = $(".wrap")[0].getAttribute('data-table');

    Init.getChartData(format(currDate.getTime()-60*24*60*60*1000,"yyyy-MM-dd"),format(currDate,"yyyy-MM-dd"),'发帖量',table)
        .getPackage()  //加载组件
        .getPage('/event/handledEvent/pageCount') //获得总页数并且初始化页码
        .bindEvent(); //绑定事件

    if (role=="ADMIN") {
       RoMa.bindEvent().init(); 
    }
    updata(1);

    Handled.bindEvent();
});

/*
*
*   Global Variable
*/
var currPage = 1;  //当前页数

var role = localStorage.getItem("role"); //角色权限

var userName = localStorage.getItem("loginName");  //用户ID

/**/

/*
*  hide : hide
*  show : show
*  reClass : reClass
*  
 */
var Handled ={
    show : function (obj) { 
        // body...
        $('.tableEvent tr').removeClass('Onlight_tr');
        $(this).parent().addClass('Onlight_tr');     
        if($('.tableAim').children().eq(0).children().length==0){
        /*清除上一次的事例*/
           $('.tableAim td:eq(0)').remove();
        }

        $parent = $(this).parent();  //列表中的tr
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
        }
    }
}

function event_handled(){  //归集请求事件绑定
    $('.saveBtn').click(function(event) {
        /* Act on the event */
        if(handled=="未处置"){
            alert("错误处置条件,请检查再试");
            return;
        }
        var id = $('.tableAim').data('id');
        var handled = $('.select_handled').text();
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
                    $('.Onlight_tr td:eq(8)').text(detail); //具体处置
                    //$('.Onlight_tr td:eq(8)').text(remark); // 备注
                    $(".Onlight_tr td:eq(2)").text(handled); // 处置情况
                    $(".Onlight_tr td:eq(3)").text(feedback); // 反馈情况
                    $(".Onlight_tr td:eq(6)").text(userName);
                    $(".Onlight_tr td:eq(7)").text( format(currDate.getTime() ) ); //处置时间
                    alert("处置成功");
                    $('#rollback').trigger('click'); 
                }
                else if (XML.status==403) {
                    alert("无权操作！");
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


/*
*
*
* 功能方法
*
* 
* 
 */

function updata(page,row){
    console.log(page);
    currPage=page;
    var $table = $('.tableEvent');
    $table.children().remove();
    var token = "Bearer "+localStorage.getItem("token");
    var more = 0;
    if (arguments.length==2) {
        more = (row - 5);
    }
    $.ajax({ 
        url:'/event/handledEvent/' + page,
        type: 'get',
        dataType: 'json',
        data:{
            more : more
        },
        beforeSend:function(request) {
            request.setRequestHeader("Authorization", token);
        },
        success:function(data) {
            $.each(data, function(index, val) {
                 var $tr =$("<tr></tr>");
                 $tr.append("<td><a title=\'"+val.theme+"\' class='Onlight' target='_blank' href=\'"+val.url+"\'>" + val.theme + "</a></td>");
                     $tr.append("<td title=\'"+val.mainView+"\'>"+val.mainView+"</td>");
                     $tr.append("<td>"+val.postType+"</td>");
                     $tr.append("<td>"+val.handledCondition+"</td>");
                     $tr.append("<td >"+val.feedbackCondition+"</td>"); 
                     $tr.append("<td>"+val.recorder+"</td>"); //归集人 
                     $tr.append("<td>"+format(val.collectedTime)+"</td>"); //归集时间
                     $tr.append("<td>"+val.eventHandler+"</td>"); //处置人
                     $tr.append("<td>"+format(val.handledTime)+"</td>"); //处置时间
                     $tr.append("<td>"+val.detail+"</td>"); //具体处置
                     //$tr.append("<td>"+val.remark+"</td>"); 
                     $table.append($tr);
                     $('.tableEvent tr:last td:gt(0)').data('id', val.id).click(function(event) {
                         Handled.show(val);
                     });
            });
        },
        error:function(data){
             error(data);
        }
    });
}   
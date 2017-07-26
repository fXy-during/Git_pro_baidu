import '../style/type.css';
import '../style/type-ana-new.css';


import '../style/zxf_page.css';

import '../style/jquery-ui.css';




var Init = require('./index-init.js').getInitObj();


import { signOut } from './index-init.js';

console.log(signOut);
var error = require('./error.js').getErrorObj();

window.updata = function(page,row){
    console.log(page);
    currPage = page;
    //onPage(page);
    var $table = $('.tableEvent');
    $table.children().remove();
    var token = "Bearer "+localStorage.getItem("token");
    var more = 0;
    if (arguments.length==2) {
        more = (row - 5);
    }
    $.ajax({ 
        //url: 'http://127.0.0.1:8888/' + new Date().getTime(),
        url:'/event/dailyEvent/' + page,
        type: 'get',
        dataType: 'json',
        data:{
            more : more
        },
        beforeSend:function(request) {
            request.setRequestHeader("Authorization", token);
        },
        success:function(data){
            $.each(data,function(index,val){
                var $tr = $("<tr></tr>");
                if (!val.collectionStatus) {
                    $tr.append("<td><span class='icon-fxy-add collect_flag'></span></td>");
                    $table.append($tr);
                    $(".collect_flag:last").data('info', val).click(function (e) {
                        var $that = $(e.target);
                        event.preventDefault();
                        console.log($that);
                        $that.removeClass('icon-fxy-add');
                        $that.addClass('icon-fxy-add-hover');
                        Ana.show(val);
                    });
                } else {
                    $tr.append('<td></td>');
                }
                $tr.append("<td><a title=\'"+val.theme+"\' class='Onlight' target='_blank' href=\'"+val.url+"\'>" + val.theme + "</a></td>");
                $tr.append("<td title=\'"+val.mainView+"\'>" + val.mainView + "</td>");
                $tr.append("<td>" + val.followCount + "</td>");
                $tr.append("<td>" + val.postType + "</td>");
                $tr.append("<td>" + Init.format(val.postTime) + "</td>");
                $tr.append("<td>" + val.source + "</td>");
                $table.append($tr);
            });
        },
        error:function(data){
            error(data);
        }
    });
}

$(document).ready(function() {

    if (!Init.userCheck()) {
        return;
    }
    var currDate = new Date();  //获取当前日期
    var table = $(".wrap")[0].getAttribute('data-table');
    
    Init.getChartData(Init.format(currDate.getTime()-60*24*60*60*1000,"yyyy-MM-dd"),Init.format(currDate,"yyyy-MM-dd"),'发帖量',table)
        .getPackage()
        .getPage('/event/dailyEvent/pageCount')
        .bindEvent()
        .bindModule_RoMa()
        .bindModule_Act();

    Ana.bindEvent();


    updata(1);
});

var Ana = {
    show : function(obj){
        $('.tableAim').remove();
        $('.readlyWrap').show();
        var $tr = $("<tr class='tableAim'></tr>");
        $tr.append("<td>"+obj.theme+"</td>");
        $tr.append("<td><input class='input_mainView input_show' type='text' value="+obj.mainView+"></td>");
        $tr.append("<td>"+obj.followCount+"</td>");
        $tr.append("<td><input class='input_postType input_show' type='text' value="+obj.postType+"></td>");
        $tr.append("<td>"+Init.format(obj.postTime)+"</td>");
        $tr.append("<td>"+obj.source+"</td>");
        $tr.insertBefore('.readlyBtn');
        $('.tableAim').data('id', obj.id);      
        popUps("readlyWrap");
        return this;
    },
    reClass : function(id){
        $('.collect_flag').each(function(index, val) {
            var $that = $(this);
            if( ($that.data('info').id)==id ){
                $that.removeClass('icon-fxy-add');
                $('#rollback').trigger('click');
            }
        });
        return this;
    },
    bindEvent : function(){
        event_collEvent();
        event_hide();
        //event_icon_on();
        return this;
    },
}


/* 事件绑定 */
function event_collEvent(){
    $('.saveBtn').click(function(event) {
        /* Act on the event */
        var id = $('.tableAim').data('id');
        var token = "Bearer "+localStorage.getItem("token");
        var view = $('.input_mainView').val();
        var type =  $('.input_postType').val();

        $.ajax({
            url: "/event/dailyEvent/"+ id +"/collect",
            type: 'POST',
            data: {
                recorder : userName,
                postType : type,
                mainView : view
            },
            beforeSend:function(request) {
                request.setRequestHeader("Authorization", token);
            },
            complete:function(xml,msg){
                if(xml.status == 200 ){
                    $('.icon-fxy-add-hover').parents("td").siblings().eq(3).text(type);
                    $('.icon-fxy-add-hover').parents("td").siblings().eq(1).text(view);
                    $('.collect_flag').removeClass('icon-fxy-add-hover');
                    $('.collect_flag').addClass('icon-fxy-add');
                    Ana.reClass(id);
                    alert("归集成功");
                }else{
                    error(xml);
                }
            }
        });
    });
}
function event_hide(){
    $('#rollback').click(function(event) {
        /* Act on the event */
        $('.collect_flag').removeClass('icon-fxy-add-hover');
        $('.collect_flag').addClass('icon-fxy-add');     
        $('.readlyWrap').hide();
        $(document).unbind('click');
    });
}


/*内置功能方法*/

        
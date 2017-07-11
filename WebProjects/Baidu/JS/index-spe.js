$(document).ready(function() {

    var currDate = new Date();  //获取当前日期
    var table = $(".wrap")[0].getAttribute('data-table');

    Init.getChartData(format(currDate.getTime()-60*24*60*60*1000,"yyyy-MM-dd"),format(currDate,"yyyy-MM-dd"),'发帖量',table)
        .getPackage()
        .getPage('/event/specialEvent/pageCount')
        .bindEvent(); 

    if (role=="ADMIN") {
       RoMa.bindEvent().init();
    }

    updata(1);  //更新专题事件列表
    updata_topic();//获取专题列表

    Spe.bindEvent();
});
/*
*
*   Global Variable
*/
var currPage = 1;  //当前页数

var role = localStorage.getItem("role"); //角色权限

var userName = localStorage.getItem("loginName");  //用户ID

/**/
var Spe = {
    bindEvent : function(){
        event_addTopic();
        event_delTopic();

        event_addTap();
        event_delTap();

        event_collEvent();
        event_hide();
        return this;
    },
    show : function(obj){
        $('.readlyWrap').show();
        $('.tableAim').remove();
        var $tr = $("<tr class='tableAim'></tr>");
        $tr.append("<td>"+obj.theme+"</td>");
        $tr.append("<td><input class='input_mainView input_show' type='text' value="+obj.mainView+"></td>");
        $tr.append("<td>"+obj.followCount+"</td>");
        $tr.append("<td><input class='input_postType input_show' type='text' value="+obj.postType+"></td>");
        $tr.append("<td>"+format(obj.postTime)+"</td>");
        $tr.append("<td>"+obj.source+"</td>");
        $tr.insertBefore('.readlyBtn');
        $('.tableAim').data('id', obj.id);
        popUps("readlyWrap");  //弹窗蒙层
    },
    reClass : function(id){
        $('.collect_flag').each(function(index, val) {
             var $that = $(this);
             if( ($that.data('info').id)==id ){
                $that.removeClass('icon-fxy-add');
                $('.rollback').trigger('click');
             }
        });        
    },
    inner : {
        initWholePage : function(){
            if (active_flag) {
                Init.getPage('/event/specialEvent/pageCount');//刷新页码
                updata(1);  //更新专题事件列表 
            }else{
                Init.getPage('/event/specialEvent/pageCount',12);
                updata(1,12);
            }
            checkDate();//刷新图表
            updata_topic();  //刷新专题列表
        }
    }
}

function event_addTopic(){  //添加专题
    $('.topicList_btn_add').click(function(event) {
        /* Act on the event */
        $('.addWrap').show();
        popUps("addWrap");
    });
    $('.topicList_btn_add_save').click(function(event) {
        /* Act on the event */
        var Tname = $("input[name='Tname' ]").val();
        var Tarea = $("input[name='Tarea']").val();
        var $Ttaps = $("input[name='tap']");
        if (Tname.length == 0 || Tarea.length == 0 ) {
            alert("请输入完整专题名和地域");
            return ;
        }
        else{
            for(el in $('.innerbox p:first-child') ){
                if ($('.innerbox p:first-child').eq(el).text().trim() == Tname) {
                    alert("专题名重复！");
                    return;
                }
            }
        }

        var topic = [];
        var token = "Bearer "+localStorage.getItem("token");
        $Ttaps.each(function(index, el) {
            topic.push($(el).val());
        });
        var obj = {
                id:0, //添加时传0
                name:Tname,//长度限制45
                region:Tarea,//长度限制45
                rules:topic //长度限制255
        };
        $.ajax({
            url: '/event/topic/add',
            type: 'POST',
            contentType:"application/json;charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(obj),
            beforeSend:function(request) {
                request.setRequestHeader("Authorization", token);
            },
            complete:function(XML){
                if(XML.status==200){
                    Spe.inner.initWholePage();//刷新图表 专题列表 专题事件列表和页码
                    $('.rollback').trigger('click'); 
                }
                else if(XML.status==403){
                    alert("无权操作！");
                }
                else{
                    error(XML);
                }
            }
        });
    }); 
}
function event_delTopic(){  //删除专题
    $('.topicList_btn_del').click(function(event) {
        /* Act on the event */
        var goal = $(".innerbox input:checked");
        var logo = [];
        var token = "Bearer "+localStorage.getItem("token");
        $.each(goal,function(index, val){
             /* iterate through array or object */
                logo.push( $(val)[0].getAttribute('data-logo') );
                // $('.innerbox').filter(function(){
                //     return $(this).data('logo')==logo;
                // }).remove();
        });
        $.ajax({
            url: '/event/topic/delete',
            type: 'POST',
            dataType: 'json',
            contentType:"application/json;charset=utf-8",
            data:JSON.stringify(logo),
            beforeSend:function(request) {
                request.setRequestHeader("Authorization", token);
            },
            complete:function(XML){
                if(XML.status==200){
                    Spe.inner.initWholePage();
                }
                else if (XML.status==403) {
                    alert("无权操作!");
                }else{
                    error(XML);
                }
            }
        });/*ajax*/
    });
}
function event_addTap(){  //添加专题标签
    $('.topicList_addTap').click(function(event) {
        /* Act on the event */
        $('.add_input_right').append("<input type='text' name='tap' class='newTap'/>");
        var width_num = 100 / $('.add_input_right input').length-2;
        $('.add_input_right input').css('width',width_num+"%" );
    });
}
function event_delTap(){   //删除专题标签
    $('.topicList_delTap').click(function(event) {
        /* Act on the event */
        $('.add_input_right input:last()').remove();
        var width_num = 100 / $('.add_input_right input').length-2;
        $('.add_input_right input').css('width',width_num+"%" );
    });
}
function event_collEvent(){
    $('.saveBtn').click(function(event) {
        /* Act on the event */
        var id = $('.tableAim').data('id');
        //var admini = $('.sel_push option:selected').text();
        var token = "Bearer "+localStorage.getItem("token");
        var userName = localStorage.getItem("userName");
        var view = $('.input_mainView').val();
        var type =  $('.input_postType').val();
        $.ajax({
            //url: "/event/dailyEvent/" + id +"/"+userName+ "/collect",
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
                    Spe.reClass(id);
                    alert("归集成功");
                }
                else if (xml.status == 403) {
                    alert("无权操作!");
                }else{
                    error(xml);
                }
            }
        });
    });
}
function event_hide(){
    $('.rollback').click(function(event) {
    /* Act on the event */
        $('.readlyWrap').hide();
        $('.addWrap').hide();
        $(document).unbind('click');
        $('.newTap').remove();
        $(".add_input input").val(" "); //清空所有输入框
        while($('.add_input_right input').length<3){
            $('.add_input_right').append("<input type='text' name='tap'/>");
        }
        $('.add_input_right input').css('width',"30%" );
    });
}
/*内置功能方法*/
function updata(page,row){
    console.log(page);
    currPage = page;
    var $table = $('.tableEvent');
    var token = "Bearer "+localStorage.getItem("token");
    $table.children().remove();
    var more = 0;
    if (arguments.length==2) {
        more = (row - 5);
    }
    $.ajax({ 
        url:'/event/specialEvent/' + page ,
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
                    $(".collect_flag:last").data('info', val).click(function (event) {
                        event.preventDefault();
                        Spe.show(val);
                    });
                } else {
                    $tr.append('<td></td>')
                }
                $tr.append("<td><a title=\'"+val.theme+"\' class='Onlight' target='_blank' href=\'"+val.url+"\'>" + val.theme + "</a></td>");
                $tr.append("<td title=\'"+val.mainView+"\'>" + val.mainView + "</td>");
                $tr.append("<td>" + val.postType + "</td>");
                $tr.append("<td>" + format(val.postTime) + "</td>");
                $table.append($tr);
            });
        },
        error:function(XMLHttpRequest){
            error(XMLHttpRequest);
        }
    });
   
}

function updata_topic(){  //获取专题列表
    $('.chartSec-left-innerbox div').remove();
    var token = "Bearer "+localStorage.getItem("token");
    $.ajax({
        url: '/event/topic/list',
        type: 'GET',
        dataType: 'json',
        beforeSend:function(request) {
            request.setRequestHeader("Authorization", token);
        },
        success:function(data){
            $.each(data,function(index, val){
                 /* iterate through array or object */
                var $div = $("<div class='innerbox'></div>");
                var $p = $("<p></p>");
                $div.append("<p>"+val.name+"</p>");
                $p.append("<span class='topLight'>"+val.region+"</span>");
                $.each(val.rules, function(index, el){
                     /* iterate through array or object */
                     $p.append("<span>"+el+"</span>");
                });
                $div.append($p);
                $div.append("<input class='add_radio' data-logo="+val.id+" type='checkbox'/>");
                $('.chartSec-left-innerbox').append($div);
            });
        },
        error:function(XMLHttpRequest){
            if(XMLHttpRequest.status!=401){
               alert("列表数据获取失败");
            }
        }
    });
}


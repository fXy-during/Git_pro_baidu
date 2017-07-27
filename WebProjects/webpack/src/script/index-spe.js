import '../style/type.css';
import '../style/type-spe-new.css';
import '../style/zxf_page.css';
import '../style/jquery-ui.css';

/*
*
*   Module Require
* 
 */

var Init = require('./index-init.js').getInitObj();
var error = require('./error.js').getErrorObj();

/*
*
*
*   Local Variable  
*
* 
 */

var flag_module_add = true;

/*
*
* 
 */
window.updata = function(page, row, index=false){
    console.log(page);
    currPage = page;
    var $table = $('.tableEvent');
    $table.children().remove();
    var token = "Bearer "+localStorage.getItem("token");
    var _arr = get_list_id();
    var more = 0;
    if (arguments.length>=2) {
        more = (row - 5);
    }

    $.ajax({ 
        url:'/event/specialEvent/' + page ,
        type: 'post',
        dataType: 'json',
        contentType:"application/json; charset=UTF-8",
        data:JSON.stringify({
            more: more,
            ids: _arr, 
        }),
        beforeSend: function(request) {
            request.setRequestHeader("Authorization", token);
        },
        success: function(data){

            if (index) {
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
            
            $.each(data.eventPageList,function(index,val){
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
                        Spe.show(val);
                    });
                } else {
                    $tr.append('<td></td>')
                }
                $tr.append("<td><a title=\'"+val.theme+"\' class='Onlight' target='_blank' href=\'"+val.url+"\'>" + val.theme + "</a></td>");
                $tr.append("<td title=\'"+val.mainView+"\'>" + val.mainView + "</td>");
                $tr.append("<td>" + val.postType + "</td>");
                $tr.append("<td>" + Init.format(val.postTime) + "</td>");
                $table.append($tr);
            });
        },
        error:function(XMLHttpRequest){
            error(XMLHttpRequest);
        }
    });
}

$(document).ready(function() {
    // if (!Init.userCheck()) {
    //     return;
    // }

    var currDate = new Date();  //获取当前日期
    var table = $(".wrap")[0].getAttribute('data-table');
    updata_topic();//获取专题列表

    updata(1, 5, true);  //更新专题事件列表

    Init.getChartData(Init.format(currDate.getTime()-60*24*60*60*1000,"yyyy-MM-dd"),Init.format(currDate,"yyyy-MM-dd"),'发帖量',table, get_list_id())
        .getPackage()
        //.getPage('/event/specialEvent/pageCount')
        .bindEvent()
        .bindModule_RoMa()
        .bindModule_Act();


    Spe.bindEvent().inner.bindModule_add();

});



var Spe = {
    bindEvent: function(){
        event_addTopic();
        
        // event_addTap();
        // event_delTap();

        event_collEvent();
        event_hide();
        event_addClear();

        return this;
    },
    show: function(obj){
        $('.readlyWrap').show();
        $('.tableAim').remove();
        var $tr = $("<tr class='tableAim'></tr>");
        $tr.append("<td>"+obj.theme+"</td>");
        $tr.append("<td><input class='input_mainView input_show' type='text' value="+obj.mainView+"></td>");
        $tr.append("<td>"+obj.followCount+"</td>");
        $tr.append("<td><input class='input_postType input_show' type='text' value="+obj.postType+"></td>");
        $tr.append("<td>"+Init.format(obj.postTime)+"</td>");
        $tr.append("<td>"+obj.source+"</td>");
        $tr.insertBefore('.readlyBtn');
        $('.tableAim').data('id', obj.id);
        popUps("readlyWrap");  //弹窗蒙层
    },
    reClass: function(id){
        $('.collect_flag').each(function(index, val) {
             var $that = $(this);
             if( ($that.data('info').id)==id ){
                $that.removeClass('icon-fxy-add');
                $('.rollback').trigger('click');
             }
        });        
    },
    inner: {
        initWholePage: function(){
            updata_topic(get_list_id());  //刷新专题列表  记录用户临时选择

            if (active_flag) {
                //Init.getPage('/event/specialEvent/pageCount');//刷新页码
                updata(1, 5, true);  //更新专题事件列表 
            }else{
                //Init.getPage('/event/specialEvent/pageCount',12);
                updata(1, 12, true);
            }

            Init.checkDate();//刷新图表
            


        },
        bindModule_add: function(){
            $('.topicList_btn_add').click(function(event) {
                /* Act on the event */
                if (flag_module_add) {
                    require.ensure([],function(e){
                        require('./jquery.reveal.js');
                        require('./jquery.tagsinput.js');
                            $('#Topic-area').tagsInput({
                               'height':'40px',
                               'width':'360px',
                              'defaultText':'增加地域',
                            });
                            $('#Topic-rules').tagsInput({
                               'height':'40px',
                               'width':'360px',
                              'defaultText':'增加规则',
                            });
                            $('.topicList_btn_add').trigger('click');
                    });
                    flag_module_add = false;
                } 
            });
            return this;
        },
        
    },
}

function event_addTopic(){  //添加专题
    $('.topicList_btn_add_save').click(function(event) {
        /* Act on the event */
        var Tname = $(".add-label input[name='Tname' ]").val();
        var Tarea = [];
        var Ttaps = [];
        $('#Topic-area_tagsinput span>span').each(function(index, el) {
            Tarea.push($(el).text().trim());
        });
        $('#Topic-rules_tagsinput span>span').each(function(index, el) {
            Ttaps.push($(el).text().trim());
        });
        if (Tname.length == 0 || Tarea.length == 0 ) {
            alert("请输入完整专题名和地域");
            return ;
        }
        else{
            $('.innerbox p:first-child>em').each(function(index, el) {
               if ($(el).text().trim() == Tname) {
                    alert("专题名重复！");
                    return;
                }
            })
        }

        var token = "Bearer "+localStorage.getItem("token");
        var obj = {
                id:0, //添加时传0
                name: Tname,//长度限制45
                region: Tarea,//长度限制45
                rules: Ttaps //长度限制255
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
                    //$('.rollback').trigger('click');
                    alert("添加成功！");
                }
                else{
                    error(XML);
                }
            }
        });
    }); 
}
function event_delTopic(){  //删除专题
    $('.topic-delete-btn').click(function(event) {
        /* Act on the event */
        var logo = [];
        var $that = $(this);
        logo.push($that[0].getAttribute('data-logo'));
        if (!confirm("确认删除 "+$that.siblings('em').text()+" 专题?")) {
            return;
        }
        var token = "Bearer "+localStorage.getItem("token");
        // $.each(goal,function(index, val){
        //      /* iterate through array or object */
        //         logo.push( $(val)[0].getAttribute('data-logo') );
        //         // $('.innerbox').filter(function(){
        //         //     return $(this).data('logo')==logo;
        //         // }).remove();
        // });
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
                    //$that.parents(".innerbox").remove();
                    Spe.inner.initWholePage();
                }else{
                    error(XML);
                }
            }
        });/*ajax*/
    });
}
function event_addClear(){
    $('.topicList_btn_add_clear').click(function(event) {
        /* Act on the event */
        $('#Topic-area').importTags('');
        $('#Topic-rules').importTags('');
        $('#g-Tname').val('');
    });
}
// function event_addTap(){  //添加专题标签
//     $('.topicList_addTap').click(function(event) {
//         /* Act on the event */
//         $('.add_input_right').append("<input type='text' name='tap' class='newTap'/>");
//         var width_num = 100 / $('.add_input_right input').length-2;
//         $('.add_input_right input').css('width',width_num+"%" );
//     });
// }
// function event_delTap(){   //删除专题标签
//     $('.topicList_delTap').click(function(event) {
//         /* Act on the event */
//         $('.add_input_right input:last()').remove();
//         var width_num = 100 / $('.add_input_right input').length-2;
//         $('.add_input_right input').css('width',width_num+"%" );
//     });
// }
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
                    $('.icon-fxy-add-hover').parents("td").siblings().eq(2).text(type);
                    $('.icon-fxy-add-hover').parents("td").siblings().eq(0).text(view);
                    $('.collect_flag').removeClass('icon-fxy-add-hover');
                    $('.collect_flag').addClass('icon-fxy-add');
                    Spe.reClass(id);
                    alert("归集成功");
                }else{
                    error(xml);
                }
            }
        });
    });
}
function event_on_toplic(){
    $('.add_radio').click(function(event) {
        /* Act on the event */
            if (active_flag) {
                updata(1, 5, true);  //更新专题事件列表 
            }else{
                updata(1, 12, true);
            }
    });
}

function get_list_id(){
    var ids = [];
    var  $radio = $('.add_radio');
    console.log($radio);
    $radio.each(function(index, el) {
        if ( $(el).prop('checked')) {
            ids.push($(el)[0].getAttribute('data-logo'));
        }
    })
    console.log(ids);
    return ids;
}
function event_hide(){
    $('.rollback').click(function(event) {
    /* Act on the event */
        $('.collect_flag').removeClass('icon-fxy-add-hover');
        $('.collect_flag').addClass('icon-fxy-add');   
        $('.readlyWrap').hide();
        $('.addWrap').hide();
        $(document).unbind('click');
        $('.newTap').remove();
        //$(".add_input input").val(" "); //清空所有输入框
        // while($('.add_input_right input').length<3){
        //     $('.add_input_right').append("<input type='text' name='tap'/>");
        // }
        // $('.add_input_right input').css('width',"30%" );
    });
}
/*内置功能方法*/


function updata_topic(arr=[]){  //获取专题列表
    var $temp = $('.chartSec-left-innerbox div');
    $temp.remove();
    var token = "Bearer "+localStorage.getItem("token");
    $.ajax({
        url: '/event/topic/list',
        type: 'GET',
        dataType: 'json',
        async: false,
        beforeSend:function(request) {
            request.setRequestHeader("Authorization", token);
        },
        success:function(data){
            $.each(data,function(index, val){
                 /* iterate through array or object */
                var $div = $("<div class='innerbox'></div>");
                var $p = $("<p></p>");
                $div.append("<p><em>"+val.name+"</em><i class='icon-fxy-delete topic-delete-btn' data-logo="+val.id+"></i></p>");
                $.each(val.region, function(index, el) {
                    $p.append("<span class='topLight'>"+ el+ "</span>");
                });
                $.each(val.rules, function(index, el){
                     /* iterate through array or object */
                     $p.append("<span>"+ el+ "</span>");
                });
                $div.append($p);
                $div.append("<input class='add_radio' data-logo="+val.id+" type='checkbox'/>");
                $('.chartSec-left-innerbox').append($div);
            });

            // if ($temp.length==0) {
            //     $('.add_radio').prop('checked', true);
            //     console.log($('.add_radio'));
            // }
            if (!arr.length) {
                $('.add_radio').prop('checked', true);
            }else{
                $('.add_radio').each(function(index, el) {
                    arr.forEach(function(x){
                        if ($(el)[0].getAttribute('data-logo')==x) {
                            $(el).prop('checked', true);
                        }
                    })
                });
            }
            event_on_toplic();
            event_delTopic();
        },
        error:function(XMLHttpRequest){
            if(XMLHttpRequest.status!=401){
               alert("列表数据获取失败");
            }
        }
    });
}


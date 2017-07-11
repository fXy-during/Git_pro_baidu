
var roleList = []
var RoMa = {
    init : function(){
        $('.control-section-admini').css({
            left: "-400px",
            opacity: 0
        });
        $('.control-section-fixpw').css({
            left: '400px',
            opacity: 0
        });
        $('.control-btn-manage').trigger('click');
        return this;
    },
    bindEvent : function(){
        event_active_manage();
        event_active_register();
        event_avtive_fixpw();

        event_get_roleList();
        event_delete();
        event_register();
        event_fixpw();
        return this;
    }
} 


// (function(){
//     // onRole();

    
    

    

//     //$('.control-btn-register').trigger('click');

//     


// /*  /event/user/roleList   用户列表 roleVIP roleNORMAL  */
// /*  /event/user/addUser  */
// /*  /event/user/changeRole  */
// })()


function event_register(){

    $('.control-label input[name=userID]').bind('focus keyup', function(event) {
        /* Act on the event */
        var $tap = $('.control-tap-name');
        var test = $(this).val();
        if(test.length>=2 && test.length<=16){
            $.each(roleList, function(index, val){
                console.log(val);
                console.log(test);
                if (val == test){
                    $tap.text('用户名重复').show();
                }
                else{
                    $tap.hide();
                }
            });
        }else{
            $tap.text('请输入2~16个字符').show();

        }
        
    });

    $('.control-label input[name=userPW]').bind('focus keyup', function(event) {
        /* Act on the event */
        var $tap = $('.control-tap-pw');
        if($(this).val().length>=2 && $(this).val().length<=16){
            $tap.hide();
        }else{
            $tap.text('请输入2~16个字符').show();
        }
    });

    $('.control-label input[name=userPW-re]').bind('focus keyup', function(event) {
        /* Act on the event */
        var $tap = $('.control-tap-repw');
        if ($(this).val().length ==0 ) {
            $tap.text("请再输入一次密码").show();
        }else{
            if( $(this).val() == $('.control-label input[name=userPW]').val() ){
                $tap.hide();
            }else{
                $tap.text("与上次一输入不一致").show();
            }
        }
    });



    $('.control-btn-role-save').click(function(event) {
        if (  $('.control-section-register i:visible').length != 0  ) {
            alert("请输入正确信息！");
            return;
        }
        var username = $('.control-label input[name=userID]').val();
        var pw = $('.control-label input[name=userPW]').val();
        var role = $('.control-role').text();
        if (role=="普通用户") {role="NORMAL";}
        else if(role=="特权用户"){role="VIP";}
        else{role="ADMIN";}
        var obj ={
            username : username,
            password : pw,
            role : role
        }
        var token = "Bearer "+localStorage.getItem("token");
        $.ajax({
            url: '/event/user/addUser',
            type: 'POST',
            data: JSON.stringify(obj),
            contentType: "application/json; charset=UTF-8",
            beforeSend:function(request) {
                request.setRequestHeader("Authorization", token);
            },
            complete: function(xml,msg){
                if (xml.status == 403) {
                    alert("用户名和admin重复！");
                }
                else if(xml.status ==200){
                    alert("注册成功！");
                    $('.control-label input').val("");
                    $('.control-btn-manage').trigger('click');
                }
                else{
                    alert("注册失败！");
                }
            }
        })
    });
    
}
function event_fixpw(){


    $('.control-label input[name=fixpw-new-re]').bind('focus keyup', function(event) {
        /* Act on the event */
        var $tap = $('.control-tap-fixpw-new-re');
        if ($(this).val().length ==0 ) {
            $tap.text("请再输入一次密码").show();
        }else{
            if( $(this).val() == $('.control-label input[name=fixpw-new]').val() ){
                $tap.hide();
            }else{
                $tap.text("与上次一输入不一致").show();
            }
        }
    });  

 
    $('.control-btn-fixpw-save').click(function(event) {
        /* Act on the event */
        if ($('.control-section-fixpw i:visible').length != 0) {
            alert("请输入正确信息！");
            return;
        }
        var prePw = $('input[name=fixpw-pre]').val();
        var newPw = $('input[name=fixpw-new]').val();
        var obj = {
            oldPassword : prePw,
            newPassword : newPw
        }
        var token = "Bearer "+localStorage.getItem("token");
        $.ajax({
            url: '/event/user/updatePwd',
            type: 'POST',
            dataType: 'JSON',
            contentType: "application/json; charset=UTF-8",
            data: JSON.stringify(obj),
            beforeSend:function(request) {
                request.setRequestHeader("Authorization", token);
            },
            complete: function(xml,msg){
                if (xml.status == 200 ) {
                    if (xml.responseText!="原始密码不匹配，请重新输入原始密码") {
                        alert("修改成功!");
                    }else{
                        alert(xml.responseText);
                    }
                }
                else{
                    error(xml);
                }
            }
        }) /*ajax*/  
    });

    $('.control-label input[name=fixpw-new]').bind('focus keyup', function(event) {
            var $tap = $('.control-tap-fixpw-new');
            if($(this).val().length>=2 && $(this).val().length<=16){
                $tap.hide();
            }else{
                $tap.text('请输入2~16个字符').show();
            }
    });
}
function event_get_roleList(){
    $('.control-btn-manage').click(function(event) {
        /* Act on the event */
        $('.ul-normal').children().remove();
        $('.ul-special').children().remove();
        var token = "Bearer "+localStorage.getItem("token");
        $.ajax({
            url: '/event/user/roleList',
            type: 'GET',
            dataType: 'JSON',
            beforeSend:function(request) {
                request.setRequestHeader("Authorization", token); 
            },
            success : function(data){
                $.each(data.roleNORMAL, function(index, val) {
                     /* iterate through array or object */
                     $('.ul-normal').append("<li><span class='width100'>"+val.username+"</span><span class='control-getpw'>"+val.password+"</span><span class='control-icon-container'><span class='changeRole icon-fxy-add'></span><span class='control-user-delete icon-fxy-delete'></span></span></li>");
                    roleList.push(val.username);
                });
                $.each(data.roleVIP, function(index, val) {
                     /* iterate through array or object */
                     $('.ul-special').append("<li><span class='width100'>"+val.username+"</span><span class='control-getpw'>"+val.password+"<span class='control-icon-container'><span class='changeRole icon-fxy-reduce'></span><span class='control-user-delete icon-fxy-delete'></span></span></li>");
                    roleList.push(val.username);
                });
                onRole();
                event_delete();
            },
            complete : function(xml,msg){
                if (xml.status != 200) {
                    error(xml);
                }
            }
        });//ajax
    });
}
function event_delete(){
    $('.control-user-delete').click(function(e) {
        /* Act on the event */
        var username = $(e.target).parents("li").children().eq(0).text();

        if (!confirm("确认删除 "+username+" 用户？")) {
            return;
        }
        var token = "Bearer "+localStorage.getItem("token");
        $.ajax({
            url: '/event/user/deleteUser/'+username,
            type: 'POST',
            beforeSend:function(request) {
                request.setRequestHeader("Authorization", token);
            },
            complete: function(xml,msg){
                if (xml.status==200) {
                    alert("删除成功！");
                    $('.control-btn-manage').trigger('click');
                }
                else{
                    console.log(msg)
                    error(xml);
                }
            }
        })/*ajax*/
    });
}
function event_active_manage(){
    $('.control-btn-manage').click(function(event) {
        /* Act on the event */
        initTri();
        $('.control-btn-manage').addClass('Onlight_control_title');

        $('.control-tri-two').addClass('Onlight_tri_bottem');
        $('.control-tri-thr').addClass('Onlight_tri_top');

        $('.control-section-admini').animate({
            left: 0,
            opacity : 1
        }, 500);

        $('.control-section-register').animate({
            left: "-400px",
            opacity : 0
        }, 500);

        $('.control-section-fixpw').animate({
            left: "400px",
            opacity: 0
        }, 500);

        $('#control-wrap').animate({height: "497px"}, 500);

        $('.control-section-admini').show();
        setTimeout(function(){
            $('.control-section-fixpw').hide();
            $('.control-section-register').hide();
        }, 400);

    });    
}
function event_active_register(){
    $('.control-btn-register').click(function(event) {
        /* Act on the event */
        initTri();
        $('.control-btn-register').addClass('Onlight_control_title');
        
        $('.control-tri-one').addClass('Onlight_tri_top');


        $('.control-section-admini').animate({
            left: "400px",
            opacity : 0
        }, 500);
        
        $('.control-section-register').animate({
            left: 0,
            opacity : 1
        }, 500);

        $('.control-section-fixpw').animate({
            left: "400px",
            opacity: 0
        }, 300);

        $('.control-section-register').show();
         $('#control-wrap').animate({height: "275px"}, 500);
        setTimeout(function(){
            $('.control-section-fixpw').hide();
            $('.control-section-admini').hide();
        }, 400);
    });   
}
function event_avtive_fixpw(){
    var username = localStorage.getItem('loginName');
    $('.control-fixpw-username').text(username);

    $('.control-btn-fixpw').click(function(event) {
        /* Act on the event */
        
        initTri();
        $('.control-btn-fixpw').addClass('Onlight_control_title');
        $('.control-tri-fou').addClass('Onlight_tri_bottem');

        $('.control-section-admini').animate({
            left: "-400px",
            opacity : 0
        }, 500);
        
        $('.control-section-register').animate({
            left: "-400px",
            opacity : 0
        }, 500);

        $('.control-section-fixpw').animate({
            left: 0,
            opacity: 1
        }, 500);

        $('.control-section-fixpw').show();
         $('#control-wrap').animate({height: "225px"}, 500);
        setTimeout(function(){
            $('.control-section-register').hide();
            $('.control-section-admini').hide();
        }, 400);
    });
}
/*内置功能方法*/
function onRole(){
    $('.changeRole').unbind('click');
    $('.changeRole').click(function(e) {
        /* Act on the event */
        var token = "Bearer "+localStorage.getItem("token");
        var type = $(e.target).parents('.control-flag').attr('data-type')=="special" ? "VIP" : "NORMAL";
        var username = $(e.target).parents("li").children().eq(0).text();
        var obj = {
            username : username,
            role : type
        }
        $.ajax({
            url: '/event/user/changeRole',
            type: 'POST',
            data: JSON.stringify(obj),
            beforeSend:function(request) {
                request.setRequestHeader("Authorization", token);
                request.setRequestHeader("Content-Type","application/json;charset=UTF-8");
            },
            success : function(msg){
                alert(msg);
                console.log(msg);
                var $tar = $(e.target).parents('li');
                if (type == "NORMAL") {
                    $tar.remove();
                    $('.ul-special').append($tar.children().find('.changeRole').removeClass('icon-fxy-add').addClass('icon-fxy-reduce').end().end());
                    onRole();
                }else{
                    $tar.remove();
                    $('.ul-normal').append($tar.children().find('.changeRole').removeClass('icon-fxy-reduce').addClass('icon-fxy-add').end().end());
                    onRole();
                }
            },
            complete : function(xml,msg){
                if (xml.status != 200) {
                    error(xml);
                    console.log(msg);
                }
                else{
                    console.log(xml);
                }
            }
        })
    });
}

function initTri(){
    $('.control-btn-register').removeClass('Onlight_control_title');
    $('.control-btn-fixpw').removeClass('Onlight_control_title');
    $('.control-btn-manage').removeClass('Onlight_control_title');

    $('.control-tri-top').removeClass('Onlight_tri_top');
    $('.control-tri-bottem').removeClass('Onlight_tri_bottem');
}
/*
    /event/user/updatePwd
    新 旧密码
 */
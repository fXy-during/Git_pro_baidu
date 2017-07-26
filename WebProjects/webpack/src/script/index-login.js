/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-01 15:37:20
 * @version $Id$
 */
import '../style/type-login.css';

// import error from './error.js';
// console.log(error);
var error = require('./error.js').getErrorObj();

$(document).ready(function() {
    $("#check").click(function(event) {
        /* Act on the event */
        var userName = $("input[name=name]").val();
        var pw = $("input[name=pw]").val();
        if (this.checked) {
            localStorage.setItem("loginName",userName);
            localStorage.setItem("loginPw",pw);
        }
        else{
            localStorage.setItem("loginName",null);
        }
    });

    localStorage.removeItem("token");  //token
    localStorage.removeItem("userName"); //用户名

    if(localStorage.getItem("loginName")!=null){
        $('input[name=name]').val(localStorage.getItem("loginName"));
        $('input[name=pw]').val(localStorage.getItem("loginPw"));
        $("#check").attr("checked",true);
    }
    $('.login_btn').click(function(event) {
        /* Act on the event */
        var id = $('input[name=name]').val();
        var pw = $('input[name=pw]').val();
        var obj = {
            username : id,
            password : pw
        };
        $.ajax({
            url: '/event/login',
            type: 'post',
            dataType: 'json',
            contentType:"application/json;charset=utf-8",
            data: JSON.stringify(obj),
            complete:function(XML,msg){
                if (msg=="success") {
                    var resp = JSON.parse(XML.responseText);
                    localStorage.setItem("token",resp.token);
                    localStorage.setItem("userName",resp.username);
                    console.log(localStorage.getItem("token"));
                    window.location.href="http://182.150.37.58:81/dist/Ana-test.html";
                }
                else{
                    error(XML);
                }
            }
        });/*ajax*/
    });/*click*/
});

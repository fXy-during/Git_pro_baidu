webpackJsonp([0],{

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.28.4@css-loader/index.js!../../node_modules/_postcss-loader@2.0.6@postcss-loader/lib/index.js!./reveal.css", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.28.4@css-loader/index.js!../../node_modules/_postcss-loader@2.0.6@postcss-loader/lib/index.js!./reveal.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "/*\t--------------------------------------------------\r\n\tReveal Modals\r\n\t-------------------------------------------------- */\r\n\t\t\r\n\t.reveal-modal-bg { \r\n\t\tposition: fixed; \r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\tbackground: #000;\r\n\t\tbackground: rgba(0,0,0,.8);\r\n\t\tz-index: 100;\r\n\t\tdisplay: none;\r\n\t\ttop: 0;\r\n\t\tleft: 0; \r\n\t\t}\r\n\t\r\n\t.reveal-modal {\r\n\t\tvisibility: hidden;\r\n\t\ttop: 100px; \r\n\t\tleft: 50%;\r\n\t\tmargin-left: -300px;\r\n\t\twidth: 520px;\r\n\t\t/*background: #eee url(modal-gloss.png) no-repeat -200px -80px;*/\r\n\t\tposition: absolute;\r\n\t\tz-index: 101;\r\n\t\tpadding: 30px 40px 34px;\r\n\t\tborder-radius: 5px;\r\n\t\t-moz-box-shadow: 0 0 10px rgba(0,0,0,.4);\r\n\t\t-webkit-box-shadow: 0 0 10px rgba(0,0,0,.4);\r\n\t\t-box-shadow: 0 0 10px rgba(0,0,0,.4);\r\n\t\t}\r\n\t\t\r\n\t.reveal-modal.small \t\t{ width: 200px; margin-left: -140px;}\r\n\t.reveal-modal.medium \t\t{ width: 400px; margin-left: -240px;}\r\n\t.reveal-modal.large \t\t{ width: 600px; margin-left: -340px;}\r\n\t.reveal-modal.xlarge \t\t{ width: 800px; margin-left: -440px;}\r\n\t\r\n\t.reveal-modal .close-reveal-modal {\r\n\t\tfont-size: 22px;\r\n\t\tline-height: .5;\r\n\t\tposition: absolute;\r\n\t\ttop: 8px;\r\n\t\tright: 11px;\r\n\t\tcolor: #aaa;\r\n\t\ttext-shadow: 0 -1px 1px rbga(0,0,0,.6);\r\n\t\tfont-weight: bold;\r\n\t\tcursor: pointer;\r\n\t\t} \r\n\r\n", ""]);

// exports


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.28.4@css-loader/index.js!../../node_modules/_postcss-loader@2.0.6@postcss-loader/lib/index.js!./type-register&manage.css", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.28.4@css-loader/index.js!../../node_modules/_postcss-loader@2.0.6@postcss-loader/lib/index.js!./type-register&manage.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "* {\n    margin:0;\n}\nul li {\n    list-style: none;\n}\n\n.control-head {\n    position: relative;\n    width: 100%;\n    height: 36px;\n    border-radius: 4px;\n    background-color: #d6d6d6;\n}\n.control-btn-register,.control-btn-manage,.control-btn-fixpw{\n    display: inline-block;\n    width: 33%;\n    height: 36px;\n    line-height: 36px;\n    text-align: center;\n    cursor: pointer;\n    font-size: 18px;\n}\n.control-tri-top,.control-tri-bottem {\n    display: inline-block;\n    position: absolute;\n    width: 0;\n    height: 0;\n}\n.control-tri-top {\n    border-top:36px solid #d6d6d6;\n    border-right: 60px solid transparent;\n}\n.control-tri-bottem {\n    border-top:36px solid transparent;\n    border-right: 60px solid #d6d6d6;\n}\n.control-tri-one,.control-tri-two{\n    left: 135px;\n}\n.control-tri-thr,.control-tri-fou{\n    left: 295px;\n}\n.Onlight_tri_top {\n    border-top-color: #004c5d;\n}\n.Onlight_tri_bottem {\n    border-right-color: #004c5d;\n}\n.Onlight_control_title {\n    background-color:#004c5d;\n    color:#fff;\n}\n.control-head span:hover {\n    text-decoration: underline;\n}\n.control-label{\n    margin:10px 0;\n}\n.control-label label {\n    width: 90px;\n    margin-left: 80px;\n    display: inline-block;\n    font-size: 17px;\n}\n.control-label input {\n    width:200px;\n    height: 20px;\n    border: none;\n    border-bottom:2px solid #004c5d;\n    outline: none;\n    font-size: 15px;\n    text-align: center;\n}\n.control-section-register,.control-section-admini,.control-section-fixpw{\n    position: absolute;\n    width: 500px;\n}\n.control-section-register{\n    height: 238px;\n}\n.control-section-admini{\n    height: 460px;\n}\n.control-section-fixpw{\n    height: 188px;\n}\n.control-btn-register {\n    float: left;\n}\n.control-btn-manage {\n    /*margin-left: -52px;*/\n}\n.control-btn-fxypw{\n    float: right;\n}\n.control-normal,.control-special {\n    width: 355px;\n    height: 160px;\n    padding: 5px 20px;\n    margin: 10px auto;\n    border-top: 2px solid #004c5d;\n    border-bottom: 2px solid #004c5d;\n    -webkit-overflow: overlay ;\n    -ms-overflow: auto;\n    -moz-overflow: auto;\n    -o-overflow: auto;\n    overflow: auto;\n}\n.control-section-admini label {\n    display: inline-block;\n    margin-left: 30px;\n    font-size: 18px;\n    font-weight: 500;\n}\n.ul-normal li,.ul-special li{\n    margin:3px 0;\n    height: 25px;\n    line-height: 25px;\n    position: relative;\n}\n.control-icon-container{\n    float: right;\n    display: inline-block;\n    height: 25px;\n    width: 50px;\n    position: absolute;\n    right: 0;\n}\n.control-user-delete{\n    float: right;\n}\n/*.control-icon-down{\n    background: url(\"images/ui_reduce.png\");\n}\n.control-icon-up{\n    background: url(images/ui_add.png);\n}*/\n.control-btn {\n    position: absolute;\n    height: 22px;\n    font-size: 15px;\n}\n.control-btn-role-save,.control-btn-fixpw-save{\n    left: 383px;\n    top: 83%;\n}\n/*.control-btn-fixpw-save{\n    left:383px;\n    top:90%;\n}*/\n.control-tap{\n    font-size: 12px;\n    color: red;\n    display: none;\n}\n.control-tap:before{\n    content: \"*\";\n}\n.control-getpw{\n    font-size: 13px;\n    margin-left: 35px;\n}\n.control-btn-fixpw{\n    float: right;\n}", ""]);

// exports


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(28);

(function ($) {

	/*---------------------------
  Defaults for Reveal
 ----------------------------*/

	/*---------------------------
  Listener for data-reveal-id attributes
 ----------------------------*/
	$('a[data-reveal-id]').on('click', function (e) {
		e.preventDefault();
		var modalLocation = $(this).attr('data-reveal-id');
		$('#' + modalLocation).reveal($(this).data());
	});

	/*---------------------------
  Extend and Execute
 ----------------------------*/

	$.fn.reveal = function (options) {

		var defaults = {
			animation: 'fadeAndPop', //fade, fadeAndPop, none
			animationspeed: 300, //how fast animtions are
			closeonbackgroundclick: true, //if you click background will modal close?
			dismissmodalclass: 'close-reveal-modal' //the class of a button or element that will close an open modal
		};

		//Extend dem' options
		var options = $.extend({}, defaults, options);

		return this.each(function () {

			/*---------------------------
    Global Variables
   ----------------------------*/
			var modal = $(this),
			    topMeasure = parseInt(modal.css('top')),
			    topOffset = modal.height() + topMeasure,
			    locked = false,
			    modalBG = $('.reveal-modal-bg');

			/*---------------------------
    Create Modal BG
   ----------------------------*/
			if (modalBG.length == 0) {
				modalBG = $('<div class="reveal-modal-bg" />').insertAfter(modal);
			}

			/*---------------------------
    Open & Close Animations
   ----------------------------*/
			//Entrance Animations
			modal.bind('reveal:open', function () {
				modalBG.unbind('click.modalEvent');
				$('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if (!locked) {
					lockModal();
					if (options.animation == "fadeAndPop") {
						modal.css({ 'top': $(document).scrollTop() - topOffset, 'opacity': 0, 'visibility': 'visible' });
						modalBG.fadeIn(options.animationspeed / 2);
						modal.delay(options.animationspeed / 2).animate({
							"top": $(document).scrollTop() + topMeasure + 'px',
							"opacity": 1
						}, options.animationspeed, unlockModal());
					}
					if (options.animation == "fade") {
						modal.css({ 'opacity': 0, 'visibility': 'visible', 'top': $(document).scrollTop() + topMeasure });
						modalBG.fadeIn(options.animationspeed / 2);
						modal.delay(options.animationspeed / 2).animate({
							"opacity": 1
						}, options.animationspeed, unlockModal());
					}
					if (options.animation == "none") {
						modal.css({ 'visibility': 'visible', 'top': $(document).scrollTop() + topMeasure });
						modalBG.css({ "display": "block" });
						unlockModal();
					}
				}
				modal.unbind('reveal:open');
			});

			//Closing Animation
			modal.bind('reveal:close', function () {
				if (!locked) {
					lockModal();
					if (options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top": $(document).scrollTop() - topOffset + 'px',
							"opacity": 0
						}, options.animationspeed / 2, function () {
							modal.css({ 'top': topMeasure, 'opacity': 1, 'visibility': 'hidden' });
							unlockModal();
						});
					}
					if (options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity": 0
						}, options.animationspeed, function () {
							modal.css({ 'opacity': 1, 'visibility': 'hidden', 'top': topMeasure });
							unlockModal();
						});
					}
					if (options.animation == "none") {
						modal.css({ 'visibility': 'hidden', 'top': topMeasure });
						modalBG.css({ 'display': 'none' });
					}
				}
				modal.unbind('reveal:close');
			});

			/*---------------------------
    Open and add Closing Listeners
   ----------------------------*/
			//Open Modal Immediately
			modal.trigger('reveal:open');

			//Close Modal Listeners
			var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
				modal.trigger('reveal:close');
			});

			if (options.closeonbackgroundclick) {
				modalBG.css({ "cursor": "pointer" });
				modalBG.bind('click.modalEvent', function () {
					modal.trigger('reveal:close');
				});
			}
			$('body').keyup(function (e) {
				if (e.which === 27) {
					modal.trigger('reveal:close');
				} // 27 is the keycode for the Escape key
			});

			/*---------------------------
    Animations Locks
   ----------------------------*/
			function unlockModal() {
				locked = false;
			}
			function lockModal() {
				locked = true;
			}
		}); //each call
	}; //orbit plugin call
})(jQuery);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(30);

__webpack_require__(28);

var roleList = [];
var RoMa = {
    init: function init() {
        $('.control-section-admini').css({
            left: "-400px",
            opacity: 0
        });
        $('.control-section-fixpw').css({
            left: '400px',
            opacity: 0
        });
        return this;
    },
    bindEvent: function bindEvent() {
        $('.trigger_user_list').click(function (event) {
            /* Act on the event */
            $('.control-btn-manage').trigger('click');
        });
        event_active_manage();
        event_active_register();
        event_active_fixpw();
        event_get_roleList();
        event_delete();
        event_register();
        event_fixpw();
        return this;
    }

    // (function(){
    //     // onRole();


    //     //$('.control-btn-register').trigger('click');

    //     


    // /*  /event/user/roleList   用户列表 roleVIP roleNORMAL  */
    // /*  /event/user/addUser  */
    // /*  /event/user/changeRole  */
    // })()


};function event_register() {

    $('.control-label input[name=userID]').bind('focus keyup', function (event) {
        /* Act on the event */
        var $tap = $('.control-tap-name');
        var test = $(this).val();
        if (test.length >= 2 && test.length <= 16) {
            $.each(roleList, function (index, val) {
                if (val == test) {
                    $tap.text('用户名重复').show();
                } else {
                    $tap.hide();
                }
            });
        } else {
            $tap.text('请输入2~16个字符').show();
        }
    });

    $('.control-label input[name=userPW]').bind('focus keyup', function (event) {
        /* Act on the event */
        var $tap = $('.control-tap-pw');
        if ($(this).val().length >= 2 && $(this).val().length <= 16) {
            $tap.hide();
        } else {
            $tap.text('请输入2~16个字符').show();
        }
    });

    $('.control-label input[name=userPW-re]').bind('focus keyup', function (event) {
        /* Act on the event */
        var $tap = $('.control-tap-repw');
        if ($(this).val().length == 0) {
            $tap.text("请再输入一次密码").show();
        } else {
            if ($(this).val() == $('.control-label input[name=userPW]').val()) {
                $tap.hide();
            } else {
                $tap.text("与上次一输入不一致").show();
            }
        }
    });

    $('.control-btn-role-save').click(function (event) {
        if ($('.control-section-register i:visible').length != 0) {
            alert("请输入正确信息！");
            return;
        }
        var username = $('.control-label input[name=userID]').val();
        var pw = $('.control-label input[name=userPW]').val();
        var _role = $('.control-role').text();
        if (_role == "普通用户") {
            _role = "NORMAL";
        } else if (_role == "特权用户") {
            _role = "VIP";
        } else {
            _role = "ADMIN";
        }
        var obj = {
            username: username,
            password: pw,
            role: _role
        };
        var token = "Bearer " + localStorage.getItem("token");
        $.ajax({
            url: '/event/user/addUser',
            type: 'POST',
            data: JSON.stringify(obj),
            contentType: "application/json; charset=UTF-8",
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("Authorization", token);
            },
            complete: function complete(xml, msg) {
                if (xml.status == 403) {
                    alert("用户名和admin重复！");
                } else if (xml.status == 200) {
                    alert("注册成功！");
                    $('.control-label input').val("");
                    $('.control-btn-manage').trigger('click');
                } else {
                    alert("注册失败！");
                }
            }
        });
    });
}
function event_fixpw() {

    $('.control-label input[name=fixpw-new-re]').bind('focus keyup', function (event) {
        /* Act on the event */
        var $tap = $('.control-tap-fixpw-new-re');
        if ($(this).val().length == 0) {
            $tap.text("请再输入一次密码").show();
        } else {
            if ($(this).val() == $('.control-label input[name=fixpw-new]').val()) {
                $tap.hide();
            } else {
                $tap.text("与上次一输入不一致").show();
            }
        }
    });

    $('.control-btn-fixpw-save').click(function (event) {
        /* Act on the event */
        if ($('.control-section-fixpw i:visible').length != 0) {
            alert("请输入正确信息！");
            return;
        }
        var prePw = $('input[name=fixpw-pre]').val();
        var newPw = $('input[name=fixpw-new]').val();
        var obj = {
            oldPassword: prePw,
            newPassword: newPw
        };
        var token = "Bearer " + localStorage.getItem("token");
        $.ajax({
            url: '/event/user/updatePwd',
            type: 'POST',
            dataType: 'JSON',
            contentType: "application/json; charset=UTF-8",
            data: JSON.stringify(obj),
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("Authorization", token);
            },
            complete: function complete(xml, msg) {
                if (xml.status == 200) {
                    if (xml.responseText != "原始密码不匹配，请重新输入原始密码") {
                        alert("修改成功!");
                    } else {
                        alert(xml.responseText);
                    }
                } else {
                    error(xml);
                }
            }
        }); /*ajax*/
    });

    $('.control-label input[name=fixpw-new]').bind('focus keyup', function (event) {
        var $tap = $('.control-tap-fixpw-new');
        if ($(this).val().length >= 2 && $(this).val().length <= 16) {
            $tap.hide();
        } else {
            $tap.text('请输入2~16个字符').show();
        }
    });
}
function event_get_roleList() {
    $('.control-btn-manage').click(function (event) {
        /* Act on the event */
        $('.ul-normal').children().remove();
        $('.ul-special').children().remove();
        var token = "Bearer " + localStorage.getItem("token");
        $.ajax({
            url: '/event/user/roleList',
            type: 'GET',
            dataType: 'JSON',
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("Authorization", token);
            },
            success: function success(data) {
                $.each(data.roleNORMAL, function (index, val) {
                    /* iterate through array or object */
                    $('.ul-normal').append("<li><span class='width100'>" + val.username + "</span><span class='control-getpw'>" + val.password + "</span><span class='control-icon-container'><span class='changeRole icon-fxy-add'></span><span class='control-user-delete icon-fxy-delete'></span></span></li>");
                    roleList.push(val.username);
                });
                $.each(data.roleVIP, function (index, val) {
                    /* iterate through array or object */
                    $('.ul-special').append("<li><span class='width100'>" + val.username + "</span><span class='control-getpw'>" + val.password + "<span class='control-icon-container'><span class='changeRole icon-fxy-reduce'></span><span class='control-user-delete icon-fxy-delete'></span></span></li>");
                    roleList.push(val.username);
                });
                onRole();
                event_delete();
            },
            complete: function complete(xml, msg) {
                if (xml.status != 200) {
                    error(xml);
                }
            }
        }); //ajax
    });
}
function event_delete() {
    $('.control-user-delete').click(function (e) {
        /* Act on the event */
        var username = $(e.target).parents("li").children().eq(0).text();

        if (!confirm("确认删除 " + username + " 用户？")) {
            return;
        }
        var token = "Bearer " + localStorage.getItem("token");
        $.ajax({
            url: '/event/user/deleteUser/' + username,
            type: 'POST',
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("Authorization", token);
            },
            complete: function complete(xml, msg) {
                if (xml.status == 200) {
                    alert("删除成功！");
                    $('.control-btn-manage').trigger('click');
                } else {
                    console.log(msg);
                    error(xml);
                }
            }
        }); /*ajax*/
    });
}
function event_active_manage() {
    $('.control-btn-manage').click(function (event) {
        /* Act on the event */
        initTri();
        $('.control-btn-manage').addClass('Onlight_control_title');

        $('.control-tri-two').addClass('Onlight_tri_bottem');
        $('.control-tri-thr').addClass('Onlight_tri_top');

        $('.control-section-admini').animate({
            left: 0,
            opacity: 1
        }, 500);

        $('.control-section-register').animate({
            left: "-400px",
            opacity: 0
        }, 500);

        $('.control-section-fixpw').animate({
            left: "400px",
            opacity: 0
        }, 500);

        $('#control-wrap').animate({ height: "497px" }, 500);

        $('.control-section-admini').show();
        setTimeout(function () {
            $('.control-section-fixpw').hide();
            $('.control-section-register').hide();
        }, 400);
    });
}
function event_active_register() {
    $('.control-btn-register').click(function (event) {
        /* Act on the event */
        initTri();
        $('.control-btn-register').addClass('Onlight_control_title');

        $('.control-tri-one').addClass('Onlight_tri_top');

        $('.control-section-admini').animate({
            left: "400px",
            opacity: 0
        }, 500);

        $('.control-section-register').animate({
            left: 0,
            opacity: 1
        }, 500);

        $('.control-section-fixpw').animate({
            left: "400px",
            opacity: 0
        }, 300);

        $('.control-section-register').show();
        $('#control-wrap').animate({ height: "275px" }, 500);
        setTimeout(function () {
            $('.control-section-fixpw').hide();
            $('.control-section-admini').hide();
        }, 400);
    });
}
function event_active_fixpw() {
    var username = localStorage.getItem('loginName');
    $('.control-fixpw-username').text(username);

    $('.control-btn-fixpw').click(function (event) {
        /* Act on the event */

        initTri();
        $('.control-btn-fixpw').addClass('Onlight_control_title');
        $('.control-tri-fou').addClass('Onlight_tri_bottem');

        $('.control-section-admini').animate({
            left: "-400px",
            opacity: 0
        }, 500);

        $('.control-section-register').animate({
            left: "-400px",
            opacity: 0
        }, 500);

        $('.control-section-fixpw').animate({
            left: 0,
            opacity: 1
        }, 500);

        $('.control-section-fixpw').show();
        $('#control-wrap').animate({ height: "225px" }, 500);
        setTimeout(function () {
            $('.control-section-register').hide();
            $('.control-section-admini').hide();
        }, 400);
    });
}
/*内置功能方法*/
function onRole() {
    $('.changeRole').unbind('click');
    $('.changeRole').click(function (e) {
        /* Act on the event */
        var token = "Bearer " + localStorage.getItem("token");
        var type = $(e.target).parents('.control-flag').attr('data-type') == "special" ? "VIP" : "NORMAL";
        var username = $(e.target).parents("li").children().eq(0).text();
        var obj = {
            username: username,
            role: type
        };
        $.ajax({
            url: '/event/user/changeRole',
            type: 'POST',
            data: JSON.stringify(obj),
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("Authorization", token);
                request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            },
            success: function success(msg) {
                alert(msg);
                console.log(msg);
                var $tar = $(e.target).parents('li');
                if (type == "NORMAL") {
                    $tar.remove();
                    $('.ul-special').append($tar.children().find('.changeRole').removeClass('icon-fxy-add').addClass('icon-fxy-reduce').end().end());
                    onRole();
                } else {
                    $tar.remove();
                    $('.ul-normal').append($tar.children().find('.changeRole').removeClass('icon-fxy-reduce').addClass('icon-fxy-add').end().end());
                    onRole();
                }
            },
            complete: function complete(xml, msg) {
                if (xml.status != 200) {
                    error(xml);
                    console.log(msg);
                } else {
                    console.log(xml);
                }
            }
        });
    });
}

function initTri() {
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

module.exports = {
    getRoMaObj: function getRoMaObj() {
        return RoMa;
    }
};

/***/ })

});
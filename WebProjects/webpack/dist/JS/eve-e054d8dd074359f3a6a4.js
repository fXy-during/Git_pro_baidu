/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		4: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "JS/" + chunkId + "-" + {"0":"748e269247f9c4b4e4de","1":"b4f68998201e7c9273dc"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * initData  : getChartData
 * changeSelect ： On_Select
 * 
 *
 *
 *  On_  初始化组件
 * 
 */ /*
    *
    *   Global Variable
    */
window.currPage = 1; //当前页数
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
    getChartData: function getChartData(st, et, source_type, _table) {
        /*获取折线图数据并绘制图形*/
        var chart = echarts.init(document.getElementById("main"));
        var FLLOW_xAxis = [];
        var FLLOW_yAxis = [];
        var POST_xAxis = [];
        var POST_yAxis = [];
        var token = "Bearer " + localStorage.getItem("token");
        $('.startTime').val(st);
        $('.endTime').val(et);
        et = Init.format(new Date(et).getTime(), "MM/dd/yyyy");
        st = Init.format(new Date(st).getTime(), "MM/dd/yyyy");
        chart.showLoading({
            text: '数据获取中',
            maskColor: '#4c4c4c',
            textColor: '#fff'
        });
        $.ajax({
            url: '/event/chart',
            //url: 'http://127.0.0.1:8888/' + new Date().getTime(),
            type: 'get',
            dataType: 'json',
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("Authorization", token);
            },
            data: {
                source: '西南石油大学',
                //data : source_type,
                data: "双折线图",
                beginTime: st,
                endTime: et,
                table: _table
            },
            success: function success(date) {
                chart.hideLoading();

                $.each(date.followCountPoints, function (index, val) {
                    FLLOW_xAxis.push(val.x.slice(-5));
                    FLLOW_yAxis.push(val.y);
                });
                $.each(date.postCountPoints, function (index, val) {
                    POST_xAxis.push(val.x.slice(-5));
                    POST_yAxis.push(val.y);
                });

                initEchart(FLLOW_xAxis, FLLOW_yAxis, POST_xAxis, POST_yAxis, chart);
            },
            error: function error(xhr) {
                if (xhr.status == 400) {
                    alert("日期错误或者没有相关数据");
                } else {
                    alert("请求失败!");
                }
            }
        });
        return this;
    },
    getPackage: function getPackage() {
        On_reporter(); /*初始化生成报表组件*/
        //On_Select();   /*      下拉框*/
        On_UserHead(); /*      用户信息头部*/

        $(".chart_date_input").datepicker(); //初始日期组件
        return this;
    },
    getPage: function getPage(uri, row) {
        /*获取总页数并初始化页码（选中第一页）*/
        var $pageWrap = $(".page_wrap");
        $pageWrap.children().remove();
        $pageWrap.append('<div class="zxf_pagediv"></div>');
        //重置事件绑定
        var token = "Bearer " + localStorage.getItem("token");
        var more = 0;
        if (arguments.length == 2) {
            more = row - 5;
        }
        $.ajax({
            url: uri,
            type: 'get',
            dataType: 'json',
            data: {
                more: more
            },
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("Authorization", token);
            },
            success: function success(page) {
                window.sumPage = page;
                $(".zxf_pagediv").createPage({
                    pageNum: page, //总页码
                    current: 1, //当前页
                    shownum: 9, //分页数
                    activepaf: "",
                    backfun: function backfun(e) {
                        if (!active_flag) {
                            updata(e.current, 12);
                        } else {
                            updata(e.current);
                        }
                    }
                });
            },
            fail: function fail() {
                alert("总页数请求失败");
            }
        });
        return this;
    },
    userCheck: function userCheck() {
        var token = localStorage.getItem("token");
        var check_flag = true;
        if (token == null) {
            confirm("请登录！");
            window.location.href = "http://182.150.37.58:81/dist";
            check_flag = false;
        }
        return check_flag;
        return false;
    },
    bindEvent: function bindEvent() {
        gevent_select(); /*绑定下拉框事件*/
        On_Timebtn(); /*綁定日期选择事件*/
        return this;
    },
    format: function format(mTime, mat) {
        if (arguments.length == 1) {
            var format = "MM-dd hh:mm"; //默认日期格式
        } else {
            var format = mat;
        }
        if (mTime == null) {
            return " ";
        }
        var time = new Date(mTime);
        var o = {
            "M+": time.getMonth() + 1, //month
            "d+": time.getDate(), //day
            "h+": time.getHours(), //hour
            "m+": time.getMinutes(), //minute
            "s+": time.getSeconds(), //second
            "q+": Math.floor((time.getMonth() + 3) / 3), //quarter
            "S": time.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }return format;
    },
    bindModule_RoMa: function bindModule_RoMa() {
        $('.trigger_user_list').click(function (event) {
            /* Act on the event */
            if (flag_module_roma) {
                __webpack_require__.e/* require.ensure */(0).then((function (e) {
                    __webpack_require__(6);
                    var _RoMa = __webpack_require__(9).getRoMaObj();
                    _RoMa.bindEvent().init();
                    $('.trigger_user_list').trigger('click');
                }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                flag_module_roma = false;
            }
        });
        return this;
    },
    bindModule_Act: function bindModule_Act() {
        $('.active-up').click(function (event) {
            /* Act on the event */
            if (flag_module_act) {
                __webpack_require__.e/* require.ensure */(1).then((function (e) {
                    var _Act = __webpack_require__(10).getActiveObj();
                    _Act.bindEvent();
                    $('.active-up').trigger('click');
                }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                flag_module_act = false;
            }
        });
        return this;
    },
    checkDate: function checkDate() {
        var startTime = $('.startTime').val(); //开始时间
        var endTime = $('.endTime').val(); //结束时间
        var source_type = $('#source_name').text();
        var table = $(".wrap")[0].getAttribute('data-table'); //
        if (startTime != "" && endTime != "") {
            var et = endTime.substr(0, 4) + endTime.substr(5, 2) + endTime.substr(8, 2);
            var st = startTime.substr(0, 4) + startTime.substr(5, 2) + startTime.substr(8, 2);
            if (Number(et) - Number(st) > 0) {
                Init.getChartData(startTime, endTime, source_type, table);
                //alert("日期选择正确");
            } else {
                alert("日期选择错误");
            }
        }
    },
    signOut: function signOut(flag) {
        if (flag) {
            if (confirm("确认注销,并返回登录界面？")) {
                localStorage.removeItem("userName");
                localStorage.removeItem("token");
                window.location.href = "http://182.150.37.58:81/dist";
            }
        } else {
            localStorage.removeItem("userName");
            localStorage.removeItem("token");
            window.location.href = "http://182.150.37.58:81/dist";
        }
    }
};

function format(mTime, mat) {} //将毫秒时间时间格式化为mat

/**/

function gevent_select() {
    hideOnlight();
    $(".select_drop").hide();

    $('.select_btn').click(function (e) {
        /* 鼠标点击事件 */
        var $ul = $(e.currentTarget).find("ul");
        if (!$ul.is(":animated")) {
            if ($ul.css('display') == "none") {
                $ul.slideDown(150);
            } else {
                $ul.slideUp(150);
            }
        }
    });
    $(".select_btn").hover(function (e) {
        /* 鼠标悬浮事件 */
        e.stopPropagation;
        var $ul = $(e.currentTarget).find("ul");
        if (!$ul.is(":animated")) {
            $ul.slideDown(150);
        }
    }, function (e) {
        /* 鼠标离开事件 */
        e.stopPropagation;
        $(e.currentTarget).find("ul").slideUp(150);
        // var $ul = $(e.currentTarget).find("ul");
        // if ( !$ul.is(":animated") ){
        // }
    });
    $(".select_drop li").click(function (e) {
        $(e.target).parent().siblings(".select_tap").text($(e.target).text());
        $(".select_btn").trigger('mouseleave');
        hideOnlight();
    }); //选中li即显示
}

function On_Select() {
    /*初始化下拉框 无事件注册*/
    var type = new Array();

    type["微博"] = ["微博数据来源1", "微博数据来源2", "微博数据来源3"];
    type["微信"] = ["微信数据来源1", "微信数据来源2", "微信数据来源3"];
    type["百度贴吧"] = ["发帖量", "跟帖量"];
    if ($('.select_type').children().length == 0) {
        for (var tap in type) {
            $('.select_type').append("<li>" + tap + "</li>");
        }
    }

    var typeName = $('.source_type').text();
    $(".source_name_ul").children().remove();
    for (var ver in type[typeName]) {
        $(".source_name_ul").append("<li>" + type[typeName][ver] + "</li>");
    }

    $('#source_name').text($('.source_name_ul li:first-child').text()); // 统计量

    hideOnlight(); //隐藏选中项


    $(".select_type li").click(function (event) {
        On_Select();
    }); //数据来源 点击切换数据类型
    $(".source_name_ul li").click(function (event) {
        Init.checkDate();
    });
    // var source = document.getElementById("source_name");
    // source.options.length = 0 ;
    // for(var ver in type[typeName]){
    //     source.options.add(new Option(type[typeName][ver],ver+1));
    // }
}
function On_reporter() {
    //初始化月份选择、绑定事件
    var $mouth_wrap = $("<tbody></tbody>");
    var $tr;
    for (var i = 1, j = 2; j <= 12; i++, j++) {
        if (i == 1 || i == 5 || i == 9) {
            $tr = $('<tr></tr>');
            $mouth_wrap.append($tr);
        }
        $tr.append("<td data-month=" + i + ">" + i + "-" + j + "月</td>");
    }
    $(".toTable_month_table").append($mouth_wrap);
    currMonth();
    $('.toTable_month_table tr td').click(function (event) {
        /* 月份选择 */
        $('.toTable_month_table tr td').removeClass('toTable_month_onlight');
        $(this).addClass('toTable_month_onlight');
    });
    $(".toTable").click(function (event) {
        /* 显示时间段选择框 */
        $('.toTable_month').fadeIn(200);
        popUps("toTable_month");
    });
    var _year = true;
    $('.toTable_month_year').click(function (event) {
        /* 切换年份 */
        if (_year) {
            $(this).text("2016").removeClass('year_17').addClass('year_16');
            _year = !_year;
        } else {
            $(this).text("2017").removeClass('year_16').addClass('year_17');
            _year = !_year;
        }
    });

    $('.initForm').click(function (event) {
        /* 下载文档 */
        var token = "Bearer " + localStorage.getItem("token");
        var _month = $(".toTable_month_onlight").attr("data-month");
        var year = _year ? 2017 : 2016;
        var url = "/event/report/" + year + "/" + _month;
        var fileName = "西南石油大学" + year + "年" + _month + "-" + (_month + 1) + "月舆情报表"; //
        $.ajax({
            url: '/event/report/permission',
            type: 'GET',
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("Authorization", token);
            },
            success: function success(data) {
                var a = document.createElement('a');
                url = url + "?permission=" + data;
                a.setAttribute('href', url);
                a.setAttribute('download', fileName);
                a.click();
                $(a).remove();
            },
            complete: function complete(xml) {
                if (xml.status == 403) {
                    alert("无权操作");
                } else if (xml.status == 200) {
                    return;
                } else {
                    error(xml);
                }
            }
        });
    });
}
function On_UserHead() {
    /*初始化用户头部信息*/
    var role = localStorage.getItem('role') || 'ADMIN';
    var userRole;
    if (role == "VIP") {
        userRole = "特权用户";
    } else if (role == "ADMIN") {
        userRole = "管理员";
    } else {
        userRole = "普通用户";
    }

    var $user = $('.header_user');

    var userName = localStorage.getItem("userName");
    $user.append("<span>欢迎" + userRole + ": " + userName + " </span>");
    $user.append("<span><a href='javascript:void(0);' class='g-signout'>注销</a></span>");
    if (role == "ADMIN") {
        $user.append("<a href='javascript:void(0);' data-reveal-id='control-wrap' class='big-link trigger_user_list' data-animation='fade'>权限管理</a>");
    }
    //
    //
    //
    //
    //
    //
    $('.chart_date_input').keydown(function (event) {
        /* Act on the event */
        return false;
    });
}
function On_Timebtn() {

    $('.chart_date_input').change(function (event) {
        /* Act on the event */
        Init.checkDate();
    });
    $('.g-currMonth').click(function (event) {
        /* Act on the event */
        currMonth();
    });
    $('.g-signout').click(function (event) {
        /* Act on the event */
        Init.signOut();
    });
}

/********** 内嵌功能方法 *************/

/*日期选择*/
function checkDate() {}
//图表初始化
function initEchart(F_x, F_y, P_x, P_y, chart) {
    var maxY = eval("Math.max(" + F_y.toString() + ")") > eval("Math.max(" + P_y.toString() + ")") ? eval("Math.max(" + F_y.toString() + ")") : eval("Math.max(" + P_y.toString() + ")");
    var MaxY = Math.ceil((maxY + maxY / 4) / 10) * 10;

    var option = {
        legend: {
            left: "2%",
            data: ['发帖量', '跟帖量'],
            show: true
        },
        grid: {
            top: "40px",
            bottom: '10%',
            left: '3%',
            right: '3%'
        },
        tooltip: {
            show: true,
            trigger: 'axis'
        },
        toolbox: {
            right: "2%",
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                magicType: {
                    show: true,
                    type: ['stack', 'tiled', 'bar', 'line']
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        xAxis: {
            type: 'category',
            data: F_x,
            boundaryGap: true,
            axisLine: { lineStyle: { color: '#777' } },
            //interval:2,
            axisTick: { //x轴刻度
                interval: 0
            },
            // min: 0,
            // max: 21,
            axisLabel: { //x轴标签
                //interval:2,
                textStyle: {
                    color: '#000',
                    fontSize: 12
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
        series: [{
            markPoint: {
                data: [{ type: 'max', name: '最大值' }]
            },
            name: "跟帖量",
            type: 'line',
            lineStyle: { normal: { color: '#145861', width: 2 } },
            itemStyle: { normal: { color: '#004c5d' } },
            data: F_y,
            markLine: {
                data: [{ type: 'average', name: '平均值' }]
            },
            areaStyle: {
                normal: { /* 蓝色 */
                    alpha: 0.5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: '#f2f5f2'
                    }, {
                        offset: 0.5,
                        color: '#65c8d0'
                    }, {
                        offset: 0,
                        color: '#004c5d'
                    }])
                }
            }
        }, {
            markPoint: {
                data: [{ type: 'max', name: '最大值' }]
            },
            name: "发帖量",
            type: 'line',
            lineStyle: { normal: { color: '#9c9c9c', width: 2 } },
            itemStyle: { normal: { color: '#572015' } },
            data: P_y,
            markLine: {
                data: [{ type: 'average', name: '平均值' }]
            },
            areaStyle: {
                normal: {
                    alpha: 0.2,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: '#fff'
                    }, {
                        offset: 0.75,
                        color: '#ccc'
                    }, {
                        offset: 0.3,
                        color: '#999'
                    }, {
                        offset: 0,
                        color: '#7e7e7e'
                    }])
                }
            }
        }]
    };

    chart.setOption(option);
    window.onresize = function () {
        chart.resize(); //echarts 图表自适应
    };
}
/*下拉框 隐藏选中项*/
function hideOnlight() {
    $('.select_drop li').show();
    $('.select_drop li').each(function (index, val) {
        /* iterate through array or object */
        if ($(val).text() == $(val).parent().siblings().text()) {
            $(val).hide();
        };
    });
}
/*报表组件 选中当前月份*/
function currMonth() {
    var _month = new Date().getMonth();
    $('.toTable_month_table tr td').each(function (index, el) {
        $(el).removeClass('toTable_month_onlight');
        if ($(el).attr("data-month") == _month) {
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
window.popUps = function (ancestor) {
    //弹窗
    var oneTime = false;
    $(document).bind('click keydown', function (event) {
        /* Act on the event */
        var $aim = $(event.target);
        if ($aim.parents().filter('section').prop('className') != ancestor && oneTime || event.keyCode == 27) {
            $('#rollback').trigger('click');
            $('.rollback').trigger('click');
            $('.toTable_month').fadeOut(200);
            $(document).unbind('keydown');
            $(document).unbind('click');
        } else {
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
};

function userCheck() {
    var token = localStorage.getItem("token");
    var check_flag = true;
    if (token == null) {
        confirm("请登录！");
        window.location.href = "http://182.150.37.58:81/Baidu/BDo-Login.html";
        check_flag = false;
    }
    return check_flag;
}

module.exports = {
    getInitObj: function getInitObj() {
        return Init;
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// export default error = 
var Init = __webpack_require__(0).getInitObj();
function error(XMLHttpRequest) {
    if (XMLHttpRequest.status == 500) {
        alert("服务器内部错误");
    } else if (XMLHttpRequest.status == 401) {
        if (confirm("请登录")) {
            Init.signOut(false);
        } else {
            Init.signOut(false);
        }
    } else if (XMLHttpRequest.status == 403) {
        alert("无权操作！");
    } else if (XMLHttpRequest.status == 404) {
        alert("沒有该资源");
    } else if (XMLHttpRequest.responseText == "没有该用户信息，请确认后登录") {
        alert("没有该用户信息，请确认后登录");
    } else if (XMLHttpRequest.responseText == "请验证用户名和密码") {
        alert("请验证用户名和密码");
    } else {
        alert("请求失败");
        console.log(XMLHttpRequest);
    }
}

module.exports = {
    getErrorObj: function getErrorObj() {
        return error;
    }

    // define(function(){

    //     var errorState ; 
    //     var catchError = function(XMLHttpRequest){
    //         errorState = XMLHttpRequest.status;
    //         if(XMLHttpRequest.status==500){
    //            alert("服务器内部错误");
    //         }
    //         else if(XMLHttpRequest.status==401){
    //             if ( confirm("请登录") ) {
    //                 signOut(false);
    //             }
    //             else{
    //                 signOut(false);
    //             }
    //         }
    //         else if (XMLHttpRequest.status==404) {
    //             alert("沒有该资源");
    //         }
    //         else if(XMLHttpRequest.responseText=="没有该用户信息，请确认后登录"){
    //             alert("没有该用户信息，请确认后登录");
    //         }
    //         else if(XMLHttpRequest.responseText=="请验证用户名和密码"){
    //             alert("请验证用户名和密码");
    //         }
    //         else {
    //             console.log(XMLHttpRequest);
    //             alert("请求失败");
    //         }
    //     }

    //     return {
    //         catchError : catchError,
    //         errorState : errorState
    //     };
    // })

};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(1);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(20);

__webpack_require__(4);

__webpack_require__(5);

var Init = __webpack_require__(0).getInitObj();

var _error = __webpack_require__(2).getErrorObj();

var userName = localStorage.getItem('loginName');

var diff_obj = {
    isHandled: 2,
    isFeedBack: 2,
    isAll: true,
    more: 0
};

window.updata = function (page, row, index) {
    console.log(page);
    currPage = page;
    var $table = $('.tableEvent');
    $table.children().remove();
    var token = "Bearer " + localStorage.getItem("token");

    var default_obj = {
        isHandled: 2,
        isFeedBack: 2,
        isAll: true,
        more: 0
    };
    if (arguments.length >= 2) {
        default_obj.more = row - 5;
    }

    $.extend(default_obj, diff_obj);

    $.ajax({
        url: '/event/handledEvent/' + page,
        type: 'get',
        dataType: 'json',
        data: default_obj,
        beforeSend: function beforeSend(request) {
            request.setRequestHeader("Authorization", token);
        },
        success: function success(data) {

            if (!!index) {
                $(".zxf_pagediv").createPage({ //分类页数初始化
                    pageNum: data.pages, //总页码
                    current: currPage, //当前页
                    shownum: 9, //分页数
                    activepaf: "",
                    backfun: function backfun(e) {
                        if (!active_flag) {
                            updata(e.current, 12);
                        } else {
                            updata(e.current);
                        }
                    }
                });
            };
            $.each(data.handledEventPageList, function (index, val) {
                var $tr = $("<tr></tr>");
                $tr.append("<td><a title=\'" + val.theme + "\' class='Onlight' target='_blank' href=\'" + val.url + "\'>" + val.theme + "</a></td>");
                $tr.append("<td title=\'" + val.mainView + "\'>" + val.mainView + "</td>");
                $tr.append("<td>" + val.postType + "</td>");
                $tr.append("<td>" + val.handledCondition + "</td>");
                $tr.append("<td >" + val.feedbackCondition + "</td>");
                $tr.append("<td>" + val.recorder + "</td>"); //归集人 
                $tr.append("<td>" + Init.format(val.collectedTime) + "</td>"); //归集时间
                $tr.append("<td>" + val.eventHandler + "</td>"); //处置人
                $tr.append("<td>" + Init.format(val.handledTime) + "</td>"); //处置时间
                $tr.append("<td>" + val.detail + "</td>"); //具体处置
                //$tr.append("<td>"+val.remark+"</td>"); 
                $table.append($tr);
                $('.tableEvent tr:last').data('id', val.id);
                $('.tableEvent tr:last td:gt(0)').dblclick(function (event) {
                    $('.tableEvent tr').removeClass('Onlight_tr');
                    $(this).parent().addClass('Onlight_tr');
                    Handled.show(val);
                }).click(function (event) {
                    $(this).parent().toggleClass('Onlight_tr_del');
                });
            });
        },
        error: function error(xml) {
            _error(xml);
        }
    });
};

$(document).ready(function () {
    // if (!Init.userCheck()) {
    //     return;
    // }
    var currDate = new Date(); //获取当前日期
    var table = $(".wrap")[0].getAttribute('data-table');

    Init.getChartData(Init.format(currDate.getTime() - 60 * 24 * 60 * 60 * 1000, "yyyy-MM-dd"), Init.format(currDate, "yyyy-MM-dd"), '发帖量', table).getPackage() //加载组件
    // .getPage('/event/handledEvent/pageCount') //获得总页数并且初始化页码
    .bindEvent() //绑定事件
    .bindModule_RoMa().bindModule_Act();

    updata(1, 5, true);

    Handled.bindEvent();
});
var Handled = {
    show: function show(obj) {
        // body...   
        if ($('.tableAim').children().eq(0).children().length == 0) {
            /*清除上一次的事例*/
            $('.tableAim td:eq(0)').remove();
        }

        var $parent = $(this).parent(); //列表中的tr
        var $sentry_one = $('.tableAim td:first');
        $sentry_one.before('<td>' + obj.theme + '</td>');
        $('.tableAim').data('id', obj.id);
        Handled.initPop(obj);
        popUps("readlyWrap");
        $('.readlyWrap').show();
    },
    bindEvent: function bindEvent() {
        event_handled(); //归集请求事件绑定,取消事件绑定
        //event_select_handled_trigger();
        event_radio(); //单选逻辑
        event_del();
    },
    initPop: function initPop(obj) {
        var handled = obj.handledCondition;
        var feedback = obj.feedbackCondition;
        $('.select_handled').text(handled); //未反馈 已处置
        $('.select_feedback').text(feedback);

        //下拉框重置
        $('.select_feedback_ul li').css("display", "list-item");
        $('.select_feedback_ul li:contains(' + feedback + ')').css("display", "none");

        if (handled == "未处置") {
            Handled.inner.feedback_input_hide(); //隐藏输入框
        } else {
            Handled.inner.feedback_input_show(obj); //显示具体处置、备注输入框
        }

        $(".select_handled_ul li").click(function (event) {
            /* 具体处置 */
            if ($(event.target).text() != "未处置") {
                Handled.inner.feedback_input_show(obj);
            } else {
                Handled.inner.feedback_input_hide();
            }
        });
    },
    inner: {
        feedback_input_show: function feedback_input_show(obj) {
            $('.event_add_detail').remove();
            //$('.event_add_remark').remove();
            $('.tableAim').append("<td colspan='2' class='event_add_detail'><input type='text' class='event_add_detail_input' value=" + obj.detail + "></td>");
            // $('.tableAim').append("<td class='event_add_remark'><input type='text' class='event_add_remark_input' placeholder="+$('.tableAim').data('remark')+"></td>");
        },
        feedback_input_hide: function feedback_input_hide(obj) {
            $('.event_add_detail').hide();
        },
        list_filter: function list_filter() {
            var _handled = $('.radio-wrap input[name= handled]:checked').val();
            var _feedback = $('.radio-wrap input[name= feedback]:checked').val();
            var _all = $('#event-radio-all').prop('checked');
            diff_obj = {
                isHandled: parseInt(_handled) || 2,
                isFeedBack: parseInt(_feedback) || 2,
                isAll: _all
            };
            if (_handled == 0) {
                diff_obj.isHandled = 0;
            }
            if (_feedback == 0) {
                diff_obj.isFeedBack = 0;
            }
            if ($('.tableEvent').children().length != 0) {
                if (!active_flag) {
                    updata(1, 12, true);
                } else {
                    updata(1, 5, true);
                }
            }
        }
    }
};

function event_handled() {
    //归集请求事件绑定
    $('.saveBtn').click(function (event) {
        /* Act on the event */
        var handled = $('.select_handled').text();
        if (handled == "未处置") {
            alert("错误处置条件,请检查再试");
            return;
        }
        var id = $('.tableAim').data('id');
        var feedback = $('.select_feedback').text();
        var currDate = new Date();
        var detail = $('.event_add_detail_input').val();
        var remark = $('.event_add_remark_input').val() || "待更新";

        var token = "Bearer " + localStorage.getItem("token");
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
            eventHandler: userName
        };

        $.ajax({
            url: "/event/handledEvent/" + id + "/handle",
            type: 'POST',
            dataType: 'json',
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(obj),
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("Authorization", token);
            },
            complete: function complete(XML) {
                if (XML.status == 200) {
                    //$('.Onlight_tr td:eq(8)').text(remark); // 备注
                    $(".Onlight_tr td:eq(3)").text(handled); // 处置情况
                    $(".Onlight_tr td:eq(4)").text(feedback); // 反馈情况
                    $(".Onlight_tr td:eq(7)").text(userName);
                    $(".Onlight_tr td:eq(8)").text(Init.format(currDate.getTime())); //处置时间
                    $('.Onlight_tr td:eq(9)').text(detail); //具体处置
                    alert("处置成功");
                    $('#rollback').trigger('click');
                } else {
                    _error(XML);
                }
            }
        });
    });

    $('#rollback').click(function (event) {
        /* Act on the event */
        $('.readlyWrap').hide();
        $(document).unbind('click');
        $('.tableEvent tr').removeClass('Onlight_tr');
        $('.tableAim td:eq(0)').remove();
        $(document).unbind('click');
    });
}

function event_radio() {
    $('#handled-not').click(function (event) {
        //未处置
        /* Act on the event */
        $('#event-radio-all').prop('checked', false);
        $('#feedback-done').prop('disabled', 'disabled');
    });

    $('#handled-done').click(function (event) {
        //已处置
        /* Act on the event */
        $('#event-radio-all').prop('checked', false);
        $('#feedback-done').removeAttr('disabled');
    });

    $('#feedback-not').click(function (event) {
        //未反饋
        /* Act on the event */
        $('#event-radio-all').prop('checked', false);
        $('#handled-not').removeAttr('disabled');
    });

    $('#feedback-done').click(function (event) {
        //已反饋
        /* Act on the event */
        $('#event-radio-all').prop('checked', false);
        $('#handled-done').prop('checked', 'checked');
        $('#handled-not').prop('disabled', 'disabled');
    });

    $('#event-radio-all').click(function (event) {
        // 全选
        /* Act on the event */
        $('input[type=radio]').removeAttr('disabled');
        $('.radio-wrap input:lt(4)').prop('checked', false);
        $(this).prop('checked', true);
    });

    $('.radio-wrap input').click(function (event) {
        /* Act on the event */
        Handled.inner.list_filter();
    });

    $('#event-radio-all').trigger('click');
}

function event_del() {
    $('.event-del').click(function (event) {
        /* Act on the event */
        var _ids = [];
        var _flag = true;
        $('.Onlight_tr_del').each(function (index, el) {
            if ($(el).find('td').eq(3).text() == "未处置") {
                _ids.push($(el).data('id'));
            } else {
                _flag = false;
                return _flag;
            }
        });
        console.log(_ids);
        if (!_flag) {
            alert("删除失败，包含已处置事件！");
        } else {
            if (!confirm('确认删除?')) {
                return;
            }
            var token = "Bearer " + localStorage.getItem("token");
            $.ajax({
                url: '/event/handledEvent',
                type: 'POST',
                contentType: "application/json;charset=utf-8",
                data: JSON.stringify(_ids),
                success: function success(data) {
                    updata(currPage, 5, true);
                },
                beforeSend: function beforeSend(request) {
                    request.setRequestHeader("Authorization", token);
                },
                complete: function complete(msg, xml) {
                    console.log(msg, xml);
                },
                error: function error(xml) {
                    _error(xml);
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

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
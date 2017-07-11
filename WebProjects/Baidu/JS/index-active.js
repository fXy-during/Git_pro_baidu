/* 
* @Author: anchen
* @Date:   2017-07-07 15:51:12
* @Last Modified by:   anchen
* @Last Modified time: 2017-07-10 12:54:02
*/
var active_flag = true;
(function(){
    $('.active-up').click(function(event) {
        /* Act on the event */
        var url ;
        if (active_flag) {
            $('.active-icon').removeClass('active-up').addClass('active-down');
            $('.active—chart').animate({
                height: "43px"
            },400);
            $('.active-list').animate({
                height: "625px"
            },400);
            active_flag = !active_flag;

            Init.getPage("/event/" + $(this).parents('.wrap').attr('data-table') + "/pageCount" , 12);


            updata(currPage,12);
        }else{
            $('.active-icon').removeClass('active-down').addClass('active-up');
            $('.active—chart').animate({
                height: "333px"
            },400);
            $('.active-list').animate({
                height: "334px"
            },400);
            active_flag = !active_flag;
            updata(currPage);
            Init.getPage("/event/" + $(this).parents('.wrap').attr('data-table') + "/pageCount");
        }
    });
})()

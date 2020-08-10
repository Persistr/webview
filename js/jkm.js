jQuery(function(){
    var cardNo = 'phonenumber';
    var colour = '1388CB';
    var flag = 'Invalid';
    if(null == colour || "" == colour){
        colour = "#CCCCCC";
    }
    var mzt='';
    var dateTime='';
    //var array=getJkm(cardNo);
    var array = [{"mzt":"green","dateTime":"2020-07-19 22:28:32"}];
    if(array.length>0){
        mzt = array[0].mzt;
        if (mzt=='red'){
            colour = "DC143C";
        }
        dateTime = array[0].dateTime;
    }
    // if(mzt!='green'){
    //     colour = "CCCCCC";
    // }
    // if(mzt=='green'){
    //     $("#hzjkm").append('<div  class="hz" style="color: #55b957">健康码为 绿码</div>');
    // }
    // if(mzt=='yellow'){
    //     $("#hzjkm").append('<div  class="hz" style="color: #ee8232">健康码为 黄码</div>');
    // }
    // if(mzt=='red'){
    //     $("#hzjkm").append('<div class="hz" style="color: #e8453b">健康码为 红码</div>');
    // }
    //
    // if(mzt=='orange'){
    //     $("#hzjkm").append('<div class="hz" style="color: #FFA500">健康码为 橙码</div>');
    // }
    // if(mzt==''){
    //     colour = "1E90FF";
    //     $("#hzjkm").append('<div class="hz" style="color: #006bc7">绿码获取失败（请打开支付宝出示）</div>');
    // }
    // if(mzt=='' && flag== 'Invalid'){
    //     colour = "CCCCCC";
    // }
    // if(dateTime!=''){
    //     $("#dateTime").append('<div class="time">同步时间：'+dateTime+'</div>');
    // }

    jQuery('#output').qrcode({
        render	: "table",
        width: 180,
        height: 180,
        //text	: "http://baidu.com",
        text	: 'Only provide learning use, do not use the website for illegal activities, otherwise this site will not be responsible',
        //text	: "/PassCode/information?account=15868816812&token=05d1ca00-b67c-4cb2-8cc6-664e37b953ca",
        render: "canvas", //也可以替换为table
        //foreground: "#1E90FF",
        foreground: "#"+colour,
        background: "#FFF"

    });
})


// function getJkm(cardNo) {
//     var datas = '';
//     $.ajax({
//         type : "GET",
//         url : "http://www.xwryjx.zjut.edu.cn/PassCode/jkm3?account=15868816812&cardNo=15868816812&identity=校外人员",
//         async : false,
//         dataType:'json',
//         success : function(data) {
//             datas=data;
//         }
//     });
//     return datas;
// }
//获取系统时间

function showTime() {
    nowtime = new Date();
    year = nowtime.getFullYear();//年
    month = nowtime.getMonth() + 1;//月
    day = nowtime.getDate();//日
    hour = nowtime.getHours();//时
    minutes = nowtime.getMinutes(); //分
    seconds = nowtime.getSeconds(); //秒
    //文字增加空格
    // document.getElementById("div_timer").style = "white-space:pre;";
    //显示时间
    document.getElementById("div_timer").innerText = p(year)+"-"+p(month) +"-"+p(day) +" "+ p(hour) + ":" + p(minutes) + ":" + p(seconds);
}
setInterval("showTime()", 1000);
//月日时分秒小于10补0
function p(s) {
    return s < 10 ? '0' + s : s;
}

function setToday() {
    nowtime = new Date();
    year = nowtime.getFullYear();//年
    month = nowtime.getMonth() + 1;//月
    day = nowtime.getDate();//日

    document.getElementById("today_time").innerText = '有效时间至：' + p(year) + '-'+ p(month) + '-' + p(day) +  ' 23:59:59'

}

function getQueryVariable() {
    var name = '田野';
    var place = '计算机科学与技术学院、软件学院';
    var query = encodeURIComponent(window.location.search.substring(1)) ;
    alert(query)
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == 'name'){
                return pair[1];
            }
            if(pair[0] == 'place'){
                return pair[1];
            }
            
    }
    document.getElementById("name").innerText = name + '通行码';
    document.getElementById("place").innerText = '接访单位：' + place;
}

setToday();
getQueryVariable();
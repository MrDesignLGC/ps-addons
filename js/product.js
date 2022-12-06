let ele_p = document.getElementsByTagName("body")[0];
//菜单
CreateMenu(ele_p);
//内容框架元素
CreateELE([
    EJ({id:"content_sub"})
], ele_p);

CreateFoot(ele_p);
//内容框架元素
let content_sub = document.getElementById("content_sub");
//********************************** */

//购买模块
CreateELE([
    EJ({id:"buy_frame"},[
        EJ({id:"buy",text:"BUY"})
    ])
], ele_p);
let content_h=window.innerHeight;
let buy_frame = document.getElementById("buy_frame");
buy_frame.style.top=content_h/2-(buy_frame.clientHeight/2)+"px"
AddEvent(buy_frame,"click",function(e){
    open_web_PS("c7ac739d");
})



//********************************** */
//监听器
CreateEvent_TopAndBottom();
//初始化
inti();
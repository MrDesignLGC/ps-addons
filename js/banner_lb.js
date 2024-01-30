let linksArr = [];
let items;
let interval;

linksArr.push(["banner_1", "./image/banner1.jpg"]);
linksArr.push(["banner_3", "./image/banner3.jpg"]);

/**
 * 创建海报轮播页面
 */
function CreateBanner_LB_UI(ele_p) {
    let json = [
        EJ({
            id: "banner_content",
        }, [
            EJ({
                id: "banner_content_banner",
                cn: "banner_class"
            }),
            EJ({
                id: "banner_content_button",
                cn: "banner_class"
            }),
        ])
    ];
    CreateELE(json, ele_p);
}

CreateBanner_LB_UI(GetID("banner_lb"));


// banner_content_banner.style.background="#000000";

function create_banner(linksArr) {

    let banner_content_banner = GetID("banner_content_banner");
    for (let i = 0; i < linksArr.length; i++) {
        create_item(banner_content_banner, i, linksArr[i]);
    }

    items = banner_content_banner.children;
    for (let k = 0; k < items.length; k++) {
        items[k].style.display = "none";
        // console.log(items[k]);
    }
    items[0].style.display = "block";

    loop_fun(items);

    //创建每张海报元素
    function create_item(parent, i, l) {
        let json = [
            EJ({
                cn: "banner_class"
            }, [
                EJ({
                    type: "img",
                    id: linksArr[i][0],
                    cn: "banner_class",
                    attr: {
                        "src": linksArr[i][1]
                    }
                }),

            ])
        ];
        CreateELE(json, parent);
    }

}

create_banner(linksArr);

AddEvent(GetID("banner_content"), "click", function (e) {

    if (e.target.id == "banner_1") {
        open_web_PS("c7ac739d");
    }
    if (e.target.id == "banner_3") {
        open_web("https://apps.microsoft.com/detail/9PB1187XWXT6?hl=en-us&gl=US");
    }

}, true);

AddEvent(GetID("banner_content"), "mouseover", function (e) {

    clearInterval(interval); //清除代码

}, true);

AddEvent(GetID("banner_content"), "mouseout", function (e) {

    loop_fun(items);

}, true);

// 循环播放
function loop_fun(items) {

    interval = setInterval(function () {
        loop_ab(items);
    }, 5000); //启动代码
    // clearInterval(interval); //清除代码

}

function loop_ab(items) {
    let next_v;
    for (let k = 0; k < items.length; k++) {

        if (items[k].style.display == "block") {
            next_v = k + 1;
            if (next_v >= items.length) {
                next_v = 0;
            }
            items[k].style.display = "none";
            break;
        }

    }
    items[next_v].style.display = "block";
}
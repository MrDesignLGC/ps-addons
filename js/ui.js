/**
 * 创建菜单
 */
function CreateMenu(ele_p) {


    function menu_text() {

        let json = {

            home: "Home",
            product: "Products",

            photoshop: "photoshop",
            SkinBeautyRetouch: "Skin Beauty Retouch",
            FreeSkinBeautyRetouch: "Free Skin Beauty Retouch",
            PhotoEffects: "Photo Effects",
            TranslationPSD: "Translation PSD",
            ShadowTool: "Shadow Tool",
            TextEffect: "3DText Effect",
            ExportAllText: "ExportAllText",
            AddWatermarkInBatch: "Add Watermark in Batch",

            windows: "windows",
            ElegantWriting: "ElegantWriting"

        }
        return json;

    }

    let json = [
        EJ("div", "menu_bar", "", "", {},
            [

                EJ("nav", "nav", "", "", {}, [
                    EJ("div", "menu_home", "menu", menu_text().home),
                    //一级菜单
                    EJ("div", "menu_products", "menu", menu_text().product, {}, [
                        EJ("ul", "", "down_menu1", "", {}, [
                            EJ("li", "", "", "", {}, [
                                EJ("div", "menu_ps", "", menu_text().photoshop),
                                //二级菜单
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "menu_retouch", "", menu_text().SkinBeautyRetouch),
                                ]),
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "menu_retouch_free", "", menu_text().FreeSkinBeautyRetouch),
                                ]),
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "menu_effects", "", menu_text().PhotoEffects),
                                ]),
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "menu_translation", "", menu_text().TranslationPSD),
                                ]),
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "menu_shadow", "", menu_text().ShadowTool),
                                ]),
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "menu_3dtext", "", menu_text().TextEffect),
                                ]),
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "menu_3dtext", "", menu_text().ExportAllText),
                                ]),
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "menu_mark", "", menu_text().AddWatermarkInBatch),
                                ]),
                            ]),
                            EJ("li", "", "", "", {}, [
                                EJ("div", "menu_win", "", menu_text().windows),
                                //二级菜单
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "menu_writing", "", menu_text().ElegantWriting),
                                ]),
                            ])
                        ]),
                    ])
                ])

            ])
    ];
    CreateELE(json, ele_p);

}
/**
 * 创建产品
 */
function CreateProduct(ele_p) {

}

/**
 * 创建海报
 */
function CreateBanner(ele_p) {
    let json = [
        EJ("div", "banner", "", "", {}, [
            EJ("div", "banner1", "banner_class", "", {}),
            // EJ("div", "banner2", "banner_class", "", {})
        ])
    ];
    CreateELE(json, ele_p);
}

/**
 * 创建底部
 */
function CreateFoot(ele_p) {
    let message={
        About_us:"About us",
        common_problem:"common problem",
        foot_email:"e-mail:liu_guochao@foxmail.com",
        foot_youtube:"youtube",
        foot_plugin:"photoshop plug-in",
        foot_ms:"Microsoft software",
    }
    let json = [
        EJ("div", "foot", "", "", {}, [

            EJ("ul", "", "", "", {}, [
                EJ("li", "", "fool_ul_first_li", message.common_problem),
                EJ("li", "foot_plugin", "", message.foot_plugin),
                EJ("li", "foot_ms", "", message.foot_ms),
            ]),

            EJ("ul", "", "", "", {}, [
                EJ("li", "", "fool_ul_first_li", message.About_us),
                EJ("li", "foot_email", "", message.foot_email),
                EJ("li", "foot_youtube", "", message.foot_youtube),
            ]),

        ])
    ];
    CreateELE(json, ele_p);
}

/**
 * 创建监听器
 */
function CreateEvent(){


    //菜单
    AddEvent(GetID("menu_bar"),"click",function(e){

        if(e.target.id=="menu_home"){
            // open_web_PS("");
        }
        if(e.target.id=="menu_products"){
            // open_web_PS("");
        }
        if(e.target.id=="menu_ps"){
            // open_web_PS("");
        }
        if(e.target.id=="menu_retouch"){
            open_web_PS("c7ac739d");
        }
        if(e.target.id=="menu_retouch_free"){
            open_web_PS("3a0d9f39");
        }
        if(e.target.id=="menu_effects"){
            open_web_PS("e4ca27aa");
        }
        if(e.target.id=="menu_translation"){
            open_web_PS("92dcdcaa");
        }
        if(e.target.id=="menu_shadow"){
            open_web_PS("2d5b1abf");
        }
        if(e.target.id=="menu_3dtext"){
            open_web_PS("4e2e025d");
        }
        if(e.target.id=="menu_mark"){
            open_web_PS("cd550302");
        }
        if(e.target.id=="menu_win"){
            // open_web_PS("");
        }
        if(e.target.id=="menu_writing"){
            open_web("https://www.microsoft.com/en-us/p/Elegant-Writing/9P78SB60MP4K","_blank");
        }

    });

    //海报
    AddEvent(GetID("banner"),"click",function(e){
        if(e.target.id=="banner1"){
            open_web_PS("c7ac739d");
        }
    });
    
    //页脚
    AddEvent(GetID("foot"),"click",function(e){
        if(e.target.id=="foot_youtube"){
            open_web("https://www.youtube.com/channel/UCH6cap6hFRZ32byGZrsbmWQ");
        }
    });

}

function CreateUI() {

    // EJ("div", "menu_bar", "", "", {},[])
    let ele_p = document.getElementsByTagName("body")[0];
    CreateMenu(ele_p);
    CreateBanner(ele_p);
    CreateFoot(ele_p);
    CreateEvent();

}







function open_web(v,b){

    if(b==undefined){
        b="_blank";
    }
    window.open(v,b);

}

function open_web_PS(v,b){

    if(b==undefined){
        b="_blank";
    }
    window.open(("https://exchange.adobe.com/creativecloud/plugindetails.html/app/cc/"+v),b);

}
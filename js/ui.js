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
                                EJ("div", "", "", menu_text().photoshop),
                                //二级菜单
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "", "", menu_text().SkinBeautyRetouch),
                                ]),
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "", "", menu_text().FreeSkinBeautyRetouch),
                                ]),
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "", "", menu_text().PhotoEffects),
                                ]),
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "", "", menu_text().TranslationPSD),
                                ]),
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "", "", menu_text().ShadowTool),
                                ]),
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "", "", menu_text().TextEffect),
                                ]),
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "", "", menu_text().AddWatermarkInBatch),
                                ]),
                            ]),
                            EJ("li", "", "", "", {}, [
                                EJ("div", "", "", menu_text().windows),
                                //二级菜单
                                EJ("ul", "", "down_menu2", "", {}, [
                                    EJ("li", "", "", menu_text().ElegantWriting),
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

function CreateUI() {

    // EJ("div", "menu_bar", "", "", {},[])
    let ele_p = document.getElementsByTagName("body")[0];
    CreateMenu(ele_p);
    CreateBanner(ele_p);
    CreateFoot(ele_p);
}
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
            CartoonEffects: "Cartoon effects",
            SketchEffects: "Sketch effects",
            ID_Photo: "ID Photo",
            AutomaticTypesetting: "Automatic Typesetting",
            TranslationPSD: "Translation PSD",
            ShadowTool: "Shadow Tool",
            HandleLayers: "Handle layers",
            TextEffect: "3DText Effect",
            ExportAllText: "ExportAllText",
            AddWatermarkInBatch: "Add Watermark in Batch",

            windows: "windows",
            ElegantWriting: "Elegant Writing",
            ElegantVideoEditing: "Elegant Video Editing",

        }

        return json;

    }

    let json = [
        EJ({
                id: "menu_bar"
            },
            [
                EJ({
                    type: "nav",
                    id: "nav"
                }, [
                    EJ({
                        id: "menu_home",
                        cn: "menu",
                        text: menu_text().home
                    }),
                    //一级菜单
                    EJ({
                        id: "menu_products",
                        cn: "menu",
                        text: menu_text().product
                    }, [
                        EJ({
                            type: "ul",
                            cn: "down_menu1"
                        }, [
                            EJ({
                                type: "li"
                            }, [
                                EJ({
                                    id: "menu_ps",
                                    text: menu_text().photoshop
                                }),
                                //二级菜单
                                EJ({
                                    type: "ul",
                                    cn: "down_menu2"
                                }, [
                                    EJ({
                                        type: "li",
                                        id: "menu_retouch",
                                        text: menu_text().SkinBeautyRetouch
                                    }),
                                ]),
                                EJ({
                                    type: "ul",
                                    cn: "down_menu2"
                                }, [
                                    EJ({
                                        type: "li",
                                        id: "menu_retouch_free",
                                        text: menu_text().FreeSkinBeautyRetouch
                                    }),
                                ]),
                                EJ({
                                    type: "ul",
                                    cn: "down_menu2"
                                }, [
                                    EJ({
                                        type: "li",
                                        id: "menu_effects",
                                        text: menu_text().PhotoEffects
                                    }),
                                ]),
                                EJ({
                                    type: "ul",
                                    cn: "down_menu2"
                                }, [
                                    EJ({
                                        type: "li",
                                        id: "menu_sketchEffects",
                                        text: menu_text().SketchEffects
                                    }),
                                ]),
                                EJ({
                                    type: "ul",
                                    cn: "down_menu2"
                                }, [
                                    EJ({
                                        type: "li",
                                        id: "menu_cartoonEffects",
                                        text: menu_text().CartoonEffects
                                    }),
                                ]),
                                EJ({
                                    type: "ul",
                                    cn: "down_menu2"
                                }, [
                                    EJ({
                                        type: "li",
                                        id: "menu_automaticTypesetting",
                                        text: menu_text().AutomaticTypesetting
                                    }),
                                ]),
                                EJ({
                                    type: "ul",
                                    cn: "down_menu2"
                                }, [
                                    EJ({
                                        type: "li",
                                        id: "menu_id_photo",
                                        text: menu_text().ID_Photo
                                    }),
                                ]),
                                EJ({
                                    type: "ul",
                                    cn: "down_menu2"
                                }, [
                                    EJ({
                                        type: "li",
                                        id: "menu_translation",
                                        text: menu_text().TranslationPSD
                                    }),
                                ]),
                                EJ({
                                    type: "ul",
                                    cn: "down_menu2"
                                }, [
                                    EJ({
                                        type: "li",
                                        id: "menu_shadow",
                                        text: menu_text().ShadowTool
                                    }),
                                ]),
                                EJ({
                                    type: "ul",
                                    cn: "down_menu2"
                                }, [
                                    EJ({
                                        type: "li",
                                        id: "menu_3dtext",
                                        text: menu_text().TextEffect
                                    }),
                                ]),
                                EJ({
                                    type: "ul",
                                    cn: "down_menu2"
                                }, [
                                    EJ({
                                        type: "li",
                                        id: "menu_exportalltext",
                                        text: menu_text().ExportAllText
                                    }),
                                ]),
                                EJ({
                                    type: "ul",
                                    cn: "down_menu2"
                                }, [
                                    EJ({
                                        type: "li",
                                        id: "menu_mark",
                                        text: menu_text().AddWatermarkInBatch
                                    }),
                                ]),
                                EJ({
                                    type: "ul",
                                    cn: "down_menu2"
                                }, [
                                    EJ({
                                        type: "li",
                                        id: "menu_handlelayers",
                                        text: menu_text().HandleLayers
                                    }),
                                ]),
                            ]),
                            EJ({
                                type: "li"
                            }, [
                                EJ({
                                    id: "menu_win",
                                    text: menu_text().windows
                                }),
                                //二级菜单
                                EJ({
                                    type: "ul",
                                    cn: "down_menu2"
                                }, [
                                    EJ({
                                        type: "li",
                                        id: "menu_writing",
                                        text: menu_text().ElegantWriting
                                    }),
                                    EJ({
                                        type: "li",
                                        id: "menu_ElegantVideoEditing",
                                        text: menu_text().ElegantVideoEditing
                                    })
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
 * 创建产品列表
 */
function CreateProList(ele_p, ) {

    //文本
    function cpl(id, photo_n, txt = "text") {
        let json = EJ({
            cn: "ProList_child"
        }, [
            EJ({
                cn: "ProList_content"
            }, [
                EJ({
                    type: "img",
                    id: id,
                    attr: {
                        "src": "./image/prolist/" + photo_n
                    }
                }),
            ]),
            EJ({
                cn: "ProList_title"
            }, [
                EJ({
                    type: "span",
                    text: txt
                }),
            ]),
        ]);
        return json;
    }

    let json = [
        EJ({
                id: "ProList"
            },
            [
                cpl("ProList_retouch_free", "retouch_free.png", "Free Skin Beauty Retouch"),
                cpl("ProList_skinRetouch", "skinRetouch.png", "Skin Beauty Retouch pro"),
                cpl("ProList_PhotoEffects", "PhotoEffects.png", "Photo Effects"),
                cpl("ProList_cartoonEffects", "cartoonEffects.png", "Cartoon effects"),
                cpl("ProList_AutomaticTypesetting", "AutomaticTypesetting.png", "Automatic Typesetting"),
                cpl("ProList_text3d", "text3d.png", "3d text effects"),
                cpl("ProList_translation", "translation.png", "Translation PSD"),
                cpl("ProList_sketchEffects", "sketchEffects.png", "Sketch effects"),
                cpl("ProList_shadow", "shadow.png", "Shadow tool"),
                cpl("ProList_mark", "mark.png", "Add Watermark in Batch"),
                cpl("ProList_ID_photo", "ID_photo.png", "ID Photo"),
                cpl("ProList_handlelayers", "handlelayers.png", "Handle layers"),
                cpl("ProList_exportalltext", "exportalltext.png", "Export all text"),
                cpl("ProList_ElegantWriting", "ElegantWriting.png", "Elegant Writing"),
                cpl("ProList_ElegantVideoEditing", "ElegantVideoEditing.png", "Elegant Video Editing"),
            ])
    ];
    CreateELE(json, ele_p);
}

/**
 * 创建海报
 */
function CreateBanner(ele_p) {
    let json = [
        EJ({
            id: "banner"
        }, [
            EJ({
                id: "banner1",
                cn: "banner_class"
            }),
            EJ({
                id: "banner3",
                cn: "banner_class"
            })
        ])
    ];
    CreateELE(json, ele_p);
}


function CreateSubPage(ele_p) {

}


/**
 * 创建底部
 */
function CreateFoot(ele_p) {
    let message = {
        About_us: "About us",
        common_problem: "common problem",
        foot_email: "liu_guochao@foxmail.com",
        foot_youtube: "youtube",
        foot_plugin: "photoshop plug-in",
        foot_ms: "Microsoft software",
    }
    let json = [
        EJ({
            id: "foot"
        }, [

            EJ({
                type: "ul"
            }, [
                EJ({
                    type: "li",
                    cn: "fool_ul_first_li",
                    text: message.common_problem
                }),
                EJ({
                    type: "li",
                    id: "foot_plugin",
                    text: message.foot_plugin
                }),
                EJ({
                    type: "li",
                    id: "foot_ms",
                    text: message.foot_ms
                }),
            ]),

            EJ({
                type: "ul"
            }, [
                EJ({
                    type: "li",
                    cn: "fool_ul_first_li",
                    text: message.About_us
                }),
                EJ({
                    type: "li",
                    id: "foot_email",
                    text: message.foot_email
                }),
                EJ({
                    type: "li",
                    id: "foot_youtube",
                    text: message.foot_youtube
                }),
            ]),

        ])
    ];
    CreateELE(json, ele_p);
}


/**
 * 创建监听器
 */
function CreateEvent() {

    CreateEvent_TopAndBottom();
    //海报
    AddEvent(GetID("banner"), "click", function (e) {
        if (e.target.id == "banner1") {
            open_web_PS("c7ac739d");
        }
        if (e.target.id == "banner3") {
            open_web("https://apps.microsoft.com/detail/9PB1187XWXT6?hl=en-us&gl=US");
        }
    });

    AddEvent(GetID("ProList"), "click", function (e) {


        if (e.target.id == "ProList_skinRetouch") {
            open_web_PS("c7ac739d");
        }
        if (e.target.id == "ProList_retouch_free") {
            open_web_PS("3a0d9f39");
        }
        if (e.target.id == "ProList_PhotoEffects") {
            open_web_PS("e4ca27aa");
        }
        if (e.target.id == "ProList_ID_photo") {
            open_web_PS("572edab9");
        }
        if (e.target.id == "ProList_translation") {
            open_web_PS("92dcdcaa");
        }
        if (e.target.id == "ProList_shadow") {
            open_web_PS("2d5b1abf");
        }
        if (e.target.id == "ProList_text3d") {
            open_web_PS("4e2e025d");
        }
        if (e.target.id == "ProList_mark") {
            open_web_PS("cd550302");
        }
        if (e.target.id == "ProList_exportalltext") {
            open_web_PS("e25efe4c");
        }

        if (e.target.id == "ProList_AutomaticTypesetting") {
            open_web_PS("b8f5d8b9");
        }
        if (e.target.id == "ProList_cartoonEffects") {
            open_web_PS("3175dc8c");
        }
        if (e.target.id == "ProList_sketchEffects") {
            open_web_PS("6b3d739d");
        }
        if (e.target.id == "ProList_handlelayers") {
            open_web_PS("0179c1c9");
        }

        if (e.target.id == "ProList_ElegantWriting") {
            open_web("https://apps.microsoft.com/store/detail/elegant-writing/9P78SB60MP4K", "_blank");
        }

        if (e.target.id == "ProList_ElegantVideoEditing") {
            open_web("https://apps.microsoft.com/store/detail/elegant-video-editing/9PB1187XWXT6", "_blank");
        }

    });



}

//导航和底部监听器
function CreateEvent_TopAndBottom() {
    //菜单
    AddEvent(GetID("menu_bar"), "click", function (e) {

        if (e.target.id == "menu_home") {
            // console.log(window.location.origin,":abc");
            // window.location.href="sub/product/product.html";
           
            // open_web("../../index.html", "_self");
        }
        if (e.target.id == "menu_products") {
            // window.open("./sub/product/product.html", "_self");
            // window.location.href="index.html";
            open_web("https://exchange.adobe.com/publisher/cc/73ac5795-8bce-424c-bec8-568cfd795421")
        }
        if (e.target.id == "menu_ps") {
            // open_web_PS("");
        }
        if (e.target.id == "menu_retouch") {
            open_web_PS("c7ac739d");
        }
        if (e.target.id == "menu_retouch_free") {
            open_web_PS("3a0d9f39");
        }
        if (e.target.id == "menu_effects") {
            open_web_PS("e4ca27aa");
        }
        if (e.target.id == "menu_id_photo") {
            open_web_PS("572edab9");
        }
        if (e.target.id == "menu_translation") {
            open_web_PS("92dcdcaa");
        }
        if (e.target.id == "menu_shadow") {
            open_web_PS("2d5b1abf");
        }
        if (e.target.id == "menu_3dtext") {
            open_web_PS("4e2e025d");
        }
        if (e.target.id == "menu_mark") {
            open_web_PS("cd550302");
        }
        if (e.target.id == "menu_exportalltext") {
            open_web_PS("e25efe4c");
        }

        if (e.target.id == "menu_automaticTypesetting") {
            open_web_PS("b8f5d8b9");
        }
        if (e.target.id == "menu_cartoonEffects") {
            open_web_PS("3175dc8c");
        }
        if (e.target.id == "menu_sketchEffects") {
            open_web_PS("6b3d739d");
        }
        if (e.target.id == "menu_handlelayers") {
            open_web_PS("0179c1c9");
        }

        if (e.target.id == "menu_win") {
            // open_web_PS("");
        }
        if (e.target.id == "menu_writing") {
            open_web("https://apps.microsoft.com/store/detail/elegant-writing/9P78SB60MP4K", "_blank");
        }
        if (e.target.id == "menu_ElegantVideoEditing") {
            open_web("https://apps.microsoft.com/store/detail/elegant-video-editing/9PB1187XWXT6", "_blank");
        }
        // https://exchange.adobe.com/publisher/cc/73ac5795-8bce-424c-bec8-568cfd795421
    });


    //页脚
    AddEvent(GetID("foot"), "click", function (e) {
        if (e.target.id == "foot_youtube") {
            open_web("https://www.youtube.com/channel/UCH6cap6hFRZ32byGZrsbmWQ");
        }

        if (e.target.id == "foot_email") {
            window.location.href="mailto:liu_guochao@foxmail.com";
        }

    });
}


function CreateUI() {

    // EJ("div", "menu_bar", "", "", {},[])
    let ele_p = document.getElementsByTagName("body")[0];
    //菜单
    CreateMenu(ele_p);
    //内容框架元素
    CreateELE([
        EJ({
            id: "content"
        })
    ], ele_p);
    CreateProList(ele_p)
    CreateFoot(ele_p);

}





/**
 * 函数
 * _blank
 * _self
 */

function open_web(v, b = "_blank") {
    window.open(v, b);
}

function open_web_PS(v, b) {

    if (b == undefined) {
        b = "_blank";
    }
    window.open(("https://exchange.adobe.com/apps/cc/" + v), b);

}
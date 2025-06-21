 window.F2W_REACTIONS = (() => {
    const t = [
        [{
            key: "border-radius",
            from: "8px",
            to: "0px"
        }, {
            key: "--f2w-order",
            from: "0",
            to: "1"
        }, {
            key: "transform-origin",
            from: "0 0",
            to: "revert"
        }, {
            key: "transform",
            from: "scale(-1,1)",
            to: "revert"
        }, {
            key: "left",
            from: "340px",
            to: "0px"
        }],
        [{
            key: "border-radius",
            from: "8px",
            to: "0px"
        }, {
            key: "--f2w-order",
            from: "1",
            to: "0"
        }, {
            key: "left",
            from: "0px",
            to: "340px"
        }, {
            key: "transform-origin",
            from: "revert",
            to: "0 0"
        }, {
            key: "transform",
            from: "revert",
            to: "scale(-1,1)"
        }],
        [{
            key: "border-radius",
            from: "0px",
            to: "8px"
        }],
        [{
            key: "display",
            from: "revert",
            to: "none"
        }, {
            key: "opacity",
            from: "1",
            to: "0"
        }],
        [{
            key: "display",
            from: "revert",
            to: "flex"
        }, {
            key: "flex-wrap",
            from: "revert",
            to: "nowrap"
        }, {
            key: "flex-direction",
            from: "revert",
            to: "column"
        }, {
            key: "row-gap",
            from: "revert",
            to: "10px"
        }, {
            key: "align-items",
            from: "revert",
            to: "center"
        }, {
            key: "justify-content",
            from: "revert",
            to: "center"
        }, {
            key: "padding",
            from: "0",
            to: "74px 0px 0px"
        }],
        [{
            key: "border-radius",
            from: "0px",
            to: "8px"
        }, {
            key: "display",
            from: "flex",
            to: "none"
        }, {
            key: "--f2w-order",
            from: "1",
            to: "0"
        }, {
            key: "left",
            from: "0px",
            to: "340px"
        }, {
            key: "transform-origin",
            from: "revert",
            to: "0 0"
        }, {
            key: "transform",
            from: "revert",
            to: "scale(-1,1)"
        }, {
            key: "opacity",
            from: "1",
            to: "0"
        }],
        [{
            key: "display",
            from: "flex",
            to: "none"
        }, {
            key: "opacity",
            from: "1",
            to: "0"
        }],
        [{
            key: "display",
            from: "block",
            to: "none"
        }, {
            key: "opacity",
            from: "1",
            to: "0"
        }],
        [{
            key: "border-radius",
            from: "0px",
            to: "8px"
        }, {
            key: "display",
            from: "flex",
            to: "none"
        }, {
            key: "--f2w-order",
            from: "0",
            to: "1"
        }, {
            key: "transform-origin",
            from: "0 0",
            to: "revert"
        }, {
            key: "transform",
            from: "scale(-1,1)",
            to: "revert"
        }, {
            key: "left",
            from: "340px",
            to: "0px"
        }, {
            key: "opacity",
            from: "1",
            to: "0"
        }],
        [{
            key: "border-radius",
            from: "8px",
            to: "0px"
        }, {
            key: "display",
            from: "revert",
            to: "none"
        }, {
            key: "opacity",
            from: "1",
            to: "0"
        }],
        [{
            key: "display",
            from: "inline",
            to: "none"
        }, {
            key: "opacity",
            from: "1",
            to: "0"
        }],
        [{
            key: "display",
            from: "flex",
            to: "none"
        }],
        [{
            key: "display",
            from: "none",
            to: "flex"
        }, {
            key: "opacity",
            from: "0",
            to: "1"
        }],
        [{
            key: "display",
            from: "flex",
            to: "revert"
        }, {
            key: "flex-wrap",
            from: "nowrap",
            to: "revert"
        }, {
            key: "flex-direction",
            from: "column",
            to: "revert"
        }, {
            key: "row-gap",
            from: "10px",
            to: "revert"
        }, {
            key: "align-items",
            from: "center",
            to: "revert"
        }, {
            key: "justify-content",
            from: "center",
            to: "revert"
        }, {
            key: "padding",
            from: "74px 0px 0px",
            to: "0"
        }],
        [{
            key: "--f2w-order",
            from: "1",
            to: "2"
        }, {
            key: "position",
            from: "relative",
            to: "absolute"
        }, {
            key: "flex-shrink",
            from: "0",
            to: "revert"
        }, {
            key: "margin",
            from: "0px",
            to: "0"
        }, {
            key: "left",
            from: "auto",
            to: "30px"
        }, {
            key: "top",
            from: "auto",
            to: "330.1px"
        }],
        [{
            key: "display",
            from: "none",
            to: "revert"
        }, {
            key: "opacity",
            from: "0",
            to: "1"
        }],
        [{
            key: "display",
            from: "none",
            to: "inline"
        }, {
            key: "opacity",
            from: "0",
            to: "1"
        }],
        [{
            key: "display",
            from: "none",
            to: "block"
        }, {
            key: "opacity",
            from: "0",
            to: "1"
        }],
        [{
            key: "top",
            from: "96px",
            to: "13px"
        }, {
            key: "height",
            from: "135px",
            to: "218px"
        }],
        [{
            key: "left",
            from: "270px",
            to: "274px"
        }, {
            key: "top",
            from: "96px",
            to: "13px"
        }],
        [{
            key: "--f2w-order",
            from: "5",
            to: "6"
        }, {
            key: "top",
            from: "25.4%",
            to: "15%"
        }, {
            key: "bottom",
            from: "63%",
            to: "73.4%"
        }],
        [{
            key: "--f2w-order",
            from: "7",
            to: "8"
        }],
        [{
            key: "--f2w-order",
            from: "8",
            to: "9"
        }],
        [{
            key: "top",
            from: "13px",
            to: "0px"
        }, {
            key: "height",
            from: "218px",
            to: "231px"
        }],
        [{
            key: "top",
            from: "13px",
            to: "0px"
        }],
        [{
            key: "top",
            from: "15%",
            to: "12.8%"
        }, {
            key: "bottom",
            from: "73.4%",
            to: "75.6%"
        }],
        [{
            key: "top",
            from: "166px",
            to: "153px"
        }],
        [{
            key: "top",
            from: "18px",
            to: "5px"
        }],
        [{
            key: "top",
            from: "0px",
            to: "13px"
        }, {
            key: "height",
            from: "231px",
            to: "218px"
        }],
        [{
            key: "top",
            from: "0px",
            to: "13px"
        }],
        [{
            key: "top",
            from: "12.8%",
            to: "15%"
        }, {
            key: "bottom",
            from: "75.6%",
            to: "73.4%"
        }],
        [{
            key: "top",
            from: "153px",
            to: "166px"
        }],
        [{
            key: "top",
            from: "5px",
            to: "18px"
        }],
        [{
            key: "top",
            from: "13px",
            to: "96px"
        }, {
            key: "height",
            from: "218px",
            to: "135px"
        }],
        [{
            key: "top",
            from: "13px",
            to: "96px"
        }],
        [{
            key: "--f2w-order",
            from: "6",
            to: "5"
        }, {
            key: "top",
            from: "15%",
            to: "25.4%"
        }, {
            key: "bottom",
            from: "73.4%",
            to: "63%"
        }],
        [{
            key: "--f2w-order",
            from: "8",
            to: "7"
        }],
        [{
            key: "--f2w-order",
            from: "9",
            to: "8"
        }],
        [{
            key: "--f2w-order",
            from: "10",
            to: "9"
        }],
        [{
            key: "left",
            from: "274px",
            to: "270px"
        }, {
            key: "display",
            from: "revert",
            to: "none"
        }, {
            key: "opacity",
            from: "1",
            to: "0"
        }],
        [{
            key: "--f2w-order",
            from: "9",
            to: "3"
        }],
        [{
            key: "--f2w-order",
            from: "2",
            to: "1"
        }, {
            key: "left",
            from: "30px",
            to: "auto"
        }, {
            key: "top",
            from: "330.1px",
            to: "auto"
        }, {
            key: "position",
            from: "absolute",
            to: "relative"
        }, {
            key: "flex-shrink",
            from: "revert",
            to: "0"
        }, {
            key: "margin",
            from: "0",
            to: "0px"
        }],
        [{
            key: "--f2w-order",
            from: "3",
            to: "10"
        }, {
            key: "display",
            from: "revert",
            to: "none"
        }, {
            key: "opacity",
            from: "1",
            to: "0"
        }],
        [{
            key: "border-radius",
            from: "8px",
            to: "0px"
        }, {
            key: "display",
            from: "none",
            to: "flex"
        }, {
            key: "--f2w-order",
            from: "0",
            to: "1"
        }, {
            key: "transform-origin",
            from: "0 0",
            to: "revert"
        }, {
            key: "transform",
            from: "scale(-1,1)",
            to: "revert"
        }, {
            key: "left",
            from: "340px",
            to: "0px"
        }, {
            key: "opacity",
            from: "0",
            to: "1"
        }],
        [{
            key: "border-radius",
            from: "8px",
            to: "0px"
        }, {
            key: "display",
            from: "none",
            to: "flex"
        }, {
            key: "--f2w-order",
            from: "1",
            to: "0"
        }, {
            key: "left",
            from: "0px",
            to: "340px"
        }, {
            key: "opacity",
            from: "0",
            to: "1"
        }, {
            key: "transform-origin",
            from: "revert",
            to: "0 0"
        }, {
            key: "transform",
            from: "revert",
            to: "scale(-1,1)"
        }],
        [{
            key: "border-radius",
            from: "0px",
            to: "8px"
        }, {
            key: "display",
            from: "none",
            to: "revert"
        }, {
            key: "opacity",
            from: "0",
            to: "1"
        }],
        [{
            key: "display",
            from: "none",
            to: "flex"
        }],
        [{
            key: "border-radius",
            from: "0px",
            to: "8px"
        }, {
            key: "--f2w-order",
            from: "1",
            to: "0"
        }, {
            key: "left",
            from: "0px",
            to: "340px"
        }, {
            key: "transform-origin",
            from: "revert",
            to: "0 0"
        }, {
            key: "transform",
            from: "revert",
            to: "scale(-1,1)"
        }],
        [{
            key: "border-radius",
            from: "0px",
            to: "8px"
        }, {
            key: "--f2w-order",
            from: "0",
            to: "1"
        }, {
            key: "transform-origin",
            from: "0 0",
            to: "revert"
        }, {
            key: "transform",
            from: "scale(-1,1)",
            to: "revert"
        }, {
            key: "left",
            from: "340px",
            to: "0px"
        }],
        [{
            key: "border-radius",
            from: "8px",
            to: "0px"
        }]
    ];
    return {
        1: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "hover",
                    from: "1"
                }, {
                    type: "timeout",
                    to: "T50ms,2"
                }],
                eltId: "Component_3"
            }, {
                props: t[0],
                eltId: "back"
            }, {
                eltId: "carta",
                altId: "carta_5"
            }, {
                props: t[1],
                eltId: "front"
            }, {
                props: t[2],
                eltId: "carta_14"
            }, {
                props: t[3],
                eltId: "Couple_Heart_1"
            }, {
                eltId: "Ellipse_1_1",
                altId: "Ellipse_1_5"
            }],
            rootId: "Component_3"
        },
        2: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: 0
            },
            animations: [{
                props: t[4],
                reactions: [{
                    type: "timeout",
                    from: "T50ms,2",
                    to: "T50ms,3"
                }],
                eltId: "Component_3"
            }, {
                props: t[5],
                eltId: "back"
            }, {
                eltId: "carta_5",
                altId: "carta_2"
            }, {
                props: t[6],
                eltId: "Frame_1"
            }, {
                props: t[7],
                eltId: "Ellipse_1"
            }, {
                props: t[8],
                eltId: "front"
            }, {
                props: t[9],
                eltId: "carta_14"
            }, {
                props: t[6],
                eltId: "block-text"
            }, {
                props: t[10],
                eltId: "I86_751_30_24"
            }, {
                props: t[10],
                eltId: "I86_751_30_25"
            }, {
                props: t[3],
                eltId: "zlove_labels_25_1"
            }, {
                props: t[11],
                eltId: "Frame_1_0"
            }, {
                eltId: "Ellipse_1_5",
                altId: "Ellipse_1_3"
            }, {
                eltId: "carta_15",
                altId: "carta_18"
            }, {
                props: t[12],
                eltId: "Frame_1_1"
            }, {
                eltId: "Ellipse_1_11",
                altId: "Ellipse_1_13"
            }],
            rootId: "Component_3"
        },
        3: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T50ms,3",
                    to: "T50ms,4"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_18",
                altId: "carta_21"
            }, {
                eltId: "Ellipse_1_13",
                altId: "Ellipse_1_15"
            }],
            rootId: "Component_3"
        },
        4: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T50ms,4",
                    to: "T50ms,5"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_21",
                altId: "carta_24"
            }, {
                eltId: "Ellipse_1_15",
                altId: "Ellipse_1_17"
            }],
            rootId: "Component_3"
        },
        5: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T50ms,5",
                    to: "T50ms,6"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_24",
                altId: "carta_27"
            }, {
                eltId: "Ellipse_1_17",
                altId: "Ellipse_1_19"
            }],
            rootId: "Component_3"
        },
        6: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: 0
            },
            animations: [{
                props: t[13],
                reactions: [{
                    type: "timeout",
                    from: "T50ms,6",
                    to: "T50ms,7"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_27",
                altId: "carta_30"
            }, {
                props: t[14],
                eltId: "Frame_1_1"
            }, {
                eltId: "Ellipse_1_19",
                altId: "Ellipse_1_21"
            }, {
                eltId: "Polygon_3_18",
                altId: "Polygon_3_20"
            }],
            rootId: "Component_3"
        },
        7: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T50ms,7",
                    to: "T50ms,8"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_30",
                altId: "carta_33"
            }, {
                eltId: "Ellipse_1_21",
                altId: "Ellipse_1_23"
            }, {
                eltId: "Polygon_3_20",
                altId: "Polygon_3_22"
            }],
            rootId: "Component_3"
        },
        8: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T50ms,8",
                    to: "T50ms,9"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_33",
                altId: "carta_36"
            }, {
                eltId: "Ellipse_1_23",
                altId: "Ellipse_1_25"
            }, {
                eltId: "Polygon_3_22",
                altId: "Polygon_3_24"
            }],
            rootId: "Component_3"
        },
        9: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T50ms,9",
                    to: "T100ms,10"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_36",
                altId: "carta_39"
            }, {
                eltId: "Ellipse_1_25",
                altId: "Ellipse_1_27"
            }, {
                eltId: "Polygon_3_24",
                altId: "Polygon_3_26"
            }, {
                props: t[15],
                eltId: "Rectangle_1_11"
            }, {
                props: t[15],
                eltId: "Flying_heart_1"
            }, {
                props: t[16],
                eltId: "I86_751_86_207"
            }, {
                props: t[15],
                eltId: "https_lottiefiles_com_animations_green_heart_GSNQTjVqBB_7"
            }, {
                props: t[17],
                eltId: "Polygon_2_19"
            }, {
                props: t[17],
                eltId: "Polygon_4_19"
            }],
            rootId: "Component_3"
        },
        10: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T100ms,10",
                    to: "T100ms,11"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_39",
                altId: "carta_40"
            }, {
                eltId: "Ellipse_1_27",
                altId: "Ellipse_1_29"
            }, {
                eltId: "Polygon_3_26",
                altId: "Polygon_3_28"
            }, {
                props: t[18],
                eltId: "Rectangle_1_11"
            }, {
                props: t[19],
                eltId: "Flying_heart_1"
            }, {
                props: t[20],
                eltId: "I86_751_86_207"
            }, {
                props: t[3],
                eltId: "https_lottiefiles_com_animations_green_heart_GSNQTjVqBB_7"
            }, {
                props: t[21],
                eltId: "Polygon_2_19"
            }, {
                props: t[22],
                eltId: "Polygon_4_19"
            }, {
                props: t[15],
                eltId: "pngtree_cartoon_red_rose_bouquet_for_valentine_day_isolated_vector_png_image_5721687_Photoroom_1"
            }, {
                props: t[15],
                eltId: "https_lottiefiles_com_animations_heart_beat_vwbMQsieLX"
            }, {
                props: t[15],
                eltId: "Love_Message_1_2"
            }],
            rootId: "Component_3"
        },
        11: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T100ms,11"
                }, {
                    type: "click",
                    to: "12"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_40",
                altId: "carta_41"
            }, {
                eltId: "Ellipse_1_29",
                altId: "Ellipse_1_31"
            }, {
                eltId: "Polygon_3_28",
                altId: "Polygon_3_30"
            }, {
                props: t[23],
                eltId: "Rectangle_1_11"
            }, {
                props: t[24],
                eltId: "Flying_heart_1"
            }, {
                props: t[25],
                eltId: "I86_751_86_207"
            }, {
                props: t[26],
                eltId: "pngtree_cartoon_red_rose_bouquet_for_valentine_day_isolated_vector_png_image_5721687_Photoroom_1"
            }, {
                props: t[27],
                eltId: "https_lottiefiles_com_animations_heart_beat_vwbMQsieLX"
            }],
            rootId: "Component_3"
        },
        12: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "click",
                    from: "12"
                }, {
                    type: "timeout",
                    to: "T100ms,13"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_41",
                altId: "carta_42"
            }, {
                eltId: "Ellipse_1_31",
                altId: "Ellipse_1_33"
            }, {
                eltId: "Polygon_3_30",
                altId: "Polygon_3_32"
            }, {
                props: t[28],
                eltId: "Rectangle_1_11"
            }, {
                props: t[29],
                eltId: "Flying_heart_1"
            }, {
                props: t[30],
                eltId: "I86_751_86_207"
            }, {
                props: t[31],
                eltId: "pngtree_cartoon_red_rose_bouquet_for_valentine_day_isolated_vector_png_image_5721687_Photoroom_1"
            }, {
                props: t[32],
                eltId: "https_lottiefiles_com_animations_heart_beat_vwbMQsieLX"
            }],
            rootId: "Component_3"
        },
        13: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T100ms,13",
                    to: "T100ms,14"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_42",
                altId: "carta_43"
            }, {
                eltId: "Ellipse_1_33",
                altId: "Ellipse_1_35"
            }, {
                eltId: "Polygon_3_32",
                altId: "Polygon_3_34"
            }, {
                props: t[33],
                eltId: "Rectangle_1_11"
            }, {
                props: t[34],
                eltId: "Flying_heart_1"
            }, {
                props: t[35],
                eltId: "I86_751_86_207"
            }, {
                props: t[15],
                eltId: "https_lottiefiles_com_animations_green_heart_GSNQTjVqBB_7"
            }, {
                props: t[36],
                eltId: "Polygon_2_19"
            }, {
                props: t[37],
                eltId: "Polygon_4_19"
            }, {
                props: t[3],
                eltId: "pngtree_cartoon_red_rose_bouquet_for_valentine_day_isolated_vector_png_image_5721687_Photoroom_1"
            }, {
                props: t[3],
                eltId: "https_lottiefiles_com_animations_heart_beat_vwbMQsieLX"
            }, {
                props: t[38],
                eltId: "Love_Message_1_2"
            }],
            rootId: "Component_3"
        },
        14: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T100ms,14",
                    to: "T50ms,15"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_43",
                altId: "carta_44"
            }, {
                eltId: "Ellipse_1_35",
                altId: "Ellipse_1_37"
            }, {
                eltId: "Polygon_3_34",
                altId: "Polygon_3_36"
            }, {
                props: t[3],
                eltId: "Rectangle_1_11"
            }, {
                props: t[39],
                eltId: "Flying_heart_1"
            }, {
                props: t[10],
                eltId: "I86_751_86_207"
            }, {
                props: t[3],
                eltId: "https_lottiefiles_com_animations_green_heart_GSNQTjVqBB_7"
            }, {
                props: t[7],
                eltId: "Polygon_2_19"
            }, {
                props: t[7],
                eltId: "Polygon_4_19"
            }, {
                props: t[40],
                eltId: "Love_Message_1_2"
            }],
            rootId: "Component_3"
        },
        15: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T50ms,15",
                    to: "T50ms,16"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_44",
                altId: "carta_47"
            }, {
                eltId: "Ellipse_1_37",
                altId: "Ellipse_1_39"
            }, {
                eltId: "Polygon_3_36",
                altId: "Polygon_3_38"
            }],
            rootId: "Component_3"
        },
        16: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T50ms,16",
                    to: "T50ms,17"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_47",
                altId: "carta_50"
            }, {
                eltId: "Ellipse_1_39",
                altId: "Ellipse_1_41"
            }, {
                eltId: "Polygon_3_38",
                altId: "Polygon_3_40"
            }],
            rootId: "Component_3"
        },
        17: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                props: t[4],
                reactions: [{
                    type: "timeout",
                    from: "T50ms,17",
                    to: "T50ms,18"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_50",
                altId: "carta_53"
            }, {
                props: t[41],
                eltId: "Frame_1_1"
            }, {
                eltId: "Ellipse_1_41",
                altId: "Ellipse_1_43"
            }, {
                eltId: "Polygon_3_40",
                altId: "Polygon_3_18"
            }, {
                props: t[42],
                eltId: "Love_Message_1_2"
            }],
            rootId: "Component_3"
        },
        18: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T50ms,18",
                    to: "T50ms,19"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_53",
                altId: "carta_56"
            }, {
                eltId: "Ellipse_1_43",
                altId: "Ellipse_1_45"
            }],
            rootId: "Component_3"
        },
        19: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T50ms,19",
                    to: "T50ms,20"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_56",
                altId: "carta_59"
            }, {
                eltId: "Ellipse_1_45",
                altId: "Ellipse_1_47"
            }],
            rootId: "Component_3"
        },
        20: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T50ms,20",
                    to: "T50ms,21"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_59",
                altId: "carta_62"
            }, {
                eltId: "Ellipse_1_47",
                altId: "Ellipse_1_49"
            }, {
                props: t[15],
                eltId: "Valentine_Letter_1_10"
            }],
            rootId: "Component_3"
        },
        21: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                props: t[13],
                reactions: [{
                    type: "timeout",
                    from: "T50ms,21"
                }, {
                    type: "click",
                    to: "22"
                }],
                eltId: "Component_3"
            }, {
                props: t[43],
                eltId: "back"
            }, {
                eltId: "carta_2",
                altId: "carta_11"
            }, {
                props: t[12],
                eltId: "Frame_1"
            }, {
                props: t[17],
                eltId: "Ellipse_1"
            }, {
                props: t[44],
                eltId: "front"
            }, {
                props: t[45],
                eltId: "carta_14"
            }, {
                props: t[12],
                eltId: "block-text"
            }, {
                props: t[16],
                eltId: "I86_751_30_24"
            }, {
                props: t[16],
                eltId: "I86_751_30_25"
            }, {
                props: t[15],
                eltId: "zlove_labels_25_1"
            }, {
                props: t[46],
                eltId: "Frame_1_0"
            }, {
                eltId: "Ellipse_1_3",
                altId: "Ellipse_1_9"
            }, {
                eltId: "carta_62",
                altId: "carta_15"
            }, {
                props: t[6],
                eltId: "Frame_1_1"
            }, {
                eltId: "Ellipse_1_49",
                altId: "Ellipse_1_11"
            }, {
                props: t[3],
                eltId: "Valentine_Letter_1_10"
            }],
            rootId: "Component_3"
        },
        22: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: .6666666666666666
            },
            animations: [{
                reactions: [{
                    type: "click",
                    from: "22",
                    to: "23"
                }],
                eltId: "Component_3"
            }, {
                props: t[47],
                eltId: "back"
            }, {
                eltId: "carta_11",
                altId: "carta_8"
            }, {
                props: t[48],
                eltId: "front"
            }, {
                props: t[49],
                eltId: "carta_14"
            }, {
                props: t[15],
                eltId: "Couple_Walk_1"
            }, {
                eltId: "Ellipse_1_9",
                altId: "Ellipse_1_7"
            }],
            rootId: "Component_3"
        },
        23: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-out",
                duration: 0
            },
            animations: [{
                reactions: [{
                    type: "click",
                    from: "23"
                }, {
                    type: "hover",
                    to: "1"
                }],
                eltId: "Component_3"
            }, {
                eltId: "carta_8",
                altId: "carta"
            }, {
                props: t[15],
                eltId: "Couple_Heart_1"
            }, {
                props: t[3],
                eltId: "Couple_Walk_1"
            }, {
                eltId: "Ellipse_1_7",
                altId: "Ellipse_1_1"
            }],
            rootId: "Component_3"
        }
    }
})(), window.F2W_VARIABLES = {}, window.F2W_COLLECTION_VARS = {}, window.F2W_COLLECTION_MODE_BPS = {}, window.F2W_COLOR_SCHEMES = void 0, window.F2W_LANGUAGES = void 0; 

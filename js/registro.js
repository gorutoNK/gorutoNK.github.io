 window.F2W_REACTIONS = (() => {
    const t = [
        [{
            key: "background-color",
            from: "rgba(255,255,255,0.63)",
            to: "#f17102"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "backface-visibility",
            from: "hidden",
            to: "revert"
        }, {
            key: "transform",
            from: "translateZ(0)",
            to: "revert"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 29.8px #0109f4,0px 0px 17px #0109f4,0px 0px 9.9px #0109f4,0px 0px 5px #0109f4,0px 0px 1.4px #0109f4,0px 0px 0.7px #0109f4"
        }],
        [{
            key: "font-family",
            from: "arial",
            to: '"Arial Rounded MT Bold"'
        }, {
            key: "color",
            from: "#767373",
            to: "#fff"
        }],
        [{
            key: "border-width",
            from: "0px 0px 1px",
            to: "0px 0px 2px"
        }, {
            key: "border-color",
            from: "#767373",
            to: "#fff"
        }],
        [{
            key: "fill",
            from: "rgba(64,61,61,0.63)",
            to: "#fff"
        }],
        [{
            key: "background-color",
            from: "rgba(255,255,255,0.63)",
            to: "#f17102"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "backface-visibility",
            from: "hidden",
            to: "revert"
        }, {
            key: "transform",
            from: "translateZ(0)",
            to: "revert"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 29.7px #0109f4,0px 0px 17px #0109f4,0px 0px 9.9px #0109f4,0px 0px 5px #0109f4,0px 0px 1.4px #0109f4,0px 0px 0.7px #0109f4"
        }],
        [{
            key: "stroke",
            from: "rgba(64,61,61,0.63)",
            to: "#fff"
        }],
        [{
            key: "display",
            from: "flex",
            to: "none"
        }, {
            key: "opacity",
            from: "revert",
            to: "0"
        }],
        [{
            key: "display",
            from: "none",
            to: "flex"
        }, {
            key: "opacity",
            from: "0",
            to: "revert"
        }],
        [{
            key: "display",
            from: "-webkit-inline-box",
            to: "inline"
        }, {
            key: "-webkit-box-orient",
            from: "vertical",
            to: "revert"
        }, {
            key: "overflow",
            from: "hidden",
            to: "revert"
        }, {
            key: "text-overflow",
            from: "ellipsis",
            to: "revert"
        }, {
            key: "-webkit-line-clamp",
            from: "1",
            to: "revert"
        }, {
            key: "font-family",
            from: "arial",
            to: '"Arial Rounded MT Bold"'
        }, {
            key: "color",
            from: "#767373",
            to: "#fff"
        }],
        [{
            key: "background-color",
            from: "rgba(255,255,255,0.63)",
            to: "#f17102"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "backface-visibility",
            from: "hidden",
            to: "revert"
        }, {
            key: "transform",
            from: "translateZ(0)",
            to: "revert"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 26.8px #0109f4,0px 0px 15.3px #0109f4,0px 0px 8.9px #0109f4,0px 0px 4.5px #0109f4,0px 0px 1.3px #0109f4,0px 0px 0.6px #0109f4"
        }],
        [{
            key: "border-color",
            from: "#767373",
            to: "#fff"
        }],
        [{
            key: "background-color",
            from: "#f17102",
            to: "#ba5904"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 29.6px #f17102,0px 0px 16.9px #f17102,0px 0px 9.9px #f17102,0px 0px 4.9px #f17102,0px 0px 1.4px #f17102,0px 0px 0.7px #f17102"
        }],
        [{
            key: "background-color",
            from: "#4e23e7",
            to: "#2601ab"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 29.6px #4e23e7,0px 0px 16.9px #4e23e7,0px 0px 9.9px #4e23e7,0px 0px 4.9px #4e23e7,0px 0px 1.4px #4e23e7,0px 0px 0.7px #4e23e7"
        }],
        [{
            key: "display",
            from: "inline",
            to: "inline-flex"
        }, {
            key: "top",
            from: "calc(-8.5px + 50%)",
            to: "calc(-8px + 50%)"
        }, {
            key: "width",
            from: "max-content",
            to: "78px"
        }, {
            key: "align-items",
            from: "revert",
            to: "center"
        }, {
            key: "justify-content",
            from: "revert",
            to: "flex-start"
        }, {
            key: "height",
            from: "revert",
            to: "20px"
        }],
        [{
            key: "top",
            from: "calc(-12.5px + 50%)",
            to: "calc(-10.5px + 50%)"
        }],
        [{
            key: "fill",
            from: "rgba(255,255,255,0.87)",
            to: "#fff"
        }],
        [{
            key: "color",
            from: "#767373",
            to: "#fff"
        }],
        [{
            key: "display",
            from: "-webkit-inline-box",
            to: "inline"
        }, {
            key: "-webkit-box-orient",
            from: "vertical",
            to: "revert"
        }, {
            key: "overflow",
            from: "hidden",
            to: "revert"
        }, {
            key: "text-overflow",
            from: "ellipsis",
            to: "revert"
        }, {
            key: "-webkit-line-clamp",
            from: "1",
            to: "revert"
        }, {
            key: "color",
            from: "#767373",
            to: "#fff"
        }],
        [{
            key: "background-color",
            from: "rgba(255,255,255,0.63)",
            to: "#f17102"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "backface-visibility",
            from: "hidden",
            to: "revert"
        }, {
            key: "transform",
            from: "translateZ(0)",
            to: "revert"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 64.6px #0109f4,0px 0px 36.9px #0109f4,0px 0px 21.5px #0109f4,0px 0px 10.8px #0109f4,0px 0px 3.1px #0109f4,0px 0px 1.5px #0109f4"
        }],
        [{
            key: "background-color",
            from: "#4e23e7",
            to: "#2601ab"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 23.1px #4e23e7,0px 0px 13.2px #4e23e7,0px 0px 7.7px #4e23e7,0px 0px 3.8px #4e23e7,0px 0px 1.1px #4e23e7,0px 0px 0.5px #4e23e7"
        }],
        [{
            key: "background-color",
            from: "#f17102",
            to: "#ba5904"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 30.1px #f17102,0px 0px 17.2px #f17102,0px 0px 10px #f17102,0px 0px 5px #f17102,0px 0px 1.4px #f17102,0px 0px 0.7px #f17102"
        }]
    ];
    return {
        488: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "488"
                }],
                eltId: "_li_16"
            }, {
                props: t[1],
                eltId: "_label_16"
            }, {
                props: t[1],
                eltId: "__14"
            }, {
                props: t[2],
                eltId: "_input_13"
            }, {
                props: t[3],
                eltId: "Vector_38_0"
            }],
            rootId: "_li_16"
        },
        503: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "503"
                }],
                eltId: "_li_17"
            }, {
                props: t[1],
                eltId: "_label_17"
            }, {
                props: t[1],
                eltId: "__15"
            }, {
                props: t[2],
                eltId: "_input_14"
            }, {
                props: t[3],
                eltId: "Vector_39_0"
            }],
            rootId: "_li_17"
        },
        518: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[4],
                reactions: [{
                    type: "hover",
                    from: "518"
                }],
                eltId: "_li_18"
            }, {
                props: t[1],
                eltId: "_label_18"
            }, {
                props: t[1],
                eltId: "__16"
            }, {
                props: t[2],
                eltId: "_input_15"
            }, {
                props: t[5],
                eltId: "Vector_40"
            }, {
                props: t[5],
                eltId: "Vector_41"
            }, {
                props: t[5],
                eltId: "Vector_42"
            }],
            rootId: "_li_18"
        },
        535: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "535"
                }],
                eltId: "_li_19"
            }, {
                props: t[1],
                eltId: "_label_19"
            }, {
                props: t[1],
                eltId: "__17"
            }, {
                props: t[6],
                eltId: "_input_16"
            }, {
                props: t[7],
                eltId: "_input_type_email_"
            }, {
                props: t[3],
                eltId: "Vector_43_0"
            }],
            rootId: "_li_19"
        },
        552: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "552"
                }],
                eltId: "_li_20"
            }, {
                props: t[8],
                eltId: "_label_20"
            }, {
                props: t[1],
                eltId: "__18"
            }, {
                props: t[2],
                eltId: "_input_17"
            }, {
                props: t[3],
                eltId: "Vector_44_0"
            }],
            rootId: "_li_20"
        },
        567: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[4],
                reactions: [{
                    type: "hover",
                    from: "567"
                }],
                eltId: "_li6_"
            }, {
                props: t[1],
                eltId: "_label_21"
            }, {
                props: t[1],
                eltId: "__19"
            }, {
                props: t[2],
                eltId: "_input_18"
            }, {
                props: t[3],
                eltId: "Vector_45_0"
            }],
            rootId: "_li6_"
        },
        582: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[9],
                reactions: [{
                    type: "hover",
                    from: "582"
                }],
                eltId: "_li5_"
            }, {
                props: t[1],
                eltId: "_label_"
            }, {
                props: t[1],
                eltId: "__20"
            }, {
                props: t[10],
                eltId: "_input_type_text_"
            }, {
                props: t[3],
                eltId: "Vector_0"
            }],
            rootId: "_li5_"
        },
        597: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[9],
                reactions: [{
                    type: "hover",
                    from: "597"
                }],
                eltId: "_li4_"
            }, {
                props: t[1],
                eltId: "_label_0"
            }, {
                props: t[1],
                eltId: "__21"
            }, {
                props: t[10],
                eltId: "_input_type_date_"
            }, {
                props: t[5],
                eltId: "Vector_1"
            }, {
                props: t[5],
                eltId: "Vector_2"
            }, {
                props: t[5],
                eltId: "Vector_3"
            }, {
                props: t[5],
                eltId: "Vector_4"
            }, {
                props: t[3],
                eltId: "Vector_6"
            }],
            rootId: "_li4_"
        },
        618: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[9],
                reactions: [{
                    type: "hover",
                    from: "618"
                }],
                eltId: "_li7_"
            }, {
                props: t[1],
                eltId: "_label_1"
            }, {
                props: t[1],
                eltId: "__22"
            }, {
                props: t[10],
                eltId: "_input_type_text_0"
            }, {
                props: t[3],
                eltId: "Vector_8"
            }],
            rootId: "_li7_"
        },
        633: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "633"
                }],
                eltId: "_Button_mobile2_"
            }, {
                eltId: "stash_image_plus_3",
                altId: "stash_image_plus_3_1"
            }],
            rootId: "_Button_mobile2_"
        },
        634: {
            type: "SCROLL_TO",
            destinationId: "_Button_mobilesdf_"
        },
        635: {
            type: "ALIAS",
            alias: "634"
        },
        642: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[12],
                reactions: [{
                    type: "hover",
                    from: "642"
                }],
                eltId: "_Button_mobilesdf_"
            }, {
                props: t[13],
                eltId: "Registrar_3"
            }, {
                props: t[14],
                eltId: "mdi_register_3"
            }, {
                props: t[15],
                eltId: "Vector_48_0"
            }],
            rootId: "_Button_mobilesdf_"
        },
        652: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "652"
                }],
                eltId: "_li_9"
            }, {
                props: t[16],
                eltId: "_label_9"
            }, {
                props: t[16],
                eltId: "__44"
            }, {
                props: t[2],
                eltId: "_input_7"
            }, {
                props: t[3],
                eltId: "Vector_20_0"
            }],
            rootId: "_li_9"
        },
        667: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "667"
                }],
                eltId: "_li_10"
            }, {
                props: t[16],
                eltId: "_label_10"
            }, {
                props: t[16],
                eltId: "__45"
            }, {
                props: t[2],
                eltId: "_input_8"
            }, {
                props: t[3],
                eltId: "Vector_21_0"
            }],
            rootId: "_li_10"
        },
        682: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "682"
                }],
                eltId: "_li_11"
            }, {
                props: t[16],
                eltId: "_label_11"
            }, {
                props: t[16],
                eltId: "__46"
            }, {
                props: t[2],
                eltId: "_input_9"
            }, {
                props: t[5],
                eltId: "Vector_22"
            }, {
                props: t[5],
                eltId: "Vector_23"
            }, {
                props: t[5],
                eltId: "Vector_24"
            }],
            rootId: "_li_11"
        },
        699: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "699"
                }],
                eltId: "_li_12"
            }, {
                props: t[17],
                eltId: "_label_12"
            }, {
                props: t[16],
                eltId: "__47"
            }, {
                props: t[2],
                eltId: "_input_10"
            }, {
                props: t[3],
                eltId: "Vector_25_0"
            }],
            rootId: "_li_12"
        },
        714: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "714"
                }],
                eltId: "_li_13"
            }, {
                props: t[16],
                eltId: "_label_13"
            }, {
                props: t[16],
                eltId: "__48"
            }, {
                props: t[6],
                eltId: "_input_11"
            }, {
                props: t[7],
                eltId: "_input_type_email_0"
            }, {
                props: t[3],
                eltId: "Vector_26_0"
            }],
            rootId: "_li_13"
        },
        731: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "731"
                }],
                eltId: "_li_14"
            }, {
                props: t[16],
                eltId: "_label_14"
            }, {
                props: t[16],
                eltId: "__49"
            }, {
                props: t[2],
                eltId: "_input_12"
            }, {
                props: t[3],
                eltId: "Vector_27_0"
            }],
            rootId: "_li_14"
        },
        746: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "746"
                }],
                eltId: "_li2_"
            }, {
                props: t[16],
                eltId: "_label_2"
            }, {
                props: t[16],
                eltId: "__50"
            }, {
                props: t[10],
                eltId: "_input_type_text_1"
            }, {
                props: t[3],
                eltId: "Vector_10"
            }],
            rootId: "_li2_"
        },
        761: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "761"
                }],
                eltId: "_li1_"
            }, {
                props: t[16],
                eltId: "_label_3"
            }, {
                props: t[16],
                eltId: "__51"
            }, {
                props: t[10],
                eltId: "_input_type_date_0"
            }, {
                props: t[5],
                eltId: "Vector_11"
            }, {
                props: t[5],
                eltId: "Vector_12"
            }, {
                props: t[5],
                eltId: "Vector_13"
            }, {
                props: t[5],
                eltId: "Vector_14"
            }, {
                props: t[3],
                eltId: "Vector_16"
            }],
            rootId: "_li1_"
        },
        782: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[18],
                reactions: [{
                    type: "hover",
                    from: "782"
                }],
                eltId: "_li3_"
            }, {
                props: t[16],
                eltId: "_label_4"
            }, {
                props: t[16],
                eltId: "__52"
            }, {
                props: t[10],
                eltId: "_input_type_text_2"
            }, {
                props: t[3],
                eltId: "Vector_18"
            }],
            rootId: "_li3_"
        },
        797: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[19],
                reactions: [{
                    type: "hover",
                    from: "797"
                }],
                eltId: "_Button_table_"
            }, {
                eltId: "Vector_28",
                altId: "Vector_28_1"
            }],
            rootId: "_Button_table_"
        },
        806: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[20],
                reactions: [{
                    type: "hover",
                    from: "806"
                }],
                eltId: "_Button_table2_"
            }, {
                props: t[15],
                eltId: "Vector_29"
            }, {
                props: t[15],
                eltId: "Vector_30"
            }],
            rootId: "_Button_table2_"
        },
        815: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "815"
                }],
                eltId: "_li_2"
            }, {
                props: t[16],
                eltId: "_label_2_0"
            }, {
                props: t[16],
                eltId: "__72"
            }, {
                props: t[2],
                eltId: "_input_type_text_3"
            }, {
                props: t[3],
                eltId: "Vector_2_1"
            }],
            rootId: "_li_2"
        },
        830: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "830"
                }],
                eltId: "_li_3"
            }, {
                props: t[16],
                eltId: "_label_3_0"
            }, {
                props: t[16],
                eltId: "__73"
            }, {
                props: t[2],
                eltId: "_input_2"
            }, {
                props: t[3],
                eltId: "Vector_3_1"
            }],
            rootId: "_li_3"
        },
        845: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "845"
                }],
                eltId: "_li_4"
            }, {
                props: t[16],
                eltId: "_label_4_0"
            }, {
                props: t[16],
                eltId: "__74"
            }, {
                props: t[2],
                eltId: "_input_3"
            }, {
                props: t[5],
                eltId: "Vector_4_0"
            }, {
                props: t[5],
                eltId: "Vector_5_0"
            }, {
                props: t[5],
                eltId: "Vector_6_0"
            }],
            rootId: "_li_4"
        },
        862: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[18],
                reactions: [{
                    type: "hover",
                    from: "862"
                }],
                eltId: "_li_5"
            }, {
                props: t[16],
                eltId: "_label_5_0"
            }, {
                props: t[16],
                eltId: "__75"
            }, {
                props: t[2],
                eltId: "_input_4"
            }, {
                props: t[3],
                eltId: "Vector_7_1"
            }],
            rootId: "_li_5"
        },
        877: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "877"
                }],
                eltId: "_li_6"
            }, {
                props: t[17],
                eltId: "_label_6"
            }, {
                props: t[16],
                eltId: "__76"
            }, {
                props: t[2],
                eltId: "_input_5"
            }, {
                props: t[3],
                eltId: "Vector_8_1"
            }],
            rootId: "_li_6"
        },
        892: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "892"
                }],
                eltId: "_li_7"
            }, {
                props: t[16],
                eltId: "_label_7"
            }, {
                props: t[16],
                eltId: "__77"
            }, {
                props: t[2],
                eltId: "_input_6"
            }, {
                props: t[3],
                eltId: "Vector_9_1"
            }],
            rootId: "_li_7"
        },
        907: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "907"
                }],
                eltId: "_li2_0"
            }, {
                props: t[16],
                eltId: "_label_22"
            }, {
                props: t[16],
                eltId: "__78"
            }, {
                props: t[10],
                eltId: "_input_type_text_4"
            }, {
                props: t[3],
                eltId: "Vector_57"
            }],
            rootId: "_li2_0"
        },
        922: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "922"
                }],
                eltId: "_li1_0"
            }, {
                props: t[16],
                eltId: "_label_23"
            }, {
                props: t[16],
                eltId: "__79"
            }, {
                props: t[10],
                eltId: "_input_type_date_1"
            }, {
                props: t[5],
                eltId: "Vector_58"
            }, {
                props: t[5],
                eltId: "Vector_59"
            }, {
                props: t[5],
                eltId: "Vector_60"
            }, {
                props: t[5],
                eltId: "Vector_61"
            }, {
                props: t[3],
                eltId: "Vector_63"
            }],
            rootId: "_li1_0"
        },
        943: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[18],
                reactions: [{
                    type: "hover",
                    from: "943"
                }],
                eltId: "_li3_0"
            }, {
                props: t[16],
                eltId: "_label_24"
            }, {
                props: t[16],
                eltId: "__80"
            }, {
                props: t[10],
                eltId: "_input_type_text_5"
            }, {
                props: t[3],
                eltId: "Vector_65"
            }],
            rootId: "_li3_0"
        },
        958: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[19],
                reactions: [{
                    type: "hover",
                    from: "958"
                }],
                eltId: "_Button_"
            }, {
                props: t[15],
                eltId: "Vector_10_1"
            }],
            rootId: "_Button_"
        },
        968: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[20],
                reactions: [{
                    type: "hover",
                    from: "968"
                }],
                eltId: "_Button2_"
            }, {
                eltId: "stash_image_plus",
                altId: "stash_image_plus_1"
            }],
            rootId: "_Button2_"
        }
    }
})(), window.F2W_VARIABLES = {
    "--Breakpoints": 360,
    "--Type-size-H1": 28,
    "--Type-size-H2": 25,
    "--Type-size-H3": 18,
    "--Type-size-H4": 15,
    "--Type-size-H5": 0,
    "--Font-family-title": "arial",
    "--Font-family-sub-title": "arial",
    "--Font-family-paragraphs": "arial",
    "--container": 296,
    "--image-width": 153,
    "--image-height": 60,
    "--container-logo-width": 360,
    "--container-logo-height": 70,
    "--pading-left": 30,
    "--pading-right": 30,
    "--button-width": 296,
    "--button-height": 36,
    "--container-button-width": 296,
    "--container-button-height": 96,
    "--icon-width": 25,
    "--icon-height": 25,
    "--block-text-width": 296,
    "--block-text-height": 76,
    "--Type-size-display": 25,
    "--container-form-padding-left-right": 50,
    "--content-icon-width": 25,
    "--content-icon-height": 25
}, window.F2W_COLLECTION_VARS = {
    responsive: {
        desktop: {
            "--Breakpoints": 1440,
            "--Type-size-H1": 37,
            "--Type-size-H2": 28,
            "--Type-size-H3": 21,
            "--Type-size-H4": 19,
            "--Type-size-H5": 14,
            "--Font-family-title": "Arial Rounded MT Bold",
            "--Font-family-sub-title": "Arial Rounded MT Bold",
            "--Font-family-paragraphs": "Arial Rounded MT Bold",
            "--container": 671,
            "--image-width": 257,
            "--image-height": 101,
            "--container-logo-width": 1440,
            "--container-logo-height": 111,
            "--pading-left": 60,
            "--pading-right": 543,
            "--button-width": 266,
            "--button-height": 40,
            "--container-button-width": 611,
            "--container-button-height": 38,
            "--icon-width": 29,
            "--icon-height": 29,
            "--block-text-width": 646,
            "--block-text-height": 74,
            "--Type-size-display": 48,
            "--container-form-padding-left-right": 50,
            "--content-icon-width": 40,
            "--content-icon-height": 40
        },
        mobile: {
            "--Breakpoints": 360,
            "--Type-size-H1": 28,
            "--Type-size-H2": 25,
            "--Type-size-H3": 18,
            "--Type-size-H4": 15,
            "--Type-size-H5": 0,
            "--Font-family-title": "arial",
            "--Font-family-sub-title": "arial",
            "--Font-family-paragraphs": "arial",
            "--container": 296,
            "--image-width": 153,
            "--image-height": 60,
            "--container-logo-width": 360,
            "--container-logo-height": 70,
            "--pading-left": 30,
            "--pading-right": 30,
            "--button-width": 296,
            "--button-height": 36,
            "--container-button-width": 296,
            "--container-button-height": 96,
            "--icon-width": 25,
            "--icon-height": 25,
            "--block-text-width": 296,
            "--block-text-height": 76,
            "--Type-size-display": 25,
            "--container-form-padding-left-right": 50,
            "--content-icon-width": 25,
            "--content-icon-height": 25
        }
    }
}, window.F2W_COLLECTION_MODE_BPS = {
    responsive: {
        mobile: {
            minWidth: 0
        },
        desktop: {
            minWidth: 1025
        }
    }
}, window.F2W_COLOR_SCHEMES = void 0, window.F2W_LANGUAGES = void 0; 
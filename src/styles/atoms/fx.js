const params = require("../params.js");
module.exports = {
    anim: {
        ease: { in: {
                transitionTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
            },
            out: {
                transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)"
            },
            inOut: {
                transitionTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1)"
            }
        },
        delay: {
            slow: {
                transition: "all 1s"
            },
            med: {
                transition: "all 0.5s"
            },
            fast: {
                transition: "all 0.3s"
            }
        },
        speed: {
            slow: {
                transition: "all 1s"
            },
            med: {
                transition: "all 0.5s"
            },
            fast: {
                transition: "all 0.3s"
            }
        }
    },
    filter: {
        black: {
            filter: "brightness(0)"
        },
        white: {
            filter: "brightness(1)"
        }
    },
    opacity: {
        0: {
            opacity: 0
        },
        10: {
            opacity: 0.1
        },
        20: {
            opacity: 0.2
        },
        30: {
            opacity: 0.3
        },
        40: {
            opacity: 0.4
        },
        50: {
            opacity: 0.5
        },
        60: {
            opacity: 0.6
        },
        70: {
            opacity: 0.7
        },
        80: {
            opacity: 0.8
        },
        90: {
            opacity: 0.9
        },
        100: {
            opacity: 1
        }
    },
    shadow: {
        s: {
            boxShadow: `0 1px 5px ${params.color.black25}`
        }
    }
};
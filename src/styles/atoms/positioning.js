const params = require("../params");

const position = (prop) => {
    return {
        xs: {
            [prop]: `1.6${params.unit.base}`
        },
        s: {
            [prop]: `2${params.unit.base}`
        },
        m: {
            [prop]: `2.4${params.unit.base}`
        },
        l: {
            [prop]: `3.2${params.unit.base}`
        },
        xl: {
            [prop]: `4${params.unit.base}`
        },
        xxl: {
            [prop]: `5${params.unit.base}`
        },
        none: {
            [prop]: 0
        },
        auto: {
            [prop]: 'auto'
        },
        hide: {
            [prop]: "-100%"
        }
    }
};

module.exports = {
    pos: {
        abs: {
            position: "absolute"
        },
        fix: {
            position: "fixed"
        },
        rel: {
            position: "relative"
        },
        top: position("top"),
        bot: position("bottom"),
        left: position("left"),
        right: position("right")
    }
};
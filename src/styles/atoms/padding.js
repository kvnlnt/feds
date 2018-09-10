const params = require("../params");

const padding = (prop) => {
    return {
        xs: {
            [prop]: `1.4${params.unit.base}`
        },
        s: {
            [prop]: `2${params.unit.base}`
        },
        m: {
            [prop]: `3${params.unit.base}`
        },
        l: {
            [prop]: `4${params.unit.base}`
        },
        xl: {
            [prop]: `5${params.unit.base}`
        },
        none: {
            [prop]: 'none'
        },
        auto: {
            [prop]: 'auto'
        }
    }
};

module.exports = {
    pad: {
        all: padding("padding"),
        top: padding("padding-top"),
        bot: padding("padding-bottom"),
        left: padding("padding-left"),
        right: padding("padding-right"),
    }
};
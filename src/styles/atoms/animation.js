module.exports = {
  anim: {
    ease: {
      in: {
        transitionTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
      },
      out: { transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      inOut: {
        transitionTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1)"
      }
    },
    delay: {
      slow: { transition: "all 1s" },
      med: { transition: "all 0.5s" },
      fast: { transition: "all 0.3s" }
    },
    speed: {
      slow: { transition: "all 1s" },
      med: { transition: "all 0.5s" },
      fast: { transition: "all 0.3s" }
    }
  }
};

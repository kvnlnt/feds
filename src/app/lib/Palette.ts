export enum Palette {
  black = `hsl(0deg, 0%, 10%)`,
  black_90 = `hsl(0deg, 3%, 11%)`,
  black_80 = `hsl(0deg, 0%, 20%)`,
  black_70 = `hsl(0deg, 0%, 30%)`,
  black_60 = `hsl(0deg, 0%, 40%)`,
  black_50 = `hsl(0deg, 0%, 50%)`,
  black_40 = `hsl(0deg, 0%, 60%)`,
  black_30 = `hsl(0deg, 0%, 70%)`,
  black_20 = `hsl(0deg, 0%, 80%)`,
  white = `hsl(0deg, 0%, 100%)`,
  white_90 = `hsl(0deg, 0%, 95%)`,
  white_80 = `hsl(0deg, 0%, 90%)`,
  white_70 = `hsl(0deg, 0%, 85%)`,
  white_60 = `hsl(0deg, 0%, 80%)`,
  white_50 = `hsl(0deg, 0%, 75%)`,
  white_40 = `hsl(0deg, 0%, 70%)`,
  earth = `hsl(30deg,30%,20%)`,
  bright_orange = `hsl(19deg, 100%, 50%)`,
  violet_noir = `hsl(227deg, 77%, 15%)`,
  green = `hsl(174deg, 64%, 36%)`,
  deep_blue = `hsl(196deg, 97%, 26%)`,
  ash = `hsl(19deg, 11%, 58%)`,
  none = 'none',
  transparent = 'transparent',
  charcoal_turquoise = `hsl(196,31%,17%)`,
}

const Colors = {
  black: [0, 0, 10],
  red: [0, 100, 50],
  blue: [240, 100, 50],
  yellow: [55, 100, 50],
  green: [118, 100, 50],
  purple: [270, 100, 50],
  orange: [30, 100, 50],
  transparent: 'transparent',
  white: [0, 0, 100],
};

export const usePalette = () => {
  const getter = (color: keyof typeof Colors, adjustLightness: number = 0, opacity: number = 1) => {
    if (color === 'transparent') return color;
    const [h, s, l] = Colors[color];
    const hsla = `hsla(${h}deg,${s}%,${l + adjustLightness}%,${opacity})`;
    return hsla;
  };
  return [getter];
};

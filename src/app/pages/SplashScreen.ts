import { useMandala } from '../components/Branding/Mandala';
import { useIsoShell } from '../components/Grids/IsoShell';
import { useCss } from '../lib/Css';
import { useFont } from '../lib/Fonts';
import { useHtml } from '../lib/Html';
import { useKeyFrames } from '../lib/KeyFrames';
import { useLocalization } from '../lib/Localization';
import { useMath } from '../lib/Math';
import { usePalette } from '../lib/Palette';
import { useSvg } from '../lib/Svg';

const [l10n] = useLocalization();
const [palette] = usePalette();
const [font] = useFont();

const [kf] = useKeyFrames({
  fadeIn: [
    [0, 'opacity', 0],
    [100, 'opacity', 1],
  ],
  slideDown: [
    [0, 'transform', 'translateY(-15px)'],
    [100, 'transform', 'translateY(0px)'],
  ],
  slideUp: [
    [0, 'transform', 'translateY(15px)'],
    [100, 'transform', 'translateY(0px)'],
  ],
  scaleUp: [
    [0, 'transform', 'scale(0.5)'],
    [100, 'transform', 'scale(1)'],
  ],
});

const [css] = useCss({
  animationContainer: [
    ['color', palette('white')],
    ['fontFamily', font('arial')],
    ['padding', '0px'],
    ['fontSize', '14px'],
    ['cursor', 'pointer'],
  ],
  container: [
    ['display', 'flex'],
    ['flexDirection', 'column'],
    ['justifyContent', 'center'],
    ['alignItems', 'center'],
    ['maxWidth', '500px'],
    ['animation', kf('fadeIn', 'scaleUp')],
    ['animationFillMode', 'forwards'],
    ['animationDuration', '.5s'],
    ['animationDelay', '0s'],
  ],
  title: [
    ['color', palette('white')],
    ['fontFamily', font('arial')],
    ['fontWeight', 'bold'],
    ['fontSize', '30px'],
    ['textTransform', 'uppercase'],
    ['letterSpacing', '30px'],
    ['textAlign', 'center'],
    ['marginBottom', '10px'],
    ['marginLeft', '30px'],
    ['animation', kf('slideUp', 'fadeIn')],
    ['animationFillMode', 'forwards'],
    ['animationDuration', '1s'],
    ['animationDelay', '0.25s'],
    ['opacity', 0],
  ],
  subTitle: [
    ['color', palette('white', 0, 0.2)],
    ['fontFamily', font('arial')],
    ['fontSize', '10px'],
    ['textTransform', 'uppercase'],
    ['letterSpacing', '5px'],
    ['textAlign', 'center'],
    ['marginBottom', '0px'],
    ['animation', kf('slideUp', 'fadeIn')],
    ['animationFillMode', 'forwards'],
    ['animationDuration', '1s'],
    ['animationDelay', '0.5s'],
    ['opacity', 0],
  ],
  tagline: [
    ['color', palette('white')],
    ['fontFamily', font('arial')],
    ['fontSize', '15px'],
    ['textTransform', 'uppercase'],
    ['letterSpacing', '5px'],
    ['textAlign', 'center'],
    ['lineHeight', '28px'],
    ['padding', '0px 30px 30px'],
    ['opacity', '0'],
    ['animationName', kf('slideUp', 'fadeIn')],
    ['animationFillMode', 'forwards'],
    ['animationDuration', '1s'],
    ['animationDelay', '.75s'],
  ],
  button: [
    ['backgroundColor', palette('transparent')],
    ['color', palette('white')],
    ['borderTop', '0px'],
    ['borderLeft', '0px'],
    ['borderRight', '0px'],
    ['borderBottom', `5px solid ${palette('white', 0, 0.08)}`],
    ['padding', '15px 20px'],
    ['textTransform', 'uppercase'],
    ['fontSize', '10px'],
    ['letterSpacing', '5px'],
    ['cursor', 'pointer'],
    ['opacity', 0],
    ['animationName', kf('slideUp', 'fadeIn')],
    ['animationFillMode', 'forwards'],
    ['animationDuration', '1s'],
    ['animationDelay', '1s'],
  ],
  bgWhite: [
    ['backgroundColor', palette('white', 0, 0.1)],
    ['transition', 'all 1s'],
  ],
});

const { randomNumberInRange } = useMath();

const getRandomColor = () => {
  const colors = [
    palette('blue', 30, 0.7),
    palette('red', 30, 0.7),
    palette('yellow', 0, 0.7),
    palette('green', 30, 0.7),
    palette('purple', 30, 0.7),
    palette('orange'),
  ];
  return colors[randomNumberInRange(0, colors.length - 1)];
};

const CanvasSize = 300;

const createMandala = () => {
  const [Mandala] = useSvg('svg', ['width', CanvasSize], ['height', CanvasSize]);

  const [RingOne, RingOneMessage] = useMandala({
    cx: CanvasSize / 2,
    cy: CanvasSize / 2,
    debug: false,
    diameter: CanvasSize * 0.75,
    fill: palette('transparent'),
    stroke: getRandomColor(),
    petals: [
      ...Array(randomNumberInRange(20, 50)).fill({
        height: randomNumberInRange(0, 100),
        frequency: 20,
        slope: randomNumberInRange(1, 5),
      }),
    ],
    rotation: randomNumberInRange(0, 90),
    rotationSpeed: 0.75,
    strokeWidth: '1',
  });

  const [RingTwo, RingTwoMessage] = useMandala({
    cx: CanvasSize / 2,
    cy: CanvasSize / 2,
    debug: false,
    diameter: CanvasSize * 0.3,
    fill: palette('transparent'),
    stroke: getRandomColor(),
    petals: Array(randomNumberInRange(20, 50)).fill({
      height: randomNumberInRange(0, 100),
      frequency: 20,
      slope: randomNumberInRange(1, 3),
    }),
    rotation: randomNumberInRange(0, 90),
    rotationSpeed: -0.5,
    strokeWidth: '1',
  });

  const [RingThree, RingThreeMessage] = useMandala({
    cx: CanvasSize / 2,
    cy: CanvasSize / 2,
    debug: false,
    diameter: CanvasSize * 0.3,
    fill: palette('transparent'),
    stroke: getRandomColor(),
    petals: [
      ...Array(randomNumberInRange(20, 50)).fill({
        height: randomNumberInRange(0, 100),
        frequency: 20,
        slope: randomNumberInRange(1, 6),
      }),
    ],
    rotation: randomNumberInRange(0, 90),
    rotationSpeed: 1,
    strokeWidth: '1',
  });

  return Mandala(RingOne, RingTwo, RingThree);
};

export const useSplashScreen = () => {
  let interval: number;
  const [container] = useHtml('div', ['class', css('container')]);
  const stopAnimation = () => clearInterval(interval);
  const startAnimation = () => {
    stopAnimation();
    interval = setInterval(() => setAnimationContainer(createMandala()));
  };
  const [animationContainer, setAnimationContainer] = useHtml('div', ['class', css('animationContainer')]);
  const [title] = useHtml('div', ['class', css('title')]);
  const [subTitle] = useHtml('div', ['class', css('subTitle')]);
  const [tagline] = useHtml('div', ['class', css('tagline')]);
  const [button] = useHtml(
    'button',
    ['class', css('button', 'bgWhite_on_hover')],
    ['onclick', () => alert('COMING SOON!!! ')],
    ['onmouseover', () => startAnimation()],
    ['onmouseout', () => stopAnimation()],
  );
  const [dashboard] = useIsoShell(
    container(
      title('feds'),
      subTitle('Own Your Framework'),
      animationContainer(createMandala()),
      tagline(
        'A hard to break, easy to fix starter kit that allows you to own your framework. You know – instead of the other way around',
      ),
      button('Prove It'),
    ),
  );
  startAnimation();
  setTimeout(() => stopAnimation(), 2000);
  return [dashboard];
};

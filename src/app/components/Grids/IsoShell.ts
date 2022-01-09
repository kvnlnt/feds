import { usePalette } from 'src/app/lib/Palette';
import { useCss } from '../../lib/Css';
import { useHtml } from '../../lib/Html';

const [palette] = usePalette();

const [css] = useCss({
  grid: [
    ['display', 'flex'],
    ['height', '100vh'],
    ['width', '100vh'],
    ['backgroundColor', palette('black')],
    ['backgroundSize', '10px 10px'],
    [
      'backgroundImage',
      `repeating-linear-gradient(230deg, 
        ${palette('black', 5)} 0, 
        ${palette('black')} 1px, 
        ${palette('black', 0)} 0, 
        ${palette('black', 0)} 90%)`,
    ],
  ],
});

export const useIsoShell = (content: HTMLElement) => {
  const [Grid] = useHtml('div', ['class', css('grid')]);
  return [Grid(content)];
};

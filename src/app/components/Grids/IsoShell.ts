import { useCss } from '../../lib/Css';
import { useHtml } from '../../lib/Html';
import { Palette } from '../../lib/Palette';

const [css] = useCss({
  grid: [
    ['display', 'grid'],
    ['height', '100vh'],
    ['gridTemplateAreas', '"content"'],
    ['gridTemplateRows', 'auto'],
    ['backgroundColor', Palette.black_90],
  ],
  contentArea: [
    ['gridArea', 'content'],
    ['maxWidth', '100vw'],
    ['display', 'flex'],
    ['justifyContent', 'center'],
    ['alignItems', 'center'],
  ],
});

export const useIsoShell = (content: HTMLElement) => {
  const [Grid] = useHtml('div', ['class', css('grid')]);
  const [ContentArea] = useHtml('div', ['class', css('contentArea')]);
  return [Grid(ContentArea(content))];
};

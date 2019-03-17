import get from 'lodash/get';

export default (theme, color) => {
  return get(theme, `theme.global.colors['${color}']`);
}

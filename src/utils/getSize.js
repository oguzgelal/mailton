import get from 'lodash/get';

export default (theme, size) => {
  return get(theme, `theme.global.edgeSize['${size}']`)
}

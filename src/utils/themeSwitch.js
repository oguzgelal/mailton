import get from 'lodash/get';

export default (props, whenLight, whenDark) => {
  let use = whenLight;
  if (get(props, 'settings.theme') === 'dark') use = whenDark;
  if (typeof use === 'function') return use();
  return use;
}

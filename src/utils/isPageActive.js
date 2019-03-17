import get from 'lodash/get';
import history from '../instances/history';

/**
 * for uri "/some/path/test/1"
 *
 * "/other" -> false
 * "/test" -> true
 * "/test/1" -> true
 * "/1" -> true
 *
 * with { exact: true }
 *
 * "/other" -> false
 * "/test" -> false
 * "/test/1" -> true
 * "/1" -> true
 */

export default (_path = '', { exact } = {}) => {
  const path = _path[0] === '/' ? _path : `/${_path}`;
  const pathname = get(history, 'location.pathname', '');
  if (exact) return pathname.indexOf(path) + path.length === pathname.length;
  return pathname.indexOf(path) !== -1;
};

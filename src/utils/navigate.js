import history from '../instances/history';

export default _path => {
  const path = _path[0] === '/' ? _path.substr(1) : _path;
  history.push(path);
}

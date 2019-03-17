import { persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import localForage from 'localforage';

// action types
const CHANGE_THEME = 'mailton/settings/CHANGE_THEME';

// initial state
const initialState = {
  theme: 'light'
};

// reducer
const reducer = (state = initialState, action = {}) => {
  if (action.type === CHANGE_THEME) {
    return { ...state, theme: action.theme || 'light' }
  }

  return state;
};

// action creators
export const changeTheme = theme => ({
  type: CHANGE_THEME,
  theme,
})

// exports
export default persistReducer({
  key: 'settings',
  storage: localForage,
  stateReconciler: hardSet,
}, reducer);

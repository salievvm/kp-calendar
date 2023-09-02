export const APP_SET_LOADING = 'APP_SET_LOADING';
export const APP_LOADED = 'APP_LOADED';

const initState = {
  loading: false
}

function reducer(state = initState, action) {
  switch (action.type) {
    case APP_SET_LOADING:
      return { loading: true };
    case APP_LOADED:
      return { loading: false };
    default:
      return state;
  }
}

export default reducer;
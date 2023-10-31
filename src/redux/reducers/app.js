export const APP_SET_ERROR = 'APP_SET_ERROR';
export const APP_UNSET_ERROR = 'APP_UNSET_ERROR';
export const APP_SET_LOADING = 'APP_SET_LOADING';
export const APP_LOADED = 'APP_LOADED';

const initState = {
  loading: false,
  error: false,
  error_description: '',
}

function reducer(state = initState, action) {
  switch (action.type) {
    case APP_SET_LOADING:
      return { loading: true };
    case APP_LOADED:
      return { loading: false };
    case APP_SET_ERROR:
      return {
        error: true,
        error_description: action.data.error_description,
      };
    case APP_UNSET_ERROR:
      return {
        error: false,
        error_description: '',
      };
    default:
      return state;
  }
}

export default reducer;
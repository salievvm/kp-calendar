/* eslint-disable */

import store from "../../../store";

import {
  APP_LOADED,
  APP_SET_ERROR,
  APP_SET_LOADING,
  APP_UNSET_ERROR
} from "../../../reducers/app";

class App {
  setLoading = () => {
    store.dispatch({
      type: APP_SET_LOADING,
    });
  }

  endLoading = () => {
    store.dispatch({
      type: APP_LOADED,
    });
  }

  setError = (error) => {
    store.dispatch({
      type: APP_SET_ERROR,
      data: {
        error_description: error,
      }
    });
  }

  unsetError = (error) => {
    store.dispatch({
      type: APP_UNSET_ERROR,
    });
  }
}

export default App;
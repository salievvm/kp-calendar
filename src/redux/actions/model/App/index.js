/* eslint-disable */

import store from "../../../store";

import {
  APP_LOADED,
  APP_SET_LOADING
} from "../../../reducers/app";

class App {
  setLoading = () => {
    store.dispatch({
      type: APP_SET_LOADING,
    })
  }

  endLoading = () => {
    store.dispatch({
      type: APP_LOADED,
    })
  }
}

export default App;
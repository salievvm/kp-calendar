/* eslint-disable */

import store from "../../../store";

import {
  SET_FIELD,
} from "../../../reducers/form";

class Form {
  setField = (section, code, value) => {
    store.dispatch({
      type: SET_FIELD,
      data: { section, code, value, }
    })
  }

  send = () => {
    const { form } = store.getState();
    console.log(form.schema);
  }
}

export default Form;
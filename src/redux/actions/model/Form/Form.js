/* eslint-disable */

import store from "../../../store";

import {
  SET_FIELD,
  ADD_SUBSECTION,
} from "../../../reducers/form";

class Form {
  setField = (section, subsection, code, value) => {
    store.dispatch({
      type: SET_FIELD,
      data: { section, subsection, code, value, }
    })
  }
  
  addSubSection = (section) => {
    store.dispatch({
      type: ADD_SUBSECTION,
      data: { section }
    })
  }

  send = () => {
    const { form } = store.getState();
    console.log(form.schema);
  }
}

export default Form;
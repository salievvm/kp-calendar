import React from "react";
import { useSelector } from "react-redux";

import { obApp, obForm } from "../../../redux/actions/model";

const useApp = () => {
  const {
    app,
    form,
  } = useSelector(state => state);

  const schema = React.useMemo(() => {
    return form.schema
  }, [form]);

  const handleMakeLoading = () => {
    obApp.setLoading();
    setTimeout(() => {
      obApp.endLoading();
    }, 2000)
  }

  const handleFieldChange = (section, code, value) => {
    obForm.setField(section, code, value);
  }

  const handleSendForm = () => {
    obForm.send();
  }

  return {
    app,
    schema,
    handleMakeLoading,
    handleFieldChange,
    handleSendForm,
  }
};

export default useApp;
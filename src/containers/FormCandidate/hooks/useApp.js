import { useSelector } from "react-redux";

import App from "../../../redux/actions/model/App";

const useApp = () => {
  const {
    app,
  } = useSelector(state => state);

  const obApp = new App();

  const handleMakeLoading = () => {
    obApp.setLoading();
    setTimeout(() => {
      obApp.endLoading();
    }, 2000)
  }

  return {
    app,
    handleMakeLoading,
  }
};

export default useApp;
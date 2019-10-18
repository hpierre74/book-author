import React from "react";
import Login from "../login/Login";
import Admin from "./Admin";
import { isAuth as isAuthenticated } from "../../utils/firebase.utils";

const Landing = () => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [hasSubmit, setHasSubmit] = React.useState(false);

  React.useEffect(() => {
    if (!hasSubmit) {
      return;
    }
    if (isAuthenticated()) {
      setIsAuth(true);
      setHasSubmit(false);
    }
  }, [hasSubmit]);

  return isAuth ? <Admin /> : <Login setHasSubmit={setHasSubmit} />;
};

export default Landing;

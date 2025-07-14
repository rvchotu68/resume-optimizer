import React from "react";
import { useLocation } from "react-router-dom";

function Auth() {
  const {
    state: { type },
  } = useLocation();

  console.log(type);

  return <div>Auth</div>;
}

export default Auth;

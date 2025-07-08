import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AuthGuard from "../layouts/AuthGuard/AuthGuard";
import Resume from "../pages/Resume/Resume";
import Auth from "../pages/Auth/Auth";
import Error from "../pages/Error/Error";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<AuthGuard />}>
        <Route path="/resume" element={<Resume />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRoutes;

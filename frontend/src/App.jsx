import { useEffect } from "react";

import AppRoutes from "./routes/AppRoutes";

import NavBar from "./components/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { pathname } = useLocation();

  useAuth();

  return (
    <div className="relative min-h-screen">
      {pathname !== "/auth" && <NavBar />}
      <AppRoutes />
    </div>
  );
}

export default App;

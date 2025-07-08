import { useEffect } from "react";

import AppRoutes from "./routes/AppRoutes";
import { getUserStatus } from "./services/fireAuth";
import NavBar from "./components/NavBar/NavBar";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const unSub = getUserStatus();

    return () => {
      unSub();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {pathname !== "/auth" && <NavBar />}
      <AppRoutes />
    </div>
  );
}

export default App;

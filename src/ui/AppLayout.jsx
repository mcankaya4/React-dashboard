import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Main from "./Main.jsx";

function AppLayout() {
  return (
    <div className="grid h-dvh grid-cols-[80px_1fr] grid-rows-[auto_1fr] lg:grid-cols-[260px_1fr]">
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;

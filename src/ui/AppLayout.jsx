import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Main from "./Main.jsx";
import MobilSideBar from "./MobilSideBar.jsx";
import MobileMainNav from "./MobileMainNav.jsx";
import Container from "./Container.jsx";

function AppLayout() {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto] lg:grid-cols-[260px_1fr]">
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <MobilSideBar>
        <MobileMainNav />
      </MobilSideBar>
    </div>
  );
}

export default AppLayout;

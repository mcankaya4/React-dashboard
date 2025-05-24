import Logo from "./Logo";
import MainNav from "./MainNav.jsx";

function Sidebar() {
  return (
    <aside className="row-start-1 row-end-[-1] hidden flex-col gap-8 border-r border-r-gray-100 bg-white px-6 py-8 lg:flex">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;

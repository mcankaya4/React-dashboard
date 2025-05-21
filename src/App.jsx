import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Bookings from "./pages/Bookings.jsx";
import Cabins from "./pages/Cabins.jsx";
import Users from "./pages/Users.jsx";
import Settings from "./pages/Settings.jsx";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  // Login, applayout dışında
  {
    path: "/login",
    element: <Login />,
  },
  // Tüm diğer sayfalar AppLayout altında <Outlet/> ile gösterilecek
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate replace={true} to="/dashboard" /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/bookings", element: <Bookings /> },
      { path: "/cabins", element: <Cabins /> },
      { path: "/users", element: <Users /> },
      { path: "/settings", element: <Settings /> },
      { path: "/account", element: <Account /> },
    ],
  },
  // login dışında tüm bilinmeyen rotaları da yakalayalım (login yanlış yazılırsa vs.)
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

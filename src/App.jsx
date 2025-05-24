import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Dashboard from "./pages/Dashboard.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Bookings from "./pages/Bookings.jsx";
import Cabins from "./pages/Cabins.jsx";
import Users from "./pages/Users.jsx";
import Settings from "./pages/Settings.jsx";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ön bellekteki verilerin taranana kadar taze kalacağı süre
      staleTime: 0, // sn
    },
  },
});

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
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: 'theme("colors.indigo.600")',
            color: 'theme("colors.gray.700")',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;

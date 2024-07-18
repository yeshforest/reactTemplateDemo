import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Layout from "./layout/Layout.tsx";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const LoginPage = lazy (() => import("./pages/login/LoginPage"));



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout />
      ),
      children: [
        {
          index:true,
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

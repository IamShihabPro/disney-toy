import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/pages/Home/Home.jsx";
import LogIn from "./components/pages/LogIn/LogIn.jsx";
import Register from "./components/pages/Register/Register.jsx";
import AuthProvider from "./components/provider/AuthProvider.jsx";
import AddToys from "./components/pages/Add/AddToys.jsx";
import MyToys from "./components/pages/myToys/MyToys.jsx";
import ViewDetails from "./components/pages/ViewDetails.jsx";
import AllToys from "./components/pages/AllToys/AllToys.jsx";
import Update from "./components/pages/myToys/Update.jsx";
import PrivateRoutes from "./components/Routes/PrivateRoutes.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
// import Blogs from "./components/pages/Blogs.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Cart from "./components/pages/Cart/Cart.jsx";
import Review from "./components/pages/Review/Review.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add",
        element: (
          <PrivateRoutes>
            <AddToys></AddToys>
          </PrivateRoutes>
        ),
      },

      {
        path: "/myToys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
        loader: () => fetch("https://disney-toys-server.vercel.app/allToys"),
      },

      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://disney-toys-server.vercel.app/getone/${params.id}`),
      },

      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },

      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://disney-toys-server.vercel.app/getone/${params.id}`),
      },

      {
        path: "/carts",
        element: <Cart></Cart>,
      },

      {
        path: "/carts",
        element: <Cart></Cart>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);

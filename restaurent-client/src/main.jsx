import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";
import AddRecipe from "./components/AddRecipe";
import Recipes from "./components/Recipes";
import RecipeDetails from "./components/RecipeDetails";
import UpdateRecipe from "./components/updateRecipe";
import Login from "./components/Login";
import Register from "./components/Register";

import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      // ---------- Public routes ----------
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/recipes",
        Component: Recipes,
        loader: () => fetch("http://localhost:3000/recipe"),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },

      // ---------- Protected routes ----------
      {
        path: "/add-recipe",
        element: (
          <PrivateRoute>
            <AddRecipe />
          </PrivateRoute>
        ),
      },
      {
        path: "/recipe/:id",
        element: (
          <PrivateRoute>
            <RecipeDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/recipe/${params.id}`),
      },
      {
        path: "/update-recipe/:id",
        element: (
          <PrivateRoute>
            <UpdateRecipe />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/recipe/${params.id}`),
      },

      // ---------- 404 (must be last) ----------
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
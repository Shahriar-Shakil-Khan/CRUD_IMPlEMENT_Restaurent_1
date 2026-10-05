 import { StrictMode } from 'react'
 import { createRoot } from 'react-dom/client'
 import './index.css'
 import { createBrowserRouter,RouterProvider } from "react-router";
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import NotFound from './components/NotFound';
import AddRecipe from './components/AddRecipe';
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails';
import UpdateRecipe from './components/updateRecipe';


 const router = createBrowserRouter([
 {
     path: "/",
     Component: MainLayout,
     children:[
     {
         index:true,
         Component:Home
     },{
      path:"/about",
      Component:AboutUs,
     },
     {
      path:"/add-recipe",
      Component: AddRecipe,
     },
     {
        path:"/recipes",
        Component: Recipes,
        loader: () => fetch('http://localhost:3000/recipe'),
        //loader: ({ params }) =>fetch(`http://localhost:3000/recipe/${params.id}`),
     },
     {
    path: "/recipe/:id",
    Component: RecipeDetails,
    loader: ({ params }) =>fetch(`http://localhost:3000/recipe/${params.id}`),
    },
    {
    path: "/update-recipe/:id",
    Component: UpdateRecipe,
    loader: ({ params }) =>
        fetch(`http://localhost:3000/recipe/${params.id}`),
    },
     {
        path: "*", // must be the last child
        Component: NotFound, 
     }
     ]
 },
 ]);
 createRoot(document.getElementById('root')).render(
 <StrictMode>
     <RouterProvider router={router} />
 </StrictMode>,
 )
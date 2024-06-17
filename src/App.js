import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";

const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div>
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

//app router using react-router-dom
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path:"",
        element:<Body />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"restaurant/:resId",
        element:<RestaurantMenu />
      },
      {
        path:"grocery",
        element:(
          <Suspense>
            <Grocery />
          </Suspense>
        )
      }
    ],
    errorElement:<ErrorPage />,
  },
]);

//render react element or jsx using reactDOM method
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);

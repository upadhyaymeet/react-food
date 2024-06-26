import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
  const [userName, setUserName] = useState()

  useEffect(()=>{
      const data = {
        name:"Meet"
      }
      setUserName(data.name)
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
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
        path:"cart",
        element:<Cart />
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

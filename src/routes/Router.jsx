import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Landing from "../pages/Landing";
import {loader} from "../utilities/loader";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import AllCategory from "../pages/allCategory/AllCategory";
import Category from "../pages/Category";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Profile from "../pages/Profile";
import PrivateRoutes from "./Privateroute";
import ErrorPage from "../pages/errorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    loader: loader,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/item/:name",
        element: <Product />, 
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        ),
      },
      {
        path: "/allCategory",
        element: <AllCategory />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/landing/:name",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

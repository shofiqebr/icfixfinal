import {createContext, useEffect, useState} from "react";
import {Outlet, useLoaderData} from "react-router-dom";
import Navbar from "./sharred/navbar/Navbar";
import Footer from "./sharred/footer/Footer";
import {getStrdCart, getUserData} from "./utilities/functions";

export const GroupsContext = createContext([]);
export const WebContext = createContext([]);
export const ItemContext = createContext([]);
export const CartContext = createContext();
export const UserContext = createContext();

const App = () => {
  const {groups, webItems, items} = useLoaderData();
  const [cartItems, setCartItems] = useState(0);
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    let cart = getStrdCart("cart");
    setCartItems(cart.length ? cart.length : 0);
  }, [cartItems]);

  useEffect(() => {
    let token = getStrdCart("token");
    let parts = atob(decodeURIComponent(token)).split("_");
    getUserData(parts[0], parts[1], `["*"]`)
      .then((result) => {
        if (result.length > 0) {
          setUserData(result);
          setUser(result[0]?.customer_name);
        } else {
          setUser(null);
          setCartItems(0);
          setUserData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, [user]);

  return (
    <>
      <UserContext.Provider value={{user, userData, setUser}}>
        <CartContext.Provider value={{cartItems, setCartItems}}>
          <GroupsContext.Provider value={groups}>
            <WebContext.Provider value={webItems}>
              <ItemContext.Provider value={items}>
                <Navbar />
                <Outlet></Outlet>
                <Footer />
              </ItemContext.Provider>
            </WebContext.Provider>
          </GroupsContext.Provider>
        </CartContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default App;

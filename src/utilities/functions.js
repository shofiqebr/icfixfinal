import {toast} from "react-toastify";

let formatDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");

  let formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

const addToCart = (newItem) => {
  const currentCart = JSON.parse(localStorage.getItem(`${window.location.hostname}-cart`)) || [];
  const existing = currentCart.findIndex((item) => item.item_code === newItem.item_code);
  if (existing !== -1) {
    currentCart[existing].qty += 1;
    localStorage.setItem(`${window.location.hostname}-cart`, JSON.stringify(currentCart));
    return false;
  } else {
    currentCart.push(newItem);
    localStorage.setItem(`${window.location.hostname}-cart`, JSON.stringify(currentCart));
    return true;
  }
};

const putCartDB = async (user, item) => {
  const addItem = {
    custom_cart: JSON.stringify(item),
  };

  try {
    const response = await fetch(`https://erpmethods.vercel.app/puts/Customer?name=${user}`, {
      method: "PUT",
      body: JSON.stringify(addItem),
      headers: {
        url: "https://erp.icfix.com.bd/",
        api_key: "fb6a7b744acef86",
        api_secret: "f177dc5a13eef46",
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return !!result.custom_cart;
  } catch (error) {
    console.error("Error updating cart data:", error);
    return false;
  }
};

const getUserCartData = async (user) => {
  const cartData = await fetch(`https://erpmethods.vercel.app/gets/Customer?filters=[["name", "=", "${user}"]]&fields=["custom_cart"]`, {
    method: "GET",
    headers: {
      url: "https://erp.icfix.com.bd/",
      api_secret: "f177dc5a13eef46",
      api_key: "fb6a7b744acef86",
    },
  });
  const cart = await cartData.json();
  return cart[0]?.custom_cart ? JSON.parse(cart[0]?.custom_cart) : [];
};

const addToProceed = (newItem, store) => {
  localStorage.removeItem(`${window.location.hostname}-${store}`);
  localStorage.setItem(`${window.location.hostname}-${store}`, JSON.stringify(newItem));
  return true;
};

const getStrdCart = (store) => {
  let strCart = [];
  const storedCart = localStorage.getItem(`${window.location.hostname}-${store}`);
  if (storedCart) {
    strCart = JSON.parse(storedCart);
  }
  return strCart;
};

const removeToCart = (key) => {
  let newCart = getStrdCart("cart");
  if (Array.isArray(newCart)) {
    newCart[key] = null;
    newCart = newCart.filter((item) => item !== null);
  } else {
    delete newCart[key];
  }

  localStorage.setItem(`${window.location.hostname}-cart`, JSON.stringify(newCart));
  toast("Item Deleted");
};

const getUser = (mail, pass) => {
  const filters = [["email_id", "=", mail]];
  if (pass) {
    filters.push(["custom_password", "=", pass]);
  }

  const filtersQuery = JSON.stringify(filters);
  const fetchURL = `https://erpmethods.vercel.app/gets/Customer?filters=${filtersQuery}&fields=["name"]`;

  return fetch(fetchURL, {
    headers: {
      url: "https://erp.icfix.com.bd/",
      api_secret: "f177dc5a13eef46",
      api_key: "fb6a7b744acef86",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result[0]?.name) {
        return result[0]?.name;
      } else {
        return false;
      }
    });
};

const getUserData = (mail, pass, fields) => {
  return fetch(`https://erpmethods.vercel.app/gets/Customer?filters=[["email_id", "=", "${mail}"],["custom_password", "=", "${pass}"]]&fields=${fields}`, {
    headers: {
      url: "https://erp.icfix.com.bd/",
      api_secret: "f177dc5a13eef46",
      api_key: "fb6a7b744acef86",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.length > 0) {
        return result;
      } else {
        return false;
      }
    });
};

const postData = (docType, body) => {
  return fetch(`https://erpmethods.vercel.app/posts/${docType}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      url: "https://erp.icfix.com.bd/",
      api_key: "fb6a7b744acef86",
      api_secret: "f177dc5a13eef46",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result?.name) {
        return result?.name;
      } else {
        return false;
      }
    });
};

export {formatDate, addToCart, getUserCartData, putCartDB, addToProceed, removeToCart, getStrdCart, getUser, postData, getUserData};

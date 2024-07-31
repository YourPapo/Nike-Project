import { createStore } from "vuex";
import users from "./services/users";
import cart from "./services/cart";
import admins from "./services/admins";
import menu from "./data/menu";

const store = createStore({
  modules: {
    users,
    cart,
    admins,
    menu,
  },
});

export default store;

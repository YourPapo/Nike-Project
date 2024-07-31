import {
  HomePage,
  ProductsPage,
  CartPage,
  AuthPage,
  AdminPage,
  HelpPage,
  CheckoutPage,
} from "./components";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsPage,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPage,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckoutPage,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminPage,
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthPage,
  },
  {
    path: "/help",
    name: "Help",
    component: HelpPage,
  },
];

export default routes;

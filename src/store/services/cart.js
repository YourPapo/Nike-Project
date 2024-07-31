import axios from "axios";

export default {
  state() {
    return {
      items: [],
    };
  },

  mutations: {
    setCart(state, items) {
      state.items = items;
    },
    addToCart(state, product) {
      const itemIndex = state.items.findIndex((item) => item.id === product.id);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      const index = state.items.findIndex((item) => item.id === productId);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    updateCartQuantity(state, { productId, quantity }) {
      const itemIndex = state.items.findIndex((item) => item.id === productId);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = quantity;
      }
    },
  },

  getters: {
    cartItems(state) {
      return state.items;
    },
    cartTotal(state) {
      const total = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      return total.toFixed(2);
    },
  },

  actions: {
    fetchCart({ commit }, userId) {
      return axios
        .get(`http://localhost:3000/carts?userId=${userId}`)
        .then((response) => {
          const cart = response.data[0];
          commit("setCart", cart ? cart.items : []);
        })
        .catch((error) => {
          console.error("Error fetching cart:", error);
        });
    },
    addProductToCart({ commit, state }, { product, userId }) {
      return axios
        .get(`http://localhost:3000/carts?userId=${userId}`)
        .then((existingCartResponse) => {
          const existingCart = existingCartResponse.data[0];

          if (existingCart) {
            const itemIndex = existingCart.items.findIndex(
              (item) => item.id === product.id
            );
            if (itemIndex >= 0) {
              existingCart.items[itemIndex].quantity++;
            } else {
              existingCart.items.push({ ...product, quantity: 1 });
            }

            return axios
              .put(
                `http://localhost:3000/carts/${existingCart.id}`,
                existingCart
              )
              .then(() => {
                commit("setCart", existingCart.items);
              });
          } else {
            const newCart = {
              userId: userId,
              items: [{ ...product, quantity: 1 }],
            };
            return axios
              .post(`http://localhost:3000/carts`, newCart)
              .then((response) => {
                commit("setCart", newCart.items);
              });
          }
        })
        .catch((error) => {
          console.error("Error adding product to cart:", error);
        });
    },

    removeProductFromCart({ commit, state }, { productId, userId }) {
      return axios
        .get(`http://localhost:3000/carts?userId=${userId}`)
        .then((existingCartResponse) => {
          const existingCart = existingCartResponse.data[0];

          if (existingCart) {
            const updatedItems = existingCart.items.filter(
              (item) => item.id !== productId
            );
            return axios
              .put(`http://localhost:3000/carts/${existingCart.id}`, {
                ...existingCart,
                items: updatedItems,
              })
              .then(() => {
                commit("setCart", updatedItems);
              });
          }
        })
        .catch((error) => {
          console.error("Error removing product from cart:", error);
        });
    },
    
    updateProductQuantity({ commit, state }, { productId, quantity, userId }) {
      return axios
        .get(`http://localhost:3000/carts?userId=${userId}`)
        .then((existingCartResponse) => {
          const existingCart = existingCartResponse.data[0];

          if (existingCart) {
            const itemIndex = existingCart.items.findIndex(
              (item) => item.id === productId
            );
            if (itemIndex >= 0) {
              existingCart.items[itemIndex].quantity = quantity;
            }

            return axios
              .put(
                `http://localhost:3000/carts/${existingCart.id}`,
                existingCart
              )
              .then(() => {
                commit("updateCartQuantity", { productId, quantity });
              });
          }
        })
        .catch((error) => {
          console.error("Error updating product quantity:", error);
        });
    },
  },
};

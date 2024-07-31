import axios from "axios";

export default {
  state() {
    return {
      productData: [],
      users: [],
    };
  },

  mutations: {
    setProducts(state, data) {
      state.productData = data;
    },
    setUsers(state, data) {
      state.users = data;
    },
  },

  getters: {
    productData: (state) => state.productData,
    users: (state) => state.users,
  },

  actions: {
    fetchProducts({ commit }) {
      axios
        .get("http://localhost:3000/products")
        .then((res) => {
          commit("setProducts", res.data);
        })
        .catch((err) => {});
    },
    addProduct({ dispatch }, product) {
      axios
        .post("http://localhost:3000/664/products", product)
        .then((res) => {
          dispatch("fetchProducts");
        })
        .catch((err) => {});
    },
    deleteProduct({ dispatch }, productId) {
      console.log("Перед удалением продукта с ID:", productId);
      axios
        .delete(`http://localhost:3000/664/products/${productId}`)
        .then((res) => {
          console.log(res);
          dispatch("fetchProducts");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateProduct({ dispatch }, product) {
      axios
        .put(`http://localhost:3000/664/products/${product.id}`, product)
        .then((res) => {
          console.log(res);
          dispatch("fetchProducts");
        })
        .catch((err) => {
          console.error("Ошибка при обновлении продукта:", err);
        });
    },

    fetchUsers({ commit }) {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          commit("setUsers", res.data);
          console.log(res.data);
        })
        .catch((err) => {});
    },
    updateUser({ dispatch }, user) {
      axios
        .patch(`http://localhost:3000/users/${user.id}`, { role: user.role })
        .then(() => {
          dispatch("fetchUsers");
        })
        .catch((err) => {
          console.error("Ошибка при обновлении пользователя:", err);
        });
    },
  },
};

// src/store/services/users.js
import axios from "axios";

export default {
  state() {
    return {
      user: JSON.parse(localStorage.getItem("user")) || null,
      token: localStorage.getItem("token") || null,
      authError: null,
      products: [],
    };
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
    setAuthError(state, error) {
      state.authError = error;
    },
    setProducts(state, data) {
      state.products = data;
    },
    clearAuthData(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    },
  },

  getters: {
    isAuthenticated: (state) => !!state.user,
    user: (state) => state.user,
    authError: (state) => state.authError,
    products: (state) => state.products,
  },

  actions: {
    register({ commit }, credentials) {
      return axios
        .post("http://localhost:3000/register", credentials)
        .then((res) => {
          const token = res.data.accessToken;
          commit("setUser", res.data.user);
          commit("setToken", token);
          commit("setAuthError", null);
        })
        .catch((error) => {
          commit("setAuthError", error.response.data);
          throw error;
        });
    },
    login({ commit }, credentials) {
      return axios
        .post("http://localhost:3000/login", credentials)
        .then((res) => {
          const token = res.data.accessToken;
          commit("setUser", res.data.user);
          commit("setToken", token);
          commit("setAuthError", null);
        })
        .catch((error) => {
          commit("setAuthError", error.response.data);
          throw error;
        });
    },
    autoLogin({ commit }) {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      if (token && user) {
        commit("setUser", user);
        commit("setToken", token);
      }
    },
    logout({ commit }) {
      commit("clearAuthData");
    },
    getProducts({ commit }) {
      axios.get("http://localhost:3000/664/products").then((res) => {
        commit("setProducts", res.data);
      });
    },
  },
};

import Cookie from 'cookie';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export const state = () => ({
  user: null,
});

export const getters = {
  isAuthenticated(state) {
    return !!state.user;
  },
};

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  clearUser(state) {
    state.user = null;
  },
};

export const actions = {
  async login({ commit }, { email, password }) {
    try {
      const response = await this.$axios.$post('/api/users/login', { email, password });
      commit('setUser', response.user);
      Cookies.set('token', response.token);
    } catch (err) {
      console.error(err);
      throw new Error(err.response.data.message);
    }
  },

  async logout({ commit }) {
    commit('clearUser');
    Cookies.remove('token');
  },

  async nuxtServerInit({ commit }, { req }) {
    let token = null;
    if (req.headers.cookie) {
      const parsed = Cookie.parse(req.headers.cookie);
      token = parsed.token;
    }

    if (token) {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        commit('clearUser');
        Cookies.remove('token');
      } else {
        commit('setUser', decoded.user);
      }
    }
  },
};

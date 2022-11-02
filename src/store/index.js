import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state: {
    edit: false,
    showModal: false,
    errors: [],
  },
  mutations: {
    toggle(state, payload) {
      state[payload] = !state[payload];
    },
    setErrors(state, payload) {
      state.errors = payload;
    },
  },
  actions: {
    handleError({ commit }, payload) {
      commit('setErrors', payload);
      setTimeout(() => {
        commit('setErrors', []);
      }, 10000);
    },
  },
  getters: {
    editMode(state) {
      return state.edit;
    },
    errors(state) {
      return state.errors;
    },
  },
});

export default store;

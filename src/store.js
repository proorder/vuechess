import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    connectionRefused: false,
    trainerAvatar: null,
    trainerName: null
  },
  getters: {
    trainerAvatar: state => state.trainerAvatar,
    trainerName: state => state.trainerName
  },
  mutations: {
    connectionRefused(state, payload) {
      state.connectionRefused = payload.refused;
    },
    trainerDetermine(state, payload) {
      state.trainerAvatar = payload.avatar;
      state.trainerName = payload.name;
    }
  },
  actions: {}
});

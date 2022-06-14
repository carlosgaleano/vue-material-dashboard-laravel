import service from '@/store/services/despachos-service';

const state = {
  items: null,
};

const mutations = {
  SET_RESOURCE: (state, items) => {
    state.items = items;
  }
};

const actions = {
  items({commit, dispatch}, params) {
    return service.get(params)
      .then((despachos) => {
        commit('SET_RESOURCE', despachos);
      });
  },

};

const getters = {
  items: state => state.items
};

const profile = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default profile;
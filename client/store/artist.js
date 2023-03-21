import axios from 'axios';

export const state = () => ({
  artists: [],
});

export const mutations = {
  setArtists(state, artists) {
    state.artists = artists;
  },
  addArtist(state, artist) {
    state.artists.push(artist);
  },
  updateArtist(state, artist) {
    const index = state.artists.findIndex((a) => a._id === artist._id);
    if (index !== -1) {
      state.artists.splice(index, 1, artist);
    }
  },
  deleteArtist(state, artistId) {
    const index = state.artists.findIndex((a) => a._id === artistId);
    if (index !== -1) {
      state.artists.splice(index, 1);
    }
  },
};

export const actions = {
  async fetchArtists({ commit }) {
    try {
      const { data } = await axios.get('/api/artists');
      commit('setArtists', data);
    } catch (error) {
      console.log(error);
    }
  },
  async createArtist({ commit }, artist) {
    try {
      const { data } = await axios.post('/api/artists', artist);
      commit('addArtist', data);
    } catch (error) {
      console.log(error);
    }
  },
  async updateArtist({ commit }, artist) {
    try {
      const { data } = await axios.put(`/api/artists/${artist._id}`, artist);
      commit('updateArtist', data);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteArtist({ commit }, artistId) {
    try {
      await axios.delete(`/api/artists/${artistId}`);
      commit('deleteArtist', artistId);
    } catch (error) {
      console.log(error);
    }
  },
};

export const getters = {
  getArtistById: (state) => (id) => {
    return state.artists.find((artist) => artist._id === id);
  },
};

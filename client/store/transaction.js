import axios from 'axios'

export const state = () => ({
  transactions: []
})

export const getters = {
  getTransactions: state => state.transactions
}

export const mutations = {
  SET_TRANSACTIONS(state, transactions) {
    state.transactions = transactions
  },
  ADD_TRANSACTION(state, transaction) {
    state.transactions.push(transaction)
  }
}

export const actions = {
  async fetchTransactions({ commit }) {
    try {
      const { data } = await axios.get('/api/transactions')
      commit('SET_TRANSACTIONS', data)
    } catch (error) {
      console.log(error)
    }
  },
  async createTransaction({ commit }, payload) {
    try {
      const { data } = await axios.post('/api/transactions', payload)
      commit('ADD_TRANSACTION', data)
    } catch (error) {
      console.log(error)
    }
  }
}

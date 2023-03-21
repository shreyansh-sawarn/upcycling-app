<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <div>
          <label>Item:</label>
          <select v-model="transaction.item_id" required>
            <option disabled value="">Please select one</option>
            <option v-for="item in items" :value="item.id">{{ item.title }}</option>
          </select>
        </div>
        <div>
          <label>Artist:</label>
          <select v-model="transaction.artist_id" required>
            <option disabled value="">Please select one</option>
            <option v-for="artist in artists" :value="artist.id">{{ artist.name }}</option>
          </select>
        </div>
        <div>
          <label>Price:</label>
          <input type="number" v-model="transaction.price" required>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        transaction: {
          item_id: '',
          artist_id: '',
          price: ''
        },
        items: [],
        artists: []
      }
    },
    mounted() {
      // fetch items and artists data from server
      this.$axios.$get('/api/items').then(response => {
        this.items = response.items
      }).catch(error => {
        console.log(error)
      })
      this.$axios.$get('/api/artists').then(response => {
        this.artists = response.artists
      }).catch(error => {
        console.log(error)
      })
    },
    methods: {
      handleSubmit() {
        // send transaction data to server
        this.$axios.$post('/api/transactions', this.transaction).then(response => {
          // clear form and emit event to parent component
          this.transaction.item_id = ''
          this.transaction.artist_id = ''
          this.transaction.price = ''
          this.$emit('submit')
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
  </script>
  
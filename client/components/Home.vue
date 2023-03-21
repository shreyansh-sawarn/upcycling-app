<template>
    <div class="home">
      <h1>Welcome to Upcycling Marketplace</h1>
      <p>Find unique, upcycled items made by local artists</p>
      <div class="search-bar">
        <input type="text" placeholder="Search for items or artists" v-model="searchQuery" />
        <button @click="searchItems">Search</button>
      </div>
      <div class="items">
        <h2>Featured Items</h2>
        <div class="item-list">
          <div class="item" v-for="item in items" :key="item._id">
            <img :src="item.image" :alt="item.name" />
            <h3>{{ item.name }}</h3>
            <p>By {{ item.artist.name }}</p>
            <p>{{ item.description }}</p>
            <p>Price: {{ item.price }} $</p>
            <button @click="addToCart(item)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex'
  
  export default {
    name: 'Home',
    computed: {
      ...mapGetters(['items']),
    },
    data() {
      return {
        searchQuery: '',
      }
    },
    methods: {
      ...mapActions(['fetchItems', 'searchItems', 'addToCart']),
    },
    created() {
      this.fetchItems()
    },
  }
  </script>
  
  <style>
  .home {
    text-align: center;
    padding: 20px;
  }
  
  .search-bar {
    margin: 20px 0;
  }
  
  .item-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .item {
    margin: 20px;
    width: 300px;
  }
  
  .item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .item h3 {
    margin: 10px 0;
  }
  
  .item button {
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    background-color: #555;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .item button:hover {
    background-color: #333;
  }
  </style>
  
<template>
    <div>
      <h1>Welcome to Upcycling Marketplace!</h1>
      <p>
        This is a platform where you can buy and sell upcycled products, connect with artists, and create transactions.
      </p>
      <h2>Featured Items</h2>
      <ItemList :items="featuredItems" />
      <h2>Featured Artists</h2>
      <ArtistList :artists="featuredArtists" />
    </div>
  </template>
  
  <script>
  import ItemList from '~/components/ItemList.vue'
  import ArtistList from '~/components/ArtistList.vue'
  import axios from 'axios'
  
  export default {
    components: {
      ItemList,
      ArtistList,
    },
    async asyncData({ $axios }) {
      const responseItems = await $axios.get('/api/items?limit=3')
      const featuredItems = responseItems.data.items
  
      const responseArtists = await $axios.get('/api/artists?limit=3')
      const featuredArtists = responseArtists.data.artists
  
      return { featuredItems, featuredArtists }
    },
  }
  </script>
  
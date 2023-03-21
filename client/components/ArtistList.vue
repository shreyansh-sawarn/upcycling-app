<template>
    <div class="artist-list">
      <h2>Artists</h2>
      <ul>
        <li v-for="(artist, index) in artists" :key="index">
          <router-link :to="{ name: 'artist-detail', params: { id: artist._id } }">{{ artist.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  
  export default {
    name: 'ArtistList',
  
    computed: {
      ...mapState({
        artists: state => state.artist.artists
      })
    },
  
    mounted() {
      this.$store.dispatch('artist/fetchArtists')
    }
  }
  </script>
  
  <style scoped>
  .artist-list {
    margin-top: 50px;
  }
  
  .artist-list h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .artist-list ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .artist-list li {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .artist-list li a {
    color: #333;
    text-decoration: none;
  }
  
  .artist-list li a:hover {
    text-decoration: underline;
  }
  </style>
  
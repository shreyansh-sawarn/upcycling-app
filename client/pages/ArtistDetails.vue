<template>
    <div class="artist-details">
      <div class="artist-details__header">
        <h1 class="artist-details__title">{{ artist.name }}</h1>
        <p class="artist-details__subtitle">{{ artist.location }}</p>
        <p class="artist-details__subtitle">{{ artist.bio }}</p>
      </div>
      <div class="artist-details__gallery">
        <h2 class="artist-details__gallery-title">Gallery</h2>
        <div class="artist-details__gallery-items">
          <div v-for="item in artist.items" :key="item.id" class="artist-details__gallery-item">
            <router-link :to="{ name: 'item-details', params: { id: item.id } }">
              <img :src="item.image" :alt="item.name" class="artist-details__gallery-item-image">
              <div class="artist-details__gallery-item-details">
                <h3 class="artist-details__gallery-item-title">{{ item.name }}</h3>
                <p class="artist-details__gallery-item-price">{{ item.price }} €</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ArtistDetails',
    data() {
      return {
        artist: null
      }
    },
    async created() {
      await this.fetchArtist()
    },
    methods: {
      async fetchArtist() {
        try {
          const { data } = await this.$axios.get(`/artists/${this.$route.params.id}`)
          this.artist = data.artist
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .artist-details {
    padding: 50px 0;
    text-align: center;
  }
  
  .artist-details__header {
    margin-bottom: 50px;
  }
  
  .artist-details__title {
    font-size: 48px;
    margin-bottom: 10px;
  }
  
  .artist-details__subtitle {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .artist-details__gallery-title {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .artist-details__gallery-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .artist-details__gallery-item {
    margin: 10px;
  }
  
  .artist-details__gallery-item-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
  }
  
  .artist-details__gallery-item-details {
    margin-top: 10px;
  }
  
  .artist-details__gallery-item-title {
    font-size: 24px;
    margin-bottom: 5px;
  }
  
  .artist-details__gallery-item-price {
    font-size: 18px;
  }
  </style>
  
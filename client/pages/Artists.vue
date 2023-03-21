<template>
    <div>
      <h1>Artists</h1>
      <hr>
      <ArtistForm />
      <hr>
      <ArtistList />
    </div>
  </template>
  
  <script>
  import ArtistForm from '@/components/ArtistForm.vue'
  import ArtistList from '@/components/ArtistList.vue'
  
  export default {
    components: {
      ArtistForm,
      ArtistList
    },
    mounted () {
      // fetch data from API or store
    }
  }
  </script>
  
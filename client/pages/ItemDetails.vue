<template>
    <div>
      <h1>{{ item.title }}</h1>
      <p>{{ item.description }}</p>
      <p>{{ item.price }} USD</p>
      <p>{{ item.status }}</p>
      <p>{{ item.createdAt }}</p>
      <p>{{ item.updatedAt }}</p>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ params, $axios }) {
      const { data } = await $axios.get(`/api/items/${params.id}`)
      return { item: data }
    },
    data() {
      return {
        item: {},
      }
    },
  }
  </script>
  
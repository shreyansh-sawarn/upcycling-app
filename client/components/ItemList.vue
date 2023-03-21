<template>
    <div>
      <h2>{{ title }}</h2>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-if="items.length === 0">No items found</div>
        <div v-else>
          <div v-for="item in items" :key="item._id">
            <router-link :to="{ name: 'item', params: { id: item._id } }">
              <h3>{{ item.title }}</h3>
            </router-link>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      endpoint: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        items: [],
        loading: false,
      };
    },
    created() {
      this.fetchItems();
    },
    methods: {
      fetchItems() {
        this.loading = true;
        fetch(`/api/${this.endpoint}`)
          .then((res) => res.json())
          .then((data) => {
            this.items = data;
            this.loading = false;
          })
          .catch((err) => {
            console.error(err);
            this.loading = false;
          });
      },
    },
  };
  </script>
  
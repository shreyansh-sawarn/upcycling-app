<template>
    <div>
      <h1>Items</h1>
      <div class="container">
        <ItemList :items="items" />
        <ItemForm />
      </div>
    </div>
  </template>
  
  <script>
  import ItemList from '~/components/ItemList.vue'
  import ItemForm from '~/components/ItemForm.vue'
  import { mapState } from 'vuex'
  
  export default {
    components: { ItemList, ItemForm },
    computed: {
      ...mapState('item', ['items'])
    },
    async fetch() {
      await this.$store.dispatch('item/getItems')
    }
  }
  </script>
  
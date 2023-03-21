<template>
    <div>
      <h2>{{ formTitle }}</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="form.title" required>
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea id="description" v-model="form.description" required></textarea>
        </div>
        <div>
          <label for="price">Price:</label>
          <input type="number" id="price" v-model="form.price" required>
        </div>
        <div>
          <label for="image">Image URL:</label>
          <input type="text" id="image" v-model="form.image" required>
        </div>
        <div>
          <button type="submit">{{ submitButtonTitle }}</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      formTitle: String,
      submitButtonTitle: String,
      initialValues: Object,
    },
    data() {
      return {
        form: {
          title: '',
          description: '',
          price: '',
          image: '',
        },
      };
    },
    mounted() {
      if (this.initialValues) {
        this.form = { ...this.initialValues };
      }
    },
    methods: {
      handleSubmit() {
        if (this.initialValues) {
          // Update item
          this.$store.dispatch('item/updateItem', this.form);
        } else {
          // Create new item
          this.$store.dispatch('item/createItem', this.form);
        }
        // Reset form
        this.form = {
          title: '',
          description: '',
          price: '',
          image: '',
        };
      },
    },
  };
  </script>
  
<template>
    <div>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input type="tel" class="form-control" id="phone" v-model="phone" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        phone: '',
      };
    },
    methods: {
      submitForm() {
        const artistData = {
          name: this.name,
          email: this.email,
          phone: this.phone,
        };
  
        this.$store.dispatch('artists/addArtist', artistData).then(() => {
          // Clear form fields after submission
          this.name = '';
          this.email = '';
          this.phone = '';
        });
      },
    },
  };
  </script>
  
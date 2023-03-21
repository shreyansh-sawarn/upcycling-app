<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">Upcycling App</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-if="!user.isAuthenticated">
              <router-link class="nav-link" to="/login">Log In</router-link>
            </li>
            <li class="nav-item" v-if="!user.isAuthenticated">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>
            <li class="nav-item" v-if="user.isAuthenticated">
              <a class="nav-link" href="#" @click="logout()">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('user/logout')
      }
    }
  }
  </script>
  
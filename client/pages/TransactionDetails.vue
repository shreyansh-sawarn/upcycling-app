<template>
    <div class="container">
      <h1 class="mb-4">{{ transaction.id }}</h1>
  
      <div class="row mb-4">
        <div class="col-md-6">
          <p><strong>Buyer:</strong> {{ transaction.buyer.name }}</p>
          <p><strong>Seller:</strong> {{ transaction.seller.name }}</p>
          <p><strong>Item:</strong> {{ transaction.item.name }}</p>
        </div>
  
        <div class="col-md-6">
          <p><strong>Price:</strong> ${{ transaction.price }}</p>
          <p><strong>Status:</strong> {{ transaction.status }}</p>
          <p><strong>Date:</strong> {{ transaction.date }}</p>
        </div>
      </div>
  
      <div v-if="isAuthorizedUser">
        <h2>Update Status</h2>
  
        <div class="form-group">
          <label for="status">Status:</label>
          <select id="status" class="form-control" v-model="selectedStatus">
            <option v-for="status in statusOptions" :value="status">{{ status }}</option>
          </select>
        </div>
  
        <button class="btn btn-primary" @click="updateTransactionStatus">Update Status</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('user', ['isAuthorizedUser']),
      statusOptions() {
        return ['pending', 'approved', 'rejected'];
      }
    },
  
    data() {
      return {
        selectedStatus: '',
      };
    },
  
    async asyncData({ params, $axios }) {
      try {
        const transaction = await $axios.$get(`/api/transactions/${params.id}`);
  
        return { transaction };
      } catch (error) {
        console.error(error);
        return { transaction: null };
      }
    },
  
    methods: {
      async updateTransactionStatus() {
        try {
          await this.$axios.$put(`/api/transactions/${this.transaction.id}`, { status: this.selectedStatus });
          this.$router.push('/transactions');
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  
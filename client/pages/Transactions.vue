<template>
    <div class="container">
      <h1 class="title">Transactions</h1>
      <div class="columns">
        <div class="column is-half">
          <TransactionList />
        </div>
        <div class="column">
          <TransactionForm />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import TransactionList from '@/components/TransactionList.vue'
  import TransactionForm from '@/components/TransactionForm.vue'
  
  export default {
    name: 'Transactions',
    components: {
      TransactionList,
      TransactionForm
    },
  }
  </script>
  
<template>
    <div>
      <h1>Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Buyer</th>
            <th>Seller</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(transaction, index) in transactions" :key="index">
            <td>{{ transaction.date }}</td>
            <td>{{ transaction.buyer.username }}</td>
            <td>{{ transaction.seller.username }}</td>
            <td>{{ transaction.item.name }}</td>
            <td>{{ transaction.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      transactions: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  </style>
  
import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Items from '@/views/Items.vue';
import ItemDetails from '@/views/ItemDetails.vue';
import Artists from '@/views/Artists.vue';
import ArtistDetails from '@/views/ArtistDetails.vue';
import Transactions from '@/views/Transactions.vue';
import TransactionDetails from '@/views/TransactionDetails.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/items',
        name: 'items',
        component: Items
      },
      {
        path: '/items/:id',
        name: 'itemDetails',
        component: ItemDetails
      },
      {
        path: '/artists',
        name: 'artists',
        component: Artists
      },
      {
        path: '/artists/:id',
        name: 'artistDetails',
        component: ArtistDetails
      },
      {
        path: '/transactions',
        name: 'transactions',
        component: Transactions
      },
      {
        path: '/transactions/:id',
        name: 'transactionDetails',
        component: TransactionDetails
      }
    ]
  });
}

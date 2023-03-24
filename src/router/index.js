import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/index.vue';
import Orders from '../pages/orders/index.vue';
import OrdersList from '../pages/orders/list/index.vue';
import OrderSuccess from '../pages/orders/success/index.vue';
import OrdersDetail from '../pages/orders/_id.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/orders',
            name: 'Orders',
            component: Orders
        },
        {
            path: '/orders/success',
            name: 'OrderSuccess',
            component: OrderSuccess
        },
        {
            path: '/orders/list',
            name: 'OrdersList',
            component: OrdersList
        },
        {
            path: '/orders/:id',
            name: 'OrdersDetail',
            component: OrdersDetail
        }
    ]
});

export default router;

//  /
//  /orders
//  /orders/list
//  /orders/detail/:id
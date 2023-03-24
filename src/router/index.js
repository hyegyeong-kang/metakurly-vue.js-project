import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/index.vue';
import Orders from '../pages/orders/index.vue';
import OrdersList from '../pages/orders/list/index.vue';
// import OrdersDetail from '../pages/orders/detail/o_id.vue';

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
            path: '/orders/list',
            name: 'OrdersList',
            component: OrdersList
        }
        // ,
        // {
        //     path: '/orders/detail/:id',
        //     name: 'OrdersDetail',
        //     component: OrdersDetail
        // }
    ]
});

export default router;

//  /
//  /orders
//  /orders/list
//  /orders/detail/:o_id
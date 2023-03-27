import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/index.vue';
import Orders from '../pages/orders/index.vue';
import OrdersList from '../pages/orders/list/index.vue';
import OrderSuccess from '../pages/orders/success/index.vue';
import OrdersDetail from '../pages/orders/_id.vue';
import BestList from '../pages/products/bestList/index.vue';
import ProductList from '../pages/products/list/index.vue';
import ProductDetail from '../pages/products/detail/_id.vue';
import ProductReviews from '../pages/products/reviews/index.vue';
import ProductReviewDetail from '../pages/products/reviews/detail/_id.vue';

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
        },
        {
            path: '/products/bestList',
            name: 'BestList',
            component: BestList
        },
        {
            path: '/products',
            name: 'ProductList',
            component: ProductList
        },
        {
            path: '/products/:id',
            name: 'ProductDetail',
            component: ProductDetail 
        },
        {
            path: '/products/:id/reviews',
            name: 'ProductReviews',
            component: ProductReviews
        },
        {
            path: '/products/:p_id/review/:r_id',
            name: 'ProductReviewDetail',
            component: ProductReviewDetail
        }
    ]
});

export default router;

<template>
  <div class="page-section">
    <div class="container">

	    <div class="widget-box">
		    <h4 class="widget-title">주문내역</h4>
		    <div class="divider"></div>
		
		    <div v-for="order in orders" :key="order.o_id">
			    <div class="blog-item">
					<!-- <router-link class="post-thumb" :to="{name: 'ProductsDetail', params: {id: order.orderDetailList[0].p_id}}"> -->
					<a class="post-thumb" @click="moveToProductsDetail(order.orderDetailList[0].p_id)">
						<img :src="`${order.orderDetailList[0].productDTO.img_url}`" alt="">
					</a>
					<div class="content">
						<div class="meta">
							{{order.status}}
						</div>
						<h6 class="post-title">
							<a @click="moveToOrdersDetail(order.o_id)">
							<!-- <router-link :to="{name: 'OrdersDetail', params: {id: order.o_id}}"> -->
								{{order.orderDetailList[0].productDTO.brand}} {{order.orderDetailList[0].productDTO.name}}
								<span v-if="order.orderDetailList.length != 1"> 외 {{order.orderDetailList.length - 1}}개</span>
							</a>
						</h6>
						<div class="meta">
						<!-- <a href="#"><span class="mai-person"></span> Admin</a> -->
							<a href='#'>주문번호 {{order.o_id}}</a>
							<span class="mai-calendar">{{order.orders_date}}</span>
						<!-- <a href="#"><span class="mai-chatbubbles"></span> 19</a> -->
						</div>
					</div>
				</div>
        	</div>
      	</div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';

export default {
  setup(){
	const router = useRouter();
    const order = ref('');
    const orders = ref([
    //   {id: 1, orders_date: '2023-02-22', status: '배송완료', total_amount: 3, p_id: 1, img_url: 'https://img-cf.kurly.com/shop/data/goods/1655775819130l0.jpg', brand: '스윗밸런스', name: '오늘의 샐러드', price: 17700},
    //   {id: 2, orders_date: '2023-03-10', status: '배송준비중', total_amount: 3, p_id: 3, img_url: 'https://img-cf.kurly.com/shop/data/goods/1637926173262l0.jpeg', brand: '크리넥스', name: '데코앤소프트 화장지', price: 45500}
    ]);

	const getOrderList = async () => {
		try{
			const res = await axios.get('/members/1/orders');
			orders.value = {...res.data};
			console.log(res);
		} catch(err){
			console.log(err);
		}
	}

	getOrderList();

	const moveToProductsDetail = (pid) => {
		console.log(pid);
		router.push({
			name: 'Products',
			params: {
				id: pid
			}
		});
	}

	const moveToOrdersDetail = (oid) => {
		console.log(oid);
		router.push({
			name: 'OrdersDetail',
			params: {
				id: oid
			}
		});
	}
    
    return{
      order,
      orders,
	  moveToProductsDetail,
	  moveToOrdersDetail
    }
  }
}
</script>

<style>

</style>
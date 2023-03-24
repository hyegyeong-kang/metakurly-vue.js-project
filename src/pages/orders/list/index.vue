<template>
  <div class="page-section">
    <div class="container">

	    <div class="widget-box">
		    <h4 class="widget-title">주문내역</h4>
		    <div class="divider"></div>
		
		    <div v-for="order in orders" :key="order.id">
			    <div class="blog-item">
					  <router-link class="post-thumb" :to="{path: '/products/' + order.p_id}">
						  <img :src='`https://img-cf.kurly.com/shop/data/goods/${order.img_url}`' alt="">
					  </router-link>
					  <div class="content">
						  <div class="meta">
							  {{order.status}}
			        </div>
						  <h6 class="post-title"><router-link :to="{path: '/products/' + order.p_id}">{{order.brand}} {{order.name}}</router-link></h6>
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

export default {
  setup(){
    const order = ref('');
    const orders = ref([
      {id: 1, orders_date: '2023-02-22', status: '배송완료', total_amount: 3, p_id: 1, img_url: '1655775819130l0.jpg', brand: '스윗밸런스', name: '오늘의 샐러드', price: 17700},
      {id: 2, orders_date: '2023-03-10', status: '배송준비중', total_amount: 3, p_id: 3, img_url: '1637926173262l0.jpeg', brand: '크리넥스', name: '데코앤소프트 화장지', price: 45500}
    ]);
    
    return{
      order,
      orders,
    }
  }
}
</script>

<style>

</style>
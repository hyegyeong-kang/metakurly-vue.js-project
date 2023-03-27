<template>
  <div class="page-section">
    <div class="container">
      	<!--중단 상품리스트 -->

      <div class="widget-box">
        <h4 class="widget-title">주문상세</h4>
        <h6 class="post-title">주문번호 {{oid}}</h6>
        <div>결제날짜 {{order.orders_date}} {{order.status}}</div>
        <div class="divider"></div>
        
        <div class="blog-item"
          v-for="detail in order.orderDetailList" :key="detail.productDTO.p_id">
          <router-link class="post-thumb" :to="{path: '/products/' + detail.productDTO.p_id}">
            <img :src="`${detail.productDTO.img_url}`" alt="">
          </router-link>
          <div class="content">
            <router-link
              style="color: #333; font-size: 15px; line-: 18px; display: block; text-decoration: none; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; :36 px; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-family: '맑은고딕', 'malgun gothic', 'dotum', sans-serif;"
              :to="`/products/` + detail.productDTO.p_id">
              {{detail.productDTO.brand}} {{detail.productDTO.name}}
            </router-link>
            <strong>{{order.price}}</strong>
            <em
              style="display: inline-block; color: #b0b0b0; font-style: normal; font-size: 12px; vertical-align: 1px; color: #333 !important; padding: 0 0 0 2px; vertical-align: 2px !important;">
              원
            </em> {{detail.quantity}}개
          </div>
        </div>
        <div class="divider"></div>
        
        <h4 class="widget-title">주문자정보</h4>
        <h6 class="post-title">{{member.name}} | {{member.phone}}</h6>
        <h6 class="post-title">배송지 {{member.address}}</h6>
        <div class="divider"></div>
        
        <h4 class="widget-title">결제정보</h4>
        <h6 class="post-title">{{payment.payment_amount}}원</h6>
        {{payment.method}}
        <div class="btn">
          <button id="cancelBtn" v-if="cancellable()" @click="cancelOrder(oid)">주문취소</button>
          <button id="listBtn" @click="moveToList">주문목록</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router';
import {ref} from 'vue';
import axios from 'axios';

export default {
  setup(){
    const route = useRoute();
    const router = useRouter();
    const oid = route.params.id;

    const member = ref(
      {id: 1, name: '홍길동', email: 'kosa@metanet.com', phone: '010-1234-5678', address: '서울', point: 20000}
    );
    const order = ref(
			// {id: 1, orders_date: '2023-02-22', status: '배송완료', total_amount: 2, price: 11800, m_id: 1}
		);
    const orderDetails = ref([
      // {id: 1, quantity: 2, 
      //   productDTO: {id: 1, brand: '스윗밸런스', price: 5900, name: '오늘의 샐러드', img_url: 'https://img-cf.kurly.com/shop/data/goods/1655775819130l0.jpg'}}
    ]);
    const payment = ref(
			// {id: 1, o_id: 1, m_id: 1, method: '카드', payment_amount: 11800}
		);

    const cancellable = () => {
      if(order.value.status === '결제완료'){
        return true;
      }
      else{
        return false;
      }
    }

    const cancelOrder = async (oid) => {
      try{
        const res = await axios.patch('/members/16/orders/' + oid);
        cancellable.value = false;
        console.log(res);
        router.go();
      } catch(err){
        console.log(err);
      }
    }

    const getOrderDetailList = async () => {
      try{
        const res = await axios.get('/members/16/orders/' + oid);
        order.value = {...res.data.order};
        payment.value = {...res.data.payment};
        console.log(res);
      } catch(err){
        console.log(err);
      }
	  }

	  getOrderDetailList();

    const moveToList = () => {
      router.push({
        name: 'OrdersList'
      });
    }

    return{
      oid,
      cancellable,
      member,
      order,
      orderDetails,
      payment,
      cancelOrder,
      moveToList,
    }
  }

}
</script>

<style>
div.btn{
  display: flex
}
</style>
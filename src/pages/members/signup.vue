<template>
  <div class="membership">
  <div style="text-align:center"><h1>회원가입</h1></div>

    <form 
        @submit.prevent="signupForm">

      <div>
        <div>아이디<span class="orange">&nbsp;*</span></div>
        <div>
          <input name="userId" v-model="member.userId" type="text" placeholder="ex) marketkurly12">
          <input type="button" value="중복확인" id="idCheck" required>
        </div>
        <div><span v-if="idExists" class="text-danger">이미 사용 중인 아이디입니다.</span></div>
      </div>

      <div>
        <div>비밀번호<span class="orange">&nbsp;*</span></div>
        <input name="password" v-model="member.password" type="password" placeholder="비밀번호 입력" required>
      </div>

      <div>
        <div>비밀번호 확인<span class="orange">&nbsp;*</span></div>
        <input name="passwordCheck" type="password" placeholder="비밀번호 입력 확인" required>
      </div>

      <div>
        <div>이름<span class="orange">&nbsp;*</span></div>
        <input name="name" v-model="member.name" type="text" placeholder="이름 입력" required>
      </div>

      <div>
        <div>이메일<span class="orange">&nbsp;*</span></div>
        <input name="email" v-model="member.email" type="text" placeholder="ex) marketkurly@kurly.com" required>
      </div>

      <div>
        <div>휴대폰<span class="orange">&nbsp;*</span></div>
        <div>
          <input name="phone" v-model="member.phone" type="text" placeholder="ex) 010-1234-5678">
        </div>
      </div>

      <div>
        <div>주소<span class="orange">&nbsp;*</span></div>
        <input name="address" v-model="member.address" type="text" placeholder="주소지 입력" required>
        <p>
          배송지에 따라 상품 정보가 달라질 수 있습니다.
        </p>
      </div>
     
     <button type="submit">가입하기</button>

    </form>

  </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
export default {
  name: 'SignupForm',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const member = ref({
      userId: '',
      password: '',
      name: '',
      email: '',
      phone: '',
      address: ''
    });

    const signupForm = async() => {
      try {
        console.log(member.value);
        const res = await axios.post('/members/signup', {
          userId: member.value.userId,
          password: member.value.password,
          name: member.value.name,
          email: member.value.email,
          phone: member.value.phone,
          address: member.value.address
        });
        console.log(res.data);
        location.href = '/members/login';

        } catch (error) {
            console.log(error);
        } 
        
        console.log(member.value);
    };

    const idCheck = async() => {
      
    };

    return {
      member,
      signupForm,
    };
  }
}
</script>

<style>

</style>
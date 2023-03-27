<template>
  <div class="htop"></div>

  <div class="hbottom">
   
  </div>

	<div style="width:50%; margin:auto;">
		<div class="membership">
  	<div style="text-align:center"><h1>로그인</h1></div>
		
    <form role="form" action="${path}/member/login" @submit.prevent="loginForm">

      <div>
      	
        <div>아이디<span class="orange">&nbsp;*</span></div>
        <div>
          <input type="text" v-model="member.userId" placeholder="ex) marketkurly12">
        </div>
      </div>

      <div>
        <div>비밀번호<span class="orange">&nbsp;*</span></div>
        <input type="password" v-model="member.password" placeholder="비밀번호를 입력해주세요" required>
        <div><span v-if="failed" class="text-danger">잘못된 아이디 또는 잘못된 비밀번호입니다.</span></div>
      </div>

  	  <button type="submit" @click="submit">로그인</button>
	  <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
    </form>
    
  
  </div>


  <div class="agree"></div> <!-- 이거 지우지 마세요! -->
  
  <span style="position: absolute; left: 50%; top:85%; transform: translateX(-50%);"><a href="/">홈으로 돌아가기</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="/members/signup">회원이 아니신가요?</a></span>
  
		
</div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const member = ref({
      userId: '',
      password: '',
    });

    const loginForm = async() => {
      try {
        console.log(member.value);
        const res = await axios.post('/members/login', {
          userId: member.value.userId,
          password: member.value.password
        });

        if (res.status === 200) {
          const member = res.data;
          sessionStorage.setItem('member', JSON.stringify(member));
          alert("로그인 성공")
          location.href = '/';
        } else {
          console.error("로그인 실패");
        }
        
      } catch (error) {
          console.log(error);
          location.href = '/members/login';
          alert("잘못된 로그인")
          
      } 
        
        console.log(member.value);
    };

    return {
      member,
      loginForm,
    };
  }
}
</script>

<style>

</style>
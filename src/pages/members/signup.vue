<template>
  <div class="membership">
  <div style="text-align:center"><h1>회원가입</h1></div>

    <form 
        @submit.prevent="submitForm">

      <div>
        <div>아이디<span class="orange">&nbsp;*</span></div>
        <div>
          <input name="userId" v-model="userId" type="text" placeholder="ex) marketkurly12">
          <input type="button" value="중복확인" id="idCheck" required>
        </div>
        <div><span v-if="idExists" class="text-danger">이미 사용 중인 아이디입니다.</span></div>
      </div>

      <div>
        <div>비밀번호<span class="orange">&nbsp;*</span></div>
        <input name="password" v-model="password" type="password" placeholder="비밀번호 입력" required>
      </div>

      <div>
        <div>비밀번호 확인<span class="orange">&nbsp;*</span></div>
        <input name="passwordCheck" type="password" placeholder="비밀번호 입력 확인" required>
      </div>

      <div>
        <div>이름<span class="orange">&nbsp;*</span></div>
        <input name="name" v-model="name" type="text" placeholder="이름 입력" required>
      </div>

      <div>
        <div>이메일<span class="orange">&nbsp;*</span></div>
        <input name="email" v-model="email" type="text" placeholder="ex) marketkurly@kurly.com" required>
      </div>

      <div>
        <div>휴대폰<span class="orange">&nbsp;*</span></div>
        <div>
          <input name="phone" v-model="phone" type="text" placeholder="ex) 010-1234-5678">
        </div>
      </div>

      <div>
        <div>주소<span class="orange">&nbsp;*</span></div>
        <input name="address" v-model="address" type="text" placeholder="주소지 입력" required>
        <p>
          배송지에 따라 상품 정보가 달라질 수 있습니다.
        </p>
      </div>
     
     <button type="submit" @click="register">가입하기</button>

    </form>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>
  <div class="membership">
  <div style="text-align:center"><h1>회원 정보 수정</h1></div>

    <form 
        @submit.prevent="submitForm">
		<input type="hidden" name="m_id" value="${member.m_id}">
      <div>
        <div>아이디</div>
        <div>
          <input name="userId" type="text" value="${member.userId}" readonly="readonly">
        </div>
      </div>

      <div>
        <div>비밀번호<span class="orange">&nbsp;*</span></div>
        <input name="password" type="password" value="${member.password}" required>
      </div>

      <div>
        <div>이메일<span class="orange">&nbsp;*</span></div>
        <input name="email" type="text" placeholder="ex) marketkurly@kurly.com" value="${member.email}" required>
      </div>

      <div>
        <div>휴대폰<span class="orange">&nbsp;*</span></div>
        <div>
          <input name="phone" type="text" placeholder="ex) 010-1234-5678" value="${member.phone}" required>
        </div>
      </div>

      <div>
        <div>주소<span class="orange">&nbsp;*</span></div>
        <input name="address" type="text" placeholder="주소지 입력" value="${member.address}" required>
      </div>
     
     <button type="submit" id="submit">저장하기</button>

    </form>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
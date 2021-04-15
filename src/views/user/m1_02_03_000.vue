<template>
    <div class="userWrap accountConfirm password">
      <div class="cntBox">
        <p>비밀번호 재설정을 위해<br>이메일 아이디 입력 후 본인인증을 해주세요.</p>
        <div class="inpGrid">            
          <input type="email" class="inp l" placeholder="이메일을 입력하세요."/>
        </div>
        <div class="btnArea">
          <router-link tag="button" to="resetPassword" class="btn xl cGreen">
            <span class="text">본인 인증</span>
          </router-link>
          <router-link tag="button" to="findId" class="btn xl cGrayGreen">
            <span class="text">아이디 찾기</span>
          </router-link>
        </div>
      </div>      
    </div>
</template>

<script>


export default {
  name: 'App',
  data: () => ({
  }),
  components: {},
  mounted() {
  },
  methods: {
  }
};
</script>
<style scoped src="../../styles/user.css"></style>

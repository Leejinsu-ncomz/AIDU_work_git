<template>
    <div class="userWrap accountConfirm email">
      <div class="cntBox">
        <p>이메일 인증이 완료되었습니다.<br>회원가입을 진행해주세요.</p>
        <div class="btnArea">
          <router-link to="login" tag="button" class="btn xl cGreen">
            <span class="text">로그인</span>
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

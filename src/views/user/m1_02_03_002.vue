<template>    
    <div class="userWrap accountConfirm password">
      <div class="cntBox">
        <p>비밀번호 재설정이 완료되었습니다.<br>로그인 후 서비스 이용해주세요.</p>
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

<template>
    <div class="userWrap accountConfirm complete">
      <div class="cntBox">
        <p><strong>감사합니다.</strong></p>
        <p class="textMuted">AIDU 회원탈퇴가 완료되었습니다.</p>
        <div class="btnArea">
          <router-link tag="button" to="login" class="btn xl cGreen">
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

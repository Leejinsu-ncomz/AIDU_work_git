<template>
    <div class="userWrap accountConfirm complete">
      <div class="cntBox">
        <p><strong>회원가입 완료</strong></p>
        <p class="textMuted">회사코드 승인이 완료되면 이메일로 안내해드립니다.<br>승인 전까지 교육 컨텐츠 외 메뉴는 이용 가능합니다.</p>
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

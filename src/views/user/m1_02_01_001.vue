<template>
    <div class="userWrap accountConfirm state">
      <div class="cntBox">
        <p><strong>계정 상태 안내</strong></p>
        <p class="textMuted">현재 사용하고 계신 계정이 휴면 또는 잠김 상태 입니다.<br>휴대폰 본인인증 후 이용 가능합니다.</p>
        <div class="btnArea">
          <router-link tag="button" to="resetPassword" class="btn xl cGreen">
            <span class="text">본인 인증</span>
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

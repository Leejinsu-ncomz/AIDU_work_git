<template>
    <div class="userWrap accountConfirm security">
      <div class="cntBox">
        <p>안전한 탈퇴를 위해<br>본인인증 절차를 진행합니다.<br>본인인증 버튼을 클릭해주세요.</p>
        <div class="btnArea">
          <!-- <button type="button" class="btn xl cGreen">
            <span class="text">본인인증</span>
          </button> -->
          <router-link tag="button" to="userSecede" class="btn xl cGreen">
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

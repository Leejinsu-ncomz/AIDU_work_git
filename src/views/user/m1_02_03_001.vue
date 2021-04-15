<template>
    <div class="userWrap accountConfirm password">
      <div class="cntBox">
        <p>비밀번호 재설정 해주세요.</p>
        <div class="inpGrid">            
          <input type="password" class="inp l" placeholder="새 비밀번호"/>
          <input type="password" class="inp l" placeholder="새 비밀번호 확인"/>
        </div>
        <div class="btnArea">
          <router-link to="resetPasswordComplete" tag="button" class="btn xl cGreen">
            <span class="text">비밀번호 재설정</span>
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

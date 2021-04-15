<template>
    <div class="userWrap accountConfirm security">
      <div class="cntBox">
        <p>휴대폰 본인인증을 통해<br>가입된 아이디를 찾습니다.</p>
        <div class="btnArea">
          <!-- <button type="button" class="btn xl cGreen">
            <span class="text">본인인증</span>
          </button> -->
          <router-link tag="button" to="findIdComplete" class="btn xl cGreen">
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

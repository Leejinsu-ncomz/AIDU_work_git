<template>
    <div class="userWrap accountConfirm complete">
      <div class="cntBox">
        <p>AIDU 회원탈퇴를 하시겠습니까?</p>
        <div class="btnArea">
          <router-link to="userSecedeComplete" tag="button" class="btn xl cGreen">
            <span class="text">회원 탈퇴</span>
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

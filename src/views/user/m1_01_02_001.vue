<template>
    <div class="userWrap join">
      <div class="cntBox">
        <img :src="require(`@/assets/images/ico_login.jpg`)" alt="AIDU"/>
        <p>언제 어디서나 강력한 AIDU에 오신 것을 환영합니다.</p>
        <div class="grid">
          <div class="social">
            <h2>소셜 회원가입</h2>
            <div class="btnArea">
              <button type="button" class="btn xl naver">
                <span class="text">NAVER로 시작하기</span>
              </button>
              <button type="button" class="btn xl kakao">
                <span class="text">KaKao로 시작하기</span>
              </button>
              <button type="button" class="btn xl google">
                <span class="text">Google로 시작하기</span>
              </button>
              <button type="button" class="btn xl facebook">
                <span class="text">Facebook으로 시작하기</span>
              </button>
            </div>
          </div>
          <div class="normal">
            <h2>일반 회원가입</h2>
            <form>
              <div class="field">
                <div class="inpGroup">
                  <input type="email" class="inp l" placeholder="이메일" />
                  <button type="button" class="btn l cWhiteGreen">
                    <span class="text">인증메일 발송</span>
                  </button>
                </div>
                <input type="password" class="inp l" placeholder="비밀번호" />
                <input type="password" class="inp l" placeholder="비밀번호 확인" />
                <div class="btnArea full">
                  <router-link tag="button" to="joinForm" class="btn xl cGreen">
                    <span class="text">회원가입</span>
                  </router-link>
                </div>
              </div>
            </form>
          </div>
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

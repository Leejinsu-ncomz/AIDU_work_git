<template>
    <div class="userWrap login">
      <div class="cntBox">
        <img :src="require(`@/assets/images/ico_login.jpg`)" alt="AIDU"/>
        <form>
          <div class="field">
            <input type="email" class="inp l" ref="email" placeholder="이메일을 입력하세요." />
            <input type="password" class="inp l" placeholder="비밀번호를 입력하세요." />
            <label class="inpField">
              <input type="checkbox" checked />
              <span class="text">이메일 저장</span>
            </label>
            <div class="btnArea full">
              <!-- <button type="button" class="btn xl cGreen" @click="fnOpen">
                <span class="text">로그인</span>
              </button> -->
              <router-link tag="button" to="state" class="btn xl cGreen">
                <span class="text">로그인</span>
              </router-link>
            </div>
            <div class="social">
              <button type="button" class="naver">
                <span class="hiddenTxt">네이버</span>
              </button>
              <button type="button" class="kakao">
                <span class="hiddenTxt">카카오</span>
              </button>
              <button type="button" class="google">
                <span class="hiddenTxt">구글</span>
              </button>
              <button type="button" class="facebook">
                <span class="hiddenTxt">페이스북</span>
              </button>
            </div>
            <div class="btnArea">
              <router-link to="findId" class="btn textBtn">
                <span class="text">아이디 찾기</span>
              </router-link>
              <router-link to="resetPassword" class="btn textBtn">
                <span class="text">비밀번호 재설정</span>
              </router-link>
              <router-link to="term" class="btn textBtn">
                <span class="text">회원가입</span>
              </router-link>
              <button type="button" class="btn textBtn" :class="{ active: tenant }" @click="tenantToggle">
                <span class="text">로그인 옵션</span>
              </button>
            </div>
            <input type="text" class="inp l" data-inp="tenant" placeholder="테넌트 아이디를 입력하세요." v-if="tenant"/>
          </div>
        </form>
      </div>

      <!-- 알럿/컨펌 팝업 -->
      <div class="layerModalWrap" v-if="modalShow">                
          <div class="layerModal conAlertModal">
              <div class="modalHeader">
                  <strong class="txtCenter">확인 메세지</strong>
              </div>
              <div class="modalCnt">
                  <p class="text txtCenter">등록되지 않은 계정 입니다.<br>회원가입 후 이용해주세요.</p>
              </div>
              <div class="modalFooter">
                  <div class="btnArea">
                      <button type="button" class="btn m cGreen" @click="fnClose">
                          <span class="text">확인</span>
                      </button>
                  </div>
              </div>
          </div>
      </div>

    </div>
</template>

<script>


export default {
  name: 'App',
  data: () => ({
   tenant : false,
   modalShow: null,
  }),
  components: {},
  mounted() {
    this.setFocus();
  },
  methods: {
    setFocus() {
      this.$refs.email.focus();
    },
    tenantToggle() {
      this.tenant = !this.tenant
    },
    fnOpen: function () {
      this.modalShow = !this.modalShow;
      document.body.classList.add("modal-open");
    },
    fnClose: function () {
      this.modalShow = !this.modalShow;
      document.body.classList.remove("modal-open");
    }
  }
};
</script>
<style scoped src="../../styles/user.css"></style>

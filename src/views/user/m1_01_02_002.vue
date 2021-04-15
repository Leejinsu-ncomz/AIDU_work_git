<template>
  <div class="userWrap join detail">
    <div class="cntBox">
      <form>
        <div class="unitGroup">
          <dl class="unit">
            <dt>
              <span class="tit">필수정보</span>
            </dt>
            <dd>
              <input type="email" class="inp l w100p" disabled value="test@test.com" />
            </dd>
            <dd>
              <input type="text" class="inp l w100p" placeholder="아이디" />
            </dd>
            <dd>
              <div class="inpGroup">
                <input type="text" class="inp l" placeholder="닉네임" />
                <button type="button" class="btn l cWhiteGreen">
                  <span class="text">인증번호 확인</span>
                </button>
              </div>
            </dd>
            <dd>
              <input type="text" class="inp l w100p" placeholder="이름 (본인 인증을 해주세요)" />
            </dd>
            <dd>
              <input type="text" class="inp l w100p" placeholder="휴대폰 번호 (본인 인증을 해주세요)" />
            </dd>
          </dl>
          <dl class="unit">
            <dt>
              <span class="tit">선택 입력</span>
            </dt>
            <dd>
              <input type="text" class="inp l w100p" placeholder="회사코드" />
            </dd>
          </dl>
        </div>
        <p class="infoTxt pColor01">※ AI 교육 컨텐츠를 이용하기 위해서는 회사코드 입력이 필요합니다.</p>

        <div class="btnArea full">
          <router-link tag="button" to="joinComplete" class="btn xl cGreen">
            <span class="text">가입 완료</span>
          </router-link>
        </div>
      </form>
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

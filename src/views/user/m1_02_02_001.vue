<template>
    <div class="userWrap accountConfirm security">
      <div class="cntBox">
        <p>본인인증을 통해 확인된 가입정보 입니다.</p>
        <div class="listTable type02">
          <table>
            <caption>가입정보</caption>
            <colgroup>
              <col/>
              <col/>
              <col/>
            </colgroup>
            <thead>
              <tr>
                <th scope="col">구분</th>
                <th scope="col">가입정보</th>
                <th scope="col">가입일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>이메일 계정</td>
                <td>Hong@gmail.com</td>
                <td>2020-05-12</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="btnArea">
          <router-link tag="button" to="login" class="btn xl cGreen">
            <span class="text">로그인</span>
          </router-link>
          <router-link tag="button" to="findIdUserResetPassword" class="btn xl cGrayGreen">
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

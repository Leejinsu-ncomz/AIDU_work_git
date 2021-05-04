<template>
    <div id="header" class="header">
        <div class="headerWrap">
            <h1 class="logo"><img :src="require(`@/assets/images/logo.png`)" alt="AIDU"></h1>
            <GNB @sub_menu_show_bg="subMenuBgShowData"></GNB>
            <div class="loginJoinWrap">
              <!-- <div class="loginWrap">
                <a href="javascript:void(0);">로그인</a>
                <a href="javascript:void(0);">회원가입</a>
              </div> -->
              <span class="userName">홍길동</span>
              <button type="button" v-bind:class="['subUserInfo_btn', {up: userInfo}]" @click="userInfo = !userInfo"><span class="hiddenTxt">유저 세부 정보 버튼</span></button>
              <i class="userIcon"><span class="hiddenTxt">유저 아이콘</span></i>
              <!-- 210422 추가 -->
              <div v-if="userInfo" class="loginJoinInfoBox">
                <ul>
                  <li><a href="javascript:void(0)" class="active">사용자 모드</a></li>
                  <li><a href="javascript:void(0)">관리자 모드</a></li>
                </ul>
              </div>
            </div>            
        </div>
        <div v-bind:class="['subMenuBg', {show: subMenuShow}]"><span class="hiddenTxt">서브 메뉴 배경</span></div>
    </div>
</template>

<script>
import GNB from './gnb'
export default {
  name: 'Header',
  data: () => ({
    subMenuShow: false,
    userInfo: false
  }),
  components: {
    GNB
  },
  
  methods: {
    subMenuBgShowData(toggleShowHide) {
      this.subMenuShow = toggleShowHide;
    }
  }
}
</script>
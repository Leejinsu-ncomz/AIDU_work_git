<template>
    <div id="header" class="header">
        <div class="headerWrap">
            <h1 class="logo"><img :src="require(`@/assets/images/logo.png`)" alt="AIDU"></h1>
            <GNB @sub_menu_show_bg="subMenuBgShowData"></GNB>
            <div class="loginJoinWrap">
              <span class="userName">홍길동</span>
              <button type="button" class="subUserInfo_btn"><span class="hiddenTxt">유저 세부 정보 버튼</span></button>
              <i class="userIcon"><span class="hiddenTxt">유저 아이콘</span></i>
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
    subMenuShow: false
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
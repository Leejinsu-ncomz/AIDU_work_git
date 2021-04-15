<template>
    <div class="userWrap term">
      <div class="cntBox">
        <dl class="termAll">
          <dt>
            <label class="inpField">
              <input type="checkbox"/>
              <span class="text">AIDU 서비스 약관에 모두 동의합니다.</span>
            </label>
          </dt>
          <dd>전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, 개별적으로도 동의를 선택하실 수 있습니다. 선택항목에 대한 동의를 거부하시는 경우에도 서비스는 이용이 가능합니다.</dd>
        </dl>
        <div class="termList">
          <dl v-for="(item,index) in items" :key="item.id" :class="{'active': isActive === index}">
            <dt>
              <label class="inpField">
                <input type="checkbox" />
                <span class="text">{{item.title}}</span>
              </label>
              <button type="button" class="arrowBtn" @click="toggle(index)">
                <span class="hiddenTxt">열고/닫기 버튼</span>
              </button>
            </dt>
            <dd v-html="item.text"></dd>
          </dl>
        </div>
        <div class="btnArea full">
          <router-link tag="button" to="join"  class="btn xl cGreen">
            <span class="text">동의</span>
          </router-link>
        </div>
      </div>

      <!-- 알럿/컨펌 팝업 -->
      <div class="layerModalWrap" v-if="modalShow">                
          <div class="layerModal conAlertModal">
              <div class="modalHeader">
                  <strong class="txtCenter">확인 메세지</strong>
              </div>
              <div class="modalCnt">
                  <p class="text txtCenter">필수 항목에 대한<br>동의가 필요합니다.</p>
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
    modalShow : false,
    isActive : undefined,
    items : [{
        id:1,
        title:'[필수] AIDU 이용약관 동의',
        text:'제 1 조 <br>(목적)본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을 본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을<br>제 2 조 (목적)<br>본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을 본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을'
      },{
        id:2,
        title:'[필수] 개인정보 수집 및 이용 동의',
        text:'제 1 조 <br>(목적)본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을 본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을<br>제 2 조 (목적)<br>본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을 본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을'
      },{
        id:3,
        title:'[필수] 개인정보 처리 위탁 동의',
        text:'제 1 조 <br>(목적)본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을 본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을<br>제 2 조 (목적)<br>본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을 본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을'
      },{
        id:4,
        title:'[선택] 이벤트뉴스 정보 수신 동의',
        text:'제 1 조 <br>(목적)본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을 본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을<br>제 2 조 (목적)<br>본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을 본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을본 약관은 주식회사 케이티(이하 회사)가 제공하는 인터넷 관련 서비스(이하 서비스라고 한다.)를 이용함에 있어 회사와 회원과의 권리, 의무 및 기타 조건 등을'
      }
    ],
    allSelected : false
  }),
  components: {},
  mounted() {
  },
  methods: {
    fnClose() {
      this.modalShow = false
    },
    toggle(index) {
      this.isActive = index
    },
  }
};
</script>
<style scoped src="../../styles/user.css"></style>

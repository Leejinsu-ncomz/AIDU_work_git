<template>
    <div id="gnb" class="gnb" @mouseenter="subMenuBgShow" @mouseleave="subMenuBgHide">
        <ul class="gnbWrap">
            <!-- 각 페이지 Active 효과 시 li태그에 active 클래스를 넣어주세요 -->
            <li class="gnbList active">
                <a href="" class="gnbLink">AI 교육 컨텐츠</a>
                <ul class="subGnbWrap">
                    <!-- 각 페이지 Active 효과 시 li태그에 active 클래스를 넣어주세요 -->
                    <li class="subGnbList active"><a href="" class="subGnbListLink">AI 교육컨텐츠</a></li>
                    <li class="subGnbList"><a href="" class="subGnbListLink">AIDU 사용자 가이드</a></li>
                    <li class="subGnbList"><a href="" class="subGnbListLink">AIDU 사례 실습 컨텐츠</a></li>
                </ul>
            </li>
            <li class="gnbList">
                <a href="" class="gnbLink">자가학습서</a>
                <ul class="subGnbWrap">
                    <li class="subGnbList"><a href="" class="subGnbListLink">자가 학습서</a></li>
                </ul>
            </li>
            <li class="gnbList">
                <a href="" class="gnbLink">AIDU 공유모델</a>
                <ul class="subGnbWrap">
                    <li class="subGnbList"><a href="" class="subGnbListLink">AIDU 공유모델</a></li>
                </ul>
            </li>
            <li class="gnbList">
                <a href="" class="gnbLink">나의 프로젝트</a>
                <ul class="subGnbWrap">
                    <li class="subGnbList"><a href="" class="subGnbListLink">나의 프로젝트</a></li>
                    <li class="subGnbList"><a href="" class="subGnbListLink">프로젝트 그룹</a></li>
                </ul>
            </li>
            <li class="gnbList">
                <a href="" class="gnbLink">AI자격인증</a>
                <ul class="subGnbWrap">
                    <li class="subGnbList"><a href="" class="subGnbListLink">AI자격인증 소개(FAQ)</a></li>
                    <li class="subGnbList"><a href="" class="subGnbListLink">자격대비 강좌</a></li>
                    <li class="subGnbList"><a href="" class="subGnbListLink">자격시헙 신청</a></li>
                    <li class="subGnbList"><a href="" class="subGnbListLink">자격 네트워크</a></li>
                    <li class="subGnbList"><a href="" class="subGnbListLink">자격시험보기</a></li>
                    <li class="subGnbList"><a href="" class="subGnbListLink">자격시험 결과확인</a></li>
                    <li class="subGnbList"><a href="" class="subGnbListLink">자격 인증서 발급</a></li>                    
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'GNB',
  data: () => ({
    subMenuBgShowData: false
  }),
  methods: {
    subMenuBgShow() {
        console.log('enter')
        this.subMenuBgShowData = true;
        this.$emit('sub_menu_show_bg', this.subMenuBgShowData);            
    },
    subMenuBgHide() {
        console.log('leave')
        this.subMenuBgShowData = false;
        this.$emit('sub_menu_show_bg', this.subMenuBgShowData);            
    }
  }
}
</script>
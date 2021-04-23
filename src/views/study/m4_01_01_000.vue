<template>
    <div class="rowBox">
        <div class="unitBox">
            <div class="titArea type01">
                <h2 class="tit">자가학습서</h2>
                <p class="subTit">AIDU를 활요한 다양한 사례를 학습해보세요.</p>
            </div>
        </div>
        <div class="unitBox">
            <div class="btnArea">
                <button type="button" class="btn toggleSearchBtn active">All</button>
                <button type="button" class="btn toggleSearchBtn">이상탐지</button>
                <button type="button" class="btn toggleSearchBtn">군집</button>
                <button type="button" class="btn toggleSearchBtn">분류</button>
                <button type="button" class="btn toggleSearchBtn">최적화</button>
                <button type="button" class="btn toggleSearchBtn">추천</button>
                <button type="button" class="btn toggleSearchBtn">회귀</button>
                <button type="button" class="btn toggleSearchBtn">텍스트분석</button>
                <button type="button" class="btn toggleSearchBtn">기타</button>
            </div>
        </div>
        <div class="unitBox w100p mgT50 beforeLine">
            <div class="flexBox justifyContent">
                <div class="btnArea">
                    <span class="amountTxt"><em class="bold">70</em>건</span>
                    <button type="button" class="btn textBtn l"><span class="text">최신순</span></button>
                    <button type="button" class="btn textBtn l"><span class="text">제목순</span></button>
                    <button type="button" class="btn textBtn l"><span class="text">인기순</span></button>
                </div>
                <div class="searchArea type02">
                    <input type="text" class="customInp m type01" placeholder="검색어를 입력하세요." />
                    <div class="btnArea">
                        <button type="button" class="btn l round cGreen searchAreaBtn btnSmall">
                            <span class="text">검색</span>
                        </button>
                        <button type="button" class="btn l round cGreenGray searchAreaBtn btnSmall">
                            <span class="text">등록</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="unitBox">
            <div class="aiduList type01">
                <ul>
                    <li>
                        <div class="aiduListWrap">
                            <div class="imgBox">
                                <img :src="require(`@/assets/images/ico_userMessage.png`)" alt="예시 이미지" />
                            </div>
                            <div class="contentBox">
                                <div class="titWrap">
                                    <router-link to="detail" class="tit">제주도 공기질 데이터를 통한 미세먼지 예측 모델 제주도 공기질 데이터를 통한 미세먼지 예측 모델 제주도 공기질 데이터를 통한 미세먼지 예측 모델 제주도 공기질 데이터를 통한 미세먼지 예측 모델</router-link>
                                    <!-- active 클래스 추가시 클릭 효과가 나탑납니다. -->
                                    <button class="favoritesBtn active"><span class="hiddenTxt">즐겨찾기 버튼</span></button>
                                </div>
                                <div class="subInfoWrap">
                                    <span class="subInfo user">
                                        <i class="subIcon type01"><span class="hiddenTxt">유저아이콘</span></i>
                                        <span class="listSubTxt">홍길*</span>
                                    </span>
                                    <span class="subInfo">
                                        <i class="subIcon type02"><span class="hiddenTxt">조회수아이콘</span></i>
                                        <span class="listSubTxt">215</span>
                                    </span>                                    
                                    <span class="subInfo">
                                        <i class="subIcon type03"><span class="hiddenTxt">좋아요아이콘</span></i>
                                        <span class="listSubTxt">100</span>
                                    </span>
                                    <span class="subInfo">
                                        <i class="subIcon type04"><span class="hiddenTxt">댓글아이콘</span></i>
                                        <span class="listSubTxt">55</span>
                                    </span>
                                </div>
                                <div class="otherWrap">
                                    <div class="badgeWrap">
                                        <span class="modelBadge type01">이상탐지</span>
                                        <span class="modelBadge type02">군집</span>
                                    </div>
                                    <div class="dateWrap">
                                        <span class="date">2021-02-20</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="aiduListWrap">
                            <div class="imgBox">
                                <img :src="require(`@/assets/images/footer_logo.png`)" alt="예시 이미지" />
                            </div>
                            <div class="contentBox">
                                <div class="titWrap">
                                    <router-link to="detail" class="tit">제주도 공기질 데이터를 통한 미세먼지 예측 모델</router-link>
                                    <button class="favoritesBtn"><span class="hiddenTxt">즐겨찾기 버튼</span></button>
                                </div>
                                <div class="subInfoWrap">
                                    <span class="subInfo user">
                                        <i class="subIcon type01"><span class="hiddenTxt">유저아이콘</span></i>
                                        <span class="listSubTxt">홍길*</span>
                                    </span>
                                    <span class="subInfo">
                                        <i class="subIcon type02"><span class="hiddenTxt">조회수아이콘</span></i>
                                        <span class="listSubTxt">215</span>
                                    </span>                                    
                                    <span class="subInfo">
                                        <i class="subIcon type03"><span class="hiddenTxt">좋아요아이콘</span></i>
                                        <span class="listSubTxt">100</span>
                                    </span>
                                    <span class="subInfo">
                                        <i class="subIcon type04"><span class="hiddenTxt">댓글아이콘</span></i>
                                        <span class="listSubTxt">55</span>
                                    </span>
                                </div>
                                <div class="otherWrap">
                                    <div class="badgeWrap">
                                        <span class="modelBadge type03">분류</span>
                                        <span class="modelBadge type04">최적화</span>
                                    </div>
                                    <div class="dateWrap">
                                        <span class="date">2021-02-20</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="aiduListWrap">
                            <div class="imgBox">
                                <img :src="require(`@/assets/images/ico_project.png`)" alt="예시 이미지" />
                            </div>
                            <div class="contentBox">
                                <div class="titWrap">
                                    <router-link to="detail" class="tit">제주도 공기질 데이터를 통한 미세먼지 예측 모델</router-link>
                                    <button class="favoritesBtn"><span class="hiddenTxt">즐겨찾기 버튼</span></button>
                                </div>
                                <div class="subInfoWrap">
                                    <span class="subInfo user">
                                        <i class="subIcon type01"><span class="hiddenTxt">유저아이콘</span></i>
                                        <span class="listSubTxt">홍길*</span>
                                    </span>
                                    <span class="subInfo">
                                        <i class="subIcon type02"><span class="hiddenTxt">조회수아이콘</span></i>
                                        <span class="listSubTxt">215</span>
                                    </span>                                    
                                    <span class="subInfo">
                                        <i class="subIcon type03"><span class="hiddenTxt">좋아요아이콘</span></i>
                                        <span class="listSubTxt">100</span>
                                    </span>
                                    <span class="subInfo">
                                        <i class="subIcon type04"><span class="hiddenTxt">댓글아이콘</span></i>
                                        <span class="listSubTxt">55</span>
                                    </span>
                                </div>
                                <div class="otherWrap">
                                    <div class="badgeWrap">
                                        <span class="modelBadge type05">추천</span>
                                        <span class="modelBadge type06">회귀</span>
                                    </div>
                                    <div class="dateWrap">
                                        <span class="date">2021-02-20</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="aiduListWrap">
                            <div class="imgBox">
                                <img :src="require(`@/assets/images/logo.png`)" alt="예시 이미지" />
                            </div>
                            <div class="contentBox">
                                <div class="titWrap">
                                    <a href="javascript:void(0);" @click="fnOpen('modal-1')" class="tit">제주도 공기질 데이터를 통한 미세먼지 예측 모델</a>
                                    <button class="favoritesBtn"><span class="hiddenTxt">즐겨찾기 버튼</span></button>
                                </div>
                                <div class="subInfoWrap">
                                    <span class="subInfo user">
                                        <i class="subIcon type01"><span class="hiddenTxt">유저아이콘</span></i>
                                        <span class="listSubTxt">홍길*</span>
                                    </span>
                                    <span class="subInfo">
                                        <i class="subIcon type02"><span class="hiddenTxt">조회수아이콘</span></i>
                                        <span class="listSubTxt">215</span>
                                    </span>                                    
                                    <span class="subInfo">
                                        <i class="subIcon type03"><span class="hiddenTxt">좋아요아이콘</span></i>
                                        <span class="listSubTxt">100</span>
                                    </span>
                                    <span class="subInfo">
                                        <i class="subIcon type04"><span class="hiddenTxt">댓글아이콘</span></i>
                                        <span class="listSubTxt">55</span>
                                    </span>
                                </div>
                                <div class="otherWrap">
                                    <div class="badgeWrap">
                                        <span class="modelBadge type07">텍스트분석</span>
                                        <span class="modelBadge type08">기타</span>
                                    </div>
                                    <div class="dateWrap">
                                        <span class="date">2021-02-20</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>         
        <!-- 조회 권한 알럿/컨펌 팝업 -->
        <div class="layerModalWrap" v-if="modalShow === 'modal-1'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">조회 권한이 없는 게시물 입니다.</p>
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
    data: () => ({
        modalShow: ''
    }),
    methods: {
        fnOpen: function (id) {
            console.log(id)
            this.modalShow = id;
            document.body.classList.add("modal-open");
        },
        fnClose: function () {
            this.modalShow = null;
            document.body.classList.remove("modal-open");
        }
    }
}
</script>
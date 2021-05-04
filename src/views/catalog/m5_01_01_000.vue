<template>
    <div class="rowBox">
        <div class="unitBox">
            <div class="titArea type01">
                <h2 class="tit">공유모델</h2>
                <p class="subTit">다른 사용자가 생성한 AI 모델과 소스를 공유합니다.</p>
            </div>
        </div>
        <div class="unitBox">
            <div class="searchArea">
                <input type="text" class="customInp type01" placeholder="검색어를 입력하세요." />
                <div class="btnArea">
                    <button type="button" class="btn xl round cGreen searchAreaBtn btnSmall">
                        <span class="text">검색</span>
                    </button>
                </div>
                <div class="btnArea">
                    <button type="button" id="modal-1" class="btn xl round cBlue btnSmallMedium" @click="fnOpen('modal-1')">
                        <span class="text">상세검색</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="unitBox w100p mgT50 beforeLine">
            <div class="flexBox">
                <div class="btnArea">
                    <span class="amountTxt"><em class="bold">70</em>건</span>
                    <!-- 210429 버튼에 orderBtn 클래스 추가해주세요 orderActive 클래스 추가시 정렬 효과 나타낼 수 있습니다. -->
                    <button type="button" class="btn textBtn orderBtn l orderActive"><span class="text">최신순</span></button>
                    <button type="button" class="btn textBtn orderBtn l"><span class="text">제목순</span></button>
                    <button type="button" class="btn textBtn orderBtn l"><span class="text">인기순</span></button>
                </div>
            </div>
        </div>
        <div class="unitBox mgT40">
            <div class="aiduList type02 col4">
                <ul class="aiduListWrap">
                    <!-- 210503 임시저장시 active 클래스 추가해주세요 -->
                    <li class="active">
                        <div class="modelTopArea">
                            <div class="badgeWrap">
                                <span class="modelBadge type09">L1</span>
                                <span class="modelBadge type01">이상탐지</span>
                            </div>
                            <div class="btnArea">
                                <!-- 210503 아이콘 변경 -->
                                <i class="catalogoIcon type02"><div class="hiddenTxt">jupyter 아이콘</div></i>
                                <!-- active 클래스 추가시 클릭 효과가 나탑납니다. -->
                                <!-- <button class="favoritesBtn active"><span class="hiddenTxt">즐겨찾기 버튼</span></button> -->
                                <!-- 210503 임시저장 삭제 버튼 추가 -->
                                <button class="tempoDelBtn"><span class="hiddenTxt">임시저장 삭제 버튼</span></button>
                            </div>
                        </div>
                        <!-- CERTIFIED 표시시 certified 클래스 추가해주세요-->
                        <div class="imgBox certified">
                            <img :src="require(`@/assets/images/ico_userMessage.png`)" alt="예시 이미지" />
                        </div>
                        <div class="contentBox">
                            <div class="titWrap">
                                <router-link to="detail" class="tit new">iris-부하테스트</router-link>
                            </div>
                            <div class="hashTagWrap">
                                <ul>
                                    <li>#아이리스</li>
                                    <li>#불꽃분류</li>
                                    <li>#test</li>
                                    <li>#testtest</li>
                                </ul>
                            </div>
                            <div class="subInfoWrap">
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
                                <span class="subInfo user">
                                    <i class="subIcon type01"><span class="hiddenTxt">유저아이콘</span></i>
                                    <span class="listSubTxt">홍길*</span>
                                </span>
                                <div class="dateWrap">
                                    <span class="date">2021-02-20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="modelTopArea">
                            <div class="badgeWrap type02">
                                <span class="modelBadge type10">L2</span>
                                <span class="modelBadge type02">군집</span>
                            </div>
                            <div class="btnArea">
                                <!-- 210503 아이콘 변경 -->
                                <i class="catalogoIcon type03"><div class="hiddenTxt">aidu ez 아이콘</div></i>
                                <!-- active 클래스 추가시 클릭 효과가 나탑납니다. -->
                                <button class="favoritesBtn"><span class="hiddenTxt">즐겨찾기 버튼</span></button>
                            </div>
                        </div>
                        <div class="imgBox">
                            <img :src="require(`@/assets/images/ico_userMessage.png`)" alt="예시 이미지" />
                        </div>
                        <div class="contentBox">
                            <div class="titWrap">
                                <router-link to="detail" class="tit new">iris-부하테스트</router-link>
                            </div>
                            <div class="hashTagWrap">
                                <ul>
                                    <li>#아이리스</li>
                                    <li>#불꽃분류</li>
                                    <li>#test</li>
                                    <li>#testtest</li>
                                </ul>
                            </div>
                            <div class="subInfoWrap">
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
                                <span class="subInfo user">
                                    <i class="subIcon type01"><span class="hiddenTxt">유저아이콘</span></i>
                                    <span class="listSubTxt">홍길*</span>
                                </span>
                                <div class="dateWrap">
                                    <span class="date">2021-02-20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="modelTopArea">
                            <div class="badgeWrap type02">
                                <span class="modelBadge type11">L3</span>
                                <span class="modelBadge type03">분류</span>
                            </div>
                            <div class="btnArea">
                                <!-- 210503 아이콘 변경 -->
                                <i class="catalogoIcon type04"><div class="hiddenTxt">외부참조보델 아이콘</div></i>
                                <!-- active 클래스 추가시 클릭 효과가 나탑납니다. -->
                                <button class="favoritesBtn"><span class="hiddenTxt">즐겨찾기 버튼</span></button>
                            </div>
                        </div>
                        <div class="imgBox">
                            <img :src="require(`@/assets/images/ico_userMessage.png`)" alt="예시 이미지" />
                        </div>
                        <div class="contentBox">
                            <div class="titWrap">
                                <router-link to="detail" class="tit new">iris-부하테스트</router-link>
                            </div>
                            <div class="hashTagWrap">
                                <ul>
                                    <li>#아이리스</li>
                                    <li>#불꽃분류</li>
                                    <li>#test</li>
                                    <li>#testtest</li>
                                </ul>
                            </div>
                            <div class="subInfoWrap">
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
                                <span class="subInfo user">
                                    <i class="subIcon type01"><span class="hiddenTxt">유저아이콘</span></i>
                                    <span class="listSubTxt">홍길*</span>
                                </span>
                                <div class="dateWrap">
                                    <span class="date">2021-02-20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="modelTopArea">
                            <div class="badgeWrap type02">
                                <span class="modelBadge type09">L1</span>
                                <span class="modelBadge type04">최적화</span>
                            </div>
                            <div class="btnArea">
                                <!-- 210503 아이콘 변경 -->
                                <i class="catalogoIcon type02"><div class="hiddenTxt">jupyter 아이콘</div></i>
                                <!-- active 클래스 추가시 클릭 효과가 나탑납니다. -->
                                <button class="favoritesBtn"><span class="hiddenTxt">즐겨찾기 버튼</span></button>
                            </div>
                        </div>
                        <div class="imgBox">
                            <img :src="require(`@/assets/images/ico_userMessage.png`)" alt="예시 이미지" />
                        </div>
                        <div class="contentBox">
                            <div class="titWrap">
                                <router-link to="detail" class="tit new">iris-부하테스트</router-link>
                            </div>
                            <div class="hashTagWrap">
                                <ul>
                                    <li>#아이리스</li>
                                    <li>#불꽃분류</li>
                                    <li>#test</li>
                                    <li>#testtest</li>
                                </ul>
                            </div>
                            <div class="subInfoWrap">
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
                                <span class="subInfo user">
                                    <i class="subIcon type01"><span class="hiddenTxt">유저아이콘</span></i>
                                    <span class="listSubTxt">홍길*</span>
                                </span>
                                <div class="dateWrap">
                                    <span class="date">2021-02-20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="modelTopArea">
                            <div class="badgeWrap type02">
                                <span class="modelBadge type09">L1</span>
                                <span class="modelBadge type05">추천</span>
                            </div>
                            <div class="btnArea">
                                <!-- 210503 아이콘 변경 -->
                                <i class="catalogoIcon type02"><div class="hiddenTxt">jupyter 아이콘</div></i>
                                <!-- active 클래스 추가시 클릭 효과가 나탑납니다. -->
                                <button class="favoritesBtn"><span class="hiddenTxt">즐겨찾기 버튼</span></button>
                            </div>
                        </div>
                        <div class="imgBox">
                            <img :src="require(`@/assets/images/ico_userMessage.png`)" alt="예시 이미지" />
                        </div>
                        <div class="contentBox">
                            <div class="titWrap">
                                <router-link to="detail" class="tit new">iris-부하테스트</router-link>
                            </div>
                            <div class="hashTagWrap">
                                <ul>
                                    <li>#아이리스</li>
                                    <li>#불꽃분류</li>
                                    <li>#test</li>
                                    <li>#testtest</li>
                                </ul>
                            </div>
                            <div class="subInfoWrap">
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
                                <span class="subInfo user">
                                    <i class="subIcon type01"><span class="hiddenTxt">유저아이콘</span></i>
                                    <span class="listSubTxt">홍길*</span>
                                </span>
                                <div class="dateWrap">
                                    <span class="date">2021-02-20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="modelTopArea">
                            <div class="badgeWrap type02">
                                <span class="modelBadge type09">L1</span>
                                <span class="modelBadge type06">회귀</span>
                            </div>
                            <div class="btnArea">
                                <!-- 210503 아이콘 변경 -->
                                <i class="catalogoIcon type02"><div class="hiddenTxt">jupyter 아이콘</div></i>
                                <!-- active 클래스 추가시 클릭 효과가 나탑납니다. -->
                                <button class="favoritesBtn"><span class="hiddenTxt">즐겨찾기 버튼</span></button>
                            </div>
                        </div>
                        <div class="imgBox">
                            <img :src="require(`@/assets/images/ico_userMessage.png`)" alt="예시 이미지" />
                        </div>
                        <div class="contentBox">
                            <div class="titWrap">
                                <router-link to="detail" class="tit new">iris-부하테스트</router-link>
                            </div>
                            <div class="hashTagWrap">
                                <ul>
                                    <li>#아이리스</li>
                                    <li>#불꽃분류</li>
                                    <li>#test</li>
                                    <li>#testtest</li>
                                </ul>
                            </div>
                            <div class="subInfoWrap">
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
                                <span class="subInfo user">
                                    <i class="subIcon type01"><span class="hiddenTxt">유저아이콘</span></i>
                                    <span class="listSubTxt">홍길*</span>
                                </span>
                                <div class="dateWrap">
                                    <span class="date">2021-02-20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="modelTopArea">
                            <div class="badgeWrap type02">
                                <span class="modelBadge type09">L1</span>
                                <span class="modelBadge type07">텍스트분석</span>
                            </div>
                            <div class="btnArea">
                                <!-- 210503 아이콘 변경 -->
                                <i class="catalogoIcon type02"><div class="hiddenTxt">jupyter 아이콘</div></i>
                                <!-- active 클래스 추가시 클릭 효과가 나탑납니다. -->
                                <button class="favoritesBtn"><span class="hiddenTxt">즐겨찾기 버튼</span></button>
                            </div>
                        </div>
                        <div class="imgBox">
                            <img :src="require(`@/assets/images/ico_userMessage.png`)" alt="예시 이미지" />
                        </div>
                        <div class="contentBox">
                            <div class="titWrap">
                                <router-link to="detail" class="tit new">iris-부하테스트</router-link>
                            </div>
                            <div class="hashTagWrap">
                                <ul>
                                    <li>#아이리스</li>
                                    <li>#불꽃분류</li>
                                    <li>#test</li>
                                    <li>#testtest</li>
                                </ul>
                            </div>
                            <div class="subInfoWrap">
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
                                <span class="subInfo user">
                                    <i class="subIcon type01"><span class="hiddenTxt">유저아이콘</span></i>
                                    <span class="listSubTxt">홍길*</span>
                                </span>
                                <div class="dateWrap">
                                    <span class="date">2021-02-20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="modelTopArea">
                            <div class="badgeWrap type02">
                                <span class="modelBadge type09">L1</span>
                                <span class="modelBadge type08">기타</span>
                            </div>
                            <div class="btnArea">
                                <!-- 210503 아이콘 변경 -->
                                <i class="catalogoIcon type02"><div class="hiddenTxt">jupyter 아이콘</div></i>
                                <!-- active 클래스 추가시 클릭 효과가 나탑납니다. -->
                                <button class="favoritesBtn"><span class="hiddenTxt">즐겨찾기 버튼</span></button>
                            </div>
                        </div>
                        <div class="imgBox">
                            <img :src="require(`@/assets/images/ico_userMessage.png`)" alt="예시 이미지" />
                        </div>
                        <div class="contentBox">
                            <div class="titWrap">
                                <router-link to="detail" class="tit new">iris-부하테스트</router-link>
                            </div>
                            <div class="hashTagWrap">
                                <ul>
                                    <li>#아이리스</li>
                                    <li>#불꽃분류</li>
                                    <li>#test</li>
                                    <li>#testtest</li>
                                </ul>
                            </div>
                            <div class="subInfoWrap">
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
                                <span class="subInfo user">
                                    <i class="subIcon type01"><span class="hiddenTxt">유저아이콘</span></i>
                                    <span class="listSubTxt">홍길*</span>
                                </span>
                                <div class="dateWrap">
                                    <span class="date">2021-02-20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>        
        <!-- 프로젝트 생성 팝업-->
        <div class="layerModalWrap" v-if="modalShow === 'modal-1'" >
            <div class="layerModal">
                <div class="modalHeader">
                    <strong>상세검색</strong>
                    <div class="btnArea">
                        <button type="button" class="btn l cAqua iconOnly refresh"><span class="text">새로고침</span></button>
                    </div>
                </div>
                <div class="modalCnt">
                    <form>
                        <div class="unitGroup">
                            <dl class="unit">
                                <dt>
                                    <span class="tit">등록일</span>
                                </dt>
                                <dd>                                    
                                    <date-picker :date="from" @input="fromDate" />
                                    <span class="term">~</span>
                                    <date-picker :date="to" @input="toDate" />
                                </dd>
                            </dl>
                            <dl class="unit">
                                <dt>
                                    <span class="tit">프로젝트 설명</span>
                                </dt>
                                <dd>
                                    <select class="inp l w100p">
                                        <option value="" hidden>선택</option>
                                        <option value="">Clustering(군집)</option>
                                        <option value="">Anomaly detection(이상탐지)</option>
                                        <option value="">Classification(분류)</option>
                                        <option value="">Optimization(최적화)</option>
                                        <option value="">Recommendation(추천)</option>
                                        <option value="">Regression(회귀)</option>
                                        <option value="">Text Analysis(텍스트 분석)</option>
                                        <option value="">Etc.(기타)</option>
                                    </select>
                                </dd>
                            </dl>
                        </div>
                        <div class="unitGroup flexBox justifyContent col2">                            
                            <dl class="unit">
                                <dt>
                                    <span class="tit">개발도구</span>
                                </dt>
                                <dd>
                                    <select class="inp l w100p">
                                        <option value="">전체</option>
                                        <option value="">AIDU Jupyter</option>
                                        <option value="">AIDU ez</option>
                                        <option value="">외부참조모델</option>
                                    </select>
                                </dd>
                            </dl>
                            <dl class="unit">
                                <dt>
                                    <span class="tit">모델레벨</span>
                                </dt>
                                <dd>
                                    <select class="inp l w100p">
                                        <option value="">전체</option>
                                        <option value="">L1 : 교육/실습 모델</option>
                                        <option value="">L2 : 실무POC 모델</option>
                                        <option value="">L3 : 상용서비스 적용 모델</option>
                                    </select>
                                </dd>
                            </dl>
                        </div>
                        <div class="unitGroup">
                            <dl class="unit">
                                <dt>
                                    <span class="tit">검색</span>
                                </dt>
                                <dd>
                                    <input type="text" class="inp l w100p" placeholder="기본 프로젝트" />
                                </dd>
                            </dl>                            
                        </div>
                    </form>
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button id="modal-3" type="button" class="btn xl cGreen" @click="fnClose">
                            <span class="text">검색</span>
                        </button>
                        <button type="button" class="btn xl cGrayGreen" @click="fnClose">
                            <span class="text">닫기</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DatePicker from "@/components/DatePicker";
export default {
    data: () => ({
        modalShow: '',
        from: "",
        to: ""
    }),
    components: {
        DatePicker,
    },
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
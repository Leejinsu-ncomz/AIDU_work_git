<template>
    <div class="rowBox">
        <div class="unitBox">
            <div class="locationWrap">
                <ul class="location">
                    <li><a href="javascript:void(0)">자가학습서</a></li>
                    <li><a href="javascript:void(0)">상세</a></li>
                </ul>
            </div>
        </div>
        <div class="unitBox">
            <div class="aiduListdetail">
                <div class="detailWrap">
                    <div class="imgBox">
                        <img :src="require(`@/assets/images/ico_userMessage.png`)" alt="예시 이미지" />
                    </div>
                    <div class="contentBox">
                        <div class="badgeWrap">
                            <span class="modelBadge type01">이상탐지</span>
                            <span class="modelBadge type02">군집</span>
                        </div>
                        <div class="titWrap">
                            <!-- 210429 new 클래스 추가시 new아이콘이 나타납니다. -->
                            <span class="tit new">제주도 공기질 데이터를 통한 미세먼지 예측 모델</span>
                            <!-- active 클래스 추가시 클릭 효과가 나탑납니다. -->
                            <div class="btnArea">
                                <button class="likelyBtn active"><span class="hiddenTxt">좋아요 버튼</span></button>
                                <button class="favoritesBtn active"><span class="hiddenTxt">즐겨찾기 버튼</span></button>
                            </div>
                        </div>
                        <div class="detailInfoWrap">
                            <div class="userInfo">
                                <i class="subIcon type01"><span class="hiddenTxt">유저아이콘</span></i>
                                <span class="contentInfoTxt">홍길*</span>
                            </div>
                            <div class="contentInfoWrap">
                                <span class="contentInfo">
                                    <i class="subIcon type02"><span class="hiddenTxt">조회수아이콘</span></i>
                                    <span class="contentInfoTxt">215</span>
                                </span>                                    
                                <span class="contentInfo">
                                    <i class="subIcon type03"><span class="hiddenTxt">좋아요아이콘</span></i>
                                    <span class="contentInfoTxt">100</span>
                                </span>
                                <span class="contentInfo">
                                    <i class="subIcon type04"><span class="hiddenTxt">댓글아이콘</span></i>
                                    <span class="contentInfoTxt">55</span>
                                </span>
                            </div>
                            <div class="develInfo">
                                <span class="contentInfoTxt">개발도구 : Jupyterlab</span>
                            </div>
                        </div>
                        <div class="otherWrap mgT30">
                            <ul class="hashTagWrap">
                                <li><a href="javascript:void(0)">#test</a></li>
                                <li><a href="javascript:void(0)">#jeju</a></li>
                                <li><a href="javascript:void(0)">#air data</a></li>
                                <li><a href="javascript:void(0)">#fine dust</a></li>
                                <li><a href="javascript:void(0)">#expectation</a></li>
                                <li><a href="javascript:void(0)">#model</a></li>
                            </ul>                                    
                            <div class="dateWrap">
                                <span class="date">2021-02-20</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rowTable">
                <table>
                    <colgroup>
                        <col style="width:240px;"/>
                        <col />
                        <col style="width:240px;"/>
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">유형</th>
                            <td>Clustering(군집)</td>
                            <th scope="row">개발도구</th>
                            <td>AIDU Jupyter</td>
                        </tr>
                        <tr>
                            <th scope="row">제목</th>
                            <td colspan="3">제주도 공기질 데이터를 통한 미세먼지 예측 모델</td>
                        </tr>
                        <tr>
                            <th scope="row">첨부파일</th>
                            <td colspan="3">Sample.zip<em class="pColor02">(123 kb)</em></td>
                        </tr>
                    </tbody>
                </table>
                <div class="contentTxtWrap">
                    <div class="contentTxtBox">
                        <span class="contentTxt">여기서 사용할 칼럼만 뽑자면 아래와 같다.<br>통계 산출 시간 : 시간별 통계값을 구분하기 위함<br>측정장비위치 코드 : 여러 장비를 위치별로 구분하기 위함<br>데이터종류 코드 : 공기질 데이터는 총 5가지로 온도, 습도, 미세먼지, 초미세먼지, 소음의 값을 가진다. 이들을 구별하기 위함<br>평균값 : 5분 사이에 이상치가 섞여 있을 수 있으므로 이를 피하기 위함</span>
                    </div>
                </div>
            </div>            
            <div class="btnArea mgT10 txtRight rowBoxBtnArea">
                <router-link tag="button" to="edit" class="btn l cGrayGreen w100px"><span class="text">수정</span></router-link>
                <button type="button" class="btn l cGrayGreen w100px" @click="fnOpen('modal-1')"><span class="text">삭제</span></button>
                <router-link tag="button" to="list" class="btn l cGreen w100px"><span class="text">목록</span></router-link>
            </div>
        </div>
        <div class="unitBox">
            <!-- 210429 댓글 관련 수정 -->
            <div class="commentWrap">
                <div class="commentTitWrap">
                    <span class="tit">댓글 (11)</span>
                </div>
                <div class="commentWriteWrap">
                    <textarea class="inp" placeholder="AIDU 학습서에 대한 다양한 의견을 나누세요."></textarea>
                    <button class="btn cGreen comAddBtn" @click="fnOpen('modal-2')">등록</button>
                </div>
                <!-- 210430 댓글 영역 -->
                <div class="commentConWrap">
                    <div class="userImgBox">
                        <img :src="require(`@/assets/images/ico_user_type02.png`)" alt="유저 이미지">
                    </div>
                    <div class="userInfoArea">
                        <div class="userInfo">
                            <span class="name">홍길*</span>
                            <span class="date">2021-02-15</span>
                        </div>                        
                        <div class="contentArea">
                            <span class="content">유익한 글 잘 봤습니다. 추후 2020년까지의 데이터로 주기성을 띄는 데이터를 확보한 뒤 이를 예측에 활용하면 더 의미있는 결과를 얻을 수 있을 것으로 보입니다.</span>
                        </div>
                    </div>
                    <div class="btnArea">                        
                        <button type="button" class="btn s cWhiteGreen"><span class="text">답글</span></button>
                    </div>
                    <div class="commentInfoBtnArea">
                        <button type="button" class="commentInfoBtn">
                            <span class="hiddenTxt">댓글 수정/삭제 버튼</span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </button>
                        <div class="editRemoveWrap show">
                            <button type="button">수정</button>
                            <button type="button">삭제</button>
                        </div>
                    </div>
                </div>                
                <!-- 210430 댓글의 답글 영역 -->
                <div class="commentConWrap recomment writeWrap show">
                    <div class="userImgBox">
                        <img :src="require(`@/assets/images/ico_user_type02.png`)" alt="유저 이미지">
                    </div>
                    <div class="userInfoArea">
                        <div class="userInfo">
                            <span class="name">홍길*</span>
                        </div>                        
                        <div class="commentWriteWrap">
                            <textarea class="inp" placeholder="AIDU 학습서에 대한 다양한 의견을 나누세요."></textarea>
                            <div class="btnArea">
                                <button type="button" class="btn cGreen comAddBtn" @click="fnOpen('modal-2')">등록</button>
                                <button type="button" class="btn textBtn s underLine cancelBtn"><span class="text">취소</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 210430 댓글 수정 영역 -->
                <div class="commentConWrap edit">
                    <div class="userImgBox">
                        <img :src="require(`@/assets/images/ico_user_type02.png`)" alt="유저 이미지">
                    </div>
                    <div class="userInfoArea">
                        <div class="userInfo">
                            <span class="name">홍길*</span>
                            <span class="date">2021-02-15</span>
                        </div>
                        <div class="commentWriteWrap">
                            <textarea class="inp" placeholder="AIDU 학습서에 대한 다양한 의견을 나누세요."></textarea>
                            <div class="btnArea">
                                <button type="button" class="btn cGreen s comAddBtn" @click="fnOpen('modal-2')">등록</button>
                                <button type="button" class="btn textBtn s underLine cancelBtn"><span class="text">취소</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 210430 댓글의 댓글 영역 -->
                <div class="commentConWrap recomment">
                    <div class="userImgBox">
                        <img :src="require(`@/assets/images/ico_user_type02.png`)" alt="유저 이미지">
                    </div>
                    <div class="userInfoArea">
                        <div class="userInfo">
                            <span class="name">홍길*</span>
                            <span class="date">2021-02-15</span>
                        </div>                        
                        <div class="contentArea">
                            <span class="content">온도, 습도와 같이 계절성이 좀 더 짙은 데이터에서는 Prophet의 예측이 많이 빗나가 보입니다. <br>Prophet 모델을 만들 때 yearly_seasonality로 연주기성을 부여했으나, 1년이 되지 않는 데이터를 입력했기 때문으로 보여집니다.<br>이 점을 개선한다면 좋을 것 같습니다.</span>
                        </div>
                    </div>
                    <div class="commentInfoBtnArea">
                        <button type="button" class="commentInfoBtn">
                            <span class="hiddenTxt">댓글 수정/삭제 버튼</span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </button>
                        <!-- show 클래스 추가시 나타납니다. -->
                        <div class="editRemoveWrap show">
                            <button type="button">수정</button>
                            <button type="button">삭제</button>
                        </div>
                    </div>
                </div>
                <!-- 210430 댓글의 댓글 수정 영역 -->
                <div class="commentConWrap recomment writeWrap show">
                    <div class="userImgBox">
                        <img :src="require(`@/assets/images/ico_user_type02.png`)" alt="유저 이미지">
                    </div>
                    <div class="userInfoArea">
                        <div class="userInfo">
                            <span class="name">홍길*</span>
                            <span class="date">2021-02-15</span>
                        </div>                        
                        <div class="commentWriteWrap">
                            <textarea class="inp" placeholder="AIDU 학습서에 대한 다양한 의견을 나누세요."></textarea>
                            <div class="btnArea">
                                <button type="button" class="btn cGreen comAddBtn" @click="fnOpen('modal-2')">등록</button>
                                <button type="button" class="btn textBtn s underLine cancelBtn"><span class="text">취소</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>         
        <!-- 삭제 알럿/컨펌 팝업 -->
        <div class="layerModalWrap" v-if="modalShow === 'modal-1'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">해당 글을 삭제 하시겠습니까?</p>
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn m cGreen" @click="fnClose">
                            <span class="text">확인</span>
                        </button>
                        <button type="button" class="btn m cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>         
        <!-- 댓글 내용 등록 알럿/컨펌 팝업 -->
        <div class="layerModalWrap" v-if="modalShow === 'modal-2'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">내용을 입력해주세요</p>
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
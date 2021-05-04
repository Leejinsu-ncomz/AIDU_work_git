<template>
    <div class="rowBox">
        <div class="unitBox">
            <div class="locationWrap">
                <ul class="location">
                    <li><a href="javascript:void(0)">공유모델</a></li>
                    <li><a href="javascript:void(0)">상세</a></li>
                </ul>
            </div>
        </div>
        <div class="unitBox">
            <div class="aiduListdetail">
                <div class="detailWrap">
                    <!-- 210504 certified 클래스 추가해주세요 -->
                    <div class="imgBox certified">
                        <img :src="require(`@/assets/images/ico_jupyter.png`)" alt="예시 이미지" />
                    </div>
                    <div class="contentBox">
                        <div class="badgeWrap">
                            <span class="modelBadge type01">이상탐지</span>
                            <span class="modelBadge type02">군집</span>
                        </div>
                        <div class="titWrap">
                            <span class="tit">제주도 공기질 데이터를 통한 미세먼지 예측 모델 제주도 공기질 데이터를 통한 미세먼지 예측 모델 제주도 공기질 데이터를 통한 미세먼지 예측 모델 제주도 공기질 데이터를 통한 미세먼지 예측 모델</span>
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
                        <div class="otherWrap">
                            <ul class="hashTagWrap">
                                <li>#test</li>
                                <li>#jeju</li>
                                <li>#air data</li>
                                <li>#fine dust</li>
                                <li>#expectation</li>
                                <li>#model</li>
                            </ul>                                    
                            <div class="dateWrap">
                                <span class="date">2021-02-20</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="unitBox tabType02 mgT40">
            <div class="tabWrap type02">
                <div class="tabHeader flexBox justifyContent">
                    <ul>
                        <li v-bind:class="{active: tabActvie[0].active}" @click="fnTab(tabActvie[0], tabShow[0])"><button>개요</button></li>
                        <li v-bind:class="{active: tabActvie[1].active}" @click="fnTab(tabActvie[1], tabShow[1])"><button>사용법</button></li>
                        <li v-bind:class="{active: tabActvie[2].active}" @click="fnTab(tabActvie[2], tabShow[2])"><button>파일</button></li>
                        <li v-bind:class="{active: tabActvie[3].active}" @click="fnTab(tabActvie[3], tabShow[3])"><button>시뮬레이터</button></li>
                    </ul>
                    <div class="plusCon alignSelfT">
                        <div class="customSelectWrap s alignT">
                            <select class="customSelect">
                                <option value="" hidden="hidden">프로젝트 선택</option>
                                <option value="">프로젝트 명</option>                                
                                <option value="">프로젝트 명</option>
                            </select>
                            <i><span class="hiddenTxt">select box 아이콘</span></i>
                        </div>
                        <div class="btnArea">
                            <a type="button" class="btn m round cGreenGray" @click="fnOpen('modal-1')">복사</a>
                        </div>
                    </div>
                </div>
                <!-- 개요 -->
                <div v-if="tabShow[0].active" class="tabContainer">
                    <div class="rowTable">
                        <table>
                            <colgroup>
                                <col style="width: 240px;">
                                <col>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>모델명</th>
                                    <td>가입자 해지 예측 모델</td>
                                </tr>
                                <tr>
                                    <th>모델 설명</th>
                                    <td>가입자 해지 예측을 위한 모델</td>
                                </tr>
                                <tr>
                                    <th>모델 유형</th>
                                    <td>Recommendation (추천)</td>
                                </tr>
                                <tr>
                                    <th>등록자</th>
                                    <td>홍길동</td>
                                </tr>
                                <tr>
                                    <th>버전</th>
                                    <td>1.0</td>
                                </tr>
                                <tr>
                                    <th>변경 이력</th>
                                    <td></td>
                                </tr>                                                        
                            </tbody>
                        </table>
                    </div>
                    <!-- 210427 목록 버튼 추가 -->
                    <div class="btnArea mgT10 txtRight rowBoxBtnArea">
                        <router-link to="/catalog/list" tag="button" class="btn l cGreen w100px"><span class="text">목록</span></router-link>
                    </div>
                </div> 
                <!-- 사용법 -->
                <div v-if="tabShow[1].active" class="tabContainer">
                    <div class="rowTable">
                        <table>
                            <colgroup>
                                <col style="width: 240px;">
                                <col>
                            </colgroup>
                            <tbody>
                                <tr style="height: 200px">
                                    <th>모델 사용법</th>
                                    <td></td>
                                </tr>
                                <tr style="height: 200px">
                                    <th>데이터 구성</th>
                                    <td></td>
                                </tr>                                                      
                            </tbody>
                        </table>
                    </div>
                    <!-- 210427 목록 버튼 추가 -->
                    <div class="btnArea mgT10 txtRight rowBoxBtnArea">
                        <router-link to="/catalog/list" tag="button" class="btn l cGreen w100px"><span class="text">목록</span></router-link>
                    </div>
                </div> 
                <!-- 파일 -->
                <div v-if="tabShow[2].active" class="tabContainer">                    
                    <div class="tpArea">
                        <span class="tit pColor01">my_project/data/</span>
                    </div>
                    <div class="treeTable">
                        <div>
                            <div class="tableTreeWrap theadFix" style="max-height: 500px;">
                                <table class="tableTree">
                                    <colgroup>
                                        <col style="width: 50%;">
                                        <col style="width: 10%;">
                                        <col style="width: 40%;">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>디렉토리/파일명</th>
                                            <th>크기</th>
                                            <th>수정일</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colspan="2"><span class="name">홍길*</span></td>
                                            <td>2021-03-08 19:54:21</td>
                                        </tr>
                                        <!-- subDepth에 open클래스 추가해주시면 열립니다. -->
                                        <tr class="subDepth open">
                                            <td>
                                                <label for="treeCheckBox01" class="inpField"><input type="checkbox" id="treeCheckBox01"><span class="text txtEllipse">App.py</span></label>
                                                <button type="button" class="btn icoDirectory preview"><span class="text">미리보기</span></button>
                                                <button type="button" class="btn icoDirectory copy"><span class="text">복사</span></button>
                                            </td>
                                            <td>400MB</td>
                                            <td>2021-03-08 19:54:21</td>
                                        </tr>
                                        <tr class="subDepth open">
                                            <td>
                                                <label for="treeCheckBox02" class="inpField"><input type="checkbox" id="treeCheckBox02"><span class="text txtEllipse">App.py</span></label>
                                                <button type="button" class="btn icoDirectory preview"><span class="text">미리보기</span></button>
                                                <button type="button" class="btn icoDirectory copy"><span class="text">복사</span></button>
                                            </td>
                                            <td>400MB</td>
                                            <td>2021-03-08 19:54:21</td>
                                        </tr>
                                        <tr class="subDepth open">
                                            <td>
                                                <label for="treeCheckBox03" class="inpField"><input type="checkbox" id="treeCheckBox03"><span class="text txtEllipse">App.py</span></label>
                                                <button type="button" class="btn icoDirectory preview"><span class="text">미리보기</span></button>
                                                <button type="button" class="btn icoDirectory copy"><span class="text">복사</span></button>
                                            </td>
                                            <td>400MB</td>
                                            <td>2021-03-08 19:54:21</td>
                                        </tr>
                                        <tr class="subDepth open">
                                            <td>
                                                <label for="treeCheckBox04" class="inpField"><input type="checkbox" id="treeCheckBox04"><span class="text txtEllipse">App.py</span></label>
                                                <button type="button" class="btn icoDirectory preview"><span class="text">미리보기</span></button>
                                                <button type="button" class="btn icoDirectory copy"><span class="text">복사</span></button>
                                            </td>
                                            <td>400MB</td>
                                            <td>2021-03-08 19:54:21</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"><span class="name">홍길*</span></td>
                                            <td>2021-03-08 19:54:21</td>
                                        </tr>
                                        <tr class="subDepth">
                                            <td>
                                                <label for="treeCheckBox05" class="inpField"><input type="checkbox" id="treeCheckBox05"><span class="text txtEllipse">App.py</span></label>
                                                <button type="button" class="btn icoDirectory preview"><span class="text">미리보기</span></button>
                                                <button type="button" class="btn icoDirectory copy"><span class="text">복사</span></button>
                                            </td>
                                            <td>400MB</td>
                                            <td>2021-03-08 19:54:21</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <div class="sorceViewWrap">
                                <!-- 실제 개발시 style을 제거 해주세요. -->
                                <div class="sorceView" style="background: #f1f1f1; height: 1000px;"></div>
                            </div>
                        </div>
                    </div>        
                    <!-- 210427 목록 버튼 추가 -->            
                    <div class="btnArea mgT10 txtRight rowBoxBtnArea">
                        <router-link to="/catalog/list" tag="button" class="btn l cGreen w100px"><span class="text">목록</span></router-link>
                    </div>
                </div> 
                <!-- 시뮬레이터 -->
                <div v-if="tabShow[3].active" class="tabContainer">
                    <div class="treeTable type02">
                        <div>
                            <div class="treeHeader">
                                <span class="tit">Request</span>
                            </div>
                            <div class="inpTableListWrap">
                                <div class="inpTableList" style="height: 490px;">                                    
                                    <table class="inpTable">
                                        <colgroup>
                                            <col>
                                            <col>
                                            <col style="width: 150px;">
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td class="order">input1</td>
                                                <td>
                                                    <input type="text" class="inp l w100p" placeholder="입력하세요" />
                                                </td>
                                                <td>첫번째 컬럼 데이터</td>
                                            </tr>
                                            <tr>
                                                <td class="order">input2</td>
                                                <td>
                                                    <input type="text" class="inp l w100p" placeholder="입력하세요" />
                                                </td>
                                                <td>두번째 컬럼 데이터</td>
                                            </tr>
                                            <tr>
                                                <td class="order">input3</td>
                                                <td>
                                                    <input type="text" class="inp l w100p" placeholder="입력하세요" />
                                                </td>
                                                <td>세번째 컬럼 데이터</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="sorceViewTitWrap flexBox justifyContent">
                                <span class="tit">Response</span>
                            </div>
                            <div class="sorceViewWrap">                                    
                                <!-- 실제 개발시 style을 제거 해주세요. -->
                                <div class="sorceView" style="background: #f1f1f1; height: 1000px;"></div>
                            </div>
                        </div>
                    </div>           
                    <!-- 210427 목록 버튼 추가 -->         
                    <div class="btnArea mgT10 txtRight rowBoxBtnArea">
                        <button type="button" class="btn l cGreen">시뮬레이터 실행</button>
                        <router-link to="/catalog/list" tag="button" class="btn l cGreen w100px"><span class="text">목록</span></router-link>
                    </div>
                </div>            
            </div>
        </div>
        <div class="unitBox">
            <div class="commentWrap">
                <div class="commentTitWrap">
                    <span class="tit">댓글 (11)</span>
                </div>
                <div class="commentWriteWrap">
                    <textarea class="inp" placeholder="AIDU 학습서에 대한 다양한 의견을 나누세요."></textarea>
                    <button class="btn cGreen comAddBtn" @click="fnOpen('modal-2')">등록</button>
                </div>
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
                            <span class="content">유익한 글 잘 봤습니다.   추후 2020년까지의 데이터로 주기성을 띄는 데이터를 확보한 뒤 이를 예측에 활용하면 더 의미있는 결과를 얻을 수 있을 것으로 보입니다.</span>
                        </div>
                    </div>
                    <div class="btnArea">
                        <!-- 210429 버튼 클래스 m에서 s로 변경 -->
                        <button type="button" class="btn s cWhiteGreen"><span class="text">답글</span></button>
                    </div>
                    <!-- 210429 댓글 수정 / 삭제 버튼 추가 -->
                    <div class="commentInfoBtnArea">
                        <button type="button" class="commentInfoBtn">
                            <span class="hiddenTxt">댓글 수정/삭제 버튼</span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </button>
                        <!-- show 클래스 추가시 나타납니다. -->
                        <div class="editRemoveWrap">
                            <button type="button">수정</button>
                            <button type="button">삭제</button>
                        </div>
                    </div>
                </div>
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
                            <span class="content">온도, 습도와 같이 계절성이 좀 더 짙은 데이터에서는 Prophet의 예측이 많이 빗나가 보입니다. <br>Prophet 모델을 만들 때 yearly_seasonality로 연주기성을 부여했으나, 1년이 되지 않는 데이터를 입력했기 때문으로 보여집니다.<br>이 점을 개선한다면 좋을 것 같습니다.</span>
                        </div>
                    </div>
                    <div class="btnArea">
                        <button type="button" class="btn s cWhiteGreen"><span class="text">답글</span></button>
                    </div>
                    <!-- 210429 댓글 수정 / 삭제 버튼 추가 -->
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
                <!-- 210429 댓글의 댓글 영역 추가 -->
                <!-- show 클래스를 넣으면 나타납니다. -->
                <div class="commentConWrap recomment writeWrap show">
                    <div class="userImgBox">
                        <img :src="require(`@/assets/images/ico_user_type02.png`)" alt="유저 이미지">
                    </div>                    
                    <div class="commentWriteWrap">
                        <textarea class="inp" placeholder="AIDU 학습서에 대한 다양한 의견을 나누세요."></textarea>
                        <div class="btnArea">
                            <button type="button" class="btn cGreen comAddBtn" @click="fnOpen('modal-2')">등록</button>
                            <button type="button" class="btn textBtn s underLine cancelBtn"><span class="text">취소</span></button>
                        </div>
                    </div>
                </div>
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
                </div>
            </div>
        </div>
        <!-- 복사 알럿/컨펌 팝업 -->
        <div class="layerModalWrap" v-if="modalShow === 'modal-1'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">프로젝트를 선택해주세요</p>
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
        modalShow: '',
        tabShow: [
            {
                active: true
            },{
                active: false
            },{
                active: false
            },{
                active: false
            }
        ], 
        tabActvie: [
            {
                active: true
            },{
                active: false
            },{
                active: false
            },{
                active: false
            }
        ]
    }),
    methods: {        
        fnTab(active, show) {// eslint-disable-line no-unused-vars
            this.tabActvie.map(tabActvie => tabActvie.active = false);        
            this.tabShow.map(tabShow => tabShow.active = false);
            active.active = true;
            show.active = true;
        },
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
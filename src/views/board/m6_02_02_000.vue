<template>
    <div class="rowBox">
        <div class="unitBox">
            <div class="locationWrap">
                <ul class="location">
                    <li><a href="javascript:void(0)">Q&A</a></li>
                    <li><a href="javascript:void(0)">상세</a></li>
                </ul>
            </div>
        </div>
        <div class="unitBox">                        
            <div class="titArea">
                <h2 class="tit l">Q&A<em>AIDU 사용과 관련한 문의사항을 남겨주세요.</em></h2>
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
                            <th scope="row">제목</th>
                            <td colspan="3">공지사항</td>
                        </tr>
                        <tr>
                            <th scope="row">작성자</th>
                            <td >홍길동</td>
                            <th scope="row">작성일</th>
                            <td >2021-02-27</td>
                        </tr>
                        <tr>
                            <th scope="row">첨부파일</th>
                            <td>Sample.zip<em class="pColor02">(123 kb)</em></td>
                            <th scope="row">조회수</th>
                            <td >93</td>
                        </tr>
                    </tbody>
                </table>
                <div class="contentTxtWrap">
                    <div class="contentTxtBox">
                        <span class="contentTxt"></span>
                    </div>
                </div>
                <div class="btnArea mgT10 txtRight rowBoxBtnArea">
                    <router-link tag="button" to="/board/qna/edit" class="btn l cGrayGreen w100px"><span class="text">수정</span></router-link>
                    <button type="button" class="btn l cGrayGreen w100px" @click="fnOpen('modal-1')"><span class="text">삭제</span></button>
                    <button type="button" class="btn l cGrayGreen w100px"><span class="text">답글</span></button>
                    <router-link tag="button" to="/board/qna/list" class="btn l cGreen w100px"><span class="text">목록</span></router-link>
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
                        <button type="button" class="btn m cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button>
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
<template>
    <div class="rowBox">
        <div class="unitBox">
            <div class="locationWrap">
                <ul class="location">
                    <li><a href="javascript:void(0)">공지사항</a></li>
                    <li><a href="javascript:void(0)">상세</a></li>
                </ul>
            </div>
        </div>
        <div class="unitBox">                        
            <div class="titArea">
                <h2 class="tit l">공지사항<em>AIDU 관련 공지사항을 알려드립니다.</em></h2>
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
                <div class="btnArea mgT10 txtRight">
                    <router-link tag="button" to="/board/notice/list" class="btn l cGreen w100px"><span class="text">목록</span></router-link>
                </div>
            </div>
        </div>
        <div class="unitBox mgT70">
            <div class="commentWrap">
                <div class="commentTitWrap">
                    <span class="tit">댓글(11)</span>
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
                        <button type="button" class="btn m cWhiteGreen"><span class="text">답글</span></button>
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
                        <button type="button" class="btn m cWhiteGreen"><span class="text">답글</span></button>
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
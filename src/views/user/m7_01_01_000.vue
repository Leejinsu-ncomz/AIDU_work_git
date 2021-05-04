<template>
    <div class="userWrap join detail">
        <div class="cntBox">
            <div class="unitGroup">
                <dl class="unit flexBox">
                    <dt class="imgBox w50p">
                        <img :src="require(`@/assets/images/ico_user_type02.png`)" alt="유저 이미지">
                    </dt>
                    <dt class="infoBox w50p">
                        <span class="tit">계정관리</span>
                        <span class="manageBox">
                            <label class="userImgChangeBox">
                                <span class="txt">프로필 사진 바꾸기</span>
                                <input type="file" class="inpImgchange">
                            </label>
                            <button class="imgDelBtn">삭제</button>
                        </span>
                    </dt>
                </dl>
            </div>
            <form>
                <div class="unitGroup mgT30">
                    <dl class="unit">
                        <dt>
                            <span class="tit">필수입력</span>
                        </dt>
                        <dd>
                            <input type="email" class="inp l w100p" disabled value="test@test.com" />
                        </dd>
                        <dd>
                            <input type="text" class="inp l w100p" disabled value="hong1" />
                        </dd>
                        <dd>
                            <input type="text" class="inp l w100p" disabled value="홍길동" />
                        </dd>
                        <dd>
                            <input type="text" class="inp l w100p" placeholder="닉네임" />
                        </dd>
                    </dl>
                    <dl class="unit">
                        <dt>
                            <span class="tit">선택 입력</span>
                        </dt>
                        <dd>
                            <input type="text" class="inp l w100p" placeholder="회사코드" />
                        </dd>
                    </dl>
                </div>
                <div class="btnArea full">
                    <button class="btn xl cGreen" @click="fnOpen('modal-1')">
                        <span class="text">정보 수정</span>
                    </button>
                </div>
                <div class="btnArea user">
                    <router-link tag="button" to="resetPassword" class="btn textBtn underLine">
                        <span class="text">비밀번호 재설정</span>
                    </router-link>
                    <router-link tag="button" to="userCitation" type="button" class="btn textBtn underLine">
                        <span class="text">AIDU 회원 탈퇴</span>
                    </router-link>
                </div>
            </form>
        </div>
        <!-- 알럿/컨펌 팝업 -->
        <div class="layerModalWrap" v-if="modalShow === 'modal-1'">                
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <!-- <p class="text txtCenter">이미 사용중인 닉네임 입니다.</p> -->
                    <p class="text txtCenter">프로필 정보 수정이 완료되었습니다.</p>
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
            modalShow: null
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
    };

</script>
<style scoped src="../../styles/user.css"></style>

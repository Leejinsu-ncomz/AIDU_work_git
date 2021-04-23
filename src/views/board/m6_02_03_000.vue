<template>
    <div class="rowBox">
        <div class="unitBox">
            <div class="locationWrap">
                <ul class="location">
                    <li><a href="javascript:void(0)">Q&A</a></li>
                    <li><a href="javascript:void(0)">등록/수정</a></li>
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
                        <col style="width: 240px" />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">제목<em class="bullet">*</em></th>
                            <td>
                                <input type="text" class="inp w100p" placeholder="제목을 입력해주세요" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">내용<em class="bullet">*</em></th>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">게시대상</th>
                            <td>
                                <label class="inpField" for="radio4">
                                <input type="radio" id="radio4" name="radio_02"/>
                                <span class="text">전체공개</span>
                                </label>
                                <label class="inpField" for="radio6">
                                <input type="radio" id="radio6" name="radio_02"/>
                                <span class="text">비공개</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">첨부파일</th>
                            <td>
                                <span class="tableFileUpWrap">
                                    <span class="fileUpload m">
                                        <input type="file" id="file2" @change="tableFileChange($event, 0)" />
                                        <label class="text" for="file2">
                                            <span class="text">파일 선택</span>
                                        </label>
                                    </span>
                                    <span class="fileName">{{ file[0].fileName }} {{ file[0].fileSize }}</span>                                        
                                    <span class="fileProBarWrap" v-if="file[0].progress">
                                        <span class="progressBar" v-bind:style="'width: ' + file[0].progressPer + '%'"></span>
                                    </span>
                                    <button type="button" class="btn round cGrayDark onlyIcon fileDelete" v-if="file[0].delBtn"><span class="text">삭제</span></button>                                    
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">작성자</th>
                            <td>
                                <input type="text" class="inp" value="홍길동" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="btnArea mgT10 txtRight rowBoxBtnArea">
                <router-link tag="button" to="/board/qna/list" class="btn l cGrayGreen w100px"><span class="text">취소</span></router-link>
                <button type="button" class="btn l cGreen w100px" @click="fnOpen('modal-1')"><span class="text">등록</span></button>
            </div>
        </div>        
        <!-- 등록 알럿/컨펌 팝업 -->
        <div class="layerModalWrap" v-if="modalShow === 'modal-1'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">제목/내용을 입력해주세요.<!-- 유형을 선택해주세요. --></p>
                    <!-- <p class="text txtCenter">Q&A를 등록하시겠습니까?</p> -->
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn m cGreen" @click="fnClose">
                            <span class="text">확인</span>
                        </button>
                        <!-- <button type="button" class="btn m cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button> -->
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
        file: [
            {
                fileName: "선택된 파일 없음",
                fileSize: "",
                progress: false,
                progressPer: 0,
                delBtn: false
            }
        ]
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
        },
        tableFileChange(e, index) {// eslint-disable-line no-unused-vars
            console.log(index)
            this.file[index].fileName = e.target.files[0].name;
            this.file[index].fileSize = '(' + e.target.files[0].size + ')';
            this.file[index].progress = true;
            
            setTimeout(() => {
                this.file[index].progressPer = 100;                
            }, 200);
            
            setTimeout(() => {
                this.file[index].progress = false;
                this.file[index].delBtn = true;
                //css로 인해 1초 지연
            }, 1200);            
        }
    }
}
</script>
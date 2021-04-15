<template>
    <div class="rowBox">
        <div class="unitBox">
            <div class="locationWrap">
                <ul class="location">
                    <li><a href="javascript:void(0)">자가학습서</a></li>
                    <li><a href="javascript:void(0)">등록/수정</a></li>
                </ul>
            </div>
        </div>
        <div class="unitBox">
            <div class="flexBox justifyContent tableButtonWrap">
                <div class="btnArea">
                    <button type="button" class="btn textBtn hasIcon temporarySave" style="padding-left: 0px;" @click="fnOpen('modal-1')"><span class="text">임시저장</span></button>
                </div>
                <div class="btnArea">
                    <button type="button" class="btn textBtn hasIcon cancel"><span class="text">취소</span></button>
                    <button type="button" class="btn textBtn hasIcon enrollment" @click="fnOpen('modal-2')"><span class="text">등록</span></button>
                </div>
            </div>
            <div class="rowTable">
                <table>
                    <colgroup>
                        <col style="width: 240px" />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">유형<em class="bullet">*</em></th>
                            <td>
                                <select class="inp">
                                    <option selected hidden>선택하세요</option>
                                    <option>Clustering(군집)</option>
                                    <option>Anomaly detection(이상탐지)</option>
                                    <option>Classification(분류)</option>
                                    <option>Optimization(최적화)</option>
                                    <option>Recommendation(추천)</option>
                                    <option>Regression(회귀)</option>
                                    <option>Text Analysis(텍스트 분석)</option>
                                    <option>Etc.(기타)</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">개발도구</th>
                            <td>
                                <label class="inpField" for="radio1">
                                <input type="radio" id="radio1" name="radio_01"/>
                                <span class="text">AIDU Jupyter</span>
                                </label>
                                <label class="inpField" for="radio2">
                                <input type="radio" id="radio2" name="radio_01"/>
                                <span class="text">AIDu ez</span>
                                </label>
                                <label class="inpField" for="radio3">
                                <input type="radio" id="radio3" name="radio_01"/>
                                <span class="text">외부참조모델</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">제목</th>
                            <td>
                                <input type="text" class="inp w100p" placeholder="제목을 입력해주세요" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">썸네일</th>
                            <td>
                                <span class="inpGroup">
                                    <input
                                    type="text"
                                    class="inp m"
                                    placeholder="파일을 선택해주세요."
                                    v-bind:value="fileName"
                                    />
                                    <span class="fileUpload m">
                                        <input type="file" id="file" @change="tableFileChange" />
                                        <label class="text" for="file">
                                            <span class="text">파일 선택</span>
                                        </label>
                                    </span>
                                    <span class="fileName">
                                        <span v-if="!fileListWrap">선택된 파일 없음</span>
                                        <span v-if="fileListWrap">{{ fileName }}{{ fileSize }}</span>
                                    </span>
                                    <!-- <span class="fileProBarWrap">
                                        <span class="progressBar" v-bind:style="'width: ' + progressPer + '%'"></span>
                                    </span> -->
                                </span>
                                <span class="tableFileList" v-if="fileListWrap">
                                    <ul>
                                        <li>
                                            <i class="fileIcon"><div class="hiddenTxt">파일아이콘</div></i>
                                            <span class="fileName">{{ fileName }}{{ fileSize }}</span>
                                            <button class="fileDelBtn"><span class="hiddenTxt">파일 삭제 아이콘</span></button>
                                        </li>
                                    </ul>
                                </span>
                                <span class="fileAlertTxt">※ 썸네일 이미지 미등록시, 모델 유형에 따른 기본이미지가 표기되며, 이미지 파일만 등록 가능합니다.</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">첨부파일</th>
                            <td>
                                <span class="inpGroup">
                                    <input
                                    type="text"
                                    class="inp m"
                                    placeholder="파일을 선택해주세요."
                                    v-bind:value="fileName2"
                                    />
                                    <span class="fileUpload m">
                                        <input type="file" id="file2" @change="tableFileChange2" />
                                        <label class="text" for="file2">
                                            <span class="text">파일 선택</span>
                                        </label>
                                    </span>
                                    <span class="fileName">
                                        <span v-if="!fileListWrap2">선택된 파일 없음</span>
                                        <span v-if="fileListWrap2">{{ fileName2 }}{{ fileSize2 }}</span>
                                    </span>
                                    <span class="fileProBarWrap">
                                        <span class="progressBar" v-bind:style="'width: ' + progressPer2 + '%'"></span>
                                    </span>
                                </span>
                                <span class="tableFileList" v-if="fileListWrap2">
                                    <ul>
                                        <li>
                                            <i class="fileIcon"><div class="hiddenTxt">파일아이콘</div></i>
                                            <span class="fileName">{{ fileName2 }}{{ fileSize2 }}</span>
                                            <button class="fileDelBtn"><span class="hiddenTxt">파일 삭제 아이콘</span></button>
                                        </li>
                                    </ul>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">해시태그</th>
                            <td>
                                <input type="text" class="inp w100p" placeholder="#해시태그를 입력해주세요" />
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
                                <label class="inpField" for="radio5">
                                <input type="radio" id="radio5" name="radio_02"/>
                                <span class="text">소속 공개</span>
                                </label>
                                <label class="inpField" for="radio6">
                                <input type="radio" id="radio6" name="radio_02"/>
                                <span class="text">비공개</span>
                                </label>
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
        </div> 
        <!-- 임시저장 알럿/컨펌 팝업 -->
        <div class="layerModalWrap" v-if="modalShow === 'modal-1'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">현재 내용을 임시저장 하시겠습니까?</p>
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
        <!-- 등록 알럿/컨펌 팝업 -->
        <div class="layerModalWrap" v-if="modalShow === 'modal-2'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">개발도구/제목/내용을 등록해주세요.<!-- 유형을 선택해주세요. --></p>
                    <!-- <p class="text txtCenter">자가학습서를 등록하시겠습니까?</p> -->
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
        fileName: "",
        fileName2: "",
        fileSize: "",
        fileSize2: "",
        fileListWrap: false,
        fileListWrap2: false,
        progressPer: 0,
        list: [{}]
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
        tableFileChange(e) {
            this.fileListWrap = true;
            this.progressPer = 100;
            this.fileName = e.target.files[0].name; 
            this.fileSize = '(' + e.target.files[0].size + ')';
        },
        tableFileChange2(e) {
            this.fileListWrap2 = true;
            this.progressPer2 = 100;
            this.fileName2 = e.target.files[0].name; 
            this.fileSize2= '(' + e.target.files[0].size + ')';
        }
    }
}
</script>
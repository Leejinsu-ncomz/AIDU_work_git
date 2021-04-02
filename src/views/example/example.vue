<template>
    <div class="rowBox">
        <div class="unitBox">
            <label class="inpField">
                <input type="checkbox"/>
                <span class="text">checkbox</span>
            </label>
            <label class="inpField">
                <input type="checkbox" checked/>
                <span class="text">checkbox</span>
            </label>
            <label class="inpField">
                <input type="checkbox" disabled/>
                <span class="text">checkbox</span>
            </label>
            <label class="inpField">
                <input type="checkbox" checked disabled/>
                <span class="text">checkbox</span>
            </label>
            <label class="inpField inpOnly">
                <input type="checkbox" disabled/>
                <span class="text">checkbox</span>
            </label>

            <br>

            <label class="inpField">
                <input type="radio"/>
                <span class="text">radio</span>
            </label>
            <label class="inpField">
                <input type="radio" checked/>
                <span class="text">radio</span>
            </label>
            <label class="inpField">
                <input type="radio" disabled/>
                <span class="text">radio</span>
            </label>
            <label class="inpField">
                <input type="radio" checked disabled/>
                <span class="text">radio</span>
            </label>
            <label class="inpField inpOnly">
                <input type="radio" disabled/>
                <span class="text">radio</span>
            </label>

            <br>

            <div>
                <button type="button" class="btn xs">
                    <span class="text">button</span>
                </button>
                <button type="button" class="btn s">
                    <span class="text">button</span>
                </button>
                <button type="button" class="btn m">
                    <span class="text">button</span>
                </button>
                <button type="button" class="btn l">
                    <span class="text">button</span>
                </button>
                <button type="button" class="btn xl">
                    <span class="text">button</span>
                </button>
            </div>

            <div>
                <button type="button" class="btn xs round">
                    <span class="text">button</span>
                </button>
                <button type="button" class="btn s round">
                    <span class="text">button</span>
                </button>
                <button type="button" class="btn m round">
                    <span class="text">button</span>
                </button>
                <button type="button" class="btn l round">
                    <span class="text">button</span>
                </button>
                <button type="button" class="btn xl round">
                    <span class="text">button</span>
                </button>
            </div>
                 
            <div>
                <button type="button" class="btn m round cGreenGray">
                    <span class="text">cGreenGray</span>
                </button>
                <button type="button" class="btn m round cWhiteGreen">
                    <span class="text">cWhiteGreen</span>
                </button>
                <button type="button" class="btn m round cGrayWhite">
                    <span class="text">cGrayWhite</span>
                </button>
                <button type="button" class="btn m round cGrayDark">
                    <span class="text">cGrayDark</span>
                </button>
                <button type="button" class="btn m round cGrayBlue">
                    <span class="text">cGrayBlue</span>
                </button>
                <button type="button" class="btn m round cBlue">
                    <span class="text">cBlue</span>
                </button>
                <button type="button" class="btn m round cAqua">
                    <span class="text">cAqua</span>
                </button>
                <button type="button" class="btn m round cGreen">
                    <span class="text">cGreen</span>
                </button>
                <button type="button" class="btn m round cGrayGreen">
                    <span class="text">cGrayGreen</span>
                </button>
            </div>

            <div class="unitBox">
                <div class="titArea">
                    <div class="tit">데이터 관리<em>PC에 있는 데이터를 분석을 위해 업로드 할 수 있습니다.</em></div>
                    <div class="" ></div>
                </div><!--// titArea-->
                <div class="tpArea">
                    <span class="tit pColor01">my_project/data/</span>
                    <div class="btnArea">
                        <button type="button">
                            <span class="text"></span>
                        </button>
                    </div>
                </div><!--// tpArea-->
                <div class="listTable">
                    <table>
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">NO.</th>
                                <th scope="col">이름</th>
                                <th scope="col">이메일</th>
                                <th scope="col">등록일</th>
                                <th scope="col">관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td class="txtLeft">name</td>
                                <td>xxxx@ncomz.com</td>
                                <td>YYYY-MM-DD</td>
                                <td>
                                    <button type="button">
                                        <span class="text">삭제</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td class="txtLeft">name</td>
                                <td>xxxx@ncomz.com</td>
                                <td>YYYY-MM-DD</td>
                                <td>
                                    <button type="button">
                                        <span class="text">삭제</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td class="txtLeft">name</td>
                                <td>xxxx@ncomz.com</td>
                                <td>YYYY-MM-DD</td>
                                <td>
                                    <button type="button">
                                        <span class="text">삭제</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="rowTable">
                    <table>
                        <colgroup>
                            <col style="width:240px;"/>
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">등록 구분</th>
                                <td>
                                    <label class="inpField" for="chk1">
                                        <input type="checkbox" id="chk1" name="chk"/>
                                        <span class="text">신규</span>
                                    </label>
                                    <label class="inpField" for="chk2">
                                        <input type="checkbox" id="chk2" name="chk" checked/>
                                        <span class="text">버전업</span>
                                    </label>
                                    <label class="inpField" for="chk3">
                                        <input type="checkbox" id="chk3" name="chk"/>
                                        <span class="text">checkbox</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">모델 버전</th>
                                <td>
                                    <label class="inpField" for="rdo1">
                                        <input type="radio" id="rdo1" name="rdo"/>
                                        <span class="text">신규</span>
                                    </label>
                                    <label class="inpField" for="rdo2">
                                        <input type="radio" id="rdo2" name="rdo" checked/>
                                        <span class="text">버전업</span>
                                    </label>
                                    <label class="inpField" for="rdo3">
                                        <input type="radio" id="rdo3" name="rdo"/>
                                        <span class="text">radio</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">변경 이력</th>
                                <td>
                                    <textarea class="inp" placeholder="textarea"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">모델명<em class="bullet">*</em></th>
                                <td>
                                    <input type="text" class="inp" placeholder="text"/>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">유형</th>
                                <td>
                                    <select class="inp">
                                        <option>asdsadasd</option>
                                        <option>asdsadasd</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">개발 도구</th>
                                <td>
                                    <input type="text" class="inp" placeholder="text"/>
                                    <button type="button" class="btn m cWhiteGreen">
                                        <span class="text">등록</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">모델 설명</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">썸네일</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">해시 태그</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">모델 사용법</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">게시 대상</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">시뮬레이터 구성</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">프로젝트 오너</th>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>   
            <div class="btnArea">
                <button type="button" class="btn m cBlue" v-for="(button, index) in buttons" :key="index" v-bind="button" @click="fnOpen(button.id)">
                    <span class="text">{{ button.name }}</span>
                </button>
            </div>
        </div>
        <!-- 프로젝트 생성/수정 팝업-->
        <div class="layerModalWrap" v-if="modalShow === 'modal-1'" >
            <div class="layerModal">
                <div class="modalHeader">
                    <strong>프로젝트 생성/수정</strong>
                </div>
                <div class="modalCnt">
                    <form>
                        <div class="unitGroup">
                            <dl class="unit">
                                <dt>프로젝트 명<em class="bullet">*</em></dt>
                                <dd>
                                    <input type="text" class="inp w100p"/>
                                </dd>
                            </dl>
                            <dl class="unit">
                                <dt>프로젝트 설명</dt>
                                <dd>
                                    <textarea class="inp" style="height:170px;" placeholder="언제 어디서나 AIDU를 통해 AI 모델을 만들어보세요."></textarea>
                                </dd>
                            </dl>
                            <dl class="unit">
                                <dt>프로젝트 오너</dt>
                                <dd>
                                    <input type="text" class="inp w100p" value="홍길동" disabled/>
                                </dd>
                            </dl>
                        </div>
                    </form>
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn xl cGreen">
                            <span class="text">확인</span>
                        </button>
                        <button type="button" class="btn xl cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 프로젝트 멤버 추가 type01 팝업-->
        <div class="layerModalWrap" v-if="modalShow === 'modal-2'" >
            <div class="layerModal">
                <div class="modalHeader">
                    <strong>프로젝트 맴버 추가</strong>
                </div>
                <div class="modalCnt">
                    <div class="searchArea">
                        <input type="text" class="inp l" placeholder="이름과 이메일 주소로 검색하세요."/>
                        <div class="btnArea">
                            <button type="button" class="btn l cAqua iconOnly refresh">
                                <span class="text">새로고침</span>
                            </button>
                            <button type="button" class="btn l cBlue iconOnly search">
                                <span class="text">검색</span>
                            </button>
                        </div>
                    </div>
                    <div class="listTable">
                        <table>
                            <colgroup>
                                <col style="width:40px;"/>
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <label class="inpField inpOnly">
                                            <input type="checkbox"/>
                                            <span class="text">checkbox All</span>
                                        </label>
                                    </th>
                                    <th scope="col">소속</th>
                                    <th scope="col">이름</th>
                                    <th scope="col">이메일</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label class="inpField inpOnly">
                                            <input type="checkbox"/>
                                            <span class="text">row checkbox</span>
                                        </label>
                                    </td>
                                    <td>KT</td>
                                    <td>홍길동</td>
                                    <td>test@kt.com</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="inpField inpOnly">
                                            <input type="checkbox" checked/>
                                            <span class="text">row checkbox</span>
                                        </label>
                                    </td>
                                    <td>KT</td>
                                    <td>홍길동</td>
                                    <td>test@kt.com</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="inpField inpOnly">
                                            <input type="checkbox" disabled/>
                                            <span class="text">row checkbox</span>
                                        </label>
                                    </td>
                                    <td>KT</td>
                                    <td>홍길동</td>
                                    <td>test@kt.com</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="inpField inpOnly">
                                            <input type="checkbox"/>
                                            <span class="text">row checkbox</span>
                                        </label>
                                    </td>
                                    <td>KT</td>
                                    <td>홍길동</td>
                                    <td>test@kt.com</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="inpField inpOnly">
                                            <input type="checkbox"/>
                                            <span class="text">row checkbox</span>
                                        </label>
                                    </td>
                                    <td>KT</td>
                                    <td>홍길동</td>
                                    <td>test@kt.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="pagingWrap">
                        <ul class="paging">
                            <li class="prev">
                                <button type="button">
                                    <span class="hiddenTxt">prev</span>
                                </button>
                            </li>
                            <li class="active">
                                <a href="javascript:void(0);">1</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">2</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">3</a>
                            </li>
                            <li class="next">
                                <button type="button">
                                    <span class="hiddenTxt">next</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn xl cGreen">
                            <span class="text">등록</span>
                        </button>
                        <button type="button" class="btn xl cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 프로젝트 멤버 추가 type02 팝업-->
        <div class="layerModalWrap" v-if="modalShow === 'modal-3'">
            <div class="layerModal">
                <div class="modalHeader">
                    <strong>프로젝트 맴버 추가</strong>
                </div>
                <div class="modalCnt">
                    <div class="inpGroup">
                        <input type="text" class="inp l" placeholder="이메일 주소를 정확히 입력하세요."/>
                        <div class="btnArea">
                            <button type="button" class="btn l cWhiteGreen">
                                <span class="text">추가</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn xl cGrayGreen" @click="fnClose">
                            <span class="text">닫기</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- PC파일 업로드 팝업-->
        <div class="layerModalWrap" v-if="modalShow === 'modal-4'">
            <div class="layerModal">
                <div class="modalHeader">
                    <strong>PC파일 업로드</strong>
                </div>
                <div class="modalCnt">
                    <p class="text">AIDU 시스템에 업로드 하는 파일의 개인정보는 모두 제거되어야 하며, 개인정보 이슈로 인한 책임은 업로드 한 본인에게 있습니다.</p>
                    <img class="infoImg" src="@/assets/images/img_fileUpload.jpg" alt ="PC파일 업로드 이미지"/>
                    <div class="inpGroup">
                        <input type="text" class="inp l" placeholder="이메일 주소를 정확히 입력하세요."/>
                        <div class="btnArea">
                            <button type="button" class="btn l cWhiteGreen">
                                <span class="text">추가</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn xl cGrayGreen" @click="fnClose">
                            <span class="text">닫기</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

         <!-- 데이터 카탈로그 팝업-->
        <div class="layerModalWrap rowFull" v-if="modalShow === 'modal-5'">
            <div class="layerModal">
                <div class="modalHeader">
                    <strong>데이터 카탈로그</strong>
                    <div class="searchArea">
                        <input type="text" class="inp l" placeholder="검색어를 입력하세요."/>
                        <div class="btnArea">
                            <button type="button" class="btn l cBlue iconOnly search">
                                <span class="text">검색</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modalCnt">
                    <div class="treeTable">
                        <div>
                            <div class="tree"></div>
                            </div>
                        <div>
                            <div class="listTable">
                                <table>
                                    <colgroup>
                                        <col style="width:40px;"/>
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <label class="inpField inpOnly">
                                                    <input type="checkbox" />
                                                    <span class="text">checkbox all</span>
                                                </label>
                                            </th>
                                            <th scope="col">포맷</th>
                                            <th scope="col">데이터명</th>
                                            <th scope="col">사이즈</th>
                                            <th scope="col">다운로드</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label class="inpField inpOnly">
                                                    <input type="checkbox" />
                                                    <span class="text">checkbox</span>
                                                </label>
                                            </td>
                                            <td>CSV</td>
                                            <td>2020년 주요생필품 가격동향</td>
                                            <td>4.3mb</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label class="inpField inpOnly">
                                                    <input type="checkbox" />
                                                    <span class="text">checkbox</span>
                                                </label>
                                            </td>
                                            <td>CSV</td>
                                            <td>2020년 주요생필품 가격동향</td>
                                            <td>4.3mb</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label class="inpField inpOnly">
                                                    <input type="checkbox" />
                                                    <span class="text">checkbox</span>
                                                </label>
                                            </td>
                                            <td>CSV</td>
                                            <td>2020년 주요생필품 가격동향</td>
                                            <td>4.3mb</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label class="inpField inpOnly">
                                                    <input type="checkbox" />
                                                    <span class="text">checkbox</span>
                                                </label>
                                            </td>
                                            <td>CSV</td>
                                            <td>2020년 주요생필품 가격동향</td>
                                            <td>4.3mb</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label class="inpField inpOnly">
                                                    <input type="checkbox" />
                                                    <span class="text">checkbox</span>
                                                </label>
                                            </td>
                                            <td>CSV</td>
                                            <td>2020년 주요생필품 가격동향</td>
                                            <td>4.3mb</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label class="inpField inpOnly">
                                                    <input type="checkbox" />
                                                    <span class="text">checkbox</span>
                                                </label>
                                            </td>
                                            <td>CSV</td>
                                            <td>2020년 주요생필품 가격동향</td>
                                            <td>4.3mb</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label class="inpField inpOnly">
                                                    <input type="checkbox" />
                                                    <span class="text">checkbox</span>
                                                </label>
                                            </td>
                                            <td>CSV</td>
                                            <td>2020년 주요생필품 가격동향</td>
                                            <td>4.3mb</td>
                                            <td>10</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="pagingWrap">
                                <ul class="paging">
                                    <li class="prev">
                                        <button type="button">
                                            <span class="hiddenTxt">prev</span>
                                        </button>
                                    </li>
                                    <li class="active">
                                        <a href="javascript:void(0);">1</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">2</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">3</a>
                                    </li>
                                    <li class="next">
                                        <button type="button">
                                            <span class="hiddenTxt">next</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modalFooter">
                    <div class="btnArea mW">
                        <button type="button" class="btn xl cGreen">
                            <span class="text">가져오기</span>
                        </button>
                        <button type="button" class="btn xl cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    modalShow: false,
    buttons : [
        {
            name : '프로젝트 생성/수정',
            id : 'modal-1'
        },{
            name : '프로젝트 멤버 추가',
            id : 'modal-2'
        },{
            name : '프로젝트 멤버 추가',
            id : 'modal-3'
        },{
            name : 'PC파일 업로드',
            id : 'modal-4'
        },{
            name : '데이터 카탈로그',
            id : 'modal-5'
        },{
            name : '시뮬레이터 구성 정보 등록',
            id : 'modal-6'
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
        }
    }
};
</script>

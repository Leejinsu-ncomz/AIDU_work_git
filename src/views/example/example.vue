<template>
    <div class="rowBox">
        <div class="unitBox mgT30">
            <div class="rowTable">
                <table>
                    <colgroup>
                        <col style="width:240px;"/>
                        <col/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">checkbox</th>
                            <td>
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
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">radio</th>
                            <td>
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
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">button size</th>
                            <td>
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
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">button round & color</th>
                            <td>
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
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">text button</th>
                            <td>
                                <button type="button" class="btn textBtn">
                                    <span class="text">text button</span>
                                </button>
                                <button type="button" class="btn textBtn">
                                    <span class="text">text button</span>
                                </button>
                                <button type="button" class="btn textBtn">
                                    <span class="text">text button</span>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">text button hasIcon</th>
                            <td>                                
                                <button type="button" class="btn textBtn hasIcon add">
                                    <span class="text">add</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon file">
                                    <span class="text">file</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon upload">
                                    <span class="text">upload</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon refresh">
                                    <span class="text">refresh</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon folder">
                                    <span class="text">folder</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon delete">
                                    <span class="text">delete</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon code">
                                    <span class="text">code</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon sourceEdit">
                                    <span class="text">sourceEdit</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon sourceSave">
                                    <span class="text">sourceSave</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon sourceCopy">
                                    <span class="text">sourceCopy</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon state">
                                    <span class="text">state</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon newLearn">
                                    <span class="text">newLearn</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon enrollment">
                                    <span class="text">enrollment</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon temporarySave">
                                    <span class="text">temporarySave</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon cancel">
                                    <span class="text">cancel</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon list">
                                    <span class="text">list</span>
                                </button>
                                <button type="button" class="btn textBtn hasIcon redo">
                                    <span class="text">redo</span>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">directory icon</th>
                            <td>
                                <button type="button" class="btn icoDirectory edit">
                                    <span class="text">이름 바꾸기</span>
                                </button>
                                <button type="button" class="btn icoDirectory delete">
                                    <span class="text">삭제</span>
                                </button>
                                <button type="button" class="btn icoDirectory download">
                                    <span class="text">다운로드</span>
                                </button>
                                <button type="button" class="btn icoDirectory preview">
                                    <span class="text">미리보기</span>
                                </button>
                                <button type="button" class="btn icoDirectory makeChart">
                                    <span class="text">데이터 시각화</span>
                                </button>
                                <button type="button" class="btn icoDirectory makeCode">
                                    <span class="text">코드생성</span>
                                </button>
                                <button type="button" class="btn icoDirectory copy">
                                    <span class="text">복사?</span>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">DatePicker</th>
                            <td><date-picker/></td>
                        </tr>
                        <tr>
                            <th scope="row">DatePicker from to</th>
                            <td>
                                <date-picker :date="from" @input="fromDate"/>
                                ~
                                <date-picker :date="to" @input="toDate"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="unitBox mgT30">
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
        </div>

        <div class="unitBox mgT30">

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

        <div class="btnArea mgT30"><!--popup call example button-->
            <button type="button" class="btn m cBlue" v-for="(button, index) in buttons" :key="index" v-bind="button" @click="fnOpen(button.id)">
                <span class="text">{{ button.name }}</span>
            </button>
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
                                <dt>
                                    <span class="tit">프로젝트 명<em class="bullet">*</em></span>
                                </dt>
                                <dd>
                                    <input type="text" class="inp w100p"/>
                                </dd>
                            </dl>
                            <dl class="unit">
                                <dt>
                                    <span class="tit">프로젝트 설명</span>
                                </dt>
                                <dd>
                                    <textarea class="inp" style="height:170px;" placeholder="언제 어디서나 AIDU를 통해 AI 모델을 만들어보세요."></textarea>
                                </dd>
                            </dl>
                            <dl class="unit">
                                <dt>
                                    <span class="tit">프로젝트 오너</span>
                                </dt>
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
                        <input type="text" class="inp l" placeholder="파일을 선택해주세요." v-bind:value="fileName"/>
                        <div class="fileUpload">
                            <input type="file" id="file" @change="fileChange" />
                            <label class="text" for="file">
                                <span class="text">파일 선택</span>
                            </label>
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

         <!-- 데이터 카탈로그 팝업 21.04.06 추가 내용 추가-->
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
                            <button type="button" class="btn l cGreenGray" @click="subFnOpen()">
                                <span class="text">등록</span>
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
                                            <th scope="col">관리</th>
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
                                            <td>
                                                <button type="button" class="btn xs round cGrayDark">
                                                    <span class="text">수정</span>
                                                </button>
                                            </td>
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
                                            <td>
                                                <button type="button" class="btn xs round cGrayDark">
                                                    <span class="text">수정</span>
                                                </button>
                                            </td>
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
                                            <td>
                                                <button type="button" class="btn xs round cGrayWhite">
                                                    <span class="text">삭제</span>
                                                </button>
                                            </td>
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
                                            <td>
                                                <button type="button" class="btn xs round cGrayWhite">
                                                    <span class="text">삭제</span>
                                                </button>
                                            </td>
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
                                            <td>
                                                <button type="button" class="btn xs round cGrayWhite">
                                                    <span class="text">삭제</span>
                                                </button>
                                            </td>
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
                                            <td>
                                                <button type="button" class="btn xs round cGrayWhite">
                                                    <span class="text">삭제</span>
                                                </button>
                                            </td>
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
                                            <td>
                                                <button type="button" class="btn xs round cGrayWhite">
                                                    <span class="text">삭제</span>
                                                </button>
                                            </td>
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

        <!-- 데이터 카탈로그 등록 팝업 -->
        <div class="layerModalWrap rowFull" v-if="subModalShow">
            <div class="layerModal">
                <div class="modalHeader">
                    <strong>데이터 카탈로그</strong>
                </div>
                <div class="modalCnt">
                    <div class="rowTable">
                        <table>
                            <caption>데이터 카탈로그 등록</caption>
                            <colgroup>
                                <col style="width:240px;"/>
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row">카테고리<em class="bullet">*</em></th>
                                    <td>
                                        <select class="inp" style="min-width:340px;">
                                            <option>추가</option>
                                        </select>
                                        <input type="text" class="inp" placeholder="KT" style="min-width:340px;" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">게시 대상<em class="bullet">*</em></th>
                                    <td>
                                        <div class="checkboxList">
                                            <ul>
                                                <li>
                                                    <label class="inpField">
                                                        <input type="checkbox" name="chk1"/>
                                                        <span class="text">전체공개</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="inpField">
                                                        <input type="checkbox" name="chk1"/>
                                                        <span class="text">기업회원 공개</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="inpField">
                                                        <input type="checkbox" name="chk1"/>
                                                        <span class="text">일반회원 공개</span>
                                                    </label>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <label class="inpField">
                                                        <input type="checkbox" name="chk2"/>
                                                        <span class="text">테넌트A</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="inpField">
                                                        <input type="checkbox" name="chk2"/>
                                                        <span class="text">테넌트B</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="inpField">
                                                        <input type="checkbox" name="chk2"/>
                                                        <span class="text">테넌트C</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="inpField">
                                                        <input type="checkbox" name="chk2"/>
                                                        <span class="text">테넌트D</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="inpField">
                                                        <input type="checkbox" name="chk2"/>
                                                        <span class="text">테넌트E</span>
                                                    </label>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <label class="inpField">
                                                        <input type="checkbox" name="chk3"/>
                                                        <span class="text">KT</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="inpField">
                                                        <input type="checkbox" name="chk3"/>
                                                        <span class="text">우리금융</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="inpField">
                                                        <input type="checkbox" name="chk3"/>
                                                        <span class="text">한양대학교</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="inpField">
                                                        <input type="checkbox" name="chk3"/>
                                                        <span class="text">kt ds</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="inpField">
                                                        <input type="checkbox" name="chk3"/>
                                                        <span class="text">현대중공</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="inpField">
                                                        <input type="checkbox" name="chk3"/>
                                                        <span class="text">카이스트</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">데이터명<em class="bullet">*</em></th>
                                    <td>                                        
                                        <input type="text" class="inp" placeholder="AI One Team 소속 회사" style="min-width:340px;" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">파일<em class="bullet">*</em></th>
                                    <td>
                                        <div class="fileUpload m">
                                            <input type="file" id="file3" multiple @change="fileMultipleChange">
                                            <label for="file3" class="text">
                                                <span class="text">파일 선택</span>
                                            </label>
                                        </div>
                                        <ul class="fileList" ref="fileList" v-if="multipleFiles">
                                            <li v-for="(li, index) in list" :key="index">{{li.text}}<button type="button" class="btn round cGrayDark onlyIcon fileDelete">
                                                    <span class="text">삭제</span>
                                                </button></li>
                                            <!-- <li v-for="index in multipleFiles" v-bind="list" :key="index">
                                                {{index}}
                                                {{list[index]}}
                                                <button type="button" class="btn round cGrayDark onlyIcon fileDelete">
                                                    <span class="text">삭제</span>
                                                </button>
                                            </li> -->
                                            <!-- <li>
                                                sample_Data.csv
                                                <button type="button" class="btn round cGrayDark onlyIcon fileDelete">
                                                    <span class="text">삭제</span>
                                                </button>
                                            </li> -->
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modalFooter">
                    <div class="btnArea mW">
                        <button type="button" class="btn xl cGreen">
                            <span class="text">등록</span>
                        </button>
                        <button type="button" class="btn xl cGrayGreen" @click="subFnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 시뮬레이터 구성 정보 등록-->
        <div class="layerModalWrap rowFull" v-if="modalShow === 'modal-6'">
            <div class="layerModal">
                <div class="modalHeader">
                    <strong>시뮬레이터 구성 정보 등록</strong>
                </div>
                <div class="modalCnt">
                    <div class="unitGroup rowGroup">
                        <dl class="unit">
                            <dt>
                                <span class="tit">등록 유형</span>
                            </dt>
                            <dd>
                                <select class="inp l">
                                    <option>전체</option>
                                </select>
                            </dd>
                        </dl>
                        <dl class="unit">
                            <dt>
                                <span class="tit">데이터 속성</span>
                            </dt>
                            <dd>
                                <select class="inp l">
                                    <option>Number</option>
                                </select>
                            </dd>
                        </dl>
                        <dl class="unit">
                            <dt>
                                <span class="tit">데이터명</span>
                            </dt>
                            <dd>
                                <input type="text" class="inp l" placeholder="데이터명"/>
                            </dd>
                        </dl>
                        <dl class="unit">
                            <dt>
                                <span class="tit">기본값</span>
                            </dt>
                            <dd>
                                <input type="text" class="inp l" placeholder="샘플 데이터"/>
                            </dd>
                        </dl>
                        <dl class="unit">
                            <dt>
                                <span class="tit">데이터 설명</span>
                            </dt>
                            <dd>
                                <input type="text" class="inp l" placeholder="데이터 설명"/>
                            </dd>
                        </dl>
                        <div class="btnArea">
                            <button type="button" class="btn l cBlue iconOnly add">
                                <span class="text">추가</span>
                            </button>
                            <!-- <button type="button" class="btn l cGrayDark iconOnly delete">
                                <span class="text">추가</span>
                            </button> -->
                        </div>
                    </div>
                    <p class="infoText">※ 콤보박스에 드롭다운 목록을 등록하시려면 기본값을 콤마(,)로 구분하여 입력해주세요.</p>
                    <div class="unitGroup mgT30">
                        <dl class="unit">
                            <dt>
                                <span class="tit">템플릿 등록</span>
                                <div>
                                    <p class="fileText pColor01 mgR20">{{fileName}}</p>
                                    <div class="fileUpload">
                                        <input type="file" id="file2" @change="fileChange" />
                                        <label class="text" for="file2">
                                            <span class="text">파일 선택</span>
                                        </label>
                                    </div>
                                </div>
                            </dt>
                            <dd>
                                <textarea class="inp" style="height:140px;" placeholder="템플릿 사용법을 적어주세요."></textarea>
                            </dd>
                        </dl>
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

import DatePicker from '@/components/DatePicker';

export default {
  name: 'App',
  data: () => ({
    modalShow: null,
    subModalShow: false,
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
    ],
    fileName : '',
    from: '',
    to: '',
    multipleFiles : false,
    list : [{

    }]
  }),
  components: {
      DatePicker
  },
  methods: {
        fnOpen: function (id) {
            this.modalShow = id;
            document.body.classList.add("modal-open");
        },
        fnClose: function () {
            this.modalShow = null;
            document.body.classList.remove("modal-open");
        },
        subFnOpen: function () {
            this.subModalShow = true;
        },
        subFnClose: function () {
            this.subModalShow = false;
        },
        fileChange(e) {
            this.fileName = e.target.files[0].name;
        },
        fileMultipleChange(e) {
            this.multipleFiles = true
            if(this.list[0].name === undefined) {
                this.list.splice(0,1);
            }
            for(let i = 0; i < e.target.files.length; i++) {
                this.list.push({
                    text : e.target.files[i].name
                })
            }
        },        
        fromDate (dt) {
            this.from = dt;
        },
        toDate (dt) {
            this.to = dt;
        },
    }
};
</script>

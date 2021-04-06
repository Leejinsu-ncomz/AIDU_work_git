<template>
    <div class="rowBox">
        <div class="unitBox">
            <div class="titArea type01">
                <h2 class="tit">나의 프로젝트</h2>
                <p class="subTit">나의 프로젝트를 생성하여 다양한 AI 사례 분석을 시작합니다.</p>
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
                    <button type="button" id="modal-1" class="btn xl round cBlue iconTxt add btnMedium" @click="fnOpen('modal-1')">
                        <i><span class="hiddenTxt">프로젝트 생성 아이콘</span></i>
                        <span class="text">프로젝트 생성</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="unitBox">
            <div class="tabWrap type01">
                <div class="tabHeader">
                    <ul>
                        <li v-bind:class="['w50p', {active: tabActvie[0].active}]" @click="fnTab(tabActvie[0], tabShow[0])"><button>내가 만든 프로젝트 (<em>4</em>)</button></li>
                        <li v-bind:class="['w50p', {active: tabActvie[1].active}]" @click="fnTab(tabActvie[1], tabShow[1])"><button>내가 참여한 프로젝트 (<em>2</em>)</button></li>
                    </ul>
                </div>
                <div v-if="tabShow[0].active" class="tabContainer">
                    <ul>
                        <li>
                            <div class="contentBox txtLeft">                                
                                <div class="titLinkWrap">
                                    <a href="javascript:void(0)" class="tit">파이썬 프로그래밍 분석</a>
                                </div>
                                <div class="description">
                                    <span class="txtEllipse">파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다 파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다 파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다</span>
                                </div>
                                <div class="linkWrap">
                                    <a href="javascript:void(0);" class="btn linkBtn s round cGreen">Jupyterlab 실행</a>
                                    <a href="javascript:void(0);" class="btn linkBtn s round cBlue">AIDU ez 실행</a>
                                </div>
                            </div>
                            <div class="editBox txtRight">
                                <div class="btnArea">
                                    <button type="button" class="btn s iconOnly edit" @click="fnOpen('modal-2')">
                                        <span class="text">수정 버튼</span>
                                    </button>
                                    <button type="button" class="btn s iconOnly listDelete" @click="fnOpen('modal-5')">
                                        <span class="text">삭제 버튼</span>
                                    </button>
                                </div>
                                <div class="dateWrap">
                                    <span class="date">Created 2021-02-20 18:22:07</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="contentBox txtLeft">
                                <div class="titLinkWrap">
                                    <a href="javascript:void(0)" class="tit">파이썬 프로그래밍 분석</a>
                                </div>
                                <div class="description">
                                    <span class="txtEllipse">파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다 파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다 파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다</span>
                                </div>
                                <div class="linkWrap">
                                    <a href="javascript:void(0);" class="btn linkBtn s round cGreen">Jupyterlab 실행</a>
                                    <a href="javascript:void(0);" class="btn linkBtn s round cBlue">AIDU ez 실행</a>
                                </div>
                            </div>
                            <div class="editBox txtRight">
                                <div class="btnArea">
                                    <button type="button" class="btn s iconOnly edit" @click="fnOpen('modal-2')">
                                        <span class="text">수정 버튼</span>
                                    </button>
                                    <button type="button" class="btn s iconOnly listDelete" @click="fnOpen('modal-5')">
                                        <span class="text">삭제 버튼</span>
                                    </button>
                                </div>
                                <div class="dateWrap">
                                    <span class="date">Created 2021-02-20 18:22:07</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="contentBox txtLeft">
                                <div class="titLinkWrap">
                                    <a href="javascript:void(0)" class="tit">파이썬 프로그래밍 분석</a>
                                </div>
                                <div class="description">
                                    <span class="txtEllipse">파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다 파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다 파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다</span>
                                </div>
                                <div class="linkWrap">
                                    <a href="javascript:void(0);" class="btn linkBtn s round cGreen">Jupyterlab 실행</a>
                                    <a href="javascript:void(0);" class="btn linkBtn s round cBlue">AIDU ez 실행</a>
                                </div>
                            </div>
                            <div class="editBox txtRight">
                                <div class="btnArea">
                                    <button type="button" class="btn s iconOnly edit" @click="fnOpen('modal-2')">
                                        <span class="text">수정 버튼</span>
                                    </button>
                                    <button type="button" class="btn s iconOnly listDelete" @click="fnOpen('modal-5')">
                                        <span class="text">삭제 버튼</span>
                                    </button>
                                </div>
                                <div class="dateWrap">
                                    <span class="date">Created 2021-02-20 18:22:07</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="contentBox txtLeft">
                                <div class="titLinkWrap">
                                    <a href="javascript:void(0)" class="tit">파이썬 프로그래밍 분석</a>
                                </div>
                                <div class="description">
                                    <span class="txtEllipse">파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다 파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다 파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다</span>
                                </div>
                                <div class="linkWrap">
                                    <a href="javascript:void(0);" class="btn linkBtn s round cGreen">Jupyterlab 실행</a>
                                    <a href="javascript:void(0);" class="btn linkBtn s round cBlue">AIDU ez 실행</a>
                                </div>
                            </div>
                            <div class="editBox txtRight">
                                <div class="btnArea">
                                    <button type="button" class="btn s iconOnly edit" @click="fnOpen('modal-2')">
                                        <span class="text">수정 버튼</span>
                                    </button>
                                    <button type="button" class="btn s iconOnly listDelete" @click="fnOpen('modal-5')">
                                        <span class="text">삭제 버튼</span>
                                    </button>
                                </div>
                                <div class="dateWrap">
                                    <span class="date">Created 2021-02-20 18:22:07</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div v-if="tabShow[1].active" class="tabContainer">
                    <ul>
                        <li>
                            <div class="contentBox txtLeft">                                
                                <div class="titLinkWrap">
                                    <a href="javascript:void(0)" class="tit">파이썬 프로그래밍 분석 (참여한)</a>
                                </div>
                                <div class="description">
                                    <span class="txtEllipse">파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다 파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다 파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다</span>
                                </div>
                                <div class="linkWrap">
                                    <a href="javascript:void(0);" class="btn linkBtn s round cGreen">Jupyterlab 실행</a>
                                    <a href="javascript:void(0);" class="btn linkBtn s round cBlue">AIDU ez 실행</a>
                                </div>
                            </div>
                            <div class="editBox txtRight">
                                <div class="btnArea">
                                    <button type="button" class="btn s iconOnly edit" @click="fnOpen('modal-2')">
                                        <span class="text">수정 버튼</span>
                                    </button>
                                    <button type="button" class="btn s iconOnly listDelete" @click="fnOpen('modal-5')">
                                        <span class="text">삭제 버튼</span>
                                    </button>
                                </div>
                                <div class="dateWrap">
                                    <span class="date">Created 2021-02-20 18:22:07</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="contentBox txtLeft">
                                <div class="titLinkWrap">
                                    <a href="javascript:void(0)" class="tit">파이썬 프로그래밍 분석 (참여한)</a>
                                </div>
                                <div class="description">
                                    <span class="txtEllipse">파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다 파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다 파이썬은 어떤 장점이 있어 사람들에게 관심을 받을까? 먼저 파이썬은 문법이 간결하고 표현 구조가 인간의 사고 체계와 닮아있다</span>
                                </div>
                                <div class="linkWrap">
                                    <a href="javascript:void(0);" class="btn linkBtn s round cGreen">Jupyterlab 실행</a>
                                    <a href="javascript:void(0);" class="btn linkBtn s round cBlue">AIDU ez 실행</a>
                                </div>
                            </div>
                            <div class="editBox txtRight">
                                <div class="btnArea">
                                    <button type="button" class="btn s iconOnly edit" @click="fnOpen('modal-2')">
                                        <span class="text">수정 버튼</span>
                                    </button>
                                    <button type="button" class="btn s iconOnly listDelete" @click="fnOpen('modal-5')">
                                        <span class="text">삭제 버튼</span>
                                    </button>
                                </div>
                                <div class="dateWrap">
                                    <span class="date">Created 2021-02-20 18:22:07</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 프로젝트 생성 팝업-->
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
                                    <input type="text" class="inp w100p"/>
                                </dd>
                            </dl>
                        </div>
                    </form>
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button id="modal-3" type="button" class="btn xl cGreen" @click="fnSecOpen('modal-3');">
                            <span class="text">확인</span>
                        </button>
                        <button type="button" class="btn xl cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- 알럿/컨펌 팝업 -->
            <div class="layerModalWrap" v-if="modalShowSecond === 'modal-3'">                
                <div class="layerModal conAlertModal">
                    <div class="modalHeader">
                        <strong class="txtCenter">확인 메세지</strong>
                    </div>
                    <div class="modalCnt">
                        <p class="text txtCenter">프로젝트 명/설명을 정확히 입력해주세요</p>
                    </div>
                    <div class="modalFooter">
                        <div class="btnArea">
                            <button type="button" class="btn m cGreen" @click="fnSecClose">
                                <span class="text">확인</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 프로젝트 수정 팝업-->
        <div class="layerModalWrap" v-if="modalShow === 'modal-2'" >
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
                        <button type="button" class="btn xl cGreen" @click="fnSecOpen('modal-3');">
                            <span class="text">확인</span>
                        </button>
                        <button type="button" class="btn xl cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- 알럿/컨펌 팝업 -->
            <div class="layerModalWrap" v-if="modalShowSecond === 'modal-3'">                
                <div class="layerModal conAlertModal">
                    <div class="modalHeader">
                        <strong class="txtCenter">확인 메세지</strong>
                    </div>
                    <div class="modalCnt">
                        <p class="text txtCenter">프로젝트 명/설명을 정확히 입력해주세요</p>
                    </div>
                    <div class="modalFooter">
                        <div class="btnArea">
                            <button type="button" class="btn m cGreen" @click="fnSecClose">
                                <span class="text">확인</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        <!-- 프로젝트 생성 개수 초과 알림 메세지 알럿/컨펌 팝업 -->             
        <div class="layerModalWrap" v-if="modalShow === 'modal-4'">                
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">새로운 프로젝트를 생성할 수 없습니다.<br>기존 프로젝트를 삭제하신 후<br>새로운 프로젝트를 생성해주세요</p>
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
        <!-- 프로젝트 삭제 알림 메세지 알럿/컨펌 팝업 -->             
        <div class="layerModalWrap" v-if="modalShow === 'modal-5'">                
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">삭제된 프로젝트는 복구되지 않습니다.<br>정말로 삭제 하시겠습니까? </p>
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
        <!-- IDE 생성 개수 초과 알림 메시지 알럿/컨펌 팝업 -->             
        <div class="layerModalWrap" v-if="modalShow === 'modal-6'">                
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">새로운 Jupyterlab/AIDU ez를 생성할 수 없습니다.<br>기존 Jupyterlab/AIDU ez 를 종료하신 후 <br>새로운 Jupyterlab/AIDU ez 를 생성해주세요</p>
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
    modalShowSecond: '',
    tabShow: [
        {
            active: true
        },{
            active: false
        }
    ], 
    tabActvie: [
        {
            active: true
        },{
            active: false
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
    fnSecOpen: function(id) {
        this.modalShowSecond = id;
    },
    fnSecClose: function () {
        this.modalShowSecond = null;
    },
    fnTab(active, show) {// eslint-disable-line no-unused-vars
        this.tabActvie.map(tabActvie => tabActvie.active = false);        
        this.tabShow.map(tabShow => tabShow.active = false);
        active.active = true;
        show.active = true;
    }
  }
}
</script>
<template>
    <div class="rowBox">
        <div class="unitBox mgT50">
            <div class="titArea">
                <h2 class="tit l">Q&A<em>AIDU 사용과 관련한 문의사항을 남겨주세요.</em></h2>
            </div>
        </div>
        <div class="unitBox flexBox justifyContent mgT40">
            <div class="listNumWrap">
                <span class="listNum">70건</span>
            </div>
            <div class="searchArea type02">
                <input type="text" placeholder="검색어를 입력하세요." class="customInp m type01">
                <div class="btnArea">
                    <button type="button" class="btn l circle cGreenGray iconOnly search"><span class="text">검색</span></button>
                </div>
            </div>
        </div>
        <div class="unitBox mgT20">
            <div class="listTable">
                <table class="tableLayoutFixed">
                    <colgroup>
                        <col style="width: 100px" />
                        <col />
                        <col style="width: 120px" />
                        <col style="width: 120px" />
                        <col style="width: 120px" />
                        <col style="width: 120px" />
                        <col style="width: 120px" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>질문 제목</th>
                            <th>답변상태</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>조회수</th>
                            <th>댓글수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>152</td>
                            <router-link tag="td" to="/board/qna/detail" style="cursor: pointer" class="txtLeft">                                
                                <span class="txtEllipse">질문 입니다.</span>
                            </router-link>
                            <td>접수</td>
                            <td>홍길*</td>
                            <td>2021-03-08</td>
                            <td>22</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>152</td>
                            <router-link tag="td" to="/board/qna/detail" style="cursor: pointer" class="txtLeft">                                
                                <span class="txtEllipse boardReTxt">RE : 질문 입니다.</span>
                            </router-link>
                            <td>접수</td>
                            <td>홍길*</td>
                            <td>2021-03-08</td>
                            <td>22</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>152</td>
                            <router-link tag="td" to="/board/qna/detail" style="cursor: pointer" class="txtLeft">                                
                                <span class="txtEllipse"><i class="lockIcon"><span class="hiddenTxt">자물쇠 아이콘</span></i>비밀글 입니다.</span>
                            </router-link>
                            <td>접수</td>
                            <td>홍길*</td>
                            <td>2021-03-08</td>
                            <td>22</td>
                            <td>22</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="btnArea mgT10 txtRight">
                <router-link tag="button" to="/board/qna/edit" class="btn l cGreen w100px"><span class="text">등록</span></router-link>
            </div>
            <div class="pagingWrap">
                <ul class="paging">
                    <li class="prev"><button type="button"><span class="hiddenTxt">prev</span></button></li>
                    <li class="active"><a href="javascript:void(0);">1</a></li><li><a href="javascript:void(0);">2</a></li>
                    <li><a href="javascript:void(0);">3</a></li>
                    <li class="next"><button type="button"><span class="hiddenTxt">next</span></button></li>
                </ul>
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
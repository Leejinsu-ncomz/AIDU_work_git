<template>
    <div class="rowBox">
        <div class="unitBox mgT50">
            <div class="titArea">
                <h2 class="tit l">자유게시판<em>AIDU 사용에 대한 자유로운 의견을 나누세요.</em></h2>
            </div>
        </div>
        <div class="unitBox flexBox justifyContent mgT40">
            <div class="listNumWrap flexBox">
                <span class="listNum">70건</span>
                <div class="btnArea">
                    <button type="button" class="btn textBtn l"><span class="text">최신순</span></button>
                    <button type="button" class="btn textBtn l"><span class="text">제목순</span></button>
                    <button type="button" class="btn textBtn l"><span class="text">인기순</span></button>
                </div>
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
                        <col style="width: 110px" />
                        <col style="width: 110px" />
                        <col style="width: 110px" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>제목</th>
                            <th>작성일</th>
                            <th>조회수</th>
                            <th>댓글수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>151</td>
                            <router-link tag="td" to="/board/free/detail" style="cursor: pointer" class="txtLeft">
                                <span class="txtEllipse">자유게시판</span>
                            </router-link>
                            <td>2021-03-08</td>
                            <td>22</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>152</td>
                            <router-link tag="td" to="/board/free/detail" style="cursor: pointer" class="txtLeft">
                                <span class="txtEllipse">자유게시판자유게시판</span>
                            </router-link>
                            <td>2021-03-08</td>
                            <td>22</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>153</td>
                            <router-link tag="td" to="/board/free/detail" style="cursor: pointer" class="txtLeft">
                                <span class="txtEllipse">자유게시판자유게시판자유게시판</span>
                            </router-link>
                            <td>2021-03-08</td>
                            <td>22</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>154</td>
                            <router-link tag="td" to="/board/free/detail" style="cursor: pointer" class="txtLeft">
                                <span class="txtEllipse">자유게시판자유게시판자유게시판자유게시판자유게시판</span>
                            </router-link>
                            <td>2021-03-08</td>
                            <td>22</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>155</td>
                            <router-link tag="td" to="/board/free/detail" style="cursor: pointer" class="txtLeft">
                                <span class="txtEllipse">자유게시판자유게시판자유게시판자유게시판자유게시판자유게시판자유게시판자유게시판자유게시판자유게시판자유게시판자유게시판자유게시판</span>
                            </router-link>
                            <td>2021-03-08</td>
                            <td>22</td>
                            <td>22</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="btnArea mgT10 txtRight">
                <router-link tag="button" to="/board/free/edit" class="btn l cGreen w100px"><span class="text">등록</span></router-link>
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
       
    })
}
</script>
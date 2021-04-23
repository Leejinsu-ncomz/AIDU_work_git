<template>
    <div class="rowBox">
        <div class="unitBox mgT50">
            <div class="titArea">
                <h2 class="tit l">공지사항<em>AIDU 관련 공지사항을 알려드립니다.</em></h2>
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
                        <col style="width: 100px" />
                        <col />
                        <col style="width: 110px" />
                        <col style="width: 110px" />
                        <col style="width: 110px" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>메인여부</th>
                            <th>제목</th>
                            <th>작성일</th>
                            <th>조회수</th>
                            <th>댓글수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button type="button" class="btn xs round cBlue"><span class="text">공시</span></button>
                            </td>
                            <td>
                                <button type="button" class="btn xs round cGreenGray"><span class="text">메인</span></button>
                            </td>
                            <router-link tag="td" to="/board/notice/detail" style="cursor: pointer" class="txtLeft">
                                <span class="txtEllipse">공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.</span>
                            </router-link>
                            <td>2021-03-08</td>
                            <td>22</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>151</td>
                            <td class="txtLeft"></td>
                            <router-link tag="td" to="/board/notice/detail" style="cursor: pointer" class="txtLeft">
                                <span class="txtEllipse">공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.</span>
                            </router-link>
                            <td>2021-03-08</td>
                            <td>22</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>151</td>
                            <td class="txtLeft"></td>
                            <router-link tag="td" to="/board/notice/detail" style="cursor: pointer" class="txtLeft">
                                <span class="txtEllipse">공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.</span>
                            </router-link>
                            <td>2021-03-08</td>
                            <td>22</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>151</td>
                            <td class="txtLeft"></td>
                            <router-link tag="td" to="/board/notice/detail" style="cursor: pointer" class="txtLeft">
                                <span class="txtEllipse">공지사항입니다.공지사항입니다.</span>
                            </router-link>
                            <td>2021-03-08</td>
                            <td>22</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>151</td>
                            <td class="txtLeft"></td>
                            <router-link tag="td" to="/board/notice/detail" style="cursor: pointer" class="txtLeft">
                                <span class="txtEllipse">공지사항입니다.</span>
                            </router-link>
                            <td>2021-03-08</td>
                            <td>22</td>
                            <td>22</td>
                        </tr>
                    </tbody>
                </table>
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
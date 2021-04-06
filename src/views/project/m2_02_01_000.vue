<template>
    <div class="rowBox">
        <div class="unitBox">
            <div class="locationWrap">
                <ul class="location">
                    <li><a href="javascript:void(0)">나의 프로젝트</a></li>
                    <li><a href="javascript:void(0)">나의 프로젝트 기본정보</a></li>
                </ul>
            </div>
        </div>
        <div class="unitBox">            
            <div class="titArea type02">
                <div class="titAreaPlusCon">
                    <h2 class="tit">내 프로젝트_파이썬 프로그래밍 분석</h2>
                    <div class="plusCon">
                        <div class="customSelectWrap">
                            <select class="customSelect">
                                <option value="" hidden>프로젝트 바로가기</option>
                                <option value="">내가 만든 프로젝트 ==========</option>
                                <option value="">프로젝트 명</option>
                                <option value="">내가 참여한 프로젝트 ==========</option>
                                <option value="">프로젝트 명</option>
                            </select>
                            <i><div class="hiddenTxt">select box 아이콘</div></i>
                        </div>
                        <div class="btnArea">
                            <a type="button" class="btn l round cGreenGray">목록</a>
                        </div>
                    </div>    
                </div>                
                <p class="titInfo user">프로젝트 오너 : 홍길동</p>
            </div>
        </div>
        <div class="unitBox tabType02">
            <div class="tabWrap type02">
                <div class="tabHeader">
                    <ul>
                        <li v-bind:class="{active: tabActvie[0].active}" @click="fnTab(tabActvie[0], tabShow[0])"><button>기본정보</button></li>
                        <li v-bind:class="{active: tabActvie[1].active}" @click="fnTab(tabActvie[1], tabShow[1])"><button>프로젝트 멤버</button></li>
                        <li v-bind:class="{active: tabActvie[2].active}" @click="fnTab(tabActvie[2], tabShow[2])"><button>데이터관리</button></li>
                        <li v-bind:class="{active: tabActvie[3].active}" @click="fnTab(tabActvie[3], tabShow[3])"><button>소스Viewer</button></li>
                        <li v-bind:class="{active: tabActvie[4].active}" @click="fnTab(tabActvie[4], tabShow[4])"><button>분석IDE</button></li>
                        <li v-bind:class="{active: tabActvie[5].active}" @click="fnTab(tabActvie[5], tabShow[5])"><button>모델학습</button></li>
                        <li v-bind:class="{active: tabActvie[6].active}" @click="fnTab(tabActvie[6], tabShow[6])"><button>공유모델</button></li>
                    </ul>
                </div>
                <div v-if="tabShow[0].active" class="tabContainer">
                    <div class="titArea">
                        <div class="tit">기본정보<em>PC에 있는 데이터를 분석을 위해 업로드 할 수 있습니다.</em></div>
                    </div>
                    <div class="rowTable">
                        <table>
                            <colgroup>
                                <col style="width:240px;"/>
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row">프로젝트 설명</th>
                                    <td>언제 어디서나 AIDU를 통해 AI 모델을 만들어보세요. 언제 어디서나 AIDU를 통해 AI 모델을 만들어보세요. 언제 어디서나 AIDU를 통해 AI 모델을 만들어보세요. 언제 어디서나 AIDU를 통해 AI 모델을 만들어보세요. 언제 어디서나 AIDU를 통해 AI 모델을 만들어보세요.</td>
                                </tr>
                                <tr>
                                    <th scope="row">프로젝트 멤버</th>
                                    <td>3명</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="cusTomBoxWrap type01">
                        <div class="cusTomBox bdCGreen grid2 w40p">
                            <div class="unitBox">
                                <div class="titArea">
                                    <h3 class="tit">프로젝트 사용현황</h3>
                                </div>
                                <ul>
                                    <li>
                                        <div class="iconWrap">
                                            <i class="project_icon type01"><span class="hiddenTxt">분석 IDE 아이콘</span></i>
                                        </div>
                                        <div class="numWrap">
                                            <span class="num">3</span>
                                        </div>
                                        <div class="listTitWrap">
                                            <span class="listTit">분석 IDE</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="iconWrap">
                                            <i class="project_icon type02"><span class="hiddenTxt">모델학습</span></i>
                                        </div>
                                        <div class="numWrap">
                                            <span class="num">1</span>
                                        </div>
                                        <div class="listTitWrap">
                                            <span class="listTit">모델학습</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="cusTomBox bdCBlue grid4 w60p">
                            <div class="unitBox">
                                <div class="titArea">
                                    <h3 class="tit">프로젝트 자원 사용현황</h3>
                                </div>
                                <ul>
                                    <li>
                                        <div class="iconWrap">
                                            <i class="project_icon type03"><span class="hiddenTxt">CPU(Core) 아이콘</span></i>
                                        </div>
                                        <div class="numWrap">
                                            <span class="num">16</span>
                                        </div>
                                        <div class="listTitWrap">
                                            <span class="listTit">CPU<em>(Core)</em></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="iconWrap">
                                            <i class="project_icon type04"><span class="hiddenTxt">Memory(GB) 아이콘</span></i>
                                        </div>
                                        <div class="numWrap">
                                            <span class="num">48</span>
                                        </div>
                                        <div class="listTitWrap">
                                            <span class="listTit">Memory<em>(GB)</em></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="iconWrap">
                                            <i class="project_icon type05"><span class="hiddenTxt">GPU(EA) 아이콘</span></i>
                                        </div>
                                        <div class="numWrap">
                                            <span class="num">0</span>
                                        </div>
                                        <div class="listTitWrap">
                                            <span class="listTit">GPU<em>(EA)</em></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="iconWrap">
                                            <i class="project_icon type06"><span class="hiddenTxt">Disk(MB) 아이콘</span></i>
                                        </div>
                                        <div class="numWrap">
                                            <span class="num">120.5</span>
                                        </div>
                                        <div class="listTitWrap">
                                            <span class="listTit">Disk<em>(MB)</em></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="tabShow[1].active" class="tabContainer">
                    <div class="titArea">
                        <div class="tit">프로젝트 멤버<em>프로젝트에 참여한 멤버를 확인할 수 있습니다.</em></div>
                        <div class="btnArea">
                            <!-- 기업회원이 실행한 경우(기본) -->
                            <button id="modal-1" type="button" class="btn textBtn hasIcon add" @click="fnOpen('modal-1')"><span class="text">멤버 추가</span></button>
                            <!-- 일반회원/비실명계정이 실행한 경우 -->
                            <button id="modal-2" type="button" class="btn textBtn hasIcon add" @click="fnOpen('modal-2')"><span class="text">멤버 추가</span></button>
                        </div>
                    </div>
                    <div class="listTable">
                        <table>
                            <colgroup>
                                <col />
                                <col style="width: 40%;" />
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <!-- 내림차순 버튼 -->
                                    <!-- <button type="button" class="sortBtn descending"><i class="sortIcon"><span class="hiddenTxt">내림차순 아이콘</span></i></button> -->
                                    <!-- 오름차순 버튼 -->
                                    <!-- <button type="button" class="sortBtn ascending"><i class="sortIcon"><span class="hiddenTxt">오름차순 아이콘</span></i></button> -->
                                    <th scope="col">NO.</th>
                                    <th scope="col">이름<button type="button" class="sortBtn descending"><i class="sortIcon"><span class="hiddenTxt">내림차순 아이콘</span></i></button></th>
                                    <th scope="col">이메일<button type="button" class="sortBtn descending"><i class="sortIcon"><span class="hiddenTxt">내림차순 아이콘</span></i></button></th>
                                    <th scope="col">닉네임</th>
                                    <th scope="col">등록일<button type="button" class="sortBtn descending"><i class="sortIcon"><span class="hiddenTxt">내림차순 아이콘</span></i></button></th>
                                    <th scope="col">관리</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td class="txtLeft"><img :src="require(`@/assets/images/ico_user_type02.png`)" alt="유저 이미지">name</td>
                                    <td>닉네임1</td>
                                    <td>xxxx@ncomz.com</td>
                                    <td>YYYY-MM-DD</td>
                                    <td>
                                        <button  type="button" class="btn m cWhiteGreen" @click="fnOpen('modal-10')">
                                            <span class="text">삭제</span>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td class="txtLeft"><img :src="require(`@/assets/images/ico_user_type02.png`)" alt="유저 이미지">name</td>
                                    <td>닉네임2</td>
                                    <td>xxxx@ncomz.com</td>
                                    <td>YYYY-MM-DD</td>
                                    <td>
                                        <button type="button" class="btn m cWhiteGreen" @click="fnOpen('modal-10')">
                                            <span class="text">삭제</span>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td class="txtLeft"><img :src="require(`@/assets/images/ico_user_type02.png`)" alt="유저 이미지">name</td>
                                    <td>닉네임3</td>
                                    <td>xxxx@ncomz.com</td>
                                    <td>YYYY-MM-DD</td>
                                    <td>
                                        <button type="button" class="btn m cWhiteGreen" @click="fnOpen('modal-10')">
                                            <span class="text">삭제</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div v-if="tabShow[2].active" class="tabContainer">
                    <div class="titArea">
                        <div class="tit">데이터 관리<em>PC에 있는 데이터를 분석을 위해 업로드 할 수 있습니다.</em></div>
                        <div class="btnArea">
                            <button id="modal-5" type="button" class="btn textBtn hasIcon file" @click="fnOpen('modal-5')"><span class="text">데이터카탈로그</span></button>
                            <button id="modal-7" type="button" class="btn textBtn" @click="fnOpen('modal-7')"><span class="text">PC &#129122; AIDU 한글변환</span></button>
                            <button id="modal-8" type="button" class="btn textBtn" @click="fnOpen('modal-8')"><span class="text">AIDU &#129122; PC 한글변환</span></button>
                            <button type="button" class="btn textBtn hasIcon upload" @click="fnOpen('modal-14')"><span class="text">업로드</span></button>
                            <button type="button" class="btn textBtn hasIcon refresh"><span class="text">새로고침</span></button>
                            <button type="button" class="btn textBtn hasIcon folder" @click="fnOpen('modal-11')"><span class="text">새폴더</span></button>
                            <button type="button" class="btn textBtn hasIcon delete" @click="fnOpen('modal-18')"><span class="text">삭제</span></button>
                        </div>
                    </div>
                    <div class="tpArea">
                        <span class="tit pColor01">my_project/data/</span>
                    </div>
                    <div class="listTable">
                        <table>
                            <colgroup>
                                <col style="width: 60px;" />
                                <col style="width: 40%;" />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <label class="inpField"><input type="checkbox"><span class="text"></span></label>
                                    </th>
                                    <th scope="col">디렉토리/파일명</th>
                                    <th scope="col">관리</th>
                                    <th scope="col">크기</th>
                                    <th scope="col">수정일</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><label class="inpField"><input type="checkbox"><span class="text"></span></label></td>
                                    <td class="txtLeft">my_project/data/제주도 공기질 데이터를 통한 미세먼지 예측모델.xlsx</td>
                                    <td>
                                        <button type="button" class="btn icoDirectory edit"><span class="text">이름 바꾸기</span></button>
                                        <button type="button" class="btn icoDirectory delete" @click="fnOpen('modal-9')"><span class="text">삭제</span></button>
                                        <button type="button" class="btn icoDirectory preview" @click="fnOpen('modal-15')"><span class="text">미리보기</span></button>
                                        <button type="button" class="btn icoDirectory download"><span class="text">다운로드</span></button>
                                        <button type="button" class="btn icoDirectory makeChart" @click="fnOpen('modal-16')"><span class="text">데이터 시각화</span></button>
                                        <button type="button" class="btn icoDirectory makeCode" @click="fnOpen('modal-17')"><span class="text">코드생성</span></button>
                                    </td>
                                    <td>40MB</td>
                                    <td>YYYY-MM-DD</td>
                                </tr>
                                <tr>
                                    <td><label class="inpField"><input type="checkbox"><span class="text"></span></label></td>
                                    <td class="txtLeft">my_project/data/ITSM 인프라 변경작업 중.xlsx</td>
                                    <td>
                                        <button type="button" class="btn icoDirectory edit"><span class="text">이름 바꾸기</span></button>
                                        <button type="button" class="btn icoDirectory delete" @click="fnOpen('modal-9')"><span class="text">삭제</span></button>
                                        <button type="button" class="btn icoDirectory preview" @click="fnOpen('modal-15')"><span class="text">미리보기</span></button>
                                        <button type="button" class="btn icoDirectory download"><span class="text">다운로드</span></button>
                                        <button type="button" class="btn icoDirectory makeChart" @click="fnOpen('modal-16')"><span class="text">데이터 시각화</span></button>
                                        <button type="button" class="btn icoDirectory makeCode" @click="fnOpen('modal-17')"><span class="text">코드생성</span></button>
                                    </td>
                                    <td>40MB</td>
                                    <td>YYYY-MM-DD</td>
                                </tr>
                                <tr>
                                    <td><label class="inpField"><input type="checkbox"><span class="text"></span></label></td>
                                    <td class="txtLeft">my_project/data/머신러닝 및 KT 사례분석.xlsx</td>
                                    <td>
                                        <button type="button" class="btn icoDirectory edit"><span class="text">이름 바꾸기</span></button>
                                        <button type="button" class="btn icoDirectory delete" @click="fnOpen('modal-9')"><span class="text">삭제</span></button>
                                        <button type="button" class="btn icoDirectory preview" @click="fnOpen('modal-15')"><span class="text">미리보기</span></button>
                                        <button type="button" class="btn icoDirectory download"><span class="text">다운로드</span></button>
                                        <button type="button" class="btn icoDirectory makeChart" @click="fnOpen('modal-16')"><span class="text">데이터 시각화</span></button>
                                        <button type="button" class="btn icoDirectory makeCode" @click="fnOpen('modal-17')"><span class="text">코드생성</span></button>
                                    </td>
                                    <td>40MB</td>
                                    <td>YYYY-MM-DD</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div v-if="tabShow[3].active" class="tabContainer">
                    
                </div>
                <div v-if="tabShow[4].active" class="tabContainer">
                    
                </div>
                <div v-if="tabShow[5].active" class="tabContainer">
                    
                </div>
                <div v-if="tabShow[6].active" class="tabContainer">
                    
                </div>
            </div>
        </div>
        <!-- 프로젝트 멤버 추가 type01 팝업-->
        <div class="layerModalWrap" v-if="modalShow === 'modal-1'" >
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
                        <button type="button" class="btn xl cGreen" @click="fnSecOpen('modal-3')">
                            <span class="text">등록</span>
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
                        <p class="text txtCenter">프로젝트 멤버로 추가하였습니다.</p>
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
        <!-- 프로젝트 멤버 추가 type02 팝업-->
        <div class="layerModalWrap" v-if="modalShow === 'modal-2'">
            <div class="layerModal">
                <div class="modalHeader">
                    <strong>프로젝트 맴버 추가</strong>
                </div>
                <div class="modalCnt">
                    <div class="inpGroup">
                        <input type="text" class="inp l" placeholder="이메일 주소를 정확히 입력하세요."/>
                        <div class="btnArea">
                            <button id="modla-4"  type="button" class="btn l cWhiteGreen" @click="fnSecOpen('modal-4')">
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
            <!-- 알럿/컨펌 팝업 -->             
            <div class="layerModalWrap" v-if="modalShowSecond === 'modal-4'">                
                <div class="layerModal conAlertModal">
                    <div class="modalHeader">
                        <strong class="txtCenter">확인 메세지</strong>
                    </div>
                    <div class="modalCnt">
                        <p class="text txtCenter">프로젝트 멤버로 추가하였습니다.</p>
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
        <!-- 프로젝트 멤버 삭제 알럿/컨펌 팝업 -->             
        <div class="layerModalWrap" v-if="modalShow === 'modal-10'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <!-- 오너가 멤버 탈퇴 시 확인메세지 -->
                    <p class="text txtCenter">해당 멤버의 작업공간도 함계 삭제되어<br>복구되지 않습니다.<br>프로젝트에서 내보내시겠습니까?</p>
                    <!-- 멤버가 탈퇴 시 확인메세지 -->
                    <!-- <p class="text txtCenter">작업공간도함께 삭제되어<br>복구되지 않습니다.<br>프로젝트에서 나가시겠습니까?</p> -->
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
                        <div class="tree">
                            <!-- treeWrap에 open 클래스가 있으면 열립니다. -->
                            <ul class="treeWrap open">
                                <li class="bgW">
                                    <button type="button" class="treeBtn">데이터 구분</button>
                                    <ul class="treeWrap open">
                                        <li class="bgG">
                                            <button class="treeBtn">공공행정</button>
                                            <ul class="treeWrap open">
                                                <li class="bgW">
                                                    <button class="treeBtn">3depth</button>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="bgG">
                                            <button class="treeBtn">공공행정</button>
                                            <ul class="treeWrap">
                                                <li class="bgW">
                                                    <button class="treeBtn">3depth</button>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="bgG">
                                            <button class="treeBtn">공공행정</button>
                                            <ul class="treeWrap">
                                                <li class="bgW">
                                                    <button class="treeBtn">3depth</button>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
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
                        <button id="modal-6" type="button" class="btn xl cGreen" @click="fnSecOpen('modal-6')">
                            <span class="text">가져오기</span>
                        </button>
                        <button type="button" class="btn xl cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>           
            <!-- 알럿/컨펌 팝업 -->             
            <div class="layerModalWrap" v-if="modalShowSecond === 'modal-6'">                
                <div class="layerModal conAlertModal">
                    <div class="modalHeader">
                        <strong class="txtCenter">확인 메세지</strong>
                    </div>
                    <div class="modalCnt">
                        <p class="text txtCenter">데이터 카탈로그를 선택 해주세요.</p>
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
        <!-- PC AIDU 한글변환 알럿/컨펌 팝업 -->             
        <div class="layerModalWrap" v-if="modalShow === 'modal-7'">                
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">utf-8/euc-kr 형식으로 변환할 파일을 선택해주세요.</p>
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
        <!-- PC AIDU 한글변환 알럿/컨펌 팝업 -->             
        <div class="layerModalWrap" v-if="modalShow === 'modal-8'">                
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">utf-8/euc-kr 형식으로 변환할 파일을 선택해주세요.</p>
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
        <!-- 파일 관리 기능 삭제 알럿/컨펌 팝업 -->             
        <div class="layerModalWrap" v-if="modalShow === 'modal-9'">                
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">삭제된 파일은 복구되지 않습니다.<br>정말로 삭제 하시겠습니까?</p>
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
        <!-- 데이터 삭제 알럿/컨펌 팝업 -->             
        <div class="layerModalWrap" v-if="modalShow === 'modal-18'">                
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">삭제된 파일은 복구되지 않습니다.<br>정말로 삭제 하시겠습니까?</p>
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
        <!-- 새폴더 생성 -->
        <div class="layerModalWrap" v-if="modalShow === 'modal-11'">
            <div class="layerModal">
                <div class="modalHeader">
                    <strong>새폴더 생성</strong>
                </div>
                <div class="modalCnt">
                    <div class="inpGroup">
                        <input type="text" class="inp l" placeholder="폴더명을 입력해 주세요."/>
                    </div>
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn m cGreen" @click="fnSecOpen('modal-12')">
                            <span class="text">확인</span>
                        </button>
                        <!-- 중복 알림 메시지 -->
                        <!-- <button type="button" class="btn m cGreen" @click="fnSecOpen('modal-13')">
                            <span class="text">확인</span>
                        </button> -->                        
                        <button type="button" class="btn m cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="layerModalWrap" v-if="modalShowSecond === 'modal-12'">                
                <div class="layerModal conAlertModal">
                    <div class="modalHeader">
                        <strong class="txtCenter">확인 메세지</strong>
                    </div>
                    <div class="modalCnt">
                        <p class="text txtCenter">해당 정보로 등록하시겠습니까?</p>
                    </div>
                    <div class="modalFooter">
                        <div class="btnArea">
                            <button type="button" class="btn m cGreen" @click="fnSecClose">
                                <span class="text">확인</span>
                            </button>                        
                            <button type="button" class="btn m cGrayGreen" @click="fnSecClose">
                                <span class="text">취소</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 중복 알림 메세지 -->
            <!-- <div class="layerModalWrap" v-if="modalShow === 'modal-13'">                
                <div class="layerModal conAlertModal">
                    <div class="modalHeader">
                        <strong class="txtCenter">확인 메세지</strong>
                    </div>
                    <div class="modalCnt">
                        <p class="text txtCenter">같은 이름의 폴더가 존재합니다.</p>
                    </div>
                    <div class="modalFooter">
                        <div class="btnArea">
                            <button type="button" class="btn m cGreen" @click="fnClose">
                                <span class="text">확인</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <!-- PC파일 업로드 -->
        <div class="layerModalWrap" v-if="modalShow === 'modal-14'">
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
        <!-- 데이터 미리보기 -->
        <div class="layerModalWrap rowFull" v-if="modalShow === 'modal-15'">
            <div class="layerModal">
                <div class="modalHeader">
                    <strong>데이터 미리보기</strong>
                </div>
                <div class="modalCnt">
                    <div class="listTable theadFix textLeft">
                        <table>
                            <colgroup>
                                <col style="width: 120px" />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">NO.</th>
                                    <th scope="col">data1</th>
                                    <th scope="col">data2</th>
                                    <th scope="col">data3</th>
                                    <th scope="col">data4</th>
                                    <th scope="col">data5</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5.1</td>
                                    <td>4.9</td>
                                    <td>4.7</td>
                                    <td>4.6</td>
                                    <td>5.4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modalFooter">
                    <div class="btnArea mW">
                        <button type="button" class="btn xl cGrayGreen" @click="fnClose">
                            <span class="text">닫기</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 데이터 시각화 -->
        <div class="layerModalWrap rowFull" v-if="modalShow === 'modal-16'">
            <div class="layerModal">
                <div class="modalHeader">
                    <strong>데이터 시각화</strong>
                </div>
                <div class="modalCnt">
                    <div class="unitGroup">
                        <dl class="unit">
                            <dt>
                                <span class="tit pColor02 light">데이터 파일: <em class="pColor01">iris.csv (Row : 150 / File Size : 3.77KB)</em></span>
                                <div class="w60p">
                                    <div class="inpGroup">
                                        <span class="tit pColor02 light">대상 컬럼</span>
                                        <input type="text" placeholder="최대 3개까지 선택 가능합니다." class="inp l" style="width: 412px;">
                                        <div class="btnArea">
                                            <button type="button" class="btn l cWhiteGreen">
                                                <span class="text">시각화</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </dt>
                            <dt>
                                <!-- 상황에 맞는 max-heigth 값을 넣어주세요 -->
                                <div class="listTable theadFix" style="max-height: 210px;">
                                    <table>
                                        <colgroup>
                                            <col style="width: 60px;" />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">선택</th>
                                                <th scope="col">분석 컬럼(Coloumn)</th>
                                                <th scope="col">데이터 속성(Data Type)</th>
                                                <th scope="col">데이터/결측치수</th>
                                                <th scope="col">최대값(Max)</th>
                                                <th scope="col">최소값(Min)</th>
                                                <th scope="col">최소값(Min)</th>
                                                <th scope="col">변동계수(CV)</th>
                                                <th scope="col">분산(Vairance)</th>
                                                <th scope="col">표준편차(Stddev)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><label class="inpField"><input type="checkbox"><span class="text"></span></label></td>
                                                <td>sepal_length</td>
                                                <td>Numeric</td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.68112</td>
                                            </tr>
                                            <tr>
                                                <td><label class="inpField"><input type="checkbox"><span class="text"></span></label></td>
                                                <td>sepal_length</td>
                                                <td>Numeric</td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.68112</td>
                                            </tr>
                                            <tr>
                                                <td><label class="inpField"><input type="checkbox"><span class="text"></span></label></td>
                                                <td>sepal_length</td>
                                                <td>Numeric</td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.68112</td>
                                            </tr>
                                            <tr>
                                                <td><label class="inpField"><input type="checkbox"><span class="text"></span></label></td>
                                                <td>sepal_length</td>
                                                <td>Numeric</td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.68112</td>
                                            </tr>
                                            <tr>
                                                <td><label class="inpField"><input type="checkbox"><span class="text"></span></label></td>
                                                <td>sepal_length</td>
                                                <td>Numeric</td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.68112</td>
                                            </tr>
                                            <tr>
                                                <td><label class="inpField"><input type="checkbox"><span class="text"></span></label></td>
                                                <td>sepal_length</td>
                                                <td>Numeric</td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.68112</td>
                                            </tr>
                                            <tr>
                                                <td><label class="inpField"><input type="checkbox"><span class="text"></span></label></td>
                                                <td>sepal_length</td>
                                                <td>Numeric</td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.68112</td>
                                            </tr>
                                            <tr>
                                                <td><label class="inpField"><input type="checkbox"><span class="text"></span></label></td>
                                                <td>sepal_length</td>
                                                <td>Numeric</td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.68112</td>
                                            </tr>
                                            <tr>
                                                <td><label class="inpField"><input type="checkbox"><span class="text"></span></label></td>
                                                <td>sepal_length</td>
                                                <td>Numeric</td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.68112</td>
                                            </tr>
                                            <tr>
                                                <td><label class="inpField"><input type="checkbox"><span class="text"></span></label></td>
                                                <td>sepal_length</td>
                                                <td>Numeric</td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.68112</td>
                                            </tr>
                                            <tr>
                                                <td><label class="inpField"><input type="checkbox"><span class="text"></span></label></td>
                                                <td>sepal_length</td>
                                                <td>Numeric</td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.68112</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </dt>
                        </dl>
                        <dl class="unit">
                            <dt>
                                <span class="tit">시각화</span>
                            </dt>
                            <dt>
                                <div class="grid3">
                                    <div class="gridBox">
                                        <div class="chartBox" style="height: 300px; background: #f4f4f4;"></div>
                                    </div>
                                    <div class="gridBox">
                                        <div class="chartBox" style="height: 300px; background: #f4f4f4;"></div>
                                    </div>
                                    <div class="gridBox">
                                        <div class="chartBox" style="height: 300px; background: #f4f4f4;"></div>
                                    </div>
                                </div>
                            </dt>
                            <dt>
                                <div class="listTable theadFix textLeft">
                                    <table>
                                        <colgroup>
                                            <col style="width: 120px" />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">NO.</th>
                                                <th scope="col">data1</th>
                                                <th scope="col">data2</th>
                                                <th scope="col">data3</th>
                                                <th scope="col">data4</th>
                                                <th scope="col">data5</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </dt>
                        </dl>
                    </div>
                </div>
                <div class="modalFooter">
                    <div class="btnArea mW">
                        <button type="button" class="btn xl cGreen" @click="fnClose">
                            <span class="text">코드생성</span>
                        </button>
                        <button type="button" class="btn xl cGrayGreen" @click="fnClose">
                            <span class="text">닫기</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 코드생성 -->
        <div class="layerModalWrap rowFull" v-if="modalShow === 'modal-17'">
            <div class="layerModal">
                <div class="modalHeader">
                    <strong>코드 생성</strong>
                </div>
                <div class="modalCnt">
                    <div class="unitGroup">
                        <dl class="unit">
                            <dt class="flexStart">
                                <span class="tit">데이터 파일</span>
                                <input type="text" class="inp w30p">
                            </dt>
                        </dl>
                        <dl class="unit">
                            <dt>
                                <span class="tit">데이터 분석<em>분석용 컬럼을 선택해주세요.</em></span>
                            </dt>
                            <dt>
                                <div class="listTable theadFix" style="max-height: 210px;">
                                    <table>
                                        <colgroup>
                                            <col style="width: 60px;" />
                                            <col style="width: 60px;" />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">레이블 컬럼</th>
                                                <th scope="col">
                                                    <label class="inpField"><input type="checkbox"><span class="text"></span></label>
                                                </th>
                                                <th scope="col">분석 컬럼(Coloumn)</th>
                                                <th scope="col">데이터 속성(Data Type)</th>
                                                <th scope="col">결측치 처리</th>                                                
                                                <th scope="col">데이터/결측치수</th>
                                                <th scope="col">최대값(Max)</th>
                                                <th scope="col">최소값(Min)</th>
                                                <th scope="col">평균(Mean))</th>
                                                <th scope="col">변동계수(CV)</th>
                                                <th scope="col">분산(Vairance)</th>
                                                <th scope="col">표준편차(Stddev)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <label class="inpField"><input type="radio" name="radioInp"><span class="text"></span></label>
                                                </td>
                                                <td>
                                                    <label class="inpField"><input type="checkbox"><span class="text"></span></label>
                                                </td>
                                                <td>sepal_length</td>
                                                <td>
                                                    <select class="inp">
                                                        <option>Numeric</option>
                                                        <option>Numeric</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select class="inp">
                                                        <option>삭제</option>
                                                        <option>삭제</option>
                                                    </select>
                                                </td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.82530</td>
                                            </tr>
                                            
                                            <tr>
                                                <td>
                                                    <label class="inpField"><input type="radio" name="radioInp"><span class="text"></span></label>
                                                </td>
                                                <td>
                                                    <label class="inpField"><input type="checkbox"><span class="text"></span></label>
                                                </td>
                                                <td>sepal_length</td>
                                                <td>
                                                    <select class="inp">
                                                        <option>Numeric</option>
                                                        <option>Numeric</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select class="inp">
                                                        <option>삭제</option>
                                                        <option>삭제</option>
                                                    </select>
                                                </td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.82530</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="inpField"><input type="radio" name="radioInp"><span class="text"></span></label>
                                                </td>
                                                <td>
                                                    <label class="inpField"><input type="checkbox"><span class="text"></span></label>
                                                </td>
                                                <td>sepal_length</td>
                                                <td>
                                                    <select class="inp">
                                                        <option>Numeric</option>
                                                        <option>Numeric</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select class="inp">
                                                        <option>삭제</option>
                                                        <option>삭제</option>
                                                    </select>
                                                </td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.82530</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="inpField"><input type="radio" name="radioInp"><span class="text"></span></label>
                                                </td>
                                                <td>
                                                    <label class="inpField"><input type="checkbox"><span class="text"></span></label>
                                                </td>
                                                <td>sepal_length</td>
                                                <td>
                                                    <select class="inp">
                                                        <option>Numeric</option>
                                                        <option>Numeric</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select class="inp">
                                                        <option>삭제</option>
                                                        <option>삭제</option>
                                                    </select>
                                                </td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.82530</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="inpField"><input type="radio" name="radioInp"><span class="text"></span></label>
                                                </td>
                                                <td>
                                                    <label class="inpField"><input type="checkbox"><span class="text"></span></label>
                                                </td>
                                                <td>sepal_length</td>
                                                <td>
                                                    <select class="inp">
                                                        <option>Numeric</option>
                                                        <option>Numeric</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select class="inp">
                                                        <option>삭제</option>
                                                        <option>삭제</option>
                                                    </select>
                                                </td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.82530</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="inpField"><input type="radio" name="radioInp"><span class="text"></span></label>
                                                </td>
                                                <td>
                                                    <label class="inpField"><input type="checkbox"><span class="text"></span></label>
                                                </td>
                                                <td>sepal_length</td>
                                                <td>
                                                    <select class="inp">
                                                        <option>Numeric</option>
                                                        <option>Numeric</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select class="inp">
                                                        <option>삭제</option>
                                                        <option>삭제</option>
                                                    </select>
                                                </td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.82530</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="inpField"><input type="radio" name="radioInp"><span class="text"></span></label>
                                                </td>
                                                <td>
                                                    <label class="inpField"><input type="checkbox"><span class="text"></span></label>
                                                </td>
                                                <td>sepal_length</td>
                                                <td>
                                                    <select class="inp">
                                                        <option>Numeric</option>
                                                        <option>Numeric</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select class="inp">
                                                        <option>삭제</option>
                                                        <option>삭제</option>
                                                    </select>
                                                </td>
                                                <td>150/0</td>
                                                <td>7.90000</td>
                                                <td>4.30000</td>
                                                <td>5.84333</td>
                                                <td>0</td>
                                                <td>0.68112</td>
                                                <td>0.82530</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </dt>
                            <dt>
                                <div class="rowTable">
                                    <table>
                                        <colgroup>
                                            <col style="width: 160px;" />
                                            <col style="" />
                                            <col style="width: 160px;" />
                                            <col style="" />
                                            <col style="width: 160px;" />
                                            <col style="" />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th scope="col">데이터 파일</th>
                                                <td colspan="5">iris.csv</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">레이블 컬럼</th>
                                                <td colspan="5">sepal_length</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">분석용 컬럼</th>
                                                <td colspan="5">sepal_length, sepal_length, sepal_length, sepal_length, sepal_length</td>
                                            </tr>
                                            <tr>
                                                <th scope="col">Epochs</th>
                                                <td><input type="text" placeholder="" class="inp"></td>
                                                <th scope="col">Batch size</th>
                                                <td><input type="text" placeholder="" class="inp"></td>
                                                <th scope="col">Learning rate</th>
                                                <td><input type="text" placeholder="" class="inp"></td>
                                            </tr>
                                            <tr>
                                                <th scope="col">데이터 분할 비율</th>
                                                <td colspan="5">
                                                    <span class="inpRangeWrap">
                                                        <input type="range" min="0" max="100" v-model="inputRangeData" />
                                                        <span class="inputRangeBg" v-bind:style="{ width: 'calc(' + inputRangeData + '% - 3px)' }"></span>
                                                    </span>
                                                    <span class="txt">[Train: {{inputRangeData}}% / Test: 30%]</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="col">모델 명</th>
                                                <td colspan="5">
                                                    <input type="text" placeholder="" class="inp">
                                                    <button type="button" class="btn m cWhiteGreen"><span class="text">중복체크</span></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </dt>
                            
                            <dt>
                                <div class="listTable theadFix textLeft">
                                    <table>
                                        <colgroup>
                                            <col style="width: 120px" />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">NO.</th>
                                                <th scope="col">data1</th>
                                                <th scope="col">data2</th>
                                                <th scope="col">data3</th>
                                                <th scope="col">data4</th>
                                                <th scope="col">data5</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>5.1</td>
                                                <td>4.9</td>
                                                <td>4.7</td>
                                                <td>4.6</td>
                                                <td>5.4</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </dt>
                        </dl>
                    </div>
                </div>
                <div class="modalFooter">
                    <div class="btnArea mW">
                        <button type="button" class="btn xl cGreen" @click="fnClose">
                            <span class="text">코드생성</span>
                        </button>
                        <button type="button" class="btn xl cGrayGreen" @click="fnClose">
                            <span class="text">닫기</span>
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
    inputRangeData: 0,
    modalShow: '',
    modalShowSecond: '',
    treeData: [
        {
            open: true,
            subTree: [
                {
                    open: false,
                    subTree: [
                        {
                            open: false
                        }
                    ]
                },{
                    open: false,
                    subTree: [
                        {
                            open: false
                        }
                    ]
                },{
                    open: false,
                    subTree: [
                        {
                            open: false
                        }
                    ]
                }
            ]
        }
    ],
    tabShow: [
        {
            active: true
        },{
            active: false
        },{
            active: false
        },{
            active: false
        },{
            active: false
        },{
            active: false
        },{
            active: false
        }
    ], 
    tabActvie: [
        {
            active: true
        },{
            active: false
        },{
            active: false
        },{
            active: false
        },{
            active: false
        },{
            active: false
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
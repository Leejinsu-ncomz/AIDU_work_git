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
                <!-- 기본정보 -->
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
                <!-- 프로젝트 멤버 -->
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
                <!-- 데이터 관리 -->
                <div v-if="tabShow[2].active" class="tabContainer">
                    <div class="titArea">
                        <div class="tit">데이터 관리<em>PC에 있는 데이터를 분석을 위해 업로드 할 수 있습니다.</em></div>
                        <div class="btnArea">
                            <button id="modal-5" type="button" class="btn textBtn hasIcon file" @click="fnOpen('modal-25')"><span class="text">데이터카탈로그 관리</span></button>
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
                <!-- 소스 Viewer -->
                <div v-if="tabShow[3].active" class="tabContainer">
                    <div class="titArea">
                        <div class="tit">소스Viewer<em>프로젝트 멤버가 작성한 소스를 확인 할 수 있습니다.</em></div>
                        <div class="btnArea">
                            <button type="button" class="btn textBtn hasIcon code"><span class="text">코드생성</span></button>
                            <button type="button" class="btn textBtn hasIcon sourceEdit"><span class="text">소스편집</span></button>
                            <button type="button" class="btn textBtn hasIcon sourceSave"><span class="text">소스저장</span></button>
                            <button type="button" class="btn textBtn hasIcon sourceCopy"><span class="text">소스복사</span></button>
                        </div>
                    </div>
                    <div class="tpArea">
                        <span class="tit pColor01">my_project/data/</span>
                    </div>
                    <div class="treeTable">
                        <div>
                            <div class="treeHeader">
                                <div class="btnArea w100p txtRight">
                                    <button type="button" class="btn textBtn hasIcon refresh"><span class="text">새로고침</span></button>
                                    <button type="button" class="btn textBtn hasIcon folder"><span class="text">새폴더</span></button>
                                    <button type="button" class="btn textBtn hasIcon delete"><span class="text">삭제</span></button>
                                </div>
                            </div>
                            <div class="tableTreeWrap theadFix" style="max-height: 450px;">
                                <table class="tableTree">
                                    <colgroup>
                                        <col style="width: 50%;">
                                        <col style="width: 10%;">
                                        <col style="width: 40%;">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>디렉토리/파일명</th>
                                            <th>크기</th>
                                            <th>수정일</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colspan="2"><span class="name">홍길*</span></td>
                                            <td>2021-03-08 19:54:21</td>
                                        </tr>
                                        <!-- subDepth에 open클래스 추가해주시면 열립니다. -->
                                        <tr class="subDepth open">
                                            <td>
                                                <label for="treeCheckBox01" class="inpField"><input type="checkbox" id="treeCheckBox01"><span class="text txtEllipse">App.py</span></label>
                                                <button type="button" class="btn icoDirectory preview"><span class="text">미리보기</span></button>
                                                <button type="button" class="btn icoDirectory copy"><span class="text">복사</span></button>
                                            </td>
                                            <td>400MB</td>
                                            <td>2021-03-08 19:54:21</td>
                                        </tr>
                                        <tr class="subDepth open">
                                            <td>
                                                <label for="treeCheckBox02" class="inpField"><input type="checkbox" id="treeCheckBox02"><span class="text txtEllipse">App.py</span></label>
                                                <button type="button" class="btn icoDirectory preview"><span class="text">미리보기</span></button>
                                                <button type="button" class="btn icoDirectory copy"><span class="text">복사</span></button>
                                            </td>
                                            <td>400MB</td>
                                            <td>2021-03-08 19:54:21</td>
                                        </tr>
                                        <tr class="subDepth open">
                                            <td>
                                                <label for="treeCheckBox03" class="inpField"><input type="checkbox" id="treeCheckBox03"><span class="text txtEllipse">App.py</span></label>
                                                <button type="button" class="btn icoDirectory preview"><span class="text">미리보기</span></button>
                                                <button type="button" class="btn icoDirectory copy"><span class="text">복사</span></button>
                                            </td>
                                            <td>400MB</td>
                                            <td>2021-03-08 19:54:21</td>
                                        </tr>
                                        <tr class="subDepth open">
                                            <td>
                                                <label for="treeCheckBox04" class="inpField"><input type="checkbox" id="treeCheckBox04"><span class="text txtEllipse">App.py</span></label>
                                                <button type="button" class="btn icoDirectory preview"><span class="text">미리보기</span></button>
                                                <button type="button" class="btn icoDirectory copy"><span class="text">복사</span></button>
                                            </td>
                                            <td>400MB</td>
                                            <td>2021-03-08 19:54:21</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"><span class="name">홍길*</span></td>
                                            <td>2021-03-08 19:54:21</td>
                                        </tr>
                                        <tr class="subDepth">
                                            <td>
                                                <label for="treeCheckBox05" class="inpField"><input type="checkbox" id="treeCheckBox05"><span class="text txtEllipse">App.py</span></label>
                                                <button type="button" class="btn icoDirectory preview"><span class="text">미리보기</span></button>
                                                <button type="button" class="btn icoDirectory copy"><span class="text">복사</span></button>
                                            </td>
                                            <td>400MB</td>
                                            <td>2021-03-08 19:54:21</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <div class="sorceViewWrap">
                                <!-- 실제 개발시 style을 제거 해주세요. -->
                                <div class="sorceView" style="background: #f1f1f1; height: 1000px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 분석 IDE -->
                <div v-if="tabShow[4].active" class="tabContainer">
                    <div v-if="ideMain">
                        <div class="titArea">
                            <div class="tit">분석 IDE<em>AI 분석을 위한 개발 환경을 구성합니다.</em></div>
                        </div>
                        <div class="tpArea">
                            <span class="tit pColor01">&#8251; IDE 연결 전 팝업차단이 해제되어 있는지 확인해주세요.</span>
                        </div>
                        <div class="tpArea">                        
                            <span class="tit pColor01">&#8251; 작업 중인 데이터 소스코드는 모두 보존되며 필요 시 IDE 생성하여 사용합니다.</span>
                        </div>
                        <div class="flexBox justifyContent">
                            <div class="btnArea">
                                <button type="button" class="btn textBtn hasIcon state" style="padding-left: 0px;" @click="fnOpen('modal-21')"><span class="text">자원현황보기</span></button>
                            </div>
                            <div class="btnArea">
                                <button type="button" class="btn textBtn"><span class="text" @click="fnOpen('modal-19')">Jupyterlab 빠른 생성</span></button>
                                <button type="button" class="btn textBtn"><span class="text" @click="fnOpen('modal-19')">AIDU ez 빠른 생성</span></button>
                                <button type="button" class="btn textBtn"><span class="text" @click="ideCreate = true; ideMain = false">IDE 상세 생성</span></button>
                            </div>
                        </div>
                        <div class="listTable">
                            <table>
                                <colgroup>
                                    <col style="width: 140px;">
                                    <col />
                                    <col />
                                    <col style="width: 140px;">
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col">작업 ID</th>
                                        <th scope="col">이미지 정보</th>
                                        <th scope="col">시스템리소스</th>
                                        <th scope="col">멤버명</th>
                                        <th scope="col">남은시간 / 할당시간</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>27523</td>
                                        <td class="txtLeft">
                                            <img :src="require(`@/assets/images/ico_Tensorflow.png`)" alt="Tensorflow 이미지">Tensorflow 2.2                                        
                                        </td>
                                        <td>CPU : 1Core / Memory : 2GB / GPU : 0EA</td>
                                        <td>홍길동</td>
                                        <td>
                                            <span>11h 57m / 11h 57m</span>
                                            <span class="btnArea">
                                                <button type="button" class="btn s round cGrayDark">연결</button>
                                                <button type="button" class="btn s round cGrayWhite" @click="fnOpen('modal-23')">종료</button>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>27523</td>
                                        <td class="txtLeft">
                                            <img :src="require(`@/assets/images/ico_AIDU.png`)" alt="AIDU 이미지">AIDU ez – Stable                                        
                                        </td>
                                        <td>CPU : 1Core / Memory : 2GB / GPU : 0EA</td>
                                        <td>홍길동</td>
                                        <td>
                                            <span>11h 57m / 11h 57m</span>
                                            <span class="btnArea">
                                                <button type="button" class="btn s round cGrayDark">연결</button>
                                                <button type="button" class="btn s round cGrayWhite" @click="fnOpen('modal-23')">종료</button>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>27523</td>
                                        <td class="txtLeft">
                                            <img :src="require(`@/assets/images/ico_Tensorflow.png`)" alt="Tensorflow 이미지">Tensorflow 2.2                                        
                                        </td>
                                        <td>CPU : 1Core / Memory : 2GB / GPU : 0EA</td>
                                        <td>홍길동</td>
                                        <td>
                                            <span>11h 57m / 11h 57m</span>
                                            <span class="btnArea">
                                                <button type="button" class="btn s round cGrayDark">연결</button>
                                                <button type="button" class="btn s round cGrayWhite" @click="fnOpen('modal-23')">종료</button>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>27523</td>
                                        <td class="txtLeft">
                                            <img :src="require(`@/assets/images/ico_AIDU.png`)" alt="AIDU 이미지">AIDU ez – Stable                                        
                                        </td>
                                        <td>CPU : 1Core / Memory : 2GB / GPU : 0EA</td>
                                        <td>홍길동</td>
                                        <td>
                                            <span>11h 57m / 11h 57m</span>
                                            <span class="btnArea">
                                                <button type="button" class="btn s round cGrayDark">연결</button>
                                                <button type="button" class="btn s round cGrayWhite" @click="fnOpen('modal-23')">종료</button>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div v-if="ideCreate">
                        <div class="unitBox">
                            <div class="titArea">
                                <div class="tit lightBold">개발도구 선택</div>
                            </div>
                            <div class="listSelctWrap type01">
                                <ul class="listSelets">
                                    <!-- active 클래스 추가시 선택 효과가 나타납니다. -->
                                    <li class="w50p active">
                                        <div class="imgBox">
                                            <img :src="require(`@/assets/images/ico_jupyter.png`)" alt="Jupyter hub 이미지">
                                        </div>
                                        <div class="selcteInfoBox">
                                            <span class="tit">Jupyter hub</span>
                                            <span class="txt">Python을 활용한 소스 코드 기반의 AI 모델링을 지원합니다.</span>
                                        </div>
                                    </li>
                                    <li class="w50p">
                                        <div class="imgBox">
                                            <img :src="require(`@/assets/images/ico_l_aidu.png`)" alt="AIDU ez 이미지">
                                        </div>
                                        <div class="selcteInfoBox">
                                            <span class="tit">AIDU ez</span>
                                            <span class="txt">AI 개발 역량이 없어도 클릭 기반의 AI 모델링을 지원합니다.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="unitBox">
                            <div class="titArea">
                                <div class="tit lightBold">시스템 자원 선택 <em>(사용가능 시간 : 00h)</em></div>
                            </div>
                            <div class="listSelctWrap type02">
                                <ul class="listSelets">
                                    <!-- active 클래스 추가시 선택 효과가 나타납니다. -->
                                    <li class="w33p active">
                                        <div class="selcteInfoBox">
                                            <span class="tit">Basic</span>
                                            <div class="txtWrap">
                                                <span class="txt">CPU<em>(Core)</em><em class="num">1</em></span>
                                                <span class="txt">Memory<em>(GB)</em><em class="num">2</em></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="w33p">
                                        <div class="selcteInfoBox">
                                            <span class="tit">Normal</span>
                                            <div class="txtWrap">
                                                <span class="txt">CPU<em>(Core)</em><em class="num">2</em></span>
                                                <span class="txt">Memory<em>(GB)</em><em class="num">4</em></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="w33p">
                                        <div class="selcteInfoBox">
                                            <span class="tit">Super</span>
                                            <div class="txtWrap">
                                                <span class="txt">CPU<em>(Core)</em><em class="num">4</em></span>
                                                <span class="txt">Memory<em>(GB)</em><em class="num">16</em></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="unitBox">
                            <div class="titArea">
                                <div class="tit lightBold">분석 환경 선택</div>
                            </div>
                            <div class="listSelctWrap type01">
                                <ul class="listSelets">
                                    <!-- active 클래스 추가시 선택 효과가 나타납니다. -->
                                    <li class="w100p active">
                                        <div class="imgBox">
                                            <img :src="require(`@/assets/images/ico_l_Tensorflow.png`)" alt="Tensor Flow 이미지">
                                        </div>
                                        <div class="selcteInfoBox">
                                            <span class="tit">Tensorflow 2.2.1 <em>with</em> JupyterLab</span>
                                            <span class="txt">Jupyterlab을 이용해 tensorflow 기반의 학습코드 개발 환경</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="unitBox">
                            <div class="btnArea">
                                <button type="button" class="btn xl cGreen w18p mgT10" @click="fnOpen('modal-24')">
                                    <span class="text">IDE 생성하기</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 모델 학습 -->
                <div v-if="tabShow[5].active" class="tabContainer">
                    <div v-if="modelList">                        
                        <div class="titArea">
                            <div class="tit">모델 학습<em>분석 IDE에서 생성한 AI모델을 학습시킬 수 있습니다</em></div>
                        </div>
                        <div class="inpWrap">
                            <div class="inpBox">
                                <select class="l inp customOption">
                                    <option value="">학습진행</option>
                                    <option value="">학습완료</option>
                                    <option value="">학습취소</option>
                                    <option value="">학습실패</option>
                                    <option value="">등록완료</option>
                                    <option value="">임시저장</option>
                                </select>
                            </div>
                            <div class="inpBox">
                                <input type="text" class="l inp" />
                            </div>
                            <div class="inpBox">
                                <date-picker :date="from" @input="fromDate" />
                                ~
                                <date-picker :date="to" @input="toDate" />
                            </div>
                            <div class="btnArea">
                                <button type="button" class="btn l cAqua iconOnly refresh"><span class="text">새로고침</span></button>
                                <button type="button" class="btn l cBlue iconOnly search"><span class="text">검색</span></button>
                            </div>
                        </div>
                        <div class="flexBox justifyContent">
                            <div class="btnArea">
                                <button type="button" class="btn textBtn hasIcon state" style="padding-left: 0px;" @click="fnOpen('modal-21')"><span class="text">자원현황보기</span></button>
                            </div>
                            <div class="btnArea">
                                <button type="button" class="btn textBtn hasIcon refresh" style="padding-left: 0px;"><span class="text">새로고침</span></button>
                                <button type="button" class="btn textBtn hasIcon newLearn" @click="modelList = false;modelDetail = false;modelNew = true;"><span class="text">새로운 학습</span></button>
                            </div>
                        </div>
                        <div class="listTable">
                            <table>
                                <colgroup>
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
                                        <!-- 내림차순 버튼 -->
                                        <!-- <button type="button" class="sortBtn descending"><i class="sortIcon"><span class="hiddenTxt">내림차순 아이콘</span></i></button> -->
                                        <!-- 오름차순 버튼 -->
                                        <!-- <button type="button" class="sortBtn ascending"><i class="sortIcon"><span class="hiddenTxt">오름차순 아이콘</span></i></button> -->
                                        <th scope="col">작업ID<button type="button" class="sortBtn descending"><i class="sortIcon"><span class="hiddenTxt">내림차순 아이콘</span></i></button></th>
                                        <th scope="col">학습작업명<button type="button" class="sortBtn descending"><i class="sortIcon"><span class="hiddenTxt">내림차순 아이콘</span></i></button></th>
                                        <th scope="col">등록자<button type="button" class="sortBtn descending"><i class="sortIcon"><span class="hiddenTxt">내림차순 아이콘</span></i></button></th>
                                        <th scope="col">상태<button type="button" class="sortBtn descending"><i class="sortIcon"><span class="hiddenTxt">내림차순 아이콘</span></i></button></th>
                                        <th scope="col">시작시간</th>
                                        <th scope="col">소요시간</th>
                                        <th scope="col">Accuracy/Loss</th>
                                        <th scope="col" colspan="2">시스템 리소스</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>121</td>
                                        <td>테스트-1</td>
                                        <td>홍길*</td>
                                        <td>학습완료</td>
                                        <td>2021-03-02 15:22:11</td>
                                        <td>12m 34s</td>
                                        <td>0.992/0.224</td>
                                        <td>CPU : 1Core / Memory : 2GB / GPU : 0EA / DISK : 12MB</td>
                                        <td>
                                            <button type="button" class="btn xs round cGrayDark" @click="modelList = false;modelDetail = true;modelNew = false;"><span class="text">보기</span></button>
                                            <button type="button" class="btn xs round cGrayWhite" @click="fnOpen('modal-29')"><span class="text">삭제</span></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>121</td>
                                        <td>테스트-1</td>
                                        <td>홍길*</td>
                                        <td>학습완료</td>
                                        <td>2021-03-02 15:22:11</td>
                                        <td>12m 34s</td>
                                        <td>0.992/0.224</td>
                                        <td>CPU : 1Core / Memory : 2GB / GPU : 0EA / DISK : 12MB</td>
                                        <td>
                                            <button type="button" class="btn xs round cGrayDark"><span class="text">시뮬레이터</span></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>121</td>
                                        <td>테스트-1</td>
                                        <td>홍길*</td>
                                        <td>학습완료</td>
                                        <td>2021-03-02 15:22:11</td>
                                        <td>12m 34s</td>
                                        <td>0.992/0.224</td>
                                        <td>CPU : 1Core / Memory : 2GB / GPU : 0EA / DISK : 12MB</td>
                                        <td>
                                            <button type="button" class="btn xs round cGrayDark" @click="modelList = false;modelDetail = true;modelNew = false;"><span class="text">보기</span></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div v-if="modelNew">
                        <div class="unitBox">
                            <div class="titArea">
                                <div class="tit lightBold">기본 정보</div>
                            </div>
                            <div class="inpWrap percentW">
                                <div class="inpBox w42p">
                                    <span class="inpTit">학습작업명</span>
                                    <input type="text" class="l inp" placeholder="학습 작업명을 입력하세요" />
                                </div>                            
                                <div class="inpBox w16p">
                                    <span class="inpTit">언어타입</span>
                                    <select class="l inp customOption">
                                        <option value="">Python</option>
                                    </select>
                                </div>
                                <div class="inpBox w42p fileUploadBox">
                                    <span class="inpTit">실행파일</span>
                                    <input
                                    type="text"
                                    class="inp l"
                                    placeholder="파일을 선택해주세요."
                                    v-bind:value="fileName"
                                    />
                                    <div class="fileUpload">
                                    <input type="file" id="file" @change="fileChange" />
                                    <label class="btn l cBlue iconOnly search" for="file">
                                        <span class="text">파일 선택</span>
                                    </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="unitBox">
                            <div class="titArea">
                                <div class="tit lightBold">자원 설정 <em>(사용가능 시간 : 00h)</em></div>
                            </div>
                            <div class="listSelctWrap type02">
                                <ul class="listSelets">
                                    <!-- active 클래스 추가시 선택 효과가 나타납니다. -->
                                    <li class="w33p active">
                                        <div class="selcteInfoBox">
                                            <span class="tit">Basic</span>
                                            <div class="txtWrap">
                                                <span class="txt">CPU<em>(Core)</em><em class="num">1</em></span>
                                                <span class="txt">Memory<em>(GB)</em><em class="num">2</em></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="w33p">
                                        <div class="selcteInfoBox">
                                            <span class="tit">Normal</span>
                                            <div class="txtWrap">
                                                <span class="txt">CPU<em>(Core)</em><em class="num">2</em></span>
                                                <span class="txt">Memory<em>(GB)</em><em class="num">4</em></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="w33p">
                                        <div class="selcteInfoBox">
                                            <span class="tit">Super</span>
                                            <div class="txtWrap">
                                                <span class="txt">CPU<em>(Core)</em><em class="num">4</em></span>
                                                <span class="txt">Memory<em>(GB)</em><em class="num">16</em></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                        <div class="unitBox">
                            <div class="titArea">
                                <div class="tit lightBold">학습 환경 선택</div>
                            </div>
                            <div class="listSelctWrap type01">
                                <ul class="listSelets">
                                    <!-- active 클래스 추가시 선택 효과가 나타납니다. -->
                                    <li class="w100p active">
                                        <div class="imgBox">
                                            <img :src="require(`@/assets/images/ico_l_Tensorflow.png`)" alt="Tensor Flow 이미지">
                                        </div>
                                        <div class="selcteInfoBox">
                                            <span class="tit">Tensorflow 2.2.1 <em>+</em> Keras 2.3 <em>+</em> Scikit-Learn 0.23</span>
                                            <span class="txt">Tensorflow 2를 기반으로 AI모델 학습 환경</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="unitBox">
                            <div class="btnArea">
                                <button type="button" class="btn xl cGreen w18p mgT10" @click="fnOpen('modal-30')"><span class="text">모델학습 실행</span></button>
                            </div>
                        </div>
                    </div>
                    <div v-if="modelDetail">
                        <div class="unitBox">
                            <div class="titArea">
                                <div class="tit">모델학습<em>분석 IDE에서 생성한 AI모델을 학습시킬 수 있습니다</em></div>
                            </div>
                            <div class="tpArea">
                                <span class="tit pColor01"><em>테스트-1</em>(Started at : 2021-03-12 12:22:44)</span>
                                <div class="btnArea">
                                    <button type="button" class="btn textBtn hasIcon list" @click="modelList = true; modelNew = false; modelDetail = false;"><span class="text">목록</span></button>
                                    <button type="button" class="btn textBtn hasIcon redo"><span class="text">재실행</span></button>
                                </div>
                            </div>                        
                            <div class="listTable">
                                <table>
                                    <colgroup>
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
                                            <th scope="col">분석환경명3</th>
                                            <th scope="col">Uptime</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">GPUs</th>
                                            <th scope="col">GPUs</th>
                                            <th scope="col">Mems</th>
                                            <th scope="col">Acc.</th>
                                            <th scope="col">Loss</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tensorflow 2.0</td>
                                            <td>2m55.221s</td>
                                            <td>학습완료</td>
                                            <td>0</td>
                                            <td>4</td>
                                            <td>16</td>
                                            <td>0.864</td>
                                            <td>2.156</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="unitBox">
                            <div class="tabWrap type03">
                                <div class="tabHeader">
                                    <ul>
                                        <li v-bind:class="{active: tabActvie2[0].active}"><button @click="fnTab2(tabActvie2[0], tabShow2[0])">기본보기</button></li>
                                        <li v-bind:class="{active: tabActvie2[1].active}"><button @click="fnTab2(tabActvie2[1], tabShow2[1])">로그보기</button></li>
                                    </ul>
                                </div>
                                <div class="tabContainer" v-if="tabShow2[0].active">
                                    <div class="logContainer">
                                        <div class="logBox" style="height: 324px; background: #2b2b2b">
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                            <span class="logTxt">Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log Defalut log</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabContainer" v-if="tabShow2[1].active">
                                    <div class="logContainer">
                                        <div class="logBox" style="height: 324px; background: #2b2b2b">
                                            <span class="logTxt">Show log Show log Show log Show log Show log Show log Show log</span>
                                            <span class="logTxt">Show log Show log Show log Show log Show log Show log Show log</span>
                                            <span class="logTxt">Show log Show log Show log Show log Show log Show log Show log</span>
                                            <span class="logTxt">Show log Show log Show log Show log Show log Show log Show log</span>
                                            <span class="logTxt">Show log Show log Show log Show log Show log Show log Show log</span>
                                            <span class="logTxt">Show log Show log Show log Show log Show log Show log Show log</span>
                                            <span class="logTxt">Show log Show log Show log Show log Show log Show log Show log</span>
                                            <span class="logTxt">Show log Show log Show log Show log Show log Show log Show log</span>
                                            <span class="logTxt">Show log Show log Show log Show log Show log Show log Show log</span>
                                            <span class="logTxt">Show log Show log Show log Show log Show log Show log Show log</span>
                                            <span class="logTxt">Show log Show log Show log Show log Show log Show log Show log</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
                <!-- 공유모델 -->
                <div v-if="tabShow[6].active" class="tabContainer">
                    <div v-if="shareModelList">
                        <div class="titArea">
                            <div class="tit">공유모델<em>만들어진 AI 모델의 Request & Response 테스트를 할 수 있습니다</em></div>
                        </div>
                        <div class="inpWrap">
                            <div class="inpBox">
                                <select class="l inp customOption">
                                    <option value="">전체</option>
                                    <option value="">학습완료</option>
                                    <option value="">등록완료</option>
                                    <option value="">임시저장</option>
                                </select>
                            </div>
                            <div class="inpBox">
                                <input type="text" class="l inp" />
                            </div>
                            <div class="inpBox">
                                <date-picker :date="from" @input="fromDate" />
                                ~
                                <date-picker :date="to" @input="toDate" />
                            </div>
                            <div class="btnArea">
                                <button type="button" class="btn l cAqua iconOnly refresh"><span class="text">새로고침</span></button>
                                <button type="button" class="btn l cBlue iconOnly search"><span class="text">검색</span></button>
                            </div>
                        </div>
                        <div class="flexBox flexEnd tableButtonWrap">
                            <div class="btnArea">
                                <button type="button" class="btn textBtn hasIcon refresh" style="padding-left: 0px;"><span class="text">새로고침</span></button>
                            </div>
                        </div>
                        <div class="listTable">
                            <table>
                                <colgroup>
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
                                        <th scope="col">작업ID</th>
                                        <th scope="col">학습작업명</th>
                                        <th scope="col">등록자</th>
                                        <th scope="col">상태</th>
                                        <th scope="col">시작시간</th>
                                        <th scope="col">소요시간</th>
                                        <th scope="col">Accuracy/Loss</th>
                                        <th scope="col" colspan="2">시스템 리소스</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>121</td>
                                        <td>테스트-1</td>
                                        <td>홍길*</td>
                                        <td>학습완료</td>
                                        <td>2021-03-02 15:22:11</td>
                                        <td>12m 34s</td>
                                        <td>0.992/0.224</td>
                                        <td>CPU : 1Core / Memory : 2GB / GPU : 0EA / DISK : 12MB</td>
                                        <td>
                                            <button type="button" class="btn xs round cGrayDark" @click="shareModelList = false; shareModelDetail = true;"><span class="text">시뮬레이터</span></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div v-if="shareModelDetail">
                        <div class="unitBox">
                            <div class="titArea">
                                <div class="tit">공유모델<em>만들어진 AI 모델의 Request & Response 테스트를 할 수 있습니다.</em></div>
                            </div>
                            <div class="treeTable type02">
                                <div>
                                    <div class="treeHeader">
                                        <span class="tit">Request</span>
                                    </div>
                                    <div class="inpTableListWrap containSubInfo">
                                        <div class="inpTableList" style="height: 410px;">                                    
                                            <table class="inpTable">
                                                <colgroup>
                                                    <col style="width: 50px;">
                                                    <col style="">
                                                    <col style="width: 70px;">
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <td class="order">1</td>
                                                        <td>
                                                            <input type="text" class="inp l w100p" placeholder="공유모델 01" />
                                                        </td>
                                                        <td>
                                                            <button type="button" class="btn l cGrayDark iconOnly delete"><span class="text">추가</span></button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="order">2</td>
                                                        <td>
                                                            <input type="text" class="inp l w100p" placeholder="공유모델 02" />
                                                        </td>
                                                        <td>
                                                            <button type="button" class="btn l cGrayDark iconOnly delete"><span class="text">추가</span></button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="order">3</td>
                                                        <td>
                                                            <input type="text" class="inp l w100p" placeholder="공유모델 03" />
                                                        </td>
                                                        <td>
                                                            <button type="button" class="btn l cGrayDark iconOnly delete"><span class="text">추가</span></button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="order">100</td>
                                                        <td>
                                                            <input type="text" class="inp l w100p" placeholder="공유모델 100" />
                                                        </td>
                                                        <td>
                                                            <button type="button" class="btn l cGrayDark iconOnly delete"><span class="text">추가</span></button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="containSubInfoWrap">
                                            <span class="subInfoTxt">※ Input 데이터 항목 개수만큼 셀을 추가해주세요.</span>
                                            <button class="btn l cBlue iconOnly add"><span class="text">추가</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="sorceViewTitWrap flexBox justifyContent">
                                        <span class="tit">Response</span>
                                        <div class="btnArea">
                                            <button type="button" class="btn textBtn hasIcon enrollment" @click="shareModelList = false; shareModelDetail = false; shareModelAdd = true;"><span class="text">공유모델 등록</span></button>
                                        </div>
                                    </div>
                                    <div class="sorceViewWrap">                                    
                                        <!-- 실제 개발시 style을 제거 해주세요. -->
                                        <div class="sorceView" style="background: #f1f1f1; height: 1000px;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="unitBox">
                            <div class="btnArea bottomBtnWrap">
                                <button type="button" class="btn xl cGreen w18p mgT10"><span class="text">시뮬레이터 실행</span></button>
                                <button type="button" class="btn xl cGrayGreen w18p mgT10"><span class="text">초기화</span></button>
                            </div>
                        </div>
                    </div>
                    <div v-if="shareModelAdd">
                        <div class="unitBox">
                            <div class="flexBox flexEnd tableButtonWrap">
                                <div class="btnArea">
                                    <button type="button" class="btn textBtn hasIcon temporarySave" style="padding-left: 0px;" @click="fnOpen('modal-32')"><span class="text">임시저장</span></button>
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
                                        <th scope="row">등록 구분</th>
                                        <td>
                                            <label class="inpField" for="radio1">
                                            <input type="radio" id="radio1" name="radio_01" v-model="checkToggle" value="new" checked/>
                                            <span class="text">신규</span>
                                            </label>
                                            <label class="inpField" for="radio2">
                                            <input type="radio" id="radio2" name="radio_01" v-model="checkToggle" value="up" @change="checkToggle == 'up' ? fnOpen('modal-33') : false"/>
                                            <span class="text">버전업</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">모델 버전</th>
                                        <td>1.0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">변경 이력</th>
                                        <td>
                                            <textarea class="inp" placeholder="변경 이력 등록"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">모델명<em class="bullet">*</em></th>
                                        <td>
                                            <input type="text" class="inp w100p" placeholder="모델명을 입력해주세요" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">유형</th>
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
                                    <tr>
                                        <th scope="row">개발도구</th>
                                        <td>
                                            <select class="inp">
                                                <option selected>Jupyter</option>
                                                <option>AIDU ez</option>
                                                <option>외부참조모델</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">모델 설명</th>
                                        <td><input type="text" class="inp w100p" placeholder="모델 설명을 입력해주세요" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">썸네일</th>
                                        <td>
                                            <span class="inpGroup">
                                                <input
                                                type="text"
                                                class="inp"
                                                placeholder="파일을 선택해주세요."
                                                v-bind:value="fileName"
                                                />
                                                <span class="fileUpload m">
                                                <input type="file" id="file" @change="fileChange" />
                                                <label class="text" for="file">
                                                    <span class="text">파일 선택</span>
                                                </label>
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">해시 태그</th>
                                        <td><input type="text" class="inp w100p" placeholder="#해시태그를 입력하세요" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">모델 사용법</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">게시 대상</th>                                    
                                        <td>
                                            <select class="inp">
                                                <option>전체공개</option>
                                                <option>기업공개</option>
                                                <option>비공개</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">시뮬레이터 구성</th>
                                        <td>
                                            <input type="text" class="inp" placeholder="" />
                                            <button type="button" class="btn m cWhiteGreen" @click="fnOpen('modal-35')"><span class="text">등록</span></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">프로젝트 오너</th>
                                        <td>
                                            <input type="text" class="inp" value="홍길동" />
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="unitBox">
                            <div class="btnArea bottomBtnWrap">
                                <button type="button" class="btn xl cGreen w18p mgT10" @click="fnOpen('modal-31')"><span class="text">공유모델 등록</span></button>
                                <button type="button" class="btn xl cGrayGreen w18p mgT10" @click="shareModelList = false; shareModelAdd = false; shareModelDetail = true;"><span class="text">취소</span></button>
                            </div>
                        </div>
                    </div>
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
                        <button type="button" class="btn xl cGreen" @click="subFnOpen('modal-3')">
                            <span class="text">등록</span>
                        </button>
                        <button type="button" class="btn xl cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>                    
        <!-- 프로젝트 멤버 추가 알럿/컨펌 팝업 -->
        <div class="layerModalWrap" v-if="subModalShow === 'modal-3'">
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">프로젝트 멤버로 추가하였습니다.</p>
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn m cGreen" @click="subFnClose">
                            <span class="text">확인</span>
                        </button>
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
                            <button id="modla-4"  type="button" class="btn l cWhiteGreen" @click="subFnOpen('modal-4')">
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
        <!-- 프로젝트 멤버 추가 type02 알럿/컨펌 팝업 -->             
        <div class="layerModalWrap" v-if="subModalShow === 'modal-4'">                
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">프로젝트 멤버로 추가하였습니다.</p>
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn m cGreen" @click="subFnClose">
                            <span class="text">확인</span>
                        </button>
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
        <!-- 데이터 카탈로그 관리 팝업 -->
        <div class="layerModalWrap rowFull" v-if="modalShow === 'modal-25'">
            <div class="layerModal">
                <div class="modalHeader">
                    <strong>데이터 카탈로그</strong>
                    <div class="searchArea">
                        <input type="text" class="inp l" placeholder="검색어를 입력하세요."/>
                        <div class="btnArea">
                            <button type="button" class="btn l cBlue iconOnly search">
                                <span class="text">검색</span>
                            </button>
                            <button type="button" class="btn l cGreenGray" @click="subFnOpen('modal-26')">
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
                                                <button type="button" class="btn xs round cGrayWhite" @click="subFnOpen('modal-28')">
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
                                                <button type="button" class="btn xs round cGrayWhite" @click="subFnOpen('modal-28')">
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
                                                <button type="button" class="btn xs round cGrayWhite" @click="subFnOpen('modal-28')">
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
                                                <button type="button" class="btn xs round cGrayWhite" @click="subFnOpen('modal-28')">
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
                                                <button type="button" class="btn xs round cGrayWhite" @click="subFnOpen('modal-28')">
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
        <!-- 데이터 카탈로그 관리 등록 팝업 -->
        <div class="layerModalWrap rowFull" v-if="subModalShow === 'modal-26'">
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
                        <button type="button" class="btn xl cGreen" @click="subFnOpen2('modal-27')">
                            <span class="text">등록</span>
                        </button>
                        <button type="button" class="btn xl cGrayGreen" @click="subFnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>             
        <!-- 데이터 카탈로그 관리 등록 알럿/컨펌 팝업 -->             
        <div class="layerModalWrap" v-if="subModalShow2 === 'modal-27'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">데이터명을 입력해주세요.<br>데이터 파일을 등록해주세요.</p>
                    <!-- <p class="text txtCenter">카탈로그를 등록 하시겠습니까?</p> -->
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn m cGreen" @click="subFnClose2">
                            <span class="text">확인</span>
                        </button>                        
                        <!-- <button type="button" class="btn m cGrayGreen" @click="subFnClose2">
                            <span class="text">취소</span>
                        </button> -->
                    </div>
                </div>
            </div>
        </div>   
        <!-- 데이터 카탈로그 관리 삭제 알럿/컨펌 팝업 -->             
        <div class="layerModalWrap" v-if="subModalShow === 'modal-28'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">선택하신 카탈로그를 삭제 하시겠습니까?</p>                        
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn m cGreen" @click="subFnClose">
                            <span class="text">확인</span>
                        </button>                        
                        <button type="button" class="btn m cGrayGreen" @click="subFnClose">
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
                        <div class="tree" style="height: 405px;">
                            <!-- treeWrap에 open 클래스가 있으면 열립니다. -->
                            <ul class="treeWrap open">
                                <li>
                                    <button type="button" class="treeBtn">데이터 구분</button>
                                    <ul class="treeWrap open">
                                        <li>
                                            <button class="treeBtn">공공행정</button>
                                            <ul class="treeWrap open">
                                                <li>
                                                    <button class="treeBtn">3depth</button>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <button class="treeBtn">공공행정</button>
                                            <ul class="treeWrap">
                                                <li>
                                                    <button class="treeBtn">3depth</button>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <button class="treeBtn">공공행정</button>
                                            <ul class="treeWrap">
                                                <li>
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
                                            <!-- 내림차순 버튼 -->
                                            <!-- <button type="button" class="sortBtn descending"><i class="sortIcon"><span class="hiddenTxt">내림차순 아이콘</span></i></button> -->
                                            <!-- 오름차순 버튼 -->
                                            <!-- <button type="button" class="sortBtn ascending"><i class="sortIcon"><span class="hiddenTxt">오름차순 아이콘</span></i></button> -->
                                            <th scope="col">
                                                <label class="inpField inpOnly">
                                                    <input type="checkbox" />
                                                    <span class="text">checkbox all</span>
                                                </label>
                                            </th>
                                            <th scope="col">포맷<button type="button" class="sortBtn descending"><i class="sortIcon"><span class="hiddenTxt">내림차순 아이콘</span></i></button></th>
                                            <th scope="col">데이터명<button type="button" class="sortBtn descending"><i class="sortIcon"><span class="hiddenTxt">내림차순 아이콘</span></i></button></th>
                                            <th scope="col">사이즈<button type="button" class="sortBtn descending"><i class="sortIcon"><span class="hiddenTxt">내림차순 아이콘</span></i></button></th>
                                            <th scope="col">다운로드<button type="button" class="sortBtn descending"><i class="sortIcon"><span class="hiddenTxt">내림차순 아이콘</span></i></button></th>
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
                        <button id="modal-6" type="button" class="btn xl cGreen" @click="subFnOpen('modal-6')">
                            <span class="text">가져오기</span>
                        </button>
                        <button type="button" class="btn xl cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>           
        <!-- 데이터 카탈로그 알럿/컨펌 팝업 -->             
        <div class="layerModalWrap" v-if="subModalShow === 'modal-6'">                
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">데이터 카탈로그를 선택 해주세요.</p>
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn m cGreen" @click="subFnClose">
                            <span class="text">확인</span>
                        </button>
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
                        <button type="button" class="btn m cGreen" @click="subFnOpen('modal-12')">
                            <span class="text">확인</span>
                        </button>
                        <!-- 중복 알림 메시지 -->
                        <!-- <button type="button" class="btn m cGreen" @click="subFnOpen('modal-13')">
                            <span class="text">확인</span>
                        </button> -->                        
                        <button type="button" class="btn m cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="layerModalWrap" v-if="subModalShow === 'modal-12'">                
                <div class="layerModal conAlertModal">
                    <div class="modalHeader">
                        <strong class="txtCenter">확인 메세지</strong>
                    </div>
                    <div class="modalCnt">
                        <p class="text txtCenter">해당 정보로 등록하시겠습니까?</p>
                    </div>
                    <div class="modalFooter">
                        <div class="btnArea">
                            <button type="button" class="btn m cGreen" @click="subFnClose">
                                <span class="text">확인</span>
                            </button>                        
                            <button type="button" class="btn m cGrayGreen" @click="subFnClose">
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
        <!-- IDE 빠른 생성 팝업 -->             
        <div class="layerModalWrap" v-if="modalShow === 'modal-19'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">새로운 Jupyterlab/AIDU ez를 생성할 수 없습니다.<br>기존 Jupyterlab/AIDU ez 를 종료하신 후<br>새로운 Jupyterlab/AIDU ez 를 생성해주세요</p>
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
        <!-- IDE 자원현황 / 모델학습 자원현황 팝업 -->
        <div class="layerModalWrap" v-if="modalShow === 'modal-21'">            
            <div class="layerModal" style="width: 1200px;">
                <div class="modalHeader">
                    <strong class="txtCenter">자원 현황</strong>
                </div>
                <div class="modalCnt">
                    <div class="cusTomBoxWrap type01 grid4">
                        <div class="cusTomBox bdCGreen gridBox">
                            <div class="unitBox">
                                <ul>
                                    <li>
                                        <div class="listTitWrap"><span class="listTit">분석 IDE</span></div>
                                        <div class="chartWrap">
                                            <div class="chratBox" style="height: 132px; background: #ddd;"></div>
                                        </div>
                                        <div class="chratInfo"><span class="num">44</span>/ 172 <em>Cores</em></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="cusTomBox darkBdCGreen gridBox">
                            <div class="unitBox">
                                <ul>
                                    <li>
                                        <div class="listTitWrap"><span class="listTit">Memory</span></div>
                                        <div class="chartWrap">
                                            <div class="chratBox" style="height: 132px; background: #ddd;"></div>
                                        </div>
                                        <div class="chratInfo"><span class="num">45</span>/ 600 <em>GB</em></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="cusTomBox w25p bdCBlue gridBox">
                            <div class="unitBox">
                                <ul>
                                    <li>
                                        <div class="listTitWrap"><span class="listTit">GPU</span></div>
                                        <div class="chartWrap">
                                            <div class="chratBox" style="height: 132px; background: #ddd;"></div>
                                        </div>
                                        <div class="chratInfo"><span class="num">0</span>/ 0 <em>ea</em></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="cusTomBox darkBdCBlue gridBox">
                            <div class="unitBox">
                                <ul>
                                    <li>
                                        <div class="listTitWrap"><span class="listTit">DISK</span></div>
                                        <div class="chartWrap">
                                            <div class="chratBox" style="height: 132px; background: #ddd;"></div>
                                        </div>
                                        <div class="chratInfo"><span class="num">34</span>/ 950 <em>GB</em></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
        <!-- IDE 종료 팝업 -->             
        <div class="layerModalWrap" v-if="modalShow === 'modal-23'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">분석 IDE를 종료 하시겠습니까?<br>현재 작업 내용은 그대로 유지되며, 향후 IDE 생성하여 사용하시면 됩니다.</p>
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
        <!-- IDE 생성하기 팝업 -->             
        <div class="layerModalWrap" v-if="modalShow === 'modal-24'">                
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">설정하신 정보로 생성하시겠습니까?</p>
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn m cGreen" @click=" ideCreate = false; ideMain = true; fnClose();">
                            <span class="text">확인</span>
                        </button>                        
                        <button type="button" class="btn m cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>
        </div> 
        <!-- 모델 학습 삭제 -->            
        <div class="layerModalWrap" v-if="modalShow === 'modal-29'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">선택하신 학습을 삭제 하시겠습니까?</p>
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
        <!-- 모델학습 실행 --> 
        <div class="layerModalWrap" v-if="modalShow === 'modal-30'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">설정하신 정보로 생성하시겠습니까?</p>
                    <!-- <p class="text txtCenter">학습작업명을 등록해주세요. --><!-- 실행파일을 등록해주세요 --><!-- </p> -->
                    <!-- <p class="text txtCenter">새로운 모델학습을 생성할 수 없습니다.<br>기존 모델학습을 종료하신 후 새로운 모델학습을 생성해주세요</p> -->
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn m cGreen" @click="modelList = true; modelNew = false; modelDetail = false; fnClose();">
                            <span class="text">확인</span>
                        </button>
                        <button type="button" class="btn m cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>
        </div> 
        <!-- 공유 모델 등록 실행 --> 
        <div class="layerModalWrap" v-if="modalShow === 'modal-31'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">모델명/모델설명/모델사용법을 등록해주세요.<!-- / 모델유형을 선택해주세요. --></p>
                    <!-- <p class="text txtCenter">공유모델을 등록하시겠습니까?<br>(관리자 승인 후 등록 됩니다.)</p> -->
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn m cGreen" @click="modelList = true; modelNew = false; modelDetail = false; fnClose();">
                            <span class="text">확인</span>
                        </button>
                        <!-- <button type="button" class="btn m cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button> -->
                    </div>
                </div>
            </div>
        </div> 
        <!-- 공유 모델 임시 저장 실행 --> 
        <div class="layerModalWrap" v-if="modalShow === 'modal-32'">            
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
        <!-- 버전업 -->
        <div class="layerModalWrap" v-if="modalShow === 'modal-33'">            
            <div class="layerModal">
                <div class="modalHeader">
                    <strong class="txtCenter">모델 버전 등록 구분</strong>
                </div>
                <div class="modalCnt">
                    <div class="listTable">
                        <table>
                            <colgroup>
                                <col style="width: 40px;">
                                <col style="width: 50%;">
                                <col>
                                <col>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th colspan="2">모델명</th>
                                    <th>등록일</th>
                                    <th>버전</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label class="inpField inpOnly"><input type="radio" name="radio_check"><span class="text">radio</span></label>
                                    </td>
                                    <td class="txtLeft">Model test - 1</td>
                                    <td>2020-03-01</td>
                                    <td>1.0</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="inpField inpOnly"><input type="radio" name="radio_check"><span class="text">radio</span></label>
                                    </td>
                                    <td class="txtLeft">Model test - 2</td>
                                    <td>2020-03-01</td>
                                    <td>1.0</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="inpField inpOnly"><input type="radio" name="radio_check"><span class="text">radio</span></label>
                                    </td>
                                    <td class="txtLeft">Model test - 3</td>
                                    <td>2020-03-01</td>
                                    <td>1.0</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="inpField inpOnly"><input type="radio" name="radio_check"><span class="text">radio</span></label>
                                    </td>
                                    <td class="txtLeft">Model test - 4</td>
                                    <td>2020-03-01</td>
                                    <td>1.0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn m cGreen" @click="subFnOpen('modal-34')">
                            <span class="text">선택</span>
                        </button>
                        <button type="button" class="btn m cGrayGreen" @click="fnClose">
                            <span class="text">취소</span>
                        </button>
                    </div>
                </div>
            </div>
        </div> 
        <!-- 버전업 알럿/컨펌 팝업 -->
        <div class="layerModalWrap" v-if="subModalShow === 'modal-34'">            
            <div class="layerModal conAlertModal">
                <div class="modalHeader">
                    <strong class="txtCenter">확인 메세지</strong>
                </div>
                <div class="modalCnt">
                    <p class="text txtCenter">버전업할 모델을 선택 해주세요.</p>
                </div>
                <div class="modalFooter">
                    <div class="btnArea">
                        <button type="button" class="btn m cGreen" @click="subFnClose">
                            <span class="text">확인</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 시뮬레이터 구성 등록 -->
        <div class="layerModalWrap rowFull" v-if="modalShow === 'modal-35'">
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
                        <input type="text" class="inp l" placeholder="데이터명" />
                    </dd>
                    </dl>
                    <dl class="unit">
                    <dt>
                        <span class="tit">기본값</span>
                    </dt>
                    <dd>
                        <input type="text" class="inp l" placeholder="샘플 데이터" />
                    </dd>
                    </dl>
                    <dl class="unit">
                    <dt>
                        <span class="tit">데이터 설명</span>
                    </dt>
                    <dd>
                        <input type="text" class="inp l" placeholder="데이터 설명" />
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
                <p class="infoText">
                    ※ 콤보박스에 드롭다운 목록을 등록하시려면 기본값을 콤마(,)로
                    구분하여 입력해주세요.
                </p>
                <div class="unitGroup mgT30">
                    <dl class="unit">
                    <dt>
                        <span class="tit">템플릿 등록</span>
                        <div>
                        <p class="fileText pColor01 mgR20">{{ fileName }}</p>
                        <div class="fileUpload">
                            <input type="file" id="file2" @change="fileChange" />
                            <label class="text" for="file2">
                            <span class="text">파일 선택</span>
                            </label>
                        </div>
                        </div>
                    </dt>
                    <dd>
                        <textarea
                        class="inp"
                        style="height: 140px"
                        placeholder="템플릿 사용법을 적어주세요."
                        ></textarea>
                    </dd>
                    </dl>
                </div>
                </div>
                <div class="modalFooter">
                <div class="btnArea mW">
                    <button type="button" class="btn xl cGreen" @click="fnClose">
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
import DatePicker from "@/components/DatePicker";

export default {
  data() {
      return {
        checkToggle: false,
        inputRangeData: 0,
        modalShow: '',
        subModalShow: '',
        subModalShow2: '',
        ideMain: true,
        ideCreate: false,
        modelList: true,
        modelNew: false,
        modelDetail: false,
        shareModelList: true,
        shareModelDetail: false,
        shareModelAdd: false,
        from: "",
        to: "",
        fileName : '',
        multipleFiles : false,
        list : [{

        }],
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
        ],
        tabShow2: [
            {
                active: true
            },{
                active: false
            }
        ], 
        tabActvie2: [
            {
                active: true
            },{
                active: false
            }
        ]
    }
  },
  components: {
    DatePicker,
  },
  methods: {
    abc(abc) {
        console.log(abc)
    },
    fnOpen: function (id) {
        console.log(id)
        this.modalShow = id;
        document.body.classList.add("modal-open");
    },
    fnClose: function () {
        this.modalShow = null;
        document.body.classList.remove("modal-open");
    },
    subFnOpen: function(id) {
        this.subModalShow = id;
    },
    subFnClose: function () {
        this.subModalShow = null;
    },
    subFnOpen2: function(id) {
        this.subModalShow2 = id;
    },
    subFnClose2: function () {
        this.subModalShow2 = null;
    },
    fnTab(active, show) {// eslint-disable-line no-unused-vars
        this.tabActvie.map(tabActvie => tabActvie.active = false);        
        this.tabShow.map(tabShow => tabShow.active = false);
        active.active = true;
        show.active = true;
    },
    fnTab2(active2, show2) {// eslint-disable-line no-unused-vars
        this.tabActvie2.map(tabActvie2 => tabActvie2.active = false);        
        this.tabShow2.map(tabShow2 => tabShow2.active = false);
        active2.active = true;
        show2.active = true;
    },
    fileChange(e) {
        this.fileName = e.target.files[0].name;
    },
    fileMultipleChange(e) {
        this.multipleFiles = true
        if(this.list[0].text === undefined) {
            this.list.splice(0,1);
        }
        for(let i = 0; i < e.target.files.length; i++) {
            this.list.push({
                text : e.target.files[i].name
            })
        }
    },
    fromDate(dt) {
      this.from = dt;
    },
    toDate(dt) {
      this.to = dt;
    }
  }
}
</script>
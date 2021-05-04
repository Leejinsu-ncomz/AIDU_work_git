<template>
    <div class="rowBox">
        <div class="unitBox">
            <div class="titArea type01">
                <h2 class="tit">AI 교육 컨텐츠</h2>
                <p class="subTit">AI를 업무에 활용하기 위한 다양한 교육 컨텐츠를 학습해보세요.</p>
            </div>
        </div>
        <div class="unitBox">
            <v-sheet class="btnArea mx-auto" max-width="1216">
                <v-slide-group show-arrows>
                    <label for="check01" class="btn toggleSearchBtn">
                        <input id="check01" type="checkbox" checked />
                        <span>All</span>
                    </label>
                    <label for="check02" class="btn toggleSearchBtn">
                        <input id="check02" type="checkbox" />
                        <span>군집</span>
                    </label>
                    <label for="check03" class="btn toggleSearchBtn">
                        <input id="check03" type="checkbox" />
                        <span>이상탐지</span>
                    </label>
                    <label for="check04" class="btn toggleSearchBtn">
                        <input id="check04" type="checkbox" />
                        <span>분류</span>
                    </label>
                    <label for="check05" class="btn toggleSearchBtn">
                        <input id="check05" type="checkbox" />
                        <span>최적화</span>
                    </label>
                    <label for="check06" class="btn toggleSearchBtn">
                        <input id="check06" type="checkbox" />
                        <span>회귀</span>
                    </label>
                    <label for="check07" class="btn toggleSearchBtn">
                        <input id="check07" type="checkbox" />
                        <span>텍스트분석</span>
                    </label>
                    <label for="check08" class="btn toggleSearchBtn">
                        <input id="check08" type="checkbox" />
                        <span>추천</span>
                    </label>
                    <label for="check09" class="btn toggleSearchBtn">
                        <input id="check09" type="checkbox" />
                        <span>온라인 검색</span>
                    </label>
                    <label for="check10" class="btn toggleSearchBtn">
                        <input id="check10" type="checkbox" />
                        <span>JUPITER</span>
                    </label>
                    <label for="check11" class="btn toggleSearchBtn">
                        <input id="check11" type="checkbox" />
                        <span>AIDU</span>
                    </label>
                </v-slide-group>
            </v-sheet>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
       
    })
}
</script>

<style scope>
.v-slide-group__content {justify-content: center;}
</style>
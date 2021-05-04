<template>
    <div class="errorWrap">
        <div class="errorContainer">
            <div class="iconWrap">
                <i class="errorIcon"><span class="hiddenTxt">에러 이미지</span></i>
            </div>
            <div class="titWrap">
                <span class="tit">페이지 오류 안내</span>
                <span class="subTit">이용에 불편을 드려 죄송합니다.<br>잠시후 다시 이용해 주십시오.</span>
            </div>
            <div class="btnArea">
                <button class="btn cGreen xl">확인</button>
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
<style scoped>
.errorWrap {width: 520px;margin: 0 auto;padding: 290px 0px 120px;}
.errorContainer .iconWrap {margin-bottom: 40px;}
.errorIcon {display: inline-block;width: 120px;height: 94px;background: url(../../assets/images/ico_error.png) no-repeat;background-size: 120px auto;}
.errorContainer .titWrap {margin-bottom: 75px;}
.errorContainer .titWrap > * {display: block;color: #0c323d;}
.errorContainer .titWrap .tit {padding-bottom: 10px;line-height: 40px;font-size: 30px;font-weight: 600;}
.errorContainer .titWrap .subTit {line-height: 30px;font-size: 20px;color: #667d85;}
.errorContainer .btnArea {padding: 0px 110px;}
.errorContainer .btnArea button {width: 100%;}
</style>
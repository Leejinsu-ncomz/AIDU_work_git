<template>
  <div class="nczWrap user">    
      <!-- <header id="header" class="header">
        <h1 class="logo">
          <img :src="require(`@/assets/images/logo.png`)" alt="AIDU">
        </h1>
      </header> -->
       <Header></Header>
      <router-view/>
  </div>
</template>

<script>

import Header from './items/header'
export default {
  name: 'UserLayout',
  components: {
    Header
  }
}
</script>

<style scoped src="../../styles/user.css"></style>
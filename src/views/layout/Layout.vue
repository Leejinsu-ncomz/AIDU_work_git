<template>
  <div class="nczWrap">    
      <Header></Header>
      <main ref="content_container" class="contentContainer">
        <router-view/>
        <div class="scrollTopBtnWrap">
          <button class="scrollTopBtn" @click="fnScrollTop"></button>
        </div>
      </main>
      <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from './items/header'
import Footer from './items/footer'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  },
  methods: {
    fnScrollTop() {
      window.scroll({
          top: 0,
          behavior: 'smooth'
      });
    }
  }
}
</script>

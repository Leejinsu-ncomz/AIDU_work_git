<template>
  <div class="nczWrap">    
      <Header></Header>
      <main class="contentContainer">
        <router-view/>
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
  }
}
</script>

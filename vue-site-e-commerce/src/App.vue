<template>
  <div id="nav">
    <Header />
    <Footer />
    <router-view/>
  </div>
  
</template>
<script>
import Header from "./components/Header.vue"
import Footer from './components/Footer.vue'

export default {
  name: '',
  components: {
    Header,
    Footer,
  
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> 
    <router-link to="/about">About us</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link> -->
    <Header />
    <!-- <Homepage /> -->
    <router-view/>
  </div>
  
</template>
<script>
import Header from "./components/Header.vue"
// import Homepage from "./components/Homepage.vue"


export default {
  name: '',
  components: {
    Header,
    // Homepage,
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

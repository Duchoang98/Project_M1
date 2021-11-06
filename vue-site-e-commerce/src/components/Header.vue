<template>
  <div class="header" >
    <div class="top">
      <router-link to="/">
        <img src="../assets/LogoSite.png" alt="" class="top-logo" />
      </router-link>
      <input type="text" placeholder="Search..." class="top-input" />
      <button class="button">
        <i class="fas fa-search"></i>
      </button>
      <ul class="top-connexion">
        <router-link to="/Login" >Login</router-link>
        <router-link to="/Register" class="top-connexion__register"> Register </router-link>
      </ul>
    </div>
    <div class="bottom">
      <ul class="bottom-content">
        <router-link to="/">Home</router-link>
        <!-- <li><a href="#">Gender</a></li> -->
        <!-- <button class="caret-down">
          <i class="fas fa-caret-down"> </i>
        </button> -->
        <div class="dropdown">
          <button class="dropbtn">Category</button>
          <div class="dropdown-content">
            <a href="#">Eastearn</a>
            <a href="#">Action</a>
            <a href="#">Comedy</a>
            <a href="#">Sci-fi</a>
            <a href="#">Romance</a>
          </div>
        </div>

        <!-- <li><a href="#">Pays</a></li> -->
        
        <!-- <button class="caret-down">
          <i class="fas fa-caret-down"> </i>
        </button> -->
        <router-link class="router-link" to="/About">About us</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
// import { getAuth } from 'firebase/auth'
// const auth = getAuth()
// const user = auth.currentUser()
export default {
  props: {
    
  },
 
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}
.header {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
}

.top {
  margin-left: 200px;
  margin-bottom: 10px;
  display: flex;
  padding-top: 20px;
}
.top-logo {
  cursor: pointer;
}
.top-input {
  margin-left: 90px;
  padding: 15px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 25px 0 0 25px;
  border-right: none;
  width: 30%;
  outline: none;
}

.button {
  width: 3%;
  border: 1px solid #e0e0e0;
  border-left: none;
  border-radius: 0 25px 25px 0;
  background-color: white;
  outline: none;
}

.fas.fa-search {
  font-size: 17px;
  color: rgba(247, 164, 9, 0.952);
}

.top-connexion {
  padding: 10px 80px;
  display: flex;
  align-items: center;
}

.top-connexion li {
  display: inline-block;
  margin-left: 20px;
}

.top-connexion a {
  color: #4a4a4a;
  padding: 10px;
}

.top-connexion__register {
  border: 2px solid rgba(244, 192, 125, 0.678);
  background-color: rgb(255, 115, 0);
  border-radius: 25px;
}

.top-connexion a:hover {
  color: rgba(244, 163, 125, 0.815);
}

.bottom {
  width: 100%;
  height: 50px;
  background-color: rgba(0, 89, 255, 0.712);
}

.bottom a {
  color: white;
}

.caret-down {
  border: none;
  background-color: transparent;
  color: white;
}

.bottom-content {
  padding: 10px 10px;
  margin-left: 200px;
  display: flex;
  justify-content: baseline;
  align-items: center;
}
.bottom-content li {
  display: inline-block;
  padding: 0 32px;
}

.router-link {
  display: inline-block;
  padding: 0 32px;
}

.dropbtn {
  background-color: transparent;
  color: white;
  padding: 8px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
  margin-left: 20px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>

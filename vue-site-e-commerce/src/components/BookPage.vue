<template>
  <div class="wrapper">
    <div class="container">
      <div class="left">
        <img
          src="https://cdn.scanmanga.eu/img/manga/Solo_Leveling_1_4690.jpg"
        />
        <div class="left-information">
          <div class="left-author">
            <i class="fas fa-pencil-alt"></i>
            Duc Hoang
          </div>
          <div class="left-type">
            <i class="fas fa-folder-open"></i>
            Romantic, Action
          </div>
          <div>
            <i class="fas fa-eye"></i>
            16000
          </div>
          <div>
            <i class="fas fa-star"></i>
            4.7/5
          </div>
          <div>
            <i class="fas fa-sync"></i>
            11/7/2021 2:25AM
          </div>
        </div>
      </div>
      <div class="center">
        <p class="center-title">
          Solo levelling
        </p>
        <div class="center-chapter">
          <router-link to="/Chapitre">
            <i class="fas fa-stream"></i>
            Chapter list
          </router-link>
        </div>
        <hr width="70%" align="center" />
        <div class="center-read">
          <router-link to="/Read">
            <i class="fas fa-book"></i>
            Read more
          </router-link>
        </div>
        <hr width="70%" align="center" />
        <div class="center-description">
          <p>Solo leveling</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque
            incidunt magnam hic. Ad repellat ducimus fugiat commodi enim, harum
            in natus nam tempora assumenda. Facere corporis dicta veritatis
            consectetur.
          </p>
        </div>
      </div>
      <div class="right">
        <div class="right-head">
          <i class="fas fa-list-alt"></i>
          The best of romance
        </div>
        <hr />
        <router-link to="/Category" class="list">
          <div class="list-item">
            01 : Solo Leveling
          </div>
          <div class="list-eye">
            <i class="fas fa-eye"></i>
            20000
          </div>
        </router-link>
        <hr />
        <router-link to="/Category" class="list">
          <div class="list-item">
            02 : Solo Leveling
          </div>
          <div class="list-eye">
            <i class="fas fa-eye"></i>
            14123
          </div>
        </router-link>
        <hr />
        <router-link to="/Category" class="list">
          <div class="list-item">
            03 : Solo Leveling
          </div>
          <div class="list-eye">
            <i class="fas fa-eye"></i>
            3276
          </div>
        </router-link>
        <hr />
        <router-link to="/Category" class="list">
          <div class="list-item">
            04 : Solo Leveling
          </div>
          <div class="list-eye">
            <i class="fas fa-eye"></i>
            9402
          </div>
        </router-link>
        <hr />
        <router-link to="/Category" class="list">
          <div class="list-item">
            05 : Solo Leveling
          </div>
          <div class="list-eye">
            <i class="fas fa-eye"></i>
            20120
          </div>
        </router-link>
        <hr />
        <div class="right-bottom">
          <div>
            Watch more
            <i class="fas fa-angle-down"></i>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  background-color: #e8e8e8;
}
.container {
  display: flex;
  height: 600px;
}
.left-information {
    margin-top: 10px;
    
}
.center {
  width: 400px;
  margin-left: 15px;
  text-align: center;
}

.center-title {
  font-size: 35px;
  color: #b22222;
  text-align: center;
}

.center-chapter {
  margin-top: 10px;
  font-size: 20px;
  width: 400px;
}
.center-read {
  padding: 10px;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  /* background-color: #4b0082; */
  width: 400px;
}
.center-line {
  border: solid;
  border-radius: 10%;
  width: 230px;
  height: 0.01px;
  background-color: black;
  margin-top: 10px;
}
.right {
  margin-left: 15px;
}
.right-head {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
}
.list {
    color: black;
}
.list-eye {
  font-size: 12px;
  margin-left: 27px;
}
.right-bottom {
  text-align: center;
}

.right-bottom {
  padding: 10px;
  border-radius: 50%;
  background-color: #707070;
  width: 150px;
  margin: 0 auto;
}

.right-bottom :hover {
  text-decoration: underline;
  cursor: pointer;
  color: white;
}
</style>

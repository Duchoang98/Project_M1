<template>
  <div>
    <div class="container">
      <div class="left">
        <div class="left-head">
          Romance
        </div>
        <hr />
        <div class="left-tags">
          <router-link to="/Category" class="left-tags__item"
            >The best of romance</router-link
          >
          <router-link to="/Category" class="left-tags__item2"
            >Romance full</router-link
          >
          <router-link to="/Category" class="left-tags__item3"
            >New Romance</router-link
          >
          <router-link to="/Category" class="left-tags__item4"
            >Romance classic</router-link
          >
        </div>
        <hr class="left-cross" />
        <div class="left-content">
          <div class="left-content__first">
            <a href="#" class="left-image">
              <img
                src="https://cdn.scanmanga.eu/img/manga/Solo_Leveling_1_4690.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="left-content__second">
            <router-link to="/BookPage" class="left-content__title">
              Solo leveling
            </router-link>
            <div class="left-content__author">
              <i class="fas fa-pencil-alt"></i>
              Duc Hoang
            </div>
          </div>
          <div class="left-content__third">
            <div>
              Chapitre 1024
            </div>
            <div class="left-content__minute">
              19 minutes ago
            </div>
          </div>
        </div>
        <div class="left-content">
          <div class="left-content__first">
            <a href="#" class="left-image">
              <img
                src="https://cdn.scanmanga.eu/img/manga/Solo_Leveling_1_4690.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="left-content__second">
            <router-link to="/BookPage" class="left-content__title">
              Senryuu Shoujo
            </router-link>
            <div class="left-content__author">
              <i class="fas fa-pencil-alt"></i>
              Duc Hoang
            </div>
          </div>
          <div class="left-content__third2">
            <div>
              Full
            </div>
            <div class="left-content__minute">
              1 hour ago
            </div>
          </div>
        </div>
        <div class="left-content">
          <div class="left-content__first">
            <a href="#" class="left-image">
              <img
                src="https://cdn.scanmanga.eu/img/manga/Solo_Leveling_1_4690.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="left-content__second">
            <router-link to="/BookPage" class="left-content__title">
              No buku
            </router-link>
            <div class="left-content__author">
              <i class="fas fa-pencil-alt"></i>
              Duc Hoang
            </div>
          </div>
          <div class="left-content__third3">
            <div>
              Full
            </div>
            <div class="left-content__minute">
              42 minutes ago
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet culpa
          quam tenetur beatae consequatur est non iste odio error, delectus nam
          aperiam. Id sunt placeat distinctio in doloribus dolor dolorum!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          minima deserunt tempore id magni fugit eum cumque asperiores molestiae
          hic? Quasi, magni! Laborum pariatur quaerat quam numquam nobis officia
          delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          earum incidunt omnis, aliquid natus voluptatibus beatae sit ullam
          repellat pariatur quo quibusdam nulla mollitia dolor et cum! Impedit,
          ipsum ex? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Enim quis quae nobis laboriosam modi consequatur illo impedit
          voluptate hic eum, repellendus officiis unde eligendi, dignissimos
          suscipit quasi, voluptatem dolorum. Beatae. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Quibusdam, velit? Deserunt unde
          vitae molestias quae vero earum perspiciatis qui, dolore repudiandae
          autem voluptatibus dignissimos odio sint voluptatem perferendis magni
          minima!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  background-color: #e8e8e8;
}
.container {
  height: 600px;
  display: flex;
}

.left-head {
  font-size: 25px;
  color: #d2691e;
  margin-top: 10px;
  text-transform: uppercase;
}

.left-tags {
  display: flex;
}

.left-tags__item {
  background-color: #d2b48c;
  border-radius: 3px;
  color: black;
}

.left-tags__item2 {
  margin-left: 10px;
  background-color: #d2b48c;
  border-radius: 3px;
  color: black;
}
.left-tags__item3 {
  margin-left: 10px;
  background-color: #d2b48c;
  border-radius: 3px;
  color: black;
}
.left-tags__item4 {
  margin-left: 10px;
  background-color: #d2b48c;
  border-radius: 3px;
  color: black;
}

.left-cross {
  border: none;
  border-top: 1px dashed #ff0000;
  color: #fff;
  background-color: #fff;
  height: 1px;
}

.left-content {
  display: flex;
}

.left-content__first {
  flex-shrink: 0;
}

.left-content__title {
  font-weight: bold;
  color: rgba(0, 0, 0, 0.712);
}

.left-content__second {
  margin-left: -120px;
}

.left-content__third {
  margin-left: 160px;
}
.left-content__third2 {
  margin-left: 137px;
}
.left-content__third3 {
  margin-left: 162px;
}

img {
  width: 40%;
  height: 50%;
  object-fit: cover;
}

.left-content__author {
  font-size: 15px;
}

.left-content__minute {
  font-style: italic;
  font-size: 15px;
  /* margin-top: 5px; */
}

.right {
  margin-left: 15px;
  width: 400px;
}
</style>

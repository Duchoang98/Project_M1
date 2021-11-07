<template>
  <div class="comic-card">
    <div class="comic-image"></div>
    <div class="comic-information">
      <div class="comic-information__top">
        <p class="name">
          Solo leveling
        </p>
        <router-link to="/BookPage"> Read more</router-link>
        <p class="note">
          4.5
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComicCard",
};
</script>

<style scoped>
.comic-card {
  width: 20%;
  height: 60vh;
}

.comic-image {
  background-image: url("https://cdn.scanmanga.eu/img/manga/Solo_Leveling_1_4690.jpg");
  height: 70%;
  background-size: cover;
  background-position: initial;
  cursor: pointer;
}

.comic-information__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}
.note {
  font-weight: bold;
  font-size: 14px;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 0, 128);
  height: 30px;
  width: 30px;
  color: white;
}
</style>

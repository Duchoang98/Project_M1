<template>
  <div>
    <h2>
      Gender 1
    </h2>
    <div class="wrapper-card">
      <ComicCard v-for="(comic, index) in 4" :key="index" />
    </div>
  </div>
</template>

<script>
import ComicCard from "./ComicCard.vue";

export default {
  name: "ComicRow",
  components: {
    ComicCard,
  },
};
</script>

<style scoped>
.wrapper-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>

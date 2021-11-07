<template>
  <div>
    <ComicRow />
  </div>
  
</template>

<script>
import ComicRow from "./ComicRow.vue";
import BDD from "../BDD";
// import Login from "./Login.vue";
export default {
  name: "Homepage",
  components: {
    ComicRow,
    // Login
  },
  setup() {
    console.log(BDD);
  },
};
</script>
<style scoped></style>

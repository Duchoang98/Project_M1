<template>
  <div>
    <ComicRow />
  </div> 
  
</template>

<script>
import ComicRow from "../components/ComicRow.vue";
import BDD from "../BDD";
export default {
  name: "Homepage",
  components: {
    ComicRow,
  },
  setup() {
    console.log(BDD);
  },
};
</script>
<style scoped></style>

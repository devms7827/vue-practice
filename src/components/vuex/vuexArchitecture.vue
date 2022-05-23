<template>
  <div class="p-3">
    <h4>Basic Vuex Architecture</h4>
    <img :src="image" alt="Vuex Architecture" class="image" />
  </div>
</template>

<script>
export default {
  name: "VuexArchitecture",
  data() {
    return {
      image: require("@/assets/vuex-architecture.png"),
    };
  },
};
</script>

<style scoped>
.image {
  width: 50%;
}
</style>

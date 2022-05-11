<template>
  <div>
    <button class="btn btn-danger btn-lg" @click="clearAllTasks">
      <i class="fa-solid fa-trash fs-6 button-icon"></i> Clear
    </button>
  </div>
</template>

<script>
export default {
  name: "HeaderButton",
  methods: {
    clearAllTasks() {
      this.$emit("clear-all-tasks");
    },
  },
};
</script>

<style scoped>
.button-icon {
  position: relative;
  bottom: 1.5px;
  margin-right: 0.3rem;
}
</style>

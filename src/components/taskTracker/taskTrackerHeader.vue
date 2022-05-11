<template>
  <div class="task-tracker-header">
    <h2 class="mt-2">Task Tracker</h2>
    <HeaderButton @clear-all-tasks="clearAllTasks" />
  </div>
</template>

<script>
import HeaderButton from "@/components/taskTracker/headerButton.vue";

export default {
  name: "TaskTrackerHeader",
  components: {
    HeaderButton,
  },
  methods: {
    clearAllTasks() {
      this.$emit("clear-all-tasks");
    },
  },
};
</script>

<style scoped>
.task-tracker-header {
  padding: 1rem 1.5rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

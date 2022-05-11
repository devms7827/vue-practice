<template>
  <div class="task-tracker-footer">
    <div>Copyright <i class="fa-solid fa-copyright"></i> 2022</div>
    <div><router-link to="/about">About</router-link></div>
  </div>
</template>

<script>
export default {
  name: "TaskTrackerFooter",
};
</script>

<style scoped>
.task-tracker-footer {
  padding: 1.5rem 0;
}
</style>

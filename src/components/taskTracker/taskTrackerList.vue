<template>
  <div class="task-tracker-list">
    <div v-if="taskList.length > 0">
      <div v-for="task in taskList" :key="task.id">
        <TaskPreview
          :id="task.id"
          :name="task.name"
          :dateTime="task.dateTime"
          :reminder="task.reminder"
          @remove-task-by-id="removeTaskById"
          @toggle-reminder="toggleTaskReminderById"
        />
      </div>
    </div>

    <div v-else>
      <NoTasksAvailable />
    </div>
  </div>
</template>

<script>
import TaskPreview from "@/components/taskTracker/taskPreview.vue";
import NoTasksAvailable from "@/components/taskTracker/noTasksAvailable.vue";

export default {
  name: "TaskTrackerList",
  props: {
    taskList: { type: Array, required: true },
  },
  components: {
    TaskPreview,
    NoTasksAvailable,
  },
  methods: {
    removeTaskById(taskId) {
      this.$emit("remove-task-by-id", taskId);
    },
    toggleTaskReminderById(taskId) {
      this.$emit("toggle-reminder", taskId);
    },
  },
};
</script>

<style scoped>
.task-tracker-list {
  padding: 1rem 1.5rem;
  background-color: whitesmoke;
}
</style>

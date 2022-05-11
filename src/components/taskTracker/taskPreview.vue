<template>
  <!-- This can also be used -->
  <!-- :class="[reminder ? 'reminder' : '', 'task-preview', 'shadow.sm']" -->
  <div
    :id="id"
    :title="getPreviewTitle"
    class="task-preview shadow-sm"
    :class="{ reminder }"
    @dblclick="toggleTaskReminderById(id)"
  >
    <div class="preview-title">
      <h5 class="my-1 fw-bold">
        <i class="fa-solid fa-calendar-check me-1 text-success"></i>
        {{ name }}
      </h5>

      <button type="button" class="btn" @click="removeTaskById(id)">
        <i class="fa-solid fa-circle-xmark fs-5 text-danger"></i>
      </button>
    </div>

    <div class="mb-1">{{ getDateTimeString }}</div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "TaskPreview",
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    dateTime: { type: String, required: true },
    reminder: { type: Boolean, required: true },
  },
  computed: {
    getPreviewTitle() {
      return `Reminder: ${
        this.reminder ? "On" : "Off"
      }, Double click to toggle reminder!`;
    },
    getDateTimeString() {
      const date = moment(this.dateTime).format("dddd, MMMM Do YYYY");
      const time = moment(this.dateTime).format("h:mm A");
      return `${date} at ${time}`;
    },
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
.task-preview {
  background-color: lightgrey;
  text-align: left;
  padding: 0.8rem 1.5rem;
  margin: 1rem 0;
}

.preview-title {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.reminder {
  border-left: 7px solid green;
}
</style>

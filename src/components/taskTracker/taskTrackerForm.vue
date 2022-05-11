<template>
  <div class="task-tracker-form">
    <form @submit.prevent="saveTask">
      <div class="custom-form-element">
        <label for="name">Task</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter task name"
          class="form-control"
          v-model="task.name"
        />
      </div>

      <div class="custom-form-element">
        <label for="dateTime">Date &amp; Time</label>
        <input
          type="datetime-local"
          name="dateTime"
          id="dateTime"
          class="form-control"
          v-model="task.dateTime"
        />
      </div>

      <div class="custom-form-element mt-4 form-check">
        <label for="reminder" class="form-check-label">Set Reminder</label>
        <input
          type="checkbox"
          name="reminder"
          id="reminder"
          v-model="task.reminder"
          class="form-check-input"
        />
      </div>

      <div>
        <input
          type="submit"
          value="Save Task"
          class="form-control btn btn-success fw-bold"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TaskTrackerForm",
  data() {
    return {
      task: {
        name: "",
        dateTime: "",
        reminder: false, // by default, no reminder
      },
    };
  },
  methods: {
    saveTask() {
      // Form validation:
      if (this.task.name === "" || this.task.dateTime === "") {
        alert("Please fill all the details!");
        return;
      }

      const task = { ...this.task };
      this.$emit("save-task-details", task);

      this.resetTaskForm();
    },
    resetTaskForm() {
      this.task.name = "";
      this.task.dateTime = "";
      this.task.reminder = false;
    },
  },
};
</script>

<style scoped>
.task-tracker-form {
  /* background-color: lightgrey; */
  padding: 1rem 1.5rem;
  text-align: left;
}

.custom-form-element {
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
  letter-spacing: 0.8px;
  font-size: 1.05rem;
  margin-bottom: 0.2rem;
}
</style>

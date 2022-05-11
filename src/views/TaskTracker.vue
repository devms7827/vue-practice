<template>
  <div class="task-tracker">
    <TaskTrackerHeader @clear-all-tasks="clearAllTasks" />
    <TaskTrackerForm @save-task-details="saveNewTask" />
    <TaskTrackerList
      :taskList="taskList"
      @remove-task-by-id="removeTaskById"
      @toggle-reminder="toggleTaskReminderById"
    />
    <TaskTrackerFooter />
  </div>
</template>

<script>
import TaskTrackerHeader from "@/components/taskTracker/taskTrackerHeader.vue";
import TaskTrackerForm from "@/components/taskTracker/taskTrackerForm.vue";
import TaskTrackerList from "@/components/taskTracker/taskTrackerList.vue";
import TaskTrackerFooter from "@/components/taskTracker/taskTrackerFooter.vue";

export default {
  name: "TaskTracker",
  components: {
    TaskTrackerHeader,
    TaskTrackerForm,
    TaskTrackerList,
    TaskTrackerFooter,
  },
  data() {
    return {
      taskList: [
        {
          id: "task3",
          name: "Sample task 3",
          dateTime: "2022-06-13T08:30",
          reminder: true,
        },
        {
          id: "task2",
          name: "Sample task 2",
          dateTime: "2022-06-13T08:30",
          reminder: false,
        },
        {
          id: "task1",
          name: "Sample task 1",
          dateTime: "2022-05-10T08:00",
          reminder: true,
        },
      ],
    };
  },
  methods: {
    generateTaskId() {
      return `task-${Math.random().toString(36).substr(2, 6)}`;
    },
    saveNewTask(details) {
      const id = this.generateTaskId();

      this.taskList.unshift({
        id,
        ...details,
      });
    },
    clearAllTasks() {
      const { taskList } = this;
      if (taskList.length > 0) this.taskList.length = 0;
      else alert("No tasks are present to be cleared!");
    },
    removeTaskById(taskId) {
      if (confirm("Are you sure you want to remove this task?"))
        this.taskList = this.taskList.filter((task) => task.id !== taskId);
    },
    toggleTaskReminderById(taskId) {
      this.taskList.map((task) => {
        if (task.id === taskId) task.reminder = !task.reminder;
      });
    },
  },
};
</script>

<style scoped>
.task-tracker {
  border: 2px solid #06113c;
  border-radius: 5px;
  width: 30%;
  position: relative;
  left: 35%;
  background-color: #f1eee9;
}
</style>

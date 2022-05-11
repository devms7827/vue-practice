<template>
  <div class="p-3">
    <h4 class="mb-3">Basic Event Handling</h4>

    <p>
      This component will show the basic event handling concept in vue.js with a
      normal counter example!
    </p>

    <div class="mb-2">
      <h5 class="mb-4">Count: {{ count }}</h5>

      <button class="btn btn-success me-3" @click="this.count += 1">
        <i class="fa-solid fa-circle-plus me-1"></i> Increase
      </button>

      <button class="btn btn-danger" @click="count -= 1">
        <i class="fa-solid fa-circle-minus me-1"></i> Decrease
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicEventHandling",
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <div class="p-3">
    <h4 class="mb-3">Static Props Component</h4>

    <p>
      This component will catch some basic user details as props and will show
      that static data passed!
    </p>

    <div>
      <p class="mb-2">
        <strong>User Details:</strong>
      </p>
      <div>Name: {{ name }}</div>
      <div>Age: {{ age }}</div>
      <div>Designation: {{ designation }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StaticPropComponent",
  props: {
    name: { type: String, required: true },
    age: { type: String, required: true },
    designation: { type: String, required: true },
  },
};
</script>

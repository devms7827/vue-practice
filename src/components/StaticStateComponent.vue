<template>
  <div class="p-3">
    <h4 class="mb-3">Static State Component</h4>

    <p>
      This component will store some data as static/state data inside and will
      show the state data directly!
    </p>

    <div>
      <div class="mb-2">
        <strong>Customer Details:</strong>

        <div>Name: {{ this.name }}</div>
        <div>Age: {{ this.age }}</div>
        <div>Profession: {{ this.profession }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StaticStateComponent",
  data: function () {
    return {
      name: "Kapil Dev",
      age: 59,
      profession: "Cricketer",
    };
  },
};
</script>

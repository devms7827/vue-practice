<template>
  <img
    v-bind:src="selectedVariant.image"
    :alt="selectedVariant.name"
    :class="{
      'out-of-stock-img': !selectedVariant.inventory,
    }"
  />
</template>

<script>
export default {
  name: "ProductImage",
  props: {
    selectedVariant: { type: Object, required: true },
  },
};
</script>

<style scoped>
img {
  border: 10px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  padding: 15px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.out-of-stock-img {
  opacity: 0.5;
}
</style>

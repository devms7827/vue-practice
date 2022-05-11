<template>
  <!-- Product -->
  <div class="card mb-5">
    <div class="card-body">
      <h1 class="card-title">
        {{ title }}
      </h1>

      <!-- Product-Cart -->
      <ProductCart :cart="cart" @remove-cart-item="removeCartItem" />

      <div class="card-text mt-5">
        <div class="row">
          <!-- Product Image -->
          <div class="col-5">
            <ProductImage :selectedVariant="selectedVariant" />
          </div>

          <!-- Product Details -->
          <div class="col-4 fs-5" style="text-align: left">
            <ProductDetails
              :getPageTitle="getPageTitle"
              :selectedVariant="selectedVariant"
              :variants="variants"
              @update-current-variant="updateCurrentVariant"
              @add-cart-item="addCartItem"
            />
          </div>

          <!-- Product Controls -->
          <div class="col-3">
            <div class="card">
              <div class="card-body">
                <ProductControls
                  :selectedVariant="selectedVariant"
                  @increase-inventory="increaseInventory"
                  @decrease-inventory="decreaseInventory"
                  @toggle-on-sale="toggleOnSale"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <ProductReviews :reviews="reviews" @save-review="saveReview" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCart from "@/components/socks/productCart.vue";
import ProductImage from "@/components/socks/productImage.vue";
import ProductDetails from "@/components/socks/productDetails.vue";
import ProductControls from "@/components/socks/productControls.vue";
import ProductReviews from "@/components/socks/productReviews.vue";

export default {
  name: "SocksCart",
  components: {
    ProductCart,
    ProductImage,
    ProductDetails,
    ProductControls,
    ProductReviews,
  },
  data() {
    return {
      title: "Socks Cart",
      cart: 0,
      currentVariant: 0, // 0 or 1 for green and blue respectively
      brand: "Vue Store",
      product: "Socks",
      variants: [
        {
          id: 0,
          image: require("../assets/socks_green.jpeg"),
          name: "Green Socks",
          inventory: 10,
          color: "green",
          features: ["60% Cotton", "25% Wool", "15% Polyester"],
          isOnSale: true,
        },
        {
          id: 1,
          image: require("../assets/socks_blue.jpeg"),
          name: "Blue Socks",
          inventory: 0,
          color: "blue",
          features: ["40% Cotton", "35% Wool", "25% Polyester"],
          isOnSale: false,
        },
      ],
      reviews: [],
    };
  },

  methods: {
    addCartItem() {
      this.cart++;
    },
    removeCartItem() {
      this.cart--;
    },
    updateCurrentVariant(variantId) {
      this.currentVariant = variantId;
    },
    increaseInventory() {
      this.selectedVariant.inventory++;
    },
    decreaseInventory() {
      if (this.selectedVariant.inventory > 0) this.selectedVariant.inventory--;
    },
    toggleOnSale() {
      this.selectedVariant.isOnSale = !this.selectedVariant.isOnSale;
    },
    saveReview(review) {
      this.reviews.push(review);
    },
  },

  computed: {
    getPageTitle() {
      return `${this.brand} - ${this.product}`;
    },
    selectedVariant() {
      return this.variants[this.currentVariant];
    },
  },
};
</script>

<style scoped>
.custom-card {
  width: 30%;
  left: 35%;
}
</style>

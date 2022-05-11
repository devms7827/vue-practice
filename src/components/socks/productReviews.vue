<template>
  <div class="product-reviews">
    <!-- Reviews -->
    <div v-if="reviews.length > 0" class="mb-5">
      <h4 class="mb-3">Product Reviews:</h4>

      <div class="row">
        <div
          class="col-4 mb-4"
          v-for="(review, index) in reviews"
          :key="review.id"
        >
          <div
            class="text-white bg-success bg-gradient p-3 rounded-2 shadow-lg"
          >
            <p class="fs-5 fw-bold fst-italic">
              <i class="fa-solid fa-user me-2"></i> {{ review.title }}
            </p>

            <p>{{ review.details }}</p>

            <p>
              Rating:

              <span
                v-for="n in getStarsValue(index)"
                :key="`rating-${review.id}-star-p-${n}`"
                class="ms-2"
              >
                <i class="fa-solid fa-star text-warning"></i
              ></span>

              <span
                class="ms-2"
                v-for="n in getNonStarsValue(index)"
                :key="`rating-${review.id}-star-n-${n}`"
              >
                <i class="fa-solid fa-star text-light"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Form -->
    <div class="w-25">
      <div class="p-3 bg-info fw-bold fs-5">Post - Product Reviews</div>

      <div class="p-3 bg-info bg-gradient">
        <form @submit.prevent="saveReview">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter review title"
            class="form-control mb-3"
            v-model="review.title"
          />

          <textarea
            name="details"
            id="details"
            placeholder="Enter review details..."
            class="form-control mb-3"
            v-model="review.details"
            rows="4"
          ></textarea>

          <select
            name="rating"
            id="rating"
            class="form-control mb-3"
            v-model.number="review.rating"
          >
            <option value="" disabled selected>Select rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value="Post" class="btn btn-warning mt-3" />

          <input
            type="reset"
            value="Reset"
            class="btn btn-secondary ms-4 mt-3"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductReviews",
  data() {
    return {
      baseRating: 5,
      review: {
        title: "",
        details: "",
        rating: "",
      },
    };
  },
  props: {
    reviews: { type: Array, required: true },
  },
  methods: {
    getStarsValue(reviewIndex) {
      return this.reviews[reviewIndex].rating;
    },
    getNonStarsValue(reviewIndex) {
      return this.baseRating - this.reviews[reviewIndex].rating;
    },
    saveReview() {
      // Validating data before submitting:
      if (
        this.review.title === "" ||
        this.review.details === "" ||
        this.review.rating === ""
      )
        return alert("Please fill all the form fields for the review!");

      const data = { id: this.generateId, ...this.review };
      this.$emit("save-review", data);
      this.resetForm();
    },
    resetForm() {
      this.review.title = "";
      this.review.details = "";
      this.review.rating = "";
    },
  },
  computed: {
    generateId() {
      return `review-${this.reviews.length + 1}`;
    },
  },
};
</script>

<style scoped>
.product-reviews {
  text-align: left;
  margin: 2rem 6rem;
}
</style>

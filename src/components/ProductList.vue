<!-- src/components/ProductList.vue -->
<template>
  <div>
    <div class="products">
      <div class="container">
        <template v-for="product in products">
          <product-item :product="product"></product-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import axios from "axios";

export default {
  name: "product-list",
  data() {
    return {
      products: []
    };
  },
  mounted: function() {
    axios
      .get("http://localhost:8000/fake-api/v1/souledStore/products")
      .then(result => {
        this.products = result.data;
      });
  },
  components: {
    "product-item": ProductItem
  }
};
</script>
<style>
.products {
  background: #f7f8fb;
  padding: 30px 0;
}
</style>

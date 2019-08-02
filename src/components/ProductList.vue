<!-- src/components/ProductList.vue -->
<template>
  <div class="products">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <span>PRODUCTS</span>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="tshirt"
              value="T-shirt"
              v-model="checkedCat"
            />
            <label class="form-check-label" for="tshirt">T Shirts</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="polos"
              value="Polos"
              v-model="checkedCat"
            />
            <label class="form-check-label" for="polos">Polos</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="fullsleeves"
              value="Full sleeves"
              v-model="checkedCat"
            />
            <label class="form-check-label" for="fullsleeves">Full Sleeves</label>
          </div>
        </div>
        <div class="col-md-10">
          <template v-for="product in filteredProducts">
            <product-item :product="product" class="col-12 col-sm-6 col-md-4 pb-3"></product-item>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import axios from "axios";

export default {
  name: "productlist",
  data() {
    return {
      checkedCat: [],
      products: []
    };
  },
  created() {
    axios
      .get("http://localhost:8000/fake-api/v1/souledStore/products")
      .then(result => {
        this.products = result.data;
      });
  },
  computed: {
    filteredProducts() {
      if (!this.checkedCat.length) return this.products;
      return this.products.filter(product =>
        this.checkedCat.includes(product.type)
      );
    }
  },
  components: {
    "product-item": ProductItem
  }
};
</script>
<style>
.products {
  padding: 30px 0;
}
</style>

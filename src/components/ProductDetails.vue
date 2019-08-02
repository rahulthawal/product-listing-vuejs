<template>
  <table class="table table-hover product-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" track-by="id">
        <td v-if="$route.params.productId == product.id">{{product.name}}</td>
        <td v-if="$route.params.productId == product.id">{{product.price}}</td>
        <td v-if="$route.params.productId == product.id">{{product.memprice}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "productdetails",
  data() {
    return {
      products: []
    };
  },
  mounted: function() {
    axios
      .get("http://localhost:8000/fake-api/v1/souledStore/products")
      .then(res => {
        this.products = res.data;
      });
  },
  methods: {}
};
</script>

<style>
</style>
<template>
  <div style="width:20%;
  float:left;
  margin:1%;
  padding:2px;">
    <!--Individual Product-->
    <b-card
      :title="product.name"
      :img-src="product.url"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>Type: {{product.type}}</b-card-text>
      <b-card-text>Price: Rs. {{product.price}}</b-card-text>
      <b-card-text>Exclusive Member Price: Rs. {{product.memprice}}</b-card-text>
      <router-link
        style="background-color: #4CAF50; /* Green */
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          display: inline-block;
          font-size: 16px;"
        :to="'/product/'+product.id"
      >View Product</router-link>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "productitem",
  props: ["product"]
};
</script>
<style>
</style>

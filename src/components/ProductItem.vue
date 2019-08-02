<template>
  <div style="
    width: 30%;
    float:left;
    margin:1%;
    padding:2px;">
    <b-card-group deck>
      <b-card
        :title="product.name"
        :img-src="product.url"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Type: {{product.type}}
          Price: {{product.price}}
          <br />
          Exclusive Member Price: {{product.memprice}}
        </b-card-text>
        <router-link
          style="background-color: #4CAF50; /* Green */
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;"
          :to="'/details/'+product.id"
        >View Product</router-link>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "productitem",
  props: ["product"]
};
</script>

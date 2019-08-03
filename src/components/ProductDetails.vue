<template>
  <div class="row" style="margin: 0px;
    width: 100%;
    padding: 20px;">
    <template v-for="product in products">
      <!-- Check the product id -->
      <template v-if="$route.params.productId == product.id">
        <!--Displaying the Product Image-->
        <div class="card">
          <img style="width:600px;height:600px;" :src="product.url" />
        </div>
        <!--Displaying the Product Name, Price, Exclusive Price-->
        <div class="card" style="width: 40%;
          margin-left: 30px;
          padding: 10px;">
          <h4>{{ product.name }}</h4>
          <p>Price: {{ product.price }}</p>
          <p>Exclusive Price: {{ product.memprice }}</p>
          <div>
            <template>
              <b-form>
                <b-form-group id="input-group-2" label="Coupon Code" label-for="couponCode">
                  <b-form-input
                    id="couponCode"
                    v-model="form.coupon"
                    required
                    placeholder="Enter Coupon Code"
                  ></b-form-input>
                </b-form-group>
              </b-form>
            </template>
            <!-- Coupon Code -->
            <div>Note: The Coupon Code is DIS5</div>
            <b-card v-if="form.coupon ==='DIS5'" class="mt-3" header="Discount Price">
              <div>
                <pre class="m-0">Price After Discount: {{ product.price - 5 }}</pre>
                <pre class="m-0">Exclusive Member Price After Discount: {{ product.memprice - 5 }}</pre>
              </div>
            </b-card>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "productdetails",
  data() {
    return {
      form: {
        coupon: ""
      },
      products: []
    };
  },
  // To get all the products
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
<!--<template>
  <table class="table table-hover product-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Exclusive Member Price</th>
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
<template>
  <div class="preview">
    <div class="row">
      <div class="col-sm-6">
        <template v-for="product in products">
          <template v-if="$route.params.productId == product.id">{{product.name}}</template>
        </template>
      </div>
    </div>
  </div>
</template>-->
<template>
  <div class="col-md-6">
    <template v-for="product in products">
      <template v-if="$route.params.productId == product.id">
        <div class="card">
          <img class="card-img-top" :src="product.url" />
          <div class="card-body">
            <h4 class="card-title">{{ product.name }}</h4>
            <p class="card-text">Price: {{ product.price }}</p>
            <p class="card-text">Exclusive Price: {{ product.memprice }}</p>

            <div>
              <template>
                <b-form>
                  <b-form-group id="input-group-2" label="Coupon Code:" label-for="couponCode">
                    <b-form-input
                      id="couponCode"
                      v-model="form.coupon"
                      required
                      placeholder="Enter Coupon Code"
                    ></b-form-input>
                  </b-form-group>
                </b-form>
              </template>

              <b-card v-if="form.coupon ==='DIS5'" class="mt-3" header="Discount Price">
                <div>
                  <pre class="m-0">Price After Discount: {{ product.price - 5 }}</pre>
                  <pre class="m-0">Exclusive Member Price After Discount: {{ product.memprice - 5 }}</pre>
                </div>
              </b-card>
            </div>
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
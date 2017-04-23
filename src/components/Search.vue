<template>
  <div class="container">

      <div class="row">

          <div class="col-sm-3">
          </div>

          <div class="col-sm-9">
              <template>
                  <div class="products">
                      <div class="product-panel" v-for="product in products">

                          <div class="col-md-4 product">
                          <!-- <div class="product"> -->
                              <div class="image">
                                  <img :src="product.imageURL" class="img-responsive" alt="">
                              </div>
                              <!-- /.image -->
                              <div class="text">
                                  <h3><router-link :to="{ name: 'ProductDetail', params: { id: product.product_id }}">{{ product.name}}</router-link></h3>
                                  <p class="price">${{product.price}}</p>
                                  <p class="buttons">
                                      <a href="shop-detail.html" class="btn btn-default">View detail</a>
                                      <a href="shop-basket.html" class="btn btn-template-main"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                                  </p>
                              </div>
                              <!-- /.text -->
                          </div>
                          <!-- /.product -->
                      </div>
                  </div>
              </template>

          </div>
          <!-- /.col-md-9 -->

          <!-- *** RIGHT COLUMN END *** -->
      </div>
  </div>
  <!-- /.container -->

</template>

<script>

import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      products: []
    }
  },
  mounted() {
    var self = this
    const url = 'http://localhost:3000/search/' + this.$route.params.query;

    axios.get(url, {
            dataType: 'json',
        })
        .then(function(response) {
            self.products = response.data
        })
        .catch(function(error) {
            console.log(error)
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    margin-top: 20px;
  }
</style>

<style scoped>

  /*.products {
    column-count: 3;
    -webkit-column-count: 3;
    column-gap: 0;
    -webkit-column-gap: 0;
  }

  .product-panel {
    padding-right: 15px;
    padding-left: 15px;
  }*/

  img {
    display: inline-block;
    height: 200px;
  }


</style>

<template>

<div id="content">
    <div class="container">

        <div class="row">

            <!-- *** LEFT COLUMN ***
                _________________________________________________________ -->

            <div class="col-sm-3">

                <!-- *** MENUS AND FILTERS ***
                    _________________________________________________________ -->
                <div class="panel panel-default sidebar-menu">

                    <div class="panel-heading">
                        <h3 class="panel-title">Categories</h3>
                    </div>

                    <div class="panel-body">
                        <ul class="nav nav-pills nav-stacked category-menu">
                            <li v-for="category in productCategories">
                                <a href="shop-category.html"> {{category}} </a>
                            </li>
                        </ul>

                    </div>
                </div>

                <div class="panel panel-default sidebar-menu">
                    <div class="panel-heading">
                        <h3 class="panel-title">Brands</h3>
                        <a class="btn btn-xs btn-danger pull-right" href="#"><i class="fa fa-times-circle"></i> <span class="hidden-sm">Clear</span></a>
                    </div>

                    <div class="panel-body">

                        <form>
                            <div class="form-group">

                                <div class="checkbox" v-for="brand in productBrands">
                                    <label>
                                        <input type="checkbox">{{brand}}
                                    </label>
                                </div>
                            </div>
                            <button class="btn btn-default btn-sm btn-template-main"><i class="fa fa-pencil"></i> Apply</button>
                        </form>
                    </div>
                </div>



                <!-- *** MENUS AND FILTERS END *** -->


                <!-- /.banner -->

            </div>
            <!-- /.col-md-3 -->

            <!-- *** LEFT COLUMN END *** -->

            <!-- *** RIGHT COLUMN ***
                _________________________________________________________ -->
            <div class="col-sm-9">
                <template>
                    <div class="products">
                        <div class="product-panel" v-for="product in products">

                            <div class="col-md-4 product">
                            <!-- <div class="product"> -->
                                <div class="image">
                                  <router-link :to="{ name: 'ProductDetail', params: { id: product.product_id }}"><img :src="product.imageURL" class="img-responsive" alt=""></router-link>
                							</router-link>
        
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
                <div class="pages">
                    <p class="loadMore">
                        <a href="#" class="btn btn-template-main"><i class="fa fa-chevron-down"></i> Load more</a>
                    </p>

                    <!-- <ul class="pagination">
                            <li><a href="#">&laquo;</a>
                            </li>
                            <li class="active"><a href="#">1</a>
                            </li>
                            <li><a href="#">2</a>
                            </li>
                            <li><a href="#">3</a>
                            </li>
                            <li><a href="#">4</a>
                            </li>
                            <li><a href="#">5</a>
                            </li>
                            <li><a href="#">&raquo;</a>
                            </li>
                        </ul> -->
                </div>
            </div>
            <!-- /.col-md-9 -->

            <!-- *** RIGHT COLUMN END *** -->
        </div>
    </div>
    <!-- /.container -->
</div>
<!-- /#content -->

</template>

<script>

import axios from 'axios'
import uniq from 'lodash/uniq'

export default {
    name: 'Home',
    mounted: function() {
        this.getProducts()
        console.log('mounted: got here')
    },

    data: function() {
        return {
            message: 'Course List Row',
            products: []
        }
    },
    computed: {
        productCategories() {
                return uniq(this.products.map(p => p.category))
            },
            productBrands() {
                return uniq(this.products.map(p => p.brand))
            }
    },
    methods: {
        getProducts: function() {
            var self = this
            const url = 'http://localhost:3000/products'
            axios.get(url, {
                    dataType: 'json',
                })
                .then(function(response) {
                    // console.log(JSON.stringify(response.data))
                    self.products = response.data
                })
                .catch(function(error) {
                    console.log(error)
                })
        }
    }
}

</script>

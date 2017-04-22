<template>

  <div id="content">
            <div class="container">

                <div class="row">
                    <div class="col-md-12">
                        <p class="text-muted lead">You currently have {{ cartNum }} item(s) in your cart.</p>
                    </div>


                    <div class="col-md-9 clearfix" id="basket">

                        <div class="box">

                            <form method="post" action="shop-checkout1.html">

                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th colspan="2">Product</th>
                                                <th>Quantity</th>
                                                <th>Unit price</th>
                                                <th colspan="2">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in items">
                                                <td>
                                                    <a href="#">
                                                        <!-- <img src="static/img/detailsquare.jpg" alt="White Blouse Armani"> -->
                                                    </a>
                                                </td>
                                                <td><a href="#">{{ item.name }}</a>
                                                </td>
                                                <td>
                                                    <input type="number" v-model:value='item.quantity' class="form-control">
                                                </td>
                                                <td>${{ item.price }}</td>
                                                <td>${{ item.price*item.quantity }}</td>
                                                <td><a href="#"><i class="fa fa-trash-o"></i></a>
                                                </td>
                                            </tr>

                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th colspan="4">Total</th>
                                                <th colspan="2">${{getTotal()}}</th>
                                            </tr>
                                        </tfoot>
                                    </table>

                                </div>
                                <!-- /.table-responsive -->

                                <div class="box-footer">
                                    <div class="pull-left">
                                        <a href="shop-category.html" class="btn btn-default"><i class="fa fa-chevron-left"></i> Continue shopping</a>
                                    </div>
                                    <div class="pull-right">
                                        <button class="btn btn-default"><i class="fa fa-refresh"></i> Update cart</button>
                                        <router-link to='checkout'>
                                          <button type="submit" class="btn btn-template-main">Proceed to checkout <i class="fa fa-chevron-right"></i></button>
                                        </router-link>

                                        <!-- > -->
                                    </div>
                                </div>

                            </form>

                        </div>
                        <!-- /.box -->
                    </div>
                    <!-- /.col-md-9 -->

                    <div class="col-md-3">
                        <div class="box" id="order-summary">
                            <div class="box-header">
                                <h3>Order summary</h3>
                            </div>
                            <p class="text-muted">Shipping and additional costs are calculated based on the values you have entered.</p>

                            <div class="table-responsive">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td>Order subtotal</td>
                                            <th>$446.00</th>
                                        </tr>
                                        <tr>
                                            <td>Shipping and handling</td>
                                            <th>$10.00</th>
                                        </tr>
                                        <tr>
                                            <td>Tax</td>
                                            <th>$0.00</th>
                                        </tr>
                                        <tr class="total">
                                            <td>Total</td>
                                            <th>$456.00</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                    <!-- /.col-md-3 -->

                </div>

            </div>
            <!-- /.container -->
        </div>
        <!-- /#content -->
</template>

<script>

import axios from 'axios';

export default {
  data () {
    return {
      total: 0
    }
  },
  methods: {
    getTotal() {
      let total = 0
      for(let item of this.items) {
        total += item.price*item.quantity
      }
      return total
    }
  },
  mounted() {
    if(this.isLogged()) {
      var self = this;
      axios.get('http://localhost:3000/carts/' + this.user_id)
      .then(function(response) {
          let items = response.data;
          self.cartNum = items.length;

          for(let item of items) {
            axios.get('http://localhost:3000/products/' + item.product_id)
                .then((response) => {
                    let product = response.data;
                    item.name = product.name;
                    item.price = product.price;
                    self.items.push(item);
                })
                .catch(function(error) {
                    console.log(error);
                });
          }
      })
      .catch(function(error) {
          console.log(error)
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

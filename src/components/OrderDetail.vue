<template>
        <div id="content">
        <div class="container">

            <div class="row">

            <!-- *** LEFT COLUMN *** -->

                    <div class="col-md-9 clearfix" id="customer-order">

                        <p class="lead">Order #{{$route.params.orderID}} was placed on <strong>{{order.date}}</strong> and is currently <strong>{{order.state}}</strong>.</p>
                        <p class="lead text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>

                        <div class="box">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th colspan="2">Product</th>
                                            <th>Quantity</th>
                                            <th>Unit price</th>

                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in items">
                                            <td>
                                                <a href="#">
                                                    <img :src="item.imageURL" alt="hihi">
                                                </a>
                                            </td>
                                            <td><a href="#">{{ item.name }}</a>
                                            </td>
                                            <td> {{ item.quantity}}</td>
                                            <td>${{ item.price }}</td>
                                            <td>${{ item.price*item.quantity }}</td>
                                        </tr>

                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colspan="5" class="text-right">Order total</th>
                                            <th>${{getTotal()}}</th>
                                        </tr>
                                    </tfoot>
                                </table>

                            </div>
                            <!-- /.table-responsive -->

                            <div class="row addresses">
                                <div class="col-sm-8 offset-md-4">
                                    <h3 class="text-uppercase"> Address</h3>
                                    <p>{{order.customer.address}}</p>
                                </div>

                            </div>
                            <!-- /.addresses -->

                        </div>
                        <!-- /.box -->

                    </div>
                    <!-- /.col-md-9 -->

                    <!-- *** LEFT COLUMN END *** -->

                    <!-- *** RIGHT COLUMN *** -->

                    <div class="col-md-3">
                        <!-- *** CUSTOMER MENU ***-->
                        <div class="panel panel-default sidebar-menu">

                            <div class="panel-heading">
                                <h3 class="panel-title">Customer section</h3>
                            </div>

                            <div class="panel-body">

                                <ul class="nav nav-pills nav-stacked">
                                    <li class="active">
                                        <a href="customer-orders.html"><i class="fa fa-list"></i> My orders</a>
                                    </li>
                                    <li>
                                        <a href="customer-wishlist.html"><i class="fa fa-heart"></i> My wishlist</a>
                                    </li>
                                    <li>
                                        <a href="customer-account.html"><i class="fa fa-user"></i> My account</a>
                                    </li>
                                    <li>
                                        <a href="index.html"><i class="fa fa-sign-out"></i> Logout</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <!-- /.col-md-3 -->

                        <!-- *** CUSTOMER MENU END *** -->
                    </div>
                    <!-- *** RIGHT COLUMN END *** -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container -->
        </div>
        <!-- /#content -->


        <!-- *** GET IT ***
_________________________________________________________ -->


</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      order: {}
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
      axios.get('http://localhost:3000/orders/' + this.$route.params.orderID)
      .then(function(response) {

          self.order = response.data;
          let items = response.data.items;

          for(let item of items) {
            axios.get('http://localhost:3000/products/' + item.product_id)
                .then((response) => {
                    let product = response.data;
                    item.name = product.name;
                    item.price = product.price;
                    item.imageURL = product.imageURL;
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

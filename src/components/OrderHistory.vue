<template>

<div id="content">
    <div class="container">
        <div class="row">

        <!-- *** LEFT COLUMN *** -->

            <div class="col-md-9" id="customer-orders">

                <p class="text-muted lead">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>

                    <div class="box">

                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                            <th>Order</th>
                                            <th>Date</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="order in orders">
                                            <th># {{ order.order_id }}</th>
                                            <td>{{ new Date(order.date) }}</td>
                                            <td>$ {{ order.total }}</td>
                                            <td><span class="label label-info">{{ order.state }}</span>
                                            </td>
                                            <td><a class="btn btn-template-main btn-sm" @click='view(order.order_id)'>View</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->

                        </div>
                        <!-- /.box -->

                    </div>
                    <!-- /.col-md-9 -->

                    <!-- *** LEFT COLUMN END *** -->

                    <!-- *** RIGHT COLUMN ***
			 _________________________________________________________ -->

                    <div class="col-md-3">
                        <!-- *** CUSTOMER MENU ***
 _________________________________________________________ -->
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


            </div>
            <!-- /.container -->
        </div>
        <!-- /#content -->

</template>

<script>
import axios from 'axios';

export default {
  //name: 'orderhistory',
  data() {
    return {
      orders : []
    }
  },
  methods: {
    view(orderID) {
      console.log(orderID);
      this.$router.push({name: 'OrderDetail', params: {orderID: orderID}})
    }
  },
  mounted(){
    if(this.isLogged()) {
      var self = this;

      axios.get('http://localhost:3000/orderhistory/' + this.user_id)
      .then(function(response) {
        console.log(response.data);
          self.orders = response.data;
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

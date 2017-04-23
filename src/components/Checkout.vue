<template>

  <div id="content">
            <div class="container">

                <div class="row">

                    <div class="col-md-9 clearfix" id="checkout">

                        <div class="box">
                            <form>

                                <ul class="nav nav-pills nav-justified">
                                    <li class="disabled active"><a ><i class="fa fa-map-marker"></i><br>Contact Info</a>
                                    </li>
                                    <li class="disabled"><a ><i class="fa fa-truck"></i><br>Delivery Method</a>
                                    </li>
                                    <li class="disabled"><a ><i class="fa fa-money"></i><br>Payment Method</a>
                                    </li>
                                    <li class="disabled"><a ><i class="fa fa-eye"></i><br>Order Review</a>
                                    </li>
                                </ul>

                                <div class="content" id="customer">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label for="name">Name</label>
                                                <input v-model='order.customer.name' type="text" class="form-control" id="name">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label for="address">Address</label>
                                                <input v-model='order.customer.address' type="text" class="form-control" id="address">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.row -->

                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label for="email">Email</label>
                                                <input v-model='order.customer.email' type="text" class="form-control" id="email">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label for="telephone">Telephone</label>
                                                <input v-model.number='order.customer.telephone' type="number" class="form-control" id="telephone">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.row -->


                                </div>

                                <div class="content" id="delivery">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="box shipping-method">

                                                <h4>Standard</h4>

                                                <p>Dependable, cost-effective shipping for less-urgent shipments</p>

                                                <div class="box-footer text-center">

                                                    <input type="radio" name="delivery" value="Standard" v-model='order.delivery_method'>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="box shipping-method">

                                                <h4>USPS Next Day</h4>

                                                <p>Get it right on next day - fastest option possible.</p>

                                                <div class="box-footer text-center">

                                                    <input type="radio" name="delivery" value="UPS Next Day" v-model='order.delivery_method'>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <!-- /.row -->

                                </div>

                                <div class="content" id="payment">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="box payment-method">

                                                <h4>Paypal</h4>

                                                <p>We like it all.</p>

                                                <div class="box-footer text-center">

                                                    <input type="radio" name="payment" value="Paypal" v-model='order.payment_method'>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="box payment-method">

                                                <h4>Cash on delivery</h4>

                                                <p>You pay when you get it.</p>

                                                <div class="box-footer text-center">

                                                    <input type="radio" name="payment" value="Cash on delivery" v-model='order.payment_method'>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.row -->

                                </div>

                                <div class="content" id="review">
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
                                </div>
                                <div class="box-footer">
                                    <div class="pull-left">
                                        <a @click="handleBack()" class="btn btn-default"><i class="fa fa-chevron-left"></i>Back</a>
                                    </div>
                                    <div class="pull-right">
                                        <a @click="handleNext()" class="btn btn-template-main">Next<i class="fa fa-chevron-right"></i>
                                        </a>
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
                <!-- /.row -->

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
      current: 0,
      order: {
        customer: {

        },
        items: []
      }
    }
  },
  methods: {
    handleNext() {

      console.log(this.current);
      //
      switch (this.current) {
        case 0:
          $("#delivery").css('display', 'block')
          $("#customer").css('display', 'none')
          break;
        case 1:
          $("#payment").css('display', 'block')
          $("#delivery").css('display', 'none')
          break;
        case 2:
          $("#review").css('display', 'block')
          $("#payment").css('display', 'none')
          break;
      }
      if(this.current < 3) {
          this.current++;
          var num = this.current + 1;
          $('ul.nav li').removeClass('active')
          $('ul.nav li:nth-child(' + num + ')').addClass('active')
      }
      if($('.box-footer a.btn-template-main').text() == 'Finish') {
        this.order.items = []
        for(var item of this.items) {
          this.order.items.push({product_id: item.product_id, quantity: item.quantity});
        }

        this.order.user_id = this.isLogged();
        this.order.date = new Date().getTime();
        this.order.toal = this.getTotal();
        this.order.state = 'Open';
        this.order.delivery_status = 'Unfulfilled';
        this.order.payment_status = 'Unpaid';

        let newOrder = JSON.parse(JSON.stringify(this.order));
        axios.post('http://localhost:3000/orders', newOrder)
        .then((req) => {
          console.log(req.data);
        })
        .catch((err) => {
          console.log(err);
        })

      }
      if(this.current == 3) {
        $('.box-footer a.btn-template-main').text('Finish')
      }




    },
    handleBack() {
      $('.box-footer a.btn-template-main').text('Next >')
      switch (this.current) {
        case 1:
          $("#delivery").css('display', 'none')
          $("#customer").css('display', 'block')
          break;
        case 2:
          $("#payment").css('display', 'none')
          $("#delivery").css('display', 'block')
          break;
        case 3:
          $("#review").css('display', 'none')
          $("#payment").css('display', 'block')
          break;
      }
      if(this.current > 0) {
        this.current--;
        var num = this.current + 1;
        $('ul.nav li').removeClass('active')
        $('ul.nav li:nth-child(' + num + ')').addClass('active')
      }


    },
    getTotal() {
      let total = 0
      for(let item of this.items) {
        total += item.price*item.quantity
      }
      return total;
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
  .box .box-footer {
    padding: 10px;
  }

  #delivery, #payment, #review {
    display: none;
  }
</style>

<template>

  <div id="content">
            <div class="container">

                <div class="row">

                    <div class="col-md-9 clearfix" id="checkout">

                        <div class="box">
                            <form>

                                <ul class="nav nav-pills nav-justified">
                                    <li class="disabled active"><a href="#"><i class="fa fa-map-marker"></i><br>Contact Info</a>
                                    </li>
                                    <li class="disabled"><a href="#"><i class="fa fa-truck"></i><br>Delivery Method</a>
                                    </li>
                                    <li class="disabled"><a href="#"><i class="fa fa-money"></i><br>Payment Method</a>
                                    </li>
                                    <li class="disabled"><a href="#"><i class="fa fa-eye"></i><br>Order Review</a>
                                    </li>
                                </ul>

                                <div class="content" id="customer">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label for="firstname">Name</label>
                                                <input type="text" class="form-control" id="firstname">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label for="lastname">Address</label>
                                                <input type="text" class="form-control" id="lastname">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.row -->

                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label for="company">Email</label>
                                                <input type="text" class="form-control" id="company">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label for="street">Telephone</label>
                                                <input type="text" class="form-control" id="street">
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

                                                    <input type="radio" name="delivery" value="delivery1">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="box shipping-method">

                                                <h4>USPS Next Day</h4>

                                                <p>Get it right on next day - fastest option possible.</p>

                                                <div class="box-footer text-center">

                                                    <input type="radio" name="delivery" value="delivery2">
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

                                                    <input type="radio" name="payment" value="payment1">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="box payment-method">

                                                <h4>Cash on delivery</h4>

                                                <p>You pay when you get it.</p>

                                                <div class="box-footer text-center">

                                                    <input type="radio" name="payment" value="payment3">
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
                                                    <th>Discount</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        White Blouse Armani
                                                    </td>
                                                    <td><a href="#">White Blouse Armani</a>
                                                    </td>
                                                    <td>2</td>
                                                    <td>$123.00</td>
                                                    <td>$0.00</td>
                                                    <td>$246.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Black Blouse Armani
                                                    </td>
                                                    <td><a href="#">Black Blouse Armani</a>
                                                    </td>
                                                    <td>1</td>
                                                    <td>$200.00</td>
                                                    <td>$0.00</td>
                                                    <td>$200.00</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th colspan="5">Total</th>
                                                    <th>$446.00</th>
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

console.log();



export default {
  data () {
    return {
      current: 0
    }
  },
  methods: {
    handleNext() {

      console.log(this.current);
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


    }
  },
  mounted() {

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

<template>

  <div id="content">
       <div class="container">

           <div class="row">

               <!-- *** LEFT COLUMN ***
   _________________________________________________________ -->

               <div class="col-md-9">
                    <h1>{{product.name}}</h1>


                   <div class="row" id="productMain">
                       <div class="col-sm-6">
                           <div id="mainImage">
                               <img :src="product.imageURL" alt="" class="img-responsive">
                           </div>

                           <!-- <div class="ribbon sale">
                               <div class="theribbon">SALE</div>
                               <div class="ribbon-background"></div>
                           </div> -->
                           <!-- /.ribbon -->

                           <!-- <div class="ribbon new">
                               <div class="theribbon">NEW</div>
                               <div class="ribbon-background"></div>
                           </div> -->
                           <!-- /.ribbon -->

                       </div>
                       <div class="col-sm-6">
                           <div class="box">

                               <form>
                                   <div class="sizes">

                                       <h3>Details</h3>
                                      <div class="">
                                        {{ product.desc }}

                                      </div>

                                   </div>

                                   <p class="price">$ {{ product.price }}</p>

                                   <p class="text-center">
                                       <button @click="addToCart" class="btn btn-template-main" v-bind:disabled="ok"><i class="fa fa-shopping-cart"></i> Add to cart</button>

                                       <button v-if='ok' class="btn btn-success"><i class="fa fa-check"></i></button>

                                   </p>
                                   <p class="error">{{ error }}</p>
                               </form>
                           </div>
<!--
                           <div class="row" id="thumbs">
                               <div class="col-xs-4">
                                   <a href="static/img/detailbig1.jpg" class="thumb">
                                       <img src="static/img/detailsquare.jpg" alt="" class="img-responsive">
                                   </a>
                               </div>
                               <div class="col-xs-4">
                                   <a href="static/img/detailbig2.jpg" class="thumb">
                                       <img src="static/img/detailsquare2.jpg" alt="" class="img-responsive">
                                   </a>
                               </div>
                               <div class="col-xs-4">
                                   <a href="static/img/detailbig3.jpg" class="thumb">
                                       <img src="static/img/detailsquare3.jpg" alt="" class="img-responsive">
                                   </a>
                               </div>
                           </div> -->
                       </div>

                   </div>


                   <!-- <div class="box" id="details">
                       <p>
                           <h4>Product details</h4>
                           <p>White lace top, woven, has a round neck, short sleeves, has knitted lining attached</p>
                           <h4>Material & care</h4>
                           <ul>
                               <li>Polyester</li>
                               <li>Machine wash</li>
                           </ul>
                           <h4>Size & Fit</h4>
                           <ul>
                               <li>Regular fit</li>
                               <li>The model (height 5'8" and chest 33") is wearing a size S</li>
                           </ul>

                           <blockquote>
                               <p><em>Define style this season with Armani's new range of trendy tops, crafted with intricate details. Create a chic statement look by teaming this lace number with skinny jeans and pumps.</em>
                               </p>
                           </blockquote>
                   </div> -->


               </div>
               <!-- /.col-md-9 -->


           </div>
           <!-- /.row -->

       </div>
       <!-- /.container -->
   </div>
   <!-- /#content -->
</template>

<script>

import axios from 'axios'
const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
    s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))

export default {
  name: 'productdetail',
  data () {
    return {
      product: {},
      error: '',
      ok: false
    }
  },
  methods: {
    addToCart(e) {
      e.preventDefault()
      console.log('add to cart');
      let userID = localStorage.getItem('user_id');
      if(this.isLogged()) {
        var self = this;
        axios.post('http://localhost:3000/carts', {
          'cart_id': this.ObjectId(),
          'user_id': userID,
          'product_id': this.$route.params.id,
          'quantity': 1
        })
        .then((response) => {
          self.ok = true;
          self.cartNum = self.cartNum + 1;
        })
        .catch(function(error) {
            console.log(error);
        });
      } else {
        this.error = 'You must log in to perform this action.';
      }
    }
  },
  mounted () {
    var self = this;
    axios.get('http://localhost:3000/products/' + this.$route.params.id)
        .then((response) => {
            self.product = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
        text-align: center;
  }
</style>

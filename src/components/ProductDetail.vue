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

                                   <p class="price">$124.00</p>

                                   <p class="text-center">
                                       <button type="submit" class="btn btn-template-main"><i class="fa fa-shopping-cart"></i> Add to cart</button>
                                       <button type="submit" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o"></i>
                                       </button>
                                   </p>

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
export default {
  name: 'productdetail',
  data () {
    return {
      product: {}
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

              self.$message({
                  type: 'error',
                  message: 'This product has been removed'
              });
          });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

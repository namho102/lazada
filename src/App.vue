<template>
  <div id="app">
    <header>

        <!-- *** TOP ***
_________________________________________________________ -->
        <div id="top">
            <div class="container">
                <div class="row">
                    <div class="col-xs-5 contact">
                    </div>
                    <div class="col-xs-7">
                        <!-- <div class="social">
                            <a href="#" class="external facebook" data-animate-hover="pulse"><i class="fa fa-facebook"></i></a>
                            <a href="#" class="external gplus" data-animate-hover="pulse"><i class="fa fa-google-plus"></i></a>
                            <a href="#" class="external twitter" data-animate-hover="pulse"><i class="fa fa-twitter"></i></a>
                            <a href="#" class="email" data-animate-hover="pulse"><i class="fa fa-envelope"></i></a>
                        </div> -->

                        <div class="login">
                            <a href="#" v-if="!logged" data-toggle="modal" data-target="#login-modal"><i class="fa fa-sign-in"></i> <span class="hidden-xs text-uppercase">Sign in</span></a>
                            <router-link v-if="!logged"  to="/register"><i class="fa fa-user"></i> <span class="hidden-xs text-uppercase">Sign up</span></router-link>

                            <a v-if="logged" @click='logout' ><i class="fa fa-sign-out"></i> <span class="hidden-xs text-uppercase">Logout</span></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- *** TOP END *** -->

        <!-- *** NAVBAR ***
_________________________________________________________ -->

      <div class="row row2">
         <div class="col-sm-2">

             <h1 class="brand"><a href="#">Lazada</a></h1>
         </div>
         <div class="flipkart-navbar-search smallsearch col-sm-8 col-xs-11">
             <div class="row">
                 <input class="flipkart-navbar-input col-xs-11" type="" placeholder="Search for Products" name="">
                 <button class="flipkart-navbar-button col-xs-1">
                     <svg width="15px" height="15px">
                         <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                     </svg>
                 </button>
             </div>
         </div>
         <div class="cart largenav col-sm-2">
              <router-link to='/cart' class="cart-button">
                <svg class="cart-svg " width="16 " height="16 " viewBox="0 0 16 16 ">
                    <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 " fill="#fff "></path>
                </svg> Cart
                <span class="item-number ">0</span>
              </router-link>

         </div>
      </div>

        <!-- *** NAVBAR END *** -->

    </header>

    <!-- *** LOGIN MODAL ***  -->

    <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="Login" aria-hidden="true">
        <div class="modal-dialog modal-sm">

            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" id="closeBtn" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="Login">Customer login</h4>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <input type="text" v-model="email "class="form-control" id="email_modal" placeholder="email">
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="password" class="form-control" id="password_modal" placeholder="password">
                        </div>

                        <p class="text-center">
                            <button class="btn btn-template-main" @click='login'><i class="fa fa-sign-in"></i> Log in</button>
                        </p>

                    </form>

                    <p class="text-center text-muted">Not registered yet?</p>
                    <p class="text-center text-muted"><a href=""><strong>Register now</strong></a>! It is easy and done in 1&nbsp;minute and gives you access to special discounts and much more!</p>

                </div>
            </div>
        </div>
    </div>

    <!-- *** LOGIN MODAL END *** -->


    <router-view></router-view>
  </div>
</template>

<script>

import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default {
  name: 'app',
  data() {
    return {
      logged: false,
      email: '',
      password: ''
    }
  },
  mounted() {
    if(localStorage.getItem('user_id')) {
      this.logged = true;
    }
  },
  methods: {
    login() {
      event.preventDefault()
      let self = this;
      axios.post('http://localhost:3000/authenticate', {
        email: this.email,
        password: this.password
      })
      .then(function (response) {
        console.log(response.data);
        var user = jwtDecode(response.data.token);
        console.log(user);

        localStorage.setItem("user_id", user.user_id);
        localStorage.setItem("email", user.email);

        $("#closeBtn").click();
        self.logged = true;

      })
      .catch(function (error) {
        console.log(error);
      });

    },
    logout() {
      localStorage.removeItem('user_id');
      localStorage.removeItem('email');

        setTimeout(()=> {
          this.logged = false;
        }, 0)


    }
  }
}
</script>

<style scoped>
  header {
      background-color: #555555;
      margin-botton: 20px;
  }


  .row2 {
      padding-bottom: 20px;

  }

  .flipkart-navbar-input {
      padding: 8px 16px;
      border-radius: 2px 0 0 2px;
      border: 0 none;
      outline: 0 none;
      font-size: 15px;
  }

  .flipkart-navbar-button {
      background-color: #ffe11b;
      border: 1px solid #ffe11b;
      border-radius: 0 2px 2px 0;
      color: #565656;
      padding: 10px 0;
      height: 37px;
      cursor: pointer;
  }

  .cart-button {
      background-color: #2469d9;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2);
      padding: 7px 0;
      text-align: center;
      height: 37px;
      border-radius: 2px;
      font-weight: 500;
      width: 120px;
      display: inline-block;
      color: #FFFFFF;
      text-decoration: none;
      color: inherit;
      border: none;
      outline: none;
  }

  .cart-button:hover{
      text-decoration: none;
      color: #fff;
      cursor: pointer;
  }

  .cart-svg {
      display: inline-block;
      width: 16px;
      height: 16px;
      vertical-align: middle;
      margin-right: 8px;
  }

  .item-number {
      border-radius: 3px;
      background-color: rgba(0, 0, 0, .1);
      height: 20px;
      padding: 3px 6px;
      font-weight: 500;
      display: inline-block;
      color: #fff;
      line-height: 12px;
      margin-left: 10px;
  }

  h1.brand {
    margin: 0px;
    margin-left: 20px;
  }

  h1.brand a {
    color: #fff;
  }

  .largenav {
      display: none;
  }

  .smallnav{
      display: block;
  }

  .smallsearch{
      margin-left: 15px;
      margin-top: 15px;
  }

  .menu{
      cursor: pointer;
  }

  @media screen and (min-width: 768px) {
      .largenav {
          display: block;
      }
      .smallnav{
          display: none;
      }
      .smallsearch{
          margin: 0px;
      }
  }


</style>

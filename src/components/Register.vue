<style scoped>



</style>

<template>

<div id="content">
    <div class="container">

        <div class="row">
            <div class="col-md-offset-3 col-md-6">
                <div class="box">
                    <h2 class="text-uppercase">New account</h2>

                    <p class="lead">Not our registered customer yet?</p>


                    <hr>

                    <form>
                        <div class="form-group">
                            <label for="email-login">Email</label>
                            <input v-model='email' type="text" class="form-control" id="email-login">
                        </div>
                        <div class="form-group">
                            <label for="password-login">Password</label>
                            <input v-model='password' type="password" class="form-control" id="password-login">
                        </div>
                        <div>
                          <p v-for='error in errors'>{{ error }}</p>
                        </div>
                        <div class="text-center">
                            <button  @click='signUp' class="btn btn-template-main"><i class="fa fa-user-md"></i> Register</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        <!-- /.row -->

    </div>
    <!-- /.container -->
</div>
<!-- /#content -->

</template>

<script>
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default {
    name: 'register',
    data() {
        return {
            email: '',
            password: '',
            errors: []
        }
    },
    methods: {
      signUp(e) {
        e.preventDefault();
        var self = this;
        var user_id = this.ObjectId();
        axios.post('http://localhost:3000/users', {
          'user_id': user_id,
          'email': self.email,
          'password': self.password
        })
        .then((res) => {
          var obj = res.data;
          if(obj.token) {
            var user = jwtDecode(obj.token);

            localStorage.setItem("user_id", user.user_id);
            localStorage.setItem("email", user.email);
            self.logged = true;
            self.$router.push({ name: 'Home' })
          }
          else {
            self.errors.push(obj.message);
          }
        })
        .catch((err) => {
          console.log(err);
        })

      }
    }
}

</script>

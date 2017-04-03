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

                    <form action="customer-orders.html" method="post">
                        <div class="form-group">
                            <label for="name-login">Name</label>
                            <input type="text" class="form-control" id="name-login">
                        </div>
                        <div class="form-group">
                            <label for="email-login">Email</label>
                            <input type="text" class="form-control" id="email-login">
                        </div>
                        <div class="form-group">
                            <label for="password-login">Password</label>
                            <input type="password" class="form-control" id="password-login">
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-template-main"><i class="fa fa-user-md"></i> Register</button>
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

export default {
    name: 'register',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}

</script>

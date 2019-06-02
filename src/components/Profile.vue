<template>
    <div>

        <NavBar></NavBar>
        <div class="container">
            <div class="header clearfix">
                <nav>
                    <ul class="nav nav-pills float-right">
                    </ul>
                </nav>
                <h3 class="text-muted" style="float: none; text-align: center;">Profielinformatie</h3>
            </div>


            <div class="form-group" style="text-align: left;">
<<<<<<< HEAD
                <label>Gebruikersid:</label> <label style="float: right;">{{user.gebruikersiD}}</label>
          <div>
            <label>username:</label> <label style="float: right;">{{user.userName}}</label>
          </div>
          <div>
            <label>email:</label> <label style="float: right;">{{user.email}}</label>
          </div>
          <div>
            <label>age:</label> <label style="float: right;">{{user.age}}</label>
          </div>
          <div>
            <label>role:</label> <label style="float: right;">{{user.role}}</label>
          </div>
        </div>
=======
                <label>Gebruikersnaam:</label> <label style="float: right;">{{user.username}}</label>
                <div>
                    <label>Email:</label> <label style="float: right;">{{user.email}}</label>
                </div>
                <div>
                    <label>Leeftijd:</label> <label style="float: right;">{{user.age}}</label>
                </div>

            </div>
>>>>>>> 92b6ee50049abd1fc09e1c87c2c405edf15f2cb3

    </div> <!-- /container -->
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'app',
        data() {
            return {
                user: {
                  gebruikersiD: 0,
                  userName: '',
                  email: '',
                  age: '',
                  role: ''
                },
                errors: []
            }
        },
<<<<<<< HEAD
        mounted () {
            axios.get(`http://localhost:8080/GlassfishWithPayara/user/getSelf`, {
              headers: {token: localStorage.getItem('token')}
=======
        mounted() {
            axios.get(`http://localhost:8080/JEA_Backend/resources/user`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
>>>>>>> 92b6ee50049abd1fc09e1c87c2c405edf15f2cb3
            })
                .then(response => {

                  this.user = response.data;
                })
                .catch(function (error) {
                    alert("No rights");
                })
        }
    }
</script>

<style scoped>
</style>

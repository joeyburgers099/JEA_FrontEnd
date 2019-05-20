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

    </div> <!-- /container -->
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'app',
        data () {
            return {
                user: {
                  gebruikersiD: -1,
                  userName: '',
                  email: '',
                  age: '',
                  role: ''
                },
                errors: []
            }
        },
        mounted () {
            axios.get(`http://localhost:8080/GlassfishWithPayara/user`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => {

                  this.user = response.data[0];
                })
                .catch(function (error) {
                    alert("No rights");
                })
        }
    }
</script>

<style scoped>
</style>

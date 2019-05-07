<template>
    <div>

        <NavBar></NavBar>
        <div class="container">
            <div class="header clearfix">
                <nav>
                    <ul class="nav nav-pills float-right">
                    </ul>
                </nav>
                <h3 class="text-muted" style="float: none; text-align: center;">Profiel info</h3>
            </div>


            <div class="form-group" style="text-align: left;">
                <label>Username:</label> <label style="float: right;">{{user.username}}</label>

                <div>
                    <label>Email:</label> <label style="float: right;">{{user.email}}</label>
                </div>
                <div>
                    <label>Age:</label> <label style="float: right;">{{user.age}}</label>
                </div>
                <div>
                    <label>Role:</label> <label style="float: right;">{{user.role}}</label>
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
                user: null,
                errors: []
            }
        },
        mounted () {
            axios.get(`http://localhost:8080/JEA_Backend/resources/user`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
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

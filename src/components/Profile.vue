<template>
    <div>

        <NavBar></NavBar>
        <div class="container">
            <div class="header clearfix">
                <nav>
                    <ul class="nav nav-pills float-right">
                    </ul>
                </nav>
                <h3 class="text-muted" style="float: none; text-align: center;">{{$t('profileinfo')}}</h3>
            </div>


            <div class="form-group" style="text-align: left;">
                <label>{{ $t('id') }}:</label> <label style="float: right;">{{user.gebruikersid}}</label>
                <div>
                    <label>{{ $t('username') }}:</label> <label style="float: right;">{{user.username}}</label>
                </div>
                <div>
                    <label>{{ $t('email') }}:</label> <label style="float: right;">{{user.email}}</label>
                </div>
                <div>
                    <label>{{ $t('age') }}:</label> <label style="float: right;">{{user.age}}</label>
                </div>
                <div>
                    <label>{{ $t('role') }}:</label> <label style="float: right;">{{user.role}}</label>
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

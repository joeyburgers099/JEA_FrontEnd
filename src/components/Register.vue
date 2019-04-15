<template>
    <div>

        <h1>Registreren</h1>
        <div class="wrapper fadeInDown">
            <div id="formContent">
                <!-- Tabs Titles -->

                <!-- Icon -->
                <div class="fadeIn first">
                    <!--<img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />-->
                </div>

                <!-- Login Form -->
                <form class="" method="post" @submit.prevent="dopost">
                    <input type="text" id="Username" class="fadeIn second" name="login" v-model="Username" placeholder="Gebruikersnaam">
                    <input type="password" id="password" class="fadeIn third" name="login"  v-model="password" placeholder="Wachtwoord">
                    <input type="text" id="email" class="fadeIn second" name="login" v-model="email" placeholder="Email">
                    <input type="text" id="age" class="fadeIn second" name="login" v-model="age" placeholder="Leeftijd">
                    <input type="submit" class="fadeIn fourth" value="Maak Account">
                </form>

                <!-- Remind Passowrd -->

            </div>
        </div>
    </div>

</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import axios from 'axios';
    const qs = require('qs');
    export default {
        name: 'app',
        data () {
            return {
                username: '',
                password: '',
                email: '',
                age: '',
                errors: []
            }
        },
        methods: {
            dopost: function () {
                axios.post(`localhost:8080/Registreren/authentication/register`, qs.stringify({
                    'Username': this.username,
                    '': this.password,
                    'Email': this.email,
                    'Age' : this.age
                }))
                    .then(response => {
                        alert(response)
                        localStorage.setItem('token', response.data)
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        }
    }
</script>
<style>
    @import 'Login.css';
</style>

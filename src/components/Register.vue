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

                    <input type="text" id="Username" class="fadeIn second" name="login" v-model="UserName" placeholder="Gebruikersnaam">
                    <input type="password" id="password" class="fadeIn third" name="login"  v-model="PassWd" placeholder="Wachtwoord">
                    <input type="text" id="email" class="fadeIn second" name="login" v-model="email" placeholder="Email">
                    <input type="text" id="age" class="fadeIn second" name="login" v-model="age" placeholder="Leeftijd">
                    <input type="submit" class="fadeIn fourth" value="Maak Account">
                    <router-link v-bind:to="'login'"><button class="btn btn-lg btn-primary btn-block">Terug naar de login pagina</button></router-link>
                </form>

                <router-link v-bind:to="'login'"><button class="btn btn-lg btn-primary btn-block">Terug naar de login pagina</button></router-link>

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
                UserName: '',
                PassWd: '',
                email: '',
                age: '',
                errors: []
            }
        },
        methods: {


            dopost: function () {
                alert(this.UserName);
                alert(this.PassWd);
                axios.post(`http://localhost:8080/GlassfishWithPayara/user`, {userName: this.UserName, passWd: this.PassWd, email: this.email, age: this.age})
                    .then(response => {
                        this.$router.push('/login ');
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

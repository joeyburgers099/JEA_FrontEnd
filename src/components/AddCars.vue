<!--<template>-->
    <!--<div>-->

        <!--<h1>Toevoegen van auto</h1>-->
        <!--<div class="wrapper fadeInDown">-->
            <!--<div id="formContent">-->
                <!--&lt;!&ndash; Tabs Titles &ndash;&gt;-->

                <!--&lt;!&ndash; Icon &ndash;&gt;-->
                <!--<div class="fadeIn first">-->
                    <!--&lt;!&ndash;<img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />&ndash;&gt;-->
                <!--</div>-->

                <!--&lt;!&ndash; Login Form &ndash;&gt;-->
                <!--<form class="" method="post" @submit.prevent="dopost">-->
                    <!--<input type="text" id="Merk" class="fadeIn second" name="login" v-model="merk" placeholder="Merk">-->
                    <!--<input type="text" id="Model" class="fadeIn third" name="login"  v-model="model" placeholder="Model">-->
                    <!--<input type="text" id="Kenteken" class="fadeIn second" name="login" v-model="kenteken" placeholder="Kenteken">-->
                    <!--<input type="text" id="Prijs" class="fadeIn second" name="login" v-model="prijs" placeholder="Prijs">-->
                    <!--<div>-->
                        <!--<b-dropdown-->
                                <!--split-->
                                <!--split-variant="outline-primary"-->
                                <!--variant="primary"-->
                                <!--text="Split Variant Dropdown"-->
                                <!--class="m-2"-->
                        <!--&gt;-->
                            <!--<b-dropdown-item href="#">Action</b-dropdown-item>-->
                            <!--<b-dropdown-item href="#">Another action</b-dropdown-item>-->
                            <!--<b-dropdown-item href="#">Something else here...</b-dropdown-item>-->
                        <!--</b-dropdown>-->
                    <!--</div>-->

                    <!--<input type="submit" class="fadeIn fourth" value="Plaats advertentie">-->
                <!--</form>-->

                <!--&lt;!&ndash; Remind Passowrd &ndash;&gt;-->

            <!--</div>-->
        <!--</div>-->
    <!--</div>-->

<!--</template>-->

<!--<script>-->
    <!--import 'bootstrap/dist/css/bootstrap.css'-->
    <!--import 'bootstrap-vue/dist/bootstrap-vue.css'-->
    <!--import axios from 'axios';-->
    <!--const qs = require('qs');-->
    <!--export default {-->
        <!--name: 'app',-->
        <!--data () {-->
            <!--return {-->
                <!--merk: '',-->
                <!--model: '',-->
                <!--kenteken: '',-->
                <!--prijs: '',-->
                <!--carroserie: '',-->
                <!--errors: []-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--dopost: function () {-->
                <!--axios.post(`http://localhost:8080/JEA_Backend/resources/user`, qs.stringify({-->
                    <!--'Username': this.username,-->
                    <!--'': this.password,-->
                    <!--'Email': this.email,-->
                    <!--'Age' : this.age-->
                <!--}))-->
                    <!--.then(response => {-->
                        <!--alert(response)-->
                        <!--localStorage.setItem('token', response.data)-->
                    <!--})-->
                    <!--.catch(e => {-->
                        <!--this.errors.push(e)-->
                    <!--})-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->
<!--<style>-->
    <!--@import 'Login.css';-->
<!--</style>-->
<template>
    <div>

        <h1>Advertentie plaatsen</h1>
        <div class="wrapper fadeInDown">
            <div id="formContent">
                <!-- Tabs Titles -->

                <!-- Icon -->
                <div class="fadeIn first">
                    <!--<img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />-->
                </div>

                <!-- Login Form -->
                <form class="" method="post" @submit.prevent="dopost">
                    <input type="text" id="Merk" class="fadeIn second" name="merk" v-model="auto.merk" placeholder="Merk">
                    <input type="text" id="Model" class="fadeIn third" name="model"  v-model="auto.model" placeholder="Model">
                    <input type="text" id="Kenteken" class="fadeIn second" name="kenteken" v-model="auto.kenteken" placeholder="Kenteken">
                    <input type="text" id="Prijs" class="fadeIn second" name="prijs" v-model="auto.prijs" placeholder="Prijs">
                    <input type="text" id="Bouwjaar" class="fadeIn second" name="bouwjaar" v-model="auto.bouwjaar" placeholder="Bouwjaar">
                    <select class="form-control" v-model="carroserie" style="margin-left: 8%; width:84%">
                        <option v-for="option in carroserie" v-bind:value="option">
                            {{ option }}
                        </option>
                    </select>
                    <input type="submit" class="fadeIn fourth" value="Plaats advertentie">
                    <router-link v-bind:to="'showcars'"><button class="btn btn-lg btn-primary btn-block">Terug naar de hoofdpagina</button></router-link>
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
                carroserie: [],

                auto: {
                    "merk": '',
                    "model": '',
                    "kenteken": '',
                    "prijs": '',
                    "carroserie": '',
                    "bouwjaar": ''
                },
                errors: []
            }
        },
        mounted() {
            axios.get(`http://localhost:8080/JEA_Backend/resources/auto/carroserie`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => {
                    this.carroserie = response.data;
                })
                .catch(function (error) {
                    alert("No rights");
                })
        },
        methods: {
            dopost: function () {
                axios.post(`http://localhost:8080/JEA_Backend/resources/auto`,
                    this.auto,
                    {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        }
                    })
                    .then(response => {
                        if (response.status == 200) {
                            alert("Succesful");
                        }
                        location.reload();
                    })
                    .then(response => {
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

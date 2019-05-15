<!--<template>-->
    <!--<div>-->
        <!--<NavBar></NavBar>-->
        <!--<h1>Auto's</h1>-->
        <!--<div class="row">-->
            <!--<div class="col-md-4">-->
                <!--<h2>Lijst met auto's:<br></h2>-->
                <!--<b-list-group style="margin: 5%">-->
                    <!--<b-list-group-item href="#" active class="flex-column align-items-start" v-for="auto in autos" :key="auto.id" style="margin-bottom: 10px" v-on:click="loadauto(auto)">-->
                        <!--<div class="d-flex w-100 justify-content-between">-->
                            <!--<h5 class="mb-1">{{auto.merk}} {{auto.model}}</h5>-->
                            <!--<small>{{auto.kenteken}}</small>-->
                        <!--</div>-->
                    <!--</b-list-group-item>-->
                <!--</b-list-group>-->

            <!--</div>-->
            <!--<div class="col-md-8"  v-if="model !== null">-->
                <!--<h2>Select auto: {{model.kenteken}}<br></h2>-->

                <!--<div class="form-group" style=" width: 50%; alignment: center; text-align: left"   >-->
                    <!--<div >-->
                        <!--<label>Merk:</label>-->
                        <!--<label v-if="model.brand !== null" style="float: right;">{{model.merk}}</label>-->
                        <!--<label v-else style="float: right;">Unknown</label>-->
                    <!--</div>-->
                    <!--<div>-->
                        <!--<label>Model:</label>-->
                        <!--<label v-if="model.model !== null" style="float: right;" >{{model.model}}</label>-->
                        <!--<label v-else style="float: right;">Unknown</label>-->
                    <!--</div>-->
                    <!--<div>-->
                        <!--<label>Kenteken:</label>-->
                        <!--<label v-if="model.license !== null" style="float: right;">{{model.kenteken}}</label>-->
                        <!--<label v-else style="float: right;">Unknown</label>-->
                    <!--</div>-->
                    <!--<div>-->
                        <!--<label>Vraagprijs:</label>-->
                        <!--<label v-if="model.weight !== null" style="float: right;">{{model.prijs}}</label>-->
                        <!--<label v-else style="float: right;">Unknown</label>-->
                    <!--</div>-->
                    <!--<div>-->
                        <!--<label>Carroserie:</label>-->
                        <!--<label v-if="model.wheels !== null" style="float: right;">{{model.carroserie}}</label>-->
                        <!--<label v-else style="float: right;">Unknown</label>-->
                    <!--</div>-->
                <!--</div>-->

            <!--</div>-->
                <!--&lt;!&ndash;<router-link v-bind:to="'addcars'"><button class="btn btn-lg btn-primary btn-block">Plaats een advertentie</button></router-link>&ndash;&gt;-->

        <!--</div>-->
        <!--&lt;!&ndash;<router-link v-bind:to="'addcars'"><button class="btn btn-lg btn-primary btn-block">Plaats een advertentie</button></router-link>&ndash;&gt;-->
        <!--<p class="mt-5 mb-3 text-muted">© 2019</p>-->
    <!--</div>-->

    <!--&lt;!&ndash;</div>&ndash;&gt;-->
<!--</template>-->
<!--<script>-->
    <!--import axios from 'axios';-->
    <!--export default {-->
        <!--name: 'app',-->
        <!--data () {-->
            <!--return {-->
                <!--autos: [],-->
                <!--errors: [],-->
                <!--label: '',-->
                <!--clicked: false,-->
                <!--model: null-->
            <!--}-->
        <!--},-->
        <!--mounted () {-->
            <!--axios.get(`http://localhost:8080/JEA_Backend/resources/auto/All`, {-->
                <!--headers: {-->
                    <!--Authorization: 'Bearer ' + localStorage.getItem('token')-->
                <!--}-->
            <!--})-->
                <!--.then(response => {-->
                    <!--this.autos = response.data;-->
                <!--})-->
                <!--.catch(function (error) {-->
                    <!--alert("No rights");-->
                <!--})-->
        <!--},-->
        <!--methods:{-->
            <!--loadauto:function(auto){-->
                <!--this.model = auto;-->
                <!--this.clicked = true;-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->
<template>
    <div>
        <NavBar></NavBar>
        <h1>Auto's</h1>
        <div class="row">
            <div class="col-md-4">
                <h2>Lijst van auto's:<br></h2>
                <b-list-group style="margin: 5%">
                    <b-list-group-item href="#" active class="flex-column align-items-start" v-for="auto in autos"
                                       :key="auto.vehicleID" style="margin-bottom: 10px" v-on:click="loadauto(auto)">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{{auto.brand}} {{auto.model}}</h5>
                            <small>{{auto.license}}</small>
                        </div>
                    </b-list-group-item>
                    <!---->
                    <!--<b-list-group-item href="#" active class="flex-column align-items-start">-->
                    <!--<div class="d-flex w-100 justify-content-between">-->
                    <!--<h5 class="mb-1">List group item heading</h5>-->
                    <!--<small>small tag first</small>-->
                    <!--</div>-->

                    <!--<p class="mb-1">-->
                    <!--p tag middle-->
                    <!--</p>-->

                    <!--<small>small tag 2</small>-->
                    <!--</b-list-group-item>-->


                </b-list-group>

            </div>
            <div class="col-md-8" v-if="model !== null">
                <h2>selectcar: model.license<br></h2>

                <div class="form-group" style=" width: 50%; alignment: center; text-align: left">
                    <div>
                        <label>{{$t('Brand')}}:</label>
                        <label v-if="model.brand !== null" style="float: right;">{{model.brand}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>
                    <div>
                        <label>Model:</label>
                        <label v-if="model.model !== null" style="float: right;">{{model.model}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>
                    <div>
                        <label>{{$t('license')}}:</label>
                        <label v-if="model.license !== null" style="float: right;">{{model.license}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>
                    <div>
                        <label>{{$t('weight')}}:</label>
                        <label v-if="model.weight !== null" style="float: right;">{{model.weight}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>
                    <div>
                        <label>{{$t('wheels')}}:</label>
                        <label v-if="model.wheels !== null" style="float: right;">{{model.wheels}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>
                    <div>
                        <label>{{$t('stolen')}}:</label>
                        <label v-if="model.stolen !== null" style="float: right;">{{model.stolen}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>
                    <div>
                        <button type="button" class="btn btn-secondary btn-lg btn-block" v-on:click="deleteauto">Verwijderen
                        </button>

                        <button type="button" class="btn btn-secondary btn-lg btn-block" v-on:click="ChangeCar">Change
                        </button>
                    </div>


                </div>
                <udmodal :fname="fullname"></udmodal>


            </div>

        </div>

    </div>

</template>
<script>
    import axios from 'axios';
    import jwtcode from 'jwt-decode'
    const qs = require('qs');
    export default {
        name: 'app',
        components:{
        },
        data() {
            return {
                autos: [],
                errors: [],
                label: '',
                clicked: false,
                model: null,
                fullname:"old name"
            }
        },
        mounted()
        {
            axios.get(`http://localhost:8080/JEA_Backend/resources/auto/all`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => {
                    this.autos = response.data;
                })
                .catch(function (error) {
                    alert("No rights");
                })
        },
        methods: {
            loadauto: function (auto) {
                this.model = auto;
                this.clicked = true;
            },
            deleteauto: function () {
                axios.delete(`http://localhost:8080/JEA_Backend/resources/auto/{auto_id}`, qs.stringify({
                        'id': this.model.vehicleID
                    }),
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
                    .catch(function (error) {
                        if (error.response.status == 403) {
                            alert("Incorrect credentials");
                        }
                    })
            },
            ChangeCar: function (){
                if(this.model !== null) {
                    sessionStorage.setItem("changecar", JSON.stringify(this.model));
                    // this.$router.push('/ChangeAuto');
                }
            }
        }
    }
</script>

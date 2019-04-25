<template>
    <div>
        <NavBar></NavBar>
        <h1>Auto's</h1>
        <div class="row">
            <div class="col-md-4">
                <h2>Lijst met auto's:<br></h2>
                <b-list-group style="margin: 5%">
                    <b-list-group-item href="#" active class="flex-column align-items-start" v-for="auto in autos" :key="auto.vehicleID" style="margin-bottom: 10px" v-on:click="loadauto(auto)">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{{auto.brand}} {{auto.model}}</h5>
                            <small>{{auto.license}}</small>
                        </div>
                    </b-list-group-item>
                </b-list-group>

            </div>
            <div class="col-md-8"  v-if="model !== null">
                <h2>Select auto: {{model.license}}<br></h2>

                <div class="form-group" style=" width: 50%; alignment: center; text-align: left"   >
                    <div >
                        <label >Merk:</label>
                        <label v-if="model.brand !== null" style="float: right;">{{model.brand}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>
                    <div>
                        <label>Model:</label>
                        <label v-if="model.model !== null" style="float: right;" >{{model.model}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>
                    <div>
                        <label>Kenteken:</label>
                        <label v-if="model.license !== null" style="float: right;">{{model.license}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>
                    <div>
                        <label>Gewicht:</label>
                        <label v-if="model.weight !== null" style="float: right;">{{model.weight}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>
                    <div>
                        <label>wielen:</label>
                        <label v-if="model.wheels !== null" style="float: right;">{{model.wheels}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>
                    <div>
                        <label>Gestolen:</label>
                        <label v-if="model.stolen !== null" style="float: right;">{{model.stolen}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>


                </div>





            </div>

        </div>

    </div>

    <!--</div>-->
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'app',
        data () {
            return {
                autos: [],
                errors: [],
                label: '',
                clicked: false,
                model: null
            }
        },
        mounted () {
            axios.get(`localhost:8080/JEA_Backend/resources/auto`, {
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
        methods:{
            loadauto:function(auto){
                this.model = auto;
                this.clicked = true;
            }
        }
    }
</script>

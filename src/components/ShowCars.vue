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
                            <h5 class="mb-1">{{auto.merk}} {{auto.model}}</h5>
                            <small>{{auto.kenteken}}</small>
                        </div>
                    </b-list-group-item>
                </b-list-group>

            </div>
            <div class="col-md-8"  v-if="model !== null">
                <h2>Geselecteerde auto: {{model.kenteken}}<br></h2>

                <div class="form-group" style=" width: 50%; alignment: center; text-align: left"   >
                    <div >
                        <label>Merk:</label>
                        <label v-if="model.merk !== null" style="float: right;">{{model.merk}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>
                    <div>
                        <label>Model:</label>
                        <label v-if="model.model !== null" style="float: right;" >{{model.model}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>
                    <div>
                        <label>Kenteken:</label>
                        <label v-if="model.kenteken !== null" style="float: right;">{{model.kenteken}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>
                    <div>
                        <label>Vraagprijs:</label>
                        <label v-if="model.vraagprijs !== null" style="float: right;">{{model.prijs}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>
                    <div>
                        <label>Huidige bod:</label>
                        <label v-if="model.kenteken !== null" style="float: right;">{{model.huidigBod}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>

                    <form class="" method="post" @submit.prevent="dopost">
                        <input type="text" id="Bod" class="fadeIn second" name="bod" v-model="huidigBod" placeholder="Bod">
                        <input type="submit" class="fadeIn fourth" value="Plaats bod">
                    </form>
                    <!--<label for="bod" class="sr-only">Bod</label>-->
                    <!--<input type="text" id="bod" class="fadeIn second" name="bod" v-model="huidigBod" placeholder="Email">-->
                    <!--<button class="btn btn-lg btn-primary btn-block" type="submit">Plaats bod</button>-->
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
                model: null,

            }
        },
        mounted () {
            axios.get(`http://localhost:8080/GlassfishWithPayara/auto`, {
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

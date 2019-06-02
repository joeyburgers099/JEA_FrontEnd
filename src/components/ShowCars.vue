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
                        <label v-if="model.huidigBod !== null" style="float: right;">{{model.huidigBod}}</label>
                        <label v-else style="float: right;">Unknown</label>
                    </div>

                    <form class="" method="post" @submit.prevent="plaatsbod">
                        <input type="text" id="Bod" class="fadeIn second" name="bod" v-if="nieuweBod !== null" placeholder="Bod">
                        <input type="submit" class="fadeIn fourth" value="Plaats bod">

                    </form>
                      <template>
                        <div class="card mt-3">
                          <div class="card-body">
                            <div class="card-title">
                              <h3>Chat Group</h3>
                              <hr>
                            </div>
                            <div class="card-body">
                              <div class="messages" v-for="(msg, index) in messages" :key="index">
                                <p><span class="font-weight-bold">{{ msg}} </span></p>
                              </div>
                            </div>
                          </div>
                          <div class="card-footer">
                            <form @submit.prevent="sendMessage()">
                              <div class="gorm-group pb-3">

                                <label for="message">Message:</label>
                                <input type="text" v-model="message" class="form-control">
                              </div>
                              <button type="submit" class="btn btn-success">Send</button>
                            </form>
                          </div>
                        </div>
                      </template>

                </div>

            </div>

        </div>

    </div>

    <!--</div>-->
</template>

<script>
    import axios from 'axios';
    const qs = require('qs');
    export default {
        name: 'app',
        data () {
            return {
                autos: [],
                errors: [],
                label: '',
                clicked: false,
                model: null,
                huidigbod: '',
                nieuweBod: '',
                wsUri: "ws://localhost:8080/GlassfishWithPayara/chat",
                websocket: null,
                message: "",
                messages: [],
                chatOpened: false,
                connected: false
            }
        },
        computed: {

          connectionStatus() {

            if (this.connected) return "success";

            return "error";
          }
        },
//        watch: {
//          chatOpened(val) {
//            if (val) {
//              if (!this.connected) {
//                this.connect();
//              }
//            }
//          }
//        },
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
                if(this.websocket !== null) {
                  this.websocket.close();
                  this.messages = [];
                }
                {
                  var self = this;
                  self.websocket = new WebSocket(self.wsUri + "/" + this.model.id);

                  this.websocket.onopen = function() {
                    self.connected = true;
                    self.join();
                  };
                  this.websocket.onmessage = ({data}) => {
                    console.log(data);
                    this.messages.push(data);
                  };
//                  this.websocket.onmessage = function(evt) {
//                    self.messages += `${evt.data}\n`;
//                  };
                  this.websocket.onerror = function() {
                    self.connected = false;
                  };
                }
            },
            plaatsbod: function () {
              axios.put(`http://localhost:8080/GlassfishWithPayara/auto/nieuwbod`, {
                'id' : this.model.vehicleID,
                'nieuweBod': this.nieuweBod

              })
                .then(response => {
                  localStorage.setItem('token', response.data);
                  alert("Bod is succesvol geplaats!")
                  this.$router.push('/ShowCars');
                })
                .catch(function (error) {
                  if (error.response.status == 403) {
                    alert("Incorrect credentials");
                  }
              })
            },
            join() {
              this.websocket.send(localStorage.getItem('name') + " has joined the chat");
            },
            sendMessage() {
              this.websocket.send(localStorage.getItem('name') + " : " + this.message);
              this.websocket.se
              this.message = "";
            }

        }
    }
</script>

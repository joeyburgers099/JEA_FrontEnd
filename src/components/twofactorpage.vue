<template>
  <div>
    <NavBar></NavBar>
    <h1>2 Factor</h1>
    <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" v-on:click="couponClicked">Klik
      hier om een nieuwe 2 Factor code te genereren</a>
    <div v-if="generated">
      <label>Voer de volgende code handmatig of scan de QR-code in de Google Authenticator App:</label>
      <h4>{{authkey}}</h4>

    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import VueQRCodeComponent from 'vue-qrcode-component'

  const qs = require('qs');

  export default {
    name: 'app',
    data() {
      return {
        authkey: '',
        generated: false,

      }
    },
    methods: {
      couponClicked: function () {
        axios.get(`http://localhost:8080/GlassfishWithPayara/user/keys`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
          .then(response => {
            if (response.status == 200) {
              this.generated = true;
              this.authkey = response.data;
            }
          })
          .catch(function (error) {
            if (error.response.status == 403) {
              alert("Incorrect credentials");
            }
          })
      },
    }
  }
</script>

<style scoped>
</style>

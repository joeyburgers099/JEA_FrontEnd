<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">

</template>

<script>
  export default {
    data() {
      return {
        wsUri: "ws://localhost:8080/GlassfishWithPayara/chat",
        websocket: null,
        message: "",
        messages: "",
        chatOpened: false,
        connected: false,
      };
    },
    computed: {
      user() {
        // user object uit vuex store
        return this.$store.getters.user;
      },
      connectionStatus() {
        // gives back a success or error string that defines the color of the chat toolbar, based on vuetify theme
        if (this.connected) return "success";

        return "error";
      }
    },
    watch: {
      chatOpened(val) {
        if (val) {
          if (!this.connected) {
            this.connect();
          }
        }
      }
    },
    methods: {
      join() {
        this.websocket.send(this.user.email + " has joined the chat");
      },
      sendMessage() {
        this.websocket.send(this.user.email + " : " + this.message);
        this.message = "";
      },
      connect() {
        var self = this;
        self.websocket = new WebSocket(self.wsUri);

        this.websocket.onopen = function() {
          self.connected = true;
          self.join();
        };
        this.websocket.onmessage = function(evt) {
          self.messages += `${evt.data}\n`;
        };
        this.websocket.onerror = function() {
          self.connected = false;
        };
      }
    }
  };
</script>

<template>
    <div>
        <div>
            <b-navbar type="dark" variant="dark">
                <b-navbar-nav>
                    <b-nav-item href="#" v-bind:to="'ShowCars'">ShowCars</b-nav-item>

                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Settings" right>
                        <b-dropdown-item href="#" v-bind:to="'profile'">Profile</b-dropdown-item>
                        <b-dropdown-item href="#" v-bind:to="'2factor'">2 Factor Setup</b-dropdown-item>
                        <b-dropdown-item href="#" v-on:click="Logout">Uitloggen</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-navbar>
        </div>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
        name: 'navbar',
        data() {
            return {}
        },
        methods: {
            Logout: function () {
                localStorage.removeItem('token');
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
</style>

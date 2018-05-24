<template>
  <div id="app">
      <v-app>
        <page-header/>
        <main>
          <v-container fluid>
            <router-view/>
          </v-container>
        </main>
      </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.input-group--focused label{
  color: red !important;
}
.input-group__details:before{
  background-color: red !important;
  opacity: 0.1;
}
.input-group__details:after{
  background-color: red !important;
}
</style>

<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="red darken-1" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field autocomplete="off" v-model="email" name="email" label="Email address"></v-text-field>
            <v-text-field autocomplete="off" v-model="password" name="password" label="Password"></v-text-field>
            <div class="err" v-html="error"/><br>
            <v-btn class="red darken-1" dark @click="register">Sign in</v-btn>
          </div>

      </div>
    </v-flex>
  </v-layout>

</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
  .err {
    color: red;
  }
  .primary--text {
    color: red;
}
</style>

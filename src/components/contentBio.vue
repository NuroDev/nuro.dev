<template>
  <v-jumbotron height='87.5vh'>
    <v-avatar>
      <img :src="avatarURL" />
    </v-avatar>
  </v-jumbotron>
</template>

<script>
export default {
  data () {
    return {
      avatarURL: ''
    }
  },
  mounted: function () {
    this.$http.get('https://api.github.com/users/nurodev', {responseType: 'json'}).then(response => {
      this.avatarURL = response.data.avatar_url
    })
  }
}
</script>

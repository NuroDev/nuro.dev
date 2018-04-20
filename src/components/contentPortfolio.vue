<template>
  <v-container text-xs-center>
      <v-card class='mt-3 mb-3 elevation-4 repoCard' v-for='(repos, i) in repos' :key='i' light>

        <v-card-title primary-title>
          <span class='headline mb-1 cardTitle darken-3 grey--text' v-html='repos.name' />
          <span class='mb-0' v-html='repos.description' />
        </v-card-title>

        <v-card-actions>
          <v-layout row wrap>
            <v-flex xs3>
              <v-btn flat color='amber' ripple>
                <v-icon left color='amber'>star</v-icon>
                <span v-html='repos.stargazers_count' />
              </v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn flat color='red' ripple>
                <v-icon left>call_split</v-icon>
                <span v-html='repos.forks_count' />
              </v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn flat color='green' ripple>
                <v-icon>home</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn flat color='blue' :href='repos.html_url'>
                <v-icon>code</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>

      </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      repos: []
    }
  },
  mounted: function () {
    this.$http.get('https://api.github.com/users/nurodev/repos', {responseType: 'json'}).then(response => {
      this.repos = response.data.reverse()
    })
  }
}
</script>

<style>
  .repoCard {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  .repoCard:active {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    transform: scale(0.95);
  }
  .cardTitle {
    font-weight: 900!important;
    text-transform: uppercase!important;
    letter-spacing: .20em!important;
  }
</style>

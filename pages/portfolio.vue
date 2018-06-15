<template>
  <section class='contentContainer elevation-0'>
    <AppToolbar />
    <v-container fluid text-xs-center>
      <v-layout row wrap align-center>
        <v-flex xs12>

          <h1 class='spacedLetters display-2 mb-4'>Portfolio</h1>

          <br />

          <v-card light class='pa-4 ma-4 elevation-0 repoCard' :style='"border-left: 10px solid " + CalculateBorderColor(repos.language) + ";"' v-for='(repos, i) in repos' :key='i'>
            <v-card-title>
              <v-spacer />
              <v-tooltip left v-if='repos.archived' >
                <v-btn flat icon large ripple color='grey darken-3' class='ma-2' slot='activator'>
                  <icon name='package' />
                </v-btn>
                <span>Archived</span>
              </v-tooltip>
              <v-tooltip left v-if='repos.fork' >
                <v-btn flat icon large ripple color='grey darken-3' class='ma-2' slot='activator'>
                  <v-icon>call_split</v-icon>
                </v-btn>
                <span>Fork</span>
              </v-tooltip>
              <span class='headline mt-1' v-html='repos.name' />
              <v-btn flat icon large color='grey darken-3' ripple :href='repos.html_url'>
                <icon name='external-link' />
              </v-btn>
              <v-spacer />
            </v-card-title>
            <v-card-text>
              <v-btn flat large round color='amber' ripple class='mr-4'>
                <icon name='star' class='iconLeft' />
                <span v-html='repos.stargazers_count' />
              </v-btn>
              <span v-html='repos.description' />
            </v-card-text>
          </v-card>

        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import AppToolbar from '~/components/appToolbar'

export default {
  components: {
    AppToolbar
  },
  data () {
    return {
      repos: []
    }
  },
  methods: {
    CalculateBorderColor: (inputLang) => {
      if (inputLang === 'C++') {
        return '#f34b7d'
      }
      if (inputLang === 'C#') {
        return '#f34b7d'
      }
      if (inputLang === 'Objective-C') {
        return '#438eff'
      }
      if (inputLang === 'Swift') {
        return '#ffac45'
      }
      if (inputLang === 'Rust') {
        return '#dea584'
      }
      if (inputLang === 'Java') {
        return '#b07219'
      }
      if (inputLang === 'HTML') {
        return '#e34c26'
      }
      if (inputLang === 'CSS') {
        return '#563d7c'
      }
      if (inputLang === 'JavaScript') {
        return '#f1e05a'
      }
      if (inputLang === 'Vue') {
        return '#2c3e50'
      }
      if (inputLang === 'Lua') {
        return '#000080'
      }
      if (inputLang === 'Shell') {
        return '#89e051'
      }
    }
  },
  mounted: function () {
    this.$http.get('https://api.github.com/users/nurodev/repos', {responseType: 'json'}).then(response => {
      this.repos = response.data.sort()
    })
  }
}
</script>

<style>
  .repoCard {
    border-radius: 8px!important;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    transform: scale(1.0);
    -webkit-box-shadow: 0 8px 15px rgba(125, 147, 178, 0.25)!important;
    -moz-box-shadow: 0 8px 15px rgba(125, 147, 178, 0.25)!important;
    box-shadow: 0 8px 15px rgba(125, 147, 178, 0.25)!important;
  }
  .repoCard:hover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    transform: scale(1.025);
  }
  .repoCard:active {
    transform: scale(0.97);
  }
</style>

<template>
  <section class='white portfolioContainer elevation-0'>
    <AppToolbar />
    <v-container fluid text-xs-center>
      <v-layout row wrap align-center>
        <v-flex xs12 sm12 md12 lg12 xl12 class='contentContainer'>

          <h1 class='portfolioHeader display-2 mb-4'>Portfolio</h1>

          <br />

          <v-card light class='pa-1 ma-4 elevation-2 repoCard' :style='"border-left: 10px solid " + CalculateBorderColor(repos.language)' v-for='(repos, i) in repos' :key='i'>
            <v-card-media>
              <v-spacer />
              <v-tooltip left v-if='repos.archived' >
                <v-btn flat icon large ripple color='grey darken-3' class='ma-2' slot='activator'>
                  <v-icon color='grey darken-3'>archive</v-icon>
                </v-btn>
                <span>Archived</span>
              </v-tooltip>
              <span class='headline mt-3' v-html='repos.name' />
              <v-btn flat icon large color='grey darken-3' ripple :href='repos.html_url' class='ma-2'>
                <v-icon color='grey darken-3'>open_in_new</v-icon>
              </v-btn>
              <v-spacer />
            </v-card-media>
            <v-card-text>
              <v-btn flat large color='amber' ripple class='mr-4'>
                <v-icon left color='amber'>star</v-icon>
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
  mounted: function () {
    this.$http.get('https://api.github.com/users/nurodev/repos', {responseType: 'json'}).then(response => {
      this.repos = response.data.sort()
    })
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
      if (inputLang === 'Lua') {
        return '#000080'
      }
      if (inputLang === 'Shell') {
        return '#89e051'
      }
    }
  }
}
</script>

<style>
  .portfolioContainer {
    height: 100%;
    padding: 20px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: .20em;
    color: #424242;
    animation: 1s ease-in-out 0s 1 slideInLeft;
  }
  .portfolioAvatar {
    margin: 60px;
  }
  .portfolioHeader {
    letter-spacing: .20em!important;
  }
  .portfolioSubHeader {
    font-weight: 300!important;
  }
  .repoCard {
    border-radius: 8px!important;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    transform: scale(1.0);
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

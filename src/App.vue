<template>
  <v-app dark>
    <AppToolbar />

    <v-content>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 sm6 md6 lg6 xl6>
            <ContentBio />
          </v-flex>
          <v-flex xs12 sm6 md6 lg6 xl6>
            <ContentPortfolio />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    
    <AppFooter />
  </v-app>
</template>

<script>
import AppFooter from './components/appFooter'
import AppToolbar from './components/appToolbar'
import ContentBio from './components/contentBio'
import ContentPortfolio from './components/contentPortfolio'

export default {
  components: {
    AppFooter,
    AppToolbar,
    ContentBio,
    ContentPortfolio
  }
}
</script>

<style>
  html,
  body {
    background: -moz-linear-gradient(top, rgba(3, 169, 244, 0.75) 0%, rgba(13, 71, 161, 0.5) 100%)fixed, url('assets/bg.png');
    background: -webkit-linear-gradient(top, rgba(3, 169, 244, 0.75) 0%, rgba(13, 71, 161, 0.5) 100%)fixed, url('assets/bg.png');
    background: linear-gradient(to bottom, rgba(3, 169, 244, 0.75) 0%, rgba(13, 71, 161, 0.5) 100%)fixed, url('assets/bg.png');
    background-attachment: fixed;
    background-size: cover;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  .application.theme--light,
  .application.theme--dark {
    background: transparent!important;
    margin: 0!important;
  }
</style>

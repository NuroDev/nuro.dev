<template>
  <section class='white contactContainer elevation-0'>
    <AppToolbar />
    <v-container fill-height text-xs-center>
      <v-layout row wrap align-center>
        <v-flex xs12 sm12 md12 lg12 xl12 class='contentContainer'>

          <h1 class='contactHeader display-2'>Contact</h1>

          <br />

          <v-flex xs12>
            <v-btn flat large color='grey darken-3' class='roundedButton' href='https://twitter.com/nurodev'>
              <icon name='twitter' class='iconLeft' />
              <span>Twitter</span>
            </v-btn>
            <v-btn flat large color='grey darken-3' class='roundedButton' href='mailto:me@nuro.sh'>
              <icon name='mail' class='iconLeft' />
              <span>Email</span>
            </v-btn>
          </v-flex>
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
  }
}
</script>

<style>
  .contactContainer {
    height: 100vh;
    padding: 20px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: .20em;
    color: #424242;
    animation: 1s ease-in-out 0s 1 slideInLeft;
  }
  .contactAvatar {
    margin: 60px;
  }
  .contactHeader {
    letter-spacing: .20em!important;
  }
  .contactTwitterText {
    margin: 20px;
  }
</style>

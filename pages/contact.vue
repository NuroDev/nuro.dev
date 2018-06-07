<template>
  <section class='contentContainer elevation-0' style='height: 100vh;!important'>
    <AppToolbar />
    <v-container fill-height text-xs-center>
      <v-layout row wrap align-center>
        <v-flex xs12 sm12 md12 lg12 xl12>

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

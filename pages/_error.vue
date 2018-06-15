<template>
  <v-jumbotron class='contentContainer elevation-0' style='height: 100vh;!important'>
    <v-container fill-height text-xs-center>
      <v-layout row wrap align-center>
        <v-flex xs12 sm12 md12 lg12 xl12>

          <h1 class='errorTitle'>⚠️ ERROR! ⚠️</h1>
          <p class='errorSubTitle'>Sadly the page you were  <br /> looking for could not be found... </p>

          <v-btn flat large round color='grey darken-3' to='/'>
            <v-icon left>arrow_back</v-icon>
            <span>Back to Home</span>
          </v-btn>

        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<style>
  .errorTitle {
    font-size: 42px;
    color: #424242;
  }
  .errorSubTitle {
    font-size: 16px;
    color: #424242;
  }
  @media screen and (min-width: 768px) {
    .errorTitle {
      font-size: 64px;
    }
    .errorSubTitle {
      font-size: 16px;
    }
  }
</style>
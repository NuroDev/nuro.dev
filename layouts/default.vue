<template>
  <v-app dark>
    <v-content>
      <v-container fluid>
        <v-layout>
          <v-flex xs12 sm12 md6 lg6 xl6>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<style>
  ::-webkit-scrollbar { 
    display: none; 
  }
  html,
  body,
  .application.theme--light,
  .application.theme--dark {
    background: -moz-linear-gradient(top, rgba(41, 182, 246, 0.75) 0%,rgba(31, 30, 161, 0.75) 100%)fixed, url('/bg.webp'), url('/bg.png');
    background: -webkit-linear-gradient(top, rgba(41, 182, 246, 0.75) 0%,rgba(31, 30, 161, 0.75) 100%)fixed, url('/bg.webp'), url('/bg.png');
    background: linear-gradient(to bottom, rgba(41, 182, 246, 0.75) 0%,rgba(31, 30, 161, 0.75) 100%)fixed, url('/bg.webp'), url('/bg.png');
    background-attachment: fixed;
    background-size: cover;
    margin: 0;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .container {
    padding: 0!important;
  }
  .btn--large {
    font-size: 16px;
  }
  .iconLeft {
    margin-right: 16px;
  }
  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(-150%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>

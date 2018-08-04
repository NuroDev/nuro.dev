<template>
  <v-app>
    <v-content>
      <v-layout fill-height>
        <v-flex xs12 sm12 md6 lg6 xl6>
          <nuxt />
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    mounted: function () {
      let currentDate = new Date().getDate()
      let currentMonth = new Date().getMonth()

      if (currentMonth === 7 && currentDate === 9) {
        this.$confetti.start({
          shape: 'circle'
        })
      }
    }
  }
</script>

<style>
  ::-webkit-scrollbar { 
    display: none; 
  }

  html,
  body,
  .application.theme--light,
  .application.theme--dark {
    background: -moz-linear-gradient(top, rgba(79, 195, 247, 0.6) 0%,rgba(31, 30, 161, 0.6) 100%)fixed, url('/bg.webp'), url('/bg.jpg'), url('/bg_original.png');
    background: -webkit-linear-gradient(top, rgba(79, 195, 247, 0.6) 0%,rgba(31, 30, 161, 0.6) 100%)fixed, url('/bg.webp'), url('/bg.jpg'), url('/bg_original.png');
    background: linear-gradient(to bottom, rgba(79, 195, 247, 0.6) 0%,rgba(31, 30, 161, 0.6) 100%)fixed, url('/bg.webp'), url('/bg.jpg'), url('/bg_original.png');
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

  .spacedLetters {
    letter-spacing: .20em!important;
  }

  .contentContainer {
    background-color: #fafcff!important;
    height: 100%;
    padding: 20px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: .20em;
    color: #424242;
    animation: 1s ease-in-out 0s 1 slideInLeft;
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

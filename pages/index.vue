<template>
  <section class='white indexContainer elevation-24' dark>
    <v-container fill-height text-xs-center>
      <v-layout row wrap align-center>
        <v-flex xs12 sm12 md12 lg12 xl12 class='contentContainer'>

          <v-avatar size='128px' class='indexAvatar elevation-24'>
            <img src='/avatar.jpg' alt='Avatar'>
          </v-avatar>

          <br/>

          <h1 class='indexHeader display-2'>👋🏻 Hello, I'm Ben</h1>
          <br />
          <p class='indexSubHeader subheading'>Computer Games Programmer | Web Developer</p>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-btn flat large color='grey darken-3' to='/portfolio'>
              <icon name="image" class='iconLeft' />
              <span>Portfolio</span>
            </v-btn>
            <v-btn flat large color='grey darken-3' href='/CV.pdf'>
              <icon name="file-text" class='iconLeft' />
              <span>CV</span>
            </v-btn>
            <br />
            <v-btn flat large color='grey darken-3' href='https://github.com/nurodev'>
              <icon name="github" class='iconLeft' />
              <span>Github</span>
            </v-btn>
            <v-btn flat large color='grey darken-3' to='/contact'>
              <icon name="mail" class='iconLeft' />
              <span>Contact</span>
            </v-btn>
          </v-flex>

        </v-flex>        
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import FeatherIcon from '~/components/feather-icons'

export default {
  components: {
    FeatherIcon
  }
}
</script>


<style>
  .indexContainer {
    height: 100vh;
    padding: 20px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: .20em;
    color: #424242;
    animation: 1s ease-in-out 0s 1 slideInLeft;
  }
  .indexAvatar {
    margin: 60px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    transform: scale(1.0);
  }
  .indexAvatar:hover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    transform: scale(1.1);
  }
  .indexAvatar:active {
    transform: scale(0.9);
  }
  .indexHeader {
    letter-spacing: .20em!important;
  }
  .indexSubHeader {
    font-weight: 300!important;
  }
</style>
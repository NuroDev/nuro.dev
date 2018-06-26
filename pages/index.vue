<template>
  <section class='contentContainer elevation-0' style='height: 100vh;!important'>
    <v-container fill-height text-xs-center>
      <v-layout row wrap align-center>
        <v-flex xs12 sm12 md12 lg12 xl12>

          <v-avatar size='128px' class='indexAvatar elevation-24'>
            <img src='/avatar.jpg' alt='Avatar'>
          </v-avatar>

          <br/>

          <h1 class='spacedLetters display-2'>👋🏻 Hello, I'm Ben</h1>
          <br />
          <p class='subheading'>Computer Games Programmer | Web Developer</p>

          <v-flex xs12>
            <v-btn flat large round color='grey darken-3' to='/portfolio' prefetch>
              <icon name='image' class='iconLeft' />
              <span>Portfolio</span>
            </v-btn>
            <v-btn flat large round color='grey darken-3' href='https://github.com/nurodev' prefetch>
              <icon name='github' class='iconLeft' />
              <span>Github</span>
            </v-btn>
            <v-btn flat large round color='grey darken-3' to='/contact' prefetch>
              <icon name='mail' class='iconLeft' />
              <span>Contact</span>
            </v-btn>
          </v-flex>

        </v-flex>        
      </v-layout>
    </v-container>
  </section>
</template>

<style>
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
</style>
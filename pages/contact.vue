<template>
  <section class="contentContainer elevation-0" style="height: 100vh;!important">
    <AppToolbar />
    <v-container fill-height text-xs-center>
      <v-layout row wrap align-center>
        <v-flex xs12 sm12 md12 lg12 xl12>
          <h1
            class="contactHeader display-2"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-back"
          >Contact</h1>

          <br />

          <v-flex xs12>
            <v-btn
              flat
              large
              round
              color="grey darken-3"
              href="https://twitter.com/nurodev"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out-back"
            >
              <icon name="twitter" class="iconLeft" />
              <span>Twitter</span>
            </v-btn>
            <v-btn
              flat
              large
              round
              color="grey darken-3"
              href="https://www.linkedin.com/in/nurodev/"
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out-back"
            >
              <icon name="briefcase" class="iconLeft" />
              <span>LinkedIn</span>
            </v-btn>
            <v-btn
              flat
              large
              round
              color="grey darken-3"
              href="mailto:me@nuro.sh"
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out-back"
            >
              <icon name="mail" class="iconLeft" />
              <span>Email</span>
            </v-btn>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import AppToolbar from "~/components/appToolbar";

export default {
  components: {
    AppToolbar
  }
};
</script>

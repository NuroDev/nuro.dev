<template>
  <v-toolbar fixed app class='transparent elevation-0' :dark='isDarkTheme'>

  <v-toolbar-side-icon role='button' aria-label='Menu' @click='navDialog = !navDialog' class='white--text'></v-toolbar-side-icon>

  <v-dialog v-model='navDialog' max-width='350px' style='overlow-x: none;'>
    <v-card light>
      <v-card-text>
        <v-spacer />
        <v-btn block large color='blue' flat :href='item.href' :key='i' v-for='(item, i) in links' exact @click='navDialog = false'>
          <v-icon left v-html='item.icon' />
          <span v-text='item.title' />
        </v-btn>
        <v-spacer />
      </v-card-text>

      <v-divider light />

      <v-card-actions>
        <v-btn block large color='blue' flat @click='navDialog = !navDialog'>
          <v-icon left>close</v-icon>
          <span>Close</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-spacer />

  </v-toolbar>
</template>

<script>
  export default {
    props: [
      'item'
    ],
    data () {
      return {
        navDialog: false,
        isDarkTheme: false,
        links: [
          { icon: 'message', title: 'Twitter', href: 'https://twitter.com/nurodev' },
          { icon: 'code', title: 'Github', href: 'https://github.com/nurodev' },
          { icon: 'book', title: 'CV', href: '/static/CV.pdf' }
        ]
      }
    }
  }
</script>
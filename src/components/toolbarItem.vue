<template>
    <v-tooltip bottom>
        <v-btn large icon slot="activator">
            <v-icon v-html='icon' />
            <!-- <feather-icon :type="icon"></feather-icon> -->
        </v-btn>
        <span v-html='text' />
    </v-tooltip>
</template>

<script>
export default {
  props: [
    'icon',
    'text'
  ]
}
</script>

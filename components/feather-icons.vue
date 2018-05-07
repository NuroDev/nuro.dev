<template>
	<svg :color='this.color' :class='"feather feather-" + this.name' :width='this.size' :height='this.size' :fill='this.fill' :stroke='this.stroke' :stroke-width='this.strokeWidth' :stroke-linecap='this.strokeLineCap' :stroke-linejoin='this.strokeLineJoin' :v-html='feather.icons + this.name'>
		<use :xlink:href='pathToSpriteSheet + "#" + name' />
	</svg>
</template>

<script>
import feather from 'feather-icons'

export default {
  props: {
    name: {
      type: String
    },
    color: {
      type: String
    },
    size: {
      type: String,
      default: '24'
    },
    fill: {
      type: String,
      default: 'none'
    },
    stroke: {
      type: String,
      default: 'currentColor'
    },
    strokeWidth: {
      type: String,
      default: '2'
    },
    strokeLineCap: {
      type: String,
      default: 'round'
    },
    strokeLineJoin: {
      type: String,
      default: 'round'
    }
  },
  data () {
    return {
      feather: feather,
      pathToSpriteSheet: '/feather-sprite.svg'
    }
  }
}
</script>
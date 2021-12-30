<template>
  <CeLink class="btn" :class="[`btn--${size}`, `btn--${variant}`]" :to="to">
    <!-- @slot Button content -->
    <slot />
  </CeLink>
</template>
<script lang="ts">
import { PropType, defineComponent } from '@vue/composition-api'
/**
 * The only true button.
 */
export default defineComponent({
  name: 'UiButton',
  props: {
    /**
     * To link
     */
    to: {
      type: String,
      required: true
    },
    /**
     * Color variant
     * @values primary, inverted
     */
    variant: {
      type: String as PropType<'primary' | 'inverted'>,
      default: 'primary'
    },
    /**
     * Button size
     * @values large, medium, small, extra-small
     */
    size: {
      type: String as PropType<'large' | 'medium' | 'small' | 'extra-small'>,
      default: 'large'
    }
  }
})
</script>

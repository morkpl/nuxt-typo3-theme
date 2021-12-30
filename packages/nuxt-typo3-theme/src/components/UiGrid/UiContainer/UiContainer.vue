<template>
  <div class="container">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'

const UiContainer = defineComponent({
  name: 'UiContainer',
  provide () {
    return {
      gridSize: computed(() => this.gridSize)
    }
  },
  props: {
    gridSize: {
      type: String as PropType<string>,
      default: '12'
    }
  }
})
export default UiContainer as typeof UiContainer
</script>

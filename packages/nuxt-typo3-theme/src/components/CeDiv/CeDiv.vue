<template>
  <hr
    class="ce-div"
    :class="{ 'ce-div--layout-1': appearance.layout === 'layout-1' }"
  />
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import CeDiv from 'nuxt-typo3-ce/src/components/CeDiv'
import { PropAppearance } from './CeDiv.type'

export default defineComponent({
  name: 'CeDiv',
  extends: CeDiv,
  props: {
    appearance: {
      type: Object as PropType<PropAppearance>,
      default: () => ({ layout: 'default' })
    }
  }
})
</script>

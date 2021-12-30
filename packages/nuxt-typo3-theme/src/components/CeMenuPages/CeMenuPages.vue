<template>
  <nav class="ce-menu-pages">
    <CeHeader v-bind="sharedProps" />
    <CeMenuPagesList v-if="menu" :children="menu" />
  </nav>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import CeMenuPages from 'nuxt-typo3-ce/src/components/CeMenuPages'
import CeMenuPagesList from './CeMenuPagesList.vue'

const CeMenuPagesTheme = defineComponent({
  name: 'CeMenuPages',
  components: {
    CeMenuPagesList
  },
  extends: CeMenuPages
})
export default CeMenuPagesTheme as typeof CeMenuPages & typeof CeMenuPagesTheme
</script>

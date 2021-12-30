<template>
  <nav class="ui-navigation">
    <UiNavigationList :links="links" v-on="$listeners" />
    <UiNavigationLanguage
      v-if="languages.length"
      :links="languages"
      v-on="$listeners"
    />
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import UiNavigationList from './UiNavigationList'
import UiNavigationLanguage from './UiNavigationLanguage'
import type { UiNavigationLinks } from './UiNavigation.types'
import type { UiNavigationLanguageLinks } from './UiNavigationLanguage/UiNavigationLanguage.types'
export default defineComponent({
  name: 'UiNavigation',
  components: {
    UiNavigationList,
    UiNavigationLanguage
  },
  props: {
    /**
     * Array of links
     */
    links: {
      type: Array as PropType<UiNavigationLinks>,
      default: () => []
    },
    /**
     * Array of language list
     */
    languages: {
      type: Array as PropType<UiNavigationLanguageLinks>,
      default: () => []
    }
  }
})
</script>

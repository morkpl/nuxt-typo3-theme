<template>
  <section class="container error">
    <UiLogo class="error__logo" />
    <h1 class="error__code">
      {{ error.code }}
    </h1>
    <p class="error__header">
      {{ errorAdditionalInfo.nothingIsHere }}
    </p>
    <p class="error__subheader">
      {{ error.message }}
    </p>
    <UiButton class="error__button" :to="'/'">
      {{ errorAdditionalInfo.goBackToHomepage }}
    </UiButton>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import UiButton from '../UiButton'

export default defineComponent({
  name: 'UiErrorPage',
  components: {
    UiButton
  },
  props: {
    error: {
      type: Object,
      default: () => ({})
    },
    errorAdditionalInfo: {
      type: Object,
      default: () => ({})
    }
  }
})
</script>

<template>
  <UiRow class="ui-news-list">
    <UiCol v-for="element in news" :key="element.uid" md="6" lg="4">
      <UiNewsElement class="ui-news-list__article" :news-element="element" />
    </UiCol>
  </UiRow>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

import type { NewsElement } from '../UiNewsElement/UiNewsElement.types'

import UiNewsElement from '../UiNewsElement'
import { UiRow, UiCol } from '../../UiGrid'

export default defineComponent({
  name: 'UiNewsList',
  components: {
    UiNewsElement,
    UiRow,
    UiCol
  },
  props: {
    news: {
      type: Array as PropType<NewsElement[]>,
      required: true
    }
  }
})
</script>


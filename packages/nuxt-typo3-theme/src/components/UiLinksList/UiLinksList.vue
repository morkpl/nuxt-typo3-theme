<template>
  <ul class="ui-links-list">
    <li v-for="(link, i) in links" :key="i" class="ui-links-list__item">
      <CeLink
        class="ui-links-list__link"
        :target="link.target || '_self'"
        :to="link.link"
        >{{ link.title }}</CeLink
      >
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

type Link = {
  target: string
  link: string
  title: string
}

export default defineComponent({
  name: 'UiLinksList',
  props: {
    links: {
      type: Array as PropType<Link[]>,
      required: true
    }
  }
})
</script>

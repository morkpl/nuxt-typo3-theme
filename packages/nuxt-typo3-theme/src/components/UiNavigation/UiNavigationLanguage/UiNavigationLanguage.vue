<template>
  <UiNavigationList
    :links="languages"
    class="ui-navigation-language"
    v-on="$listeners"
  >
    <template #label="{label}">
      <img
        v-if="getFlagImage(label.twoLetterIsoCode)"
        class="flag"
        width="28"
        :alt="label.navigationTitle"
        :src="getFlagImage(label.twoLetterIsoCode)"
      />
      <span v-else class="flag flag--label">
        {{ label.twoLetterIsoCode }}
      </span>
      <span class="label">
        {{ label.title }}
      </span>
    </template>
  </UiNavigationList>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import type {
  UiNavigationLanguageLinks,
  UiNavigationLanguageLink
} from './UiNavigationLanguage.types'
import UiNavigationList from '../UiNavigationList'

export default defineComponent({
  name: 'UiNavigationLanguage',
  components: {
    UiNavigationList
  },
  props: {
    /**
     * Languages array
     */
    links: {
      type: Array as PropType<UiNavigationLanguageLinks>,
      required: true
    },
    preset: {
      type: Object as PropType<Record<string, string>>,
      default: () => ({
        en: require(`svg-country-flags/svg/us.svg`)
      })
    }
  },
  computed: {
    languages (): UiNavigationLanguageLinks {
      let links = [...this.links]
      links = links.filter(link =>
        this.$typo3.i18n.locales.includes(link.twoLetterIsoCode)
      )
      const current = {
        ...links.find((item, key) => {
          if (item.active) {
            links.splice(key, 1)
          }
          return item.active
        })
      } as UiNavigationLanguageLink

      if (current) {
        current.children = links
      }

      return [current] || this.links
    }
  },
  methods: {
    getFlagImage (twoLetterIsoCode: string): string | undefined {
      try {
        if (
          Object.prototype.hasOwnProperty.call(this.preset, twoLetterIsoCode)
        ) {
          return this.preset[twoLetterIsoCode]
        }
        return require(`svg-country-flags/svg/${twoLetterIsoCode}.svg`)
      } catch {
        return undefined
      }
    }
  }
})
</script>

<template>
  <div
    :style="{ minHeight: heroHeight, backgroundImage: `url('${heroImage}')` }"
    class="ui-hero"
  >
    <UiContainer class="ui-hero__container">
      <div
        class="ui-hero__inner"
        :class="[heroPositionCss, { 'ui-hero--subpage': isSubpage }]"
      >
        <div class="ui-hero__content">
          <component :is="headerTag" v-if="header" class="hero__header">
            {{ header }}
          </component>
          <template v-if="!isSubpage">
            <CeHtmlParser v-if="bodytext" :content="bodytext" />
            <UiButton
              v-if="subheader"
              :to="headerLink"
              size="large"
              class="ui-hero__button"
              variant="inverted"
              >{{ subheader }}</UiButton
            >
          </template>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from '@vue/composition-api'
import UiButton from 'nuxt-typo3-theme/src/components/UiButton'
import useSharedProps from 'nuxt-typo3-ce/src/composables/useSharedProps'
import useHeaderTags from 'nuxt-typo3-ce/src/composables/useHeaderTags'
import useUiState from 'nuxt-typo3-theme/src/composables/useUiState'

const UiHeroTheme = defineComponent({
  name: 'UiHero',
  components: {
    UiButton
  },
  props: {
    heroImage: {
      type: String as PropType<string>,
      required: true
    },
    bodytext: {
      type: String,
      required: true,
      default: ''
    },
    isSubpage: {
      type: Boolean,
      default: false
    },
    ...useSharedProps()
  },
  setup (props) {
    const { getUiOption } = useUiState()

    const { headerLayout } = toRefs(props)
    const { headerTag } = useHeaderTags(headerLayout)
    return {
      headerTag,
      getUiOption
    }
  },
  data () {
    return {
      navHeight: 0 as number
    }
  },
  computed: {
    heroHeight (): string {
      return this.isSubpage ? '328px' : `calc(100vh - ${this.navHeight}px)`
    },
    heroPositionCss (): string {
      const position = this.headerPosition || 'left'
      return `ui-hero--${position}`
    }
  },
  mounted () {
    this.navHeight = this.getUiOption('headerRef')?.clientHeight || 0
  }
})

export default UiHeroTheme as typeof UiHeroTheme
</script>

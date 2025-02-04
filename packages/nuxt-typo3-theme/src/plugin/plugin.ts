import { VueConstructor } from 'vue'
import VueMq from 'vue-mq'
import SvgIcon from 'vue-svgicon'
import vClickOutside from 'v-click-outside'
import NuxtTypo3Ce from 'nuxt-typo3-ce'
import type { TYPO3ThemeOptions } from '../nuxt/module.types'
import useOverrideLocalComponents from '../composables/useOverrideLocalComponents'

import T3Frame from 'nuxt-typo3-theme/src/components/T3Frame'
import T3CeText from 'nuxt-typo3-theme/src/components/T3CeText'
import T3CeButton from 'nuxt-typo3-theme/src/components/T3CeButton'
import T3CeTextpic from 'nuxt-typo3-theme/src/components/T3CeTextpic'
import T3CeHeader from 'nuxt-typo3-theme/src/components/T3CeHeader'
import T3CeGallery from 'nuxt-typo3-theme/src/components/T3CeGallery'
import T3CeImage from 'nuxt-typo3-theme/src/components/T3CeImage'
import T3CeMenuPages from 'nuxt-typo3-theme/src/components/T3CeMenuPages'
import T3CeBullets from 'nuxt-typo3-theme/src/components/T3CeBullets'
import T3CeDiv from 'nuxt-typo3-theme/src/components/T3CeDiv'
import T3CeHtmlParser from 'nuxt-typo3-theme/src/components/T3CeHtmlParser'
import T3Form from 'nuxt-typo3-theme/src/components/T3Form'
import T3FormCta from 'nuxt-typo3-theme/src/components/T3Form/T3FormCta'
import T3FormField from 'nuxt-typo3-theme/src/components/T3Form/T3FormField'
import T3FormFieldset from 'nuxt-typo3-theme/src/components/T3Form/T3FormFieldset'
import T3FormFieldList from 'nuxt-typo3-theme/src/components/T3Form/T3FormFieldList'
import UiFrame from 'nuxt-typo3-theme/src/components/UiFrame'
import UiButton from 'nuxt-typo3-theme/src/components/UiButton'

import {
  UiContainer,
  UiRow,
  UiCol,
  UiOrder,
  UiOffset
} from 'nuxt-typo3-theme/src/components/UiGrid'

const globalComponents: Record<string, Vue.VueConstructor> = {
  T3Frame,
  T3CeText,
  T3CeButton,
  T3CeDiv,
  T3CeImage,
  T3CeMenuPages,
  T3CeMenuSubpages: T3CeMenuPages,
  T3CeTextpic,
  T3CeBullets,
  T3CeHeader,
  T3CeGallery,
  T3CeHtmlParser,
  UiContainer,
  UiFrame,
  UiRow,
  UiCol,
  UiOrder,
  UiOffset,
  UiButton,
  T3Form,
  T3FormCta,
  T3FormField,
  T3FormFieldset,
  T3FormFieldList
}

const defaults = {
  overrideLocalComponents: false
}

const UiPlugin = {
  install: (
    Vue: VueConstructor,
    options: TYPO3ThemeOptions = defaults
  ): void => {
    Vue.use(NuxtTypo3Ce)
    Vue.use(vClickOutside)

    Object.keys(globalComponents).forEach(key => {
      Vue.component(key, globalComponents[key])
    })

    Vue.use(VueMq, {
      breakpoints: {
        default: 576,
        sm: 768,
        md: 1024,
        lg: 1200,
        xl: 1400,
        xxl: Infinity
      },
      defaultBreakpoint: 'default' // customize this for SSR
    })

    if (
      options.overrideLocalComponents &&
      !Vue.__nuxt_typo3_overrides_mixin__
    ) {
      Vue.__nuxt_typo3_overrides_mixin__ = true
      Vue.mixin({
        setup () {
          useOverrideLocalComponents(
            Array.isArray(options.overrideLocalComponents)
              ? options.overrideLocalComponents
              : undefined
          )
        }
      })
    }

    Vue.use(SvgIcon, {
      tagName: 'SvgIcon'
    })

    require('nuxt-typo3-theme/src/components/UiIcon/svg')
  }
}

export default UiPlugin

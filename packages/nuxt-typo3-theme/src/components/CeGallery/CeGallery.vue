<template>
  <UiRow :class="galleryCss" class="ce-gallery">
    <slot name="before" />
    <UiCol
      v-if="$slots.default"
      :xl="
        (isInOneRow && (orderIsReversed ? rightProportion : leftProportion)) ||
        null
      "
      :order="orderIsReversed ? '2' : '1'"
      class="ce-gallery__text"
    >
      <slot />
    </UiCol>
    <UiCol
      v-if="gallery.count.files"
      class="ce-gallery__container"
      :class="[`ce-gallery__${colCount}-cols`]"
      :xl="
        (isInOneRow && (orderIsReversed ? leftProportion : rightProportion)) ||
        null
      "
      :order="orderIsReversed ? '1' : '2'"
    >
      <template v-for="(row, rowKey) in gallery.rows">
        <div
          v-for="(col, colKey) in row.columns"
          :key="`${rowKey}-r-${colKey}-c`"
          class="ce-gallery__col"
        >
          <CeMediaFile :file="col" />
        </div>
      </template>
    </UiCol>
    <slot name="after" />
  </UiRow>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { CeGalleryProp } from 'nuxt-typo3-ce/types'
import CeGallery from 'nuxt-typo3-ce/src/components/CeGallery'

const CeGalleryTheme = defineComponent({
  name: 'CeGallery',
  extends: CeGallery,
  props: {
    proportions: {
      type: String,
      default: null
    },
    gallery: {
      type: Object as PropType<CeGalleryProp>,
      required: true
    }
  },
  computed: {
    colCount (): number {
      return this.gallery?.count?.columns || 1
    },
    isInOneRow (): boolean {
      return this.gallery?.position?.noWrap
    },
    orderIsReversed (): boolean {
      return (
        (!this.isInOneRow && this.gallery.position.vertical !== 'below') ||
        (this.isInOneRow && this.gallery.position.horizontal === 'left')
      )
    },
    leftProportion (): string {
      const proportions = this.proportions.match(
        /([1-9]{1,2})-([1-9]{1,2})_[1-9]{1,2}-[1-9]{1,2}/
      ) || ['1-2_1-2', '1', '2'] // default proportion 1-2_1-2
      const [, num, denum] = proportions

      return `${Math.round((+num / +denum) * 12)}`
    },
    rightProportion (): string {
      return `${12 - +this.leftProportion}`
    }
  }
})

export default CeGalleryTheme as typeof CeGallery & typeof CeGalleryTheme
</script>

<template functional>
  <div
    :class="[
      'ui-frame',
      `frame-${props.frameClass}`,
      `layout-${props.layout}`,
      `space-before-${
        props.spaceBefore.length ? props.spaceBefore : 'default'
      }`,
      `space-after-${props.spaceAfter.length ? props.spaceAfter : 'default'}`
    ]"
  >
    <div
      class="frame-inner"
      :class="[{ container: props.frameClass !== 'full-width' }]"
    >
      <hr v-if="props.frameClass === 'ruler-before'" />

      <div
        v-if="props.frameClass.includes('indent')"
        :class="{ [props.frameClass]: props.frameClass.includes('indent') }"
      >
        <slot />
      </div>
      <slot v-else />

      <hr v-if="props.frameClass === 'ruler-after'" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import useAppearanceProps from 'nuxt-typo3-ce/src/composables/useAppearanceProps'
export default Vue.extend({
  name: 'UiFrame',
  functional: true,
  props: {
    ...useAppearanceProps()
  }
})
</script>

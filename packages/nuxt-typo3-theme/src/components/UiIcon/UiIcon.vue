<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'UiIcon',
  functional: true,
  inheritAttrs: false,
  render (createElement, ctx) {
    return createElement('svg-icon', {
      props: ctx.props,
      class: [ctx.data.class, ctx.data.staticClass]
    })
  }
})
</script>

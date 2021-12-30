<template>
  <button
    class="ui-hamburger"
    :class="{ 'is-open': isOpen }"
    aria-label="menu"
    @click="toggle"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    /**
     * @model  Is Layer open - provided by v-model
     */
    value: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  watch: {
    value (val) {
      this.isOpen = val
    }
  },
  mounted () {
    this.isOpen = this.value
  },
  methods: {
    toggle (): void {
      this.isOpen = !this.isOpen
      this.$emit('input', this.isOpen)
      this.$emit('toggle', this.isOpen)
    }
  }
})
</script>

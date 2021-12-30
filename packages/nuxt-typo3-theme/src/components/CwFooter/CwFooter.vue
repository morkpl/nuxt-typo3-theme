<template>
  <footer class="cw-footer">
    <UiContainer class="cw-footer__container">
      <UiRow>
        <UiCol col="lg">
          <UiLogo :width="64" invert />
        </UiCol>
        <UiCol v-if="footerNavigation" col="lg">
          <UiLinksList :links="footerNavigation" />
        </UiCol>
        <UiCol v-if="footerContactData" col="lg">
          <CeText
            class="cw-footer__text"
            :header="footerContactData.header"
            :header-layout="2"
            :bodytext="footerContactData.bodytext"
          />
        </UiCol>
        <UiCol v-if="socialMenu" col="lg">
          <UiIconsList :icons="socialMenu" />
        </UiCol>
      </UiRow>
    </UiContainer>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex'
import UiIconsList from '../UiIconsList'
import UiLinksList from '../UiLinksList'
import UiLogo from '../UiLogo'

const CwFooterTheme = defineComponent({
  name: 'CwFooter',
  components: {
    UiLinksList,
    UiIconsList,
    UiLogo
  },
  computed: {
    ...mapGetters(['footerNavigation', 'socialMenu', 'footerContactData'])
  }
})

export default CwFooterTheme as typeof CwFooterTheme
</script>

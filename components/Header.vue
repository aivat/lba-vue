<template>
  <header class="Header">
    <nuxt-link class="Header" to="/">
<!--      <img src="~static/logo_nav.png" alt="Nuxt" />-->
      <h1 class="Header">NUXT</h1>
    </nuxt-link>
    <nuxt-header-nav/>
  </header>
</template>

<script>
import NuxtHeaderNav from '~/components/HeaderNavMenu.vue'
export default {
  components: {
    NuxtHeaderNav
  }
}
</script>

<style>
    .Header {
        display: flex;
    }
</style>

<template>
  <header class="header">
    <nuxt-link class="header-logo" to="/">
        <h1 class="header-logo-img">&#12296;LBA&#12297;</h1> 
        <h1 class="header-logo-text">&#32;ЭльБиЭй</h1>
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
    .header {
      top: 0;
/*        left: 0;*/
      width: 100%;
      height: 60px;
      z-index: 995;
      padding: 0 15px;
      display: flex;
      position: fixed;
      flex-direction: row;
      background-color: #fff;
      border-bottom: 1px solid #dbdfe1;
        justify-content: space-between;
        box-sizing: border-box;
    }
    .header-logo {
        text-decoration: none;
       align-items:center;
        display: flex;
    }

    .header-logo-text {
        margin: 0;
        font-weight: 400;
        color: #35495e;
        letter-spacing: 1px;
        text-align: center;
    }
    
    .header-logo-img {
        font-weight: 300;
        color: #526488;
    }

</style>

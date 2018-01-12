<template>
  <div>
      <navbar></navbar>
      <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/Header.vue'
export default {
  components: {
    Navbar
  }
}
</script>    
<style>
    html, body {
        height: 100%;
        margin: 0;
    }
    body {
     font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;   
        color: #35495e;
  letter-spacing: 1px;
    }
    
</style>

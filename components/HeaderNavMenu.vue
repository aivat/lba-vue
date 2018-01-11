<template>
  <ul class="Menu">
    <li class="Menu">
      <nuxt-link class="Menu" to="/guide">ghg
      </nuxt-link>
    </li>
    <li class="Menu__Item">
      <nuxt-link class="Menu" to="/api">ghgh
      </nuxt-link>
    </li>
    <li class="Menu">
      <nuxt-link class="Menu" to="/examples">
      </nuxt-link>
    </li>
    <li class="Menu">
      <nuxt-link class="Menu" to="/faq">
      </nuxt-link>
    </li>
  </ul>
<!--</nav>-->
</template>

<script>
export default {
//  components: {
//    NuxtHeaderNavMenuDropdown
//  }
}
</script>

<style scoped>
.Menu
{
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
}
</style>
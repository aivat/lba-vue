<template>
  <ul class="menu">
    <li class="menu-item">
      <nuxt-link class="menu-item-link" to="/company">О КОМПАНИИ
      </nuxt-link>
    </li>
    <li class="menu-item">
      <nuxt-link class="menu-item-link" to="/api">ТЕЛ: +7 (906) 830 7777
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
.menu {
/*  width: 100%;*/
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
}
    .menu-item {
        margin-left: 20px;
    }
    .menu-item-link {
        height: 60px;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      color: #35495e;
      font-size: 16px;
      text-decoration: none;
      letter-spacing: 0.5px;
    }
    
    .menu-item-link:hover {
        color:#ff1100;
    }
</style>
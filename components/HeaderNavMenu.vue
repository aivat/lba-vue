<template>
<div class="wrap-menu">
  <ul class="menu">
    <li class="menu-item">
      <nuxt-link class="menu-item-link" to="/company">О НАС
      </nuxt-link>
    </li>
    <li class="menu-item">
      <nuxt-link class="menu-item-link" to="/contacts">КОНТАКТЫ
      </nuxt-link>
    </li>
  </ul>
<!--
    
    <div class="test-menu">

        <ul class="test-menu-list">
            <li class="test-menu-item">
                <nuxt-link class="menu-item-link" to="/company">О КОМПАНИИ
                </nuxt-link>
            </li>
            <li class="test-menu-item">
                <nuxt-link class="menu-item-link" to="/contacts">ТЕЛ: +7 (951) 033-65-26
                </nuxt-link>
            </li>
        </ul>
 </div>
-->
<!--
<button class="menu-toggle" v-on:click="visibleMenu()">
      <ul class="menu menu-gamburger">
    <li class="menu-item">
      <nuxt-link class="menu-item-link" to="/company">О КОМПАНИИ
      </nuxt-link>
    </li>
    <li class="menu-item">
      <nuxt-link class="menu-item-link" to="/contacts">КОНТАКТЫ
      </nuxt-link>
    </li>
  </ul>
</button>
-->

    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    visibleMenu () {
    }
  }
}
</script>

<style scoped>
/*
    .wrap-menu {
        display: flex;
        flex-direction: column;
        flex-basis: 400px;
        
    }
*/
.menu {
/*  width: 100%;*/
  margin: 0;
  padding: 0;
  display: flex;
/*  flex-wrap: wrap;*/
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
    @media (max-width: 991px) {
		 .header {
/*             position: absolute;*/
			 top: auto;
             bottom: 0px;
            border-bottom: none;
              border-top: 1px solid #dbdfe1;
        
		 }
        .header-logo-text {
            display: none;
        }
        .menu-item {
            border-left: 1px solid #dbdfe1;
            margin: 0;
            padding: 0 15px;
        }
        .menu-item-link {
            font-size: 16px;
        }
    }

</style>
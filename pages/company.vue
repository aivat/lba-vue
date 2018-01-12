<template>
  <div class="category">
<!--
    <nuxt-affix :list="list" category="company" />
    <div class="category__content Content Content--hasCarbon" :class="{'category__content--hidden': visible}">
      <nuxt-child/>
    </div>
-->
    <div class="cont">
      Мы занимаемся развитием проектов.<br><br>

Анализируем -> пишем стратегию -> проектируем -> разрабатываем -> внедряем -> тестируем -> улучшаем.<br><br>

Начальная стадия может быть любой - от проектирования и разработки нового сайта до модернизации многолетнего проекта с историей и выстроенными процессами.<br><br>

Решаемые задачи - повышение конверсии, автоматизация, интеграции, отказоустойчивая работа нагруженных систем.
    </div>
  </div>
</template>

<script>

// import NuxtAffix from '~/components/Affix.vue'
// export default {
//  computed: {
//    visible () { return this.$store.state.visibleAffix },
//    list () { return this.$store.state.menu.company }
//  },
//  components: {
//    NuxtAffix
//  }
// }
</script>
<style>
    .category {
        margin-top: 160px;
        padding: 0 50px;
    }
    .cont {

          display: flex;
  justify-content: center;
        align-items: center;
font-weight: 300;
  font-size: 32px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
    }
</style>
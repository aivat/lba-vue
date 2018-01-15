<template>
  <div class="category">
    <div class="cont">
		<h1 class="title-page">
			О КОМПАНИИ <br><br>
		</h1>
		<div class="wrap">
			Мы занимаемся развитием проектов.<br><br>

			Анализируем -> пишем стратегию -> проектируем -> разрабатываем -> внедряем -> тестируем -> улучшаем.<br><br>

			Начальная стадия может быть любой - от проектирования и разработки нового сайта до модернизации многолетнего проекта с историей и выстроенными процессами.<br><br>

			Решаемые задачи - повышение конверсии, автоматизация, интеграции, отказоустойчивая работа нагруженных систем.
		</div>
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
		display: flex;
		justify-content: center;
    }
    .cont {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		font-weight: 300;
		font-size: 32px;
		color: #526488;
		word-spacing: 5px;
		padding-bottom: 15px;
		flex-basis: 1200px;
    }
	.title-page {
		margin: 0;
		font-weight: 300;
		font-size: 50px;
		color: #35495e;
		letter-spacing: 1px;
	}
	
	.wrap {
		flex-basis: 800px;
	}
		 @media (max-width: 991px) {
		 .cont {
			 flex-direction: column;
		 }
		 .category {
			margin-top: 60px;
            margin-bottom: 60px;
		 }
		 .title-page {
			 font-size: 30px;
			 font-weight: 400;
		 }
	}
</style>
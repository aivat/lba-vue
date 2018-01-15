<template>
  <div class="category">
    <div class="cont">
		<h1 class="title-page">
			КОНТАКТЫ
		</h1>
		<div class="wrap">
				<div class="box">
			460024, Оренбург,
			ул. Маршала Жукова, 42, офис 208<br><br>
			Тел: +7 (951) 033-65-26<br><br>
	</div>
						<div class="box">
			<a href="https://vk.com/weblba" class="link-soc">Мы ВКонтакте</a> <br><br>
			<a href="http://telegram.me/weblba" class="link-soc">Напишите нам в Телеграмм</a>
	</div>
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
	.link-soc {
		text-decoration: none;
		border-bottom: 1px dashed #188269;
        color: #188269;
	}
	.link-soc:hover {
		color: #f00000;
		border-color: #f00000;
	 }
	 @media (max-width: 991px) {
		 .cont {
			 flex-direction: column;
			 font-size: 18px;
		 }
		 .category {
			margin-top: 20px; 
			 padding: 0 10px;
		 }
		 .wrap {
			 flex-basis: auto;
		 }
		 .title-page {
			 font-size: 30px;
			 font-weight: 400;
			 padding-bottom: 15px;
		 }
		 			 .box {
						 border-radius: 5px;
				 padding: 10px;
				 box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
				 margin-bottom: 20px;
				 
			 }
	}
</style>
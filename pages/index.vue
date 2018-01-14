<template>
  <section class="container">
    <div>
      <h1 class="title">
        Мы делаем сайты <br>в Оренбурге
      </h1>
      <h2 class="subtitle">
Мы помогаем клиентам развивать их бизнес благодаря постоянному улучшению сайта, обеспечиваем конкурентные преимущества и возможности роста.
<br>

      </h2>
		<p class="tel">ЗВОНИТЕ ПО НОМЕРУ +7 (951) 033-65-26  </p>
    </div>
  </section>
</template>

<script>
//  import Logo from '~/components/Logo.vue'

export default {
//  components: {
//    Logo
//  }
}
</script>

<style>
.container {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; 
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
	padding: 0 15px;
  padding-bottom: 15px;

}

.links {
  padding-top: 15px;
}
.tel {
	display: flex;
	background-color: brown;
	color: white;
	justify-content: center;
	/*        height: 60px;*/
	font-weight: 300;
	font-size: 42px;
	word-spacing: 5px;
	padding: 10px;
}
@media (max-width: 991px) {
	.container {
		margin-top: 100px;
	}
	.title {
			 font-size: 40px;
		 }
	.subtitle {
		font-size: 22px;
	}
	}
</style>

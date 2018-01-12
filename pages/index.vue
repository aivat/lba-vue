<template>
  <section class="container">
    <div>
      <h1 class="title">
        Мы делаем сайты в Оренбурге
      </h1>
      <h2 class="subtitle">
Мы помогаем клиентам развивать их бизнес благодаря постоянному улучшению сайта, обеспечиваем конкурентные преимущества и возможности роста.
<br>
<p class="tel">Звоните по номеру +7 (906) 830 77 77  </p>
      </h2>
      <div class="links">
      </div>
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
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
    .tel {
        display: block;
        background-color: brown;
        color: white;
        height: 60px;
    }
</style>

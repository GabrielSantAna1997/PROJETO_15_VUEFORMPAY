<template>
  <div id="app">
    <div class="container mt-8 custom-container">
      <ProductCard />
      <br>
      <FormRegister />
      <br>
      <PaymentPage />
      <br>
    </div>


    <div class="container mt-4">
      <footer class="d-flex flex-column align-items-center text-center">
        <p v-if="methodPay === 'creditCard'" class="small mb-5 bold-class">*OBS.: Taxa de 2,99% a.m.</p>
        <div class="d-flex align-items-center justify-content-center">
          <a href="/politica-de-privacidade" class="small">Política de Privacidade</a>
          <p class="small ml-2 mb-0 bold-class">| Esta compra será processada pela PayT</p>
        </div>
      </footer>
    </div>


  </div>
</template>


<script>
import ProductCard from './components/ProductCard.vue'
import FormRegister from './components/FormRegister.vue'
import PaymentPage from './components/PaymentPage.vue'
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    ProductCard,
    FormRegister,
    PaymentPage
  },
  computed: {
    ...mapState(['methodPay']),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.custom-container {
  width: 900px !important;
}


@media (max-width: 600px) {
  .custom-container {
    width: auto !important;
  }
}
</style>

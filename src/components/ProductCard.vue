<template>
  <div class="container mt-4">
    <div class="card">
      <div class="row no-gutters">
        <!-- Parte Esquerda: Imagem -->
        <div class="col-md-4 custom-img">
          <img alt="Vue logo" src="@/assets/product.png" class="card-img">
        </div>

        <!-- Parte Direita: Detalhes do Produto e SelectCountry -->
        <div class="col-lg-6 col-md-6 col-sm-12 card-text">
          <div class="card-body">
            <!-- Nome do Produto -->
            <span class="font-weight-bold">
              <h5 class="card-title custom-card-title">{{ product.name }}</h5>
            </span>

            <!-- Preço e Plano Mensal -->
            <p class="card-text custom-card-text">
              <span class="highlighted-text orange-text">{{ country.currency }} {{ product.value }} / mês</span>
            </p>
            <p class="card-text custom-card-subtext">{{ product.type }}</p>
          </div>
        </div>

        <!-- Campo SelectCountry personalizado no canto superior direito -->
        <div class="col-md-2 ml-auto">
          <select-country
            label="Selecione o País:"
            placeholder="Alterar país"
            v-model="selectedCountry"
          ></select-country>
        </div>
      </div>

      <div class="text-white text-right custom-email" style="height: 40px;">
        <p class="text-email">{{ userContact }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import SelectCountry from './subComponents/SelectCountry.vue';
import { mapState } from 'vuex';

export default {
  components: {
    SelectCountry,
  },
  computed: {
        ...mapState(['country']),
    },
  created() {
    if(!this.country.currency){
      this.country.currency = 'R$';
    }
    
  },
  data() {
    return {
      selectedCountry: '',
      product: {
        'name': 'Nome do produto',
        'value': '50,00',
        'type' : 'Plano mensal com renovação automática'
      },
      userContact: 'contatolivrediet@gmail.com'
    };
  }
};
</script>

<style>
.custom-img {
  padding: 15px 15px 15px 30px !important;
  left: 10px;
}

.card-text {
  text-align: left;
  margin: auto;
}

.card-body {
  margin-top: 10%;
}

.highlighted-text {
  font-weight: bold;
  color: #FF6905
}

.custom-card-title {
  font-size: 1rem;
  font-weight: bold;
  color: #FF6905
}

.custom-card-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #FF6905
}

.custom-card-subtext {
  font-size: 0.9rem;
}

.div-email {
  text-align: left;
  margin: 2%;
}

.text-email {
  margin-left: 2%;
  margin-top: 10px;
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
}

.custom-email {
  background-color: #FF6905
}
</style>

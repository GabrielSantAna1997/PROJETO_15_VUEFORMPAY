<template>
    <div>
      <div class="button-container">
        <button
          v-for="(button, index) in paymentForms"
          :key="index"
          class="custom-button"
          @click="selecionarFormaPagamento(button.value)"
        >
          <i :class="['custom-icon', button.icone, 'text-muted']"></i>
          <span class="text-muted">{{ button.label }}</span>
        </button>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    props: ['paymentForms'],
    methods: {
      selecionarFormaPagamento(methodPay) {
        this.$emit('selectedPaymentMethod', methodPay);
      },
    },
  };
  </script>
  
  <style>
  .button-container {
    display: flex;
    justify-content: space-between;
  }
  
  .custom-button {
    display: flex;
    align-items: center;
    width: 200px;
    height: 70px;
    color: white;
    border: 2px solid grey;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
  }

  .custom-icon{
  font-size: 50px;
}


.custom-button i {
  margin-right: 5px; /* Espaçamento entre o ícone e o texto */
}

.custom-button:hover {
  border: 2px solid  #FF6905
}

  </style>
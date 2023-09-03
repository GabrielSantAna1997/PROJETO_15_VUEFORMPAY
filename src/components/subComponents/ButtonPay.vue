<template>
  <div>
    <div class="button-container row">
      <div
        v-for="(button, index) in paymentForms"
        :key="index"
        class="col-12 col-md-4 mb-3"
      >
        <button
          class="custom-button"
          @click="selecionarFormaPagamento(button.value)"
        >
          <div class="d-flex align-items-center custom-div-icon-span">
            <i :class="['custom-icon', 'text-muted', 'mr-2', button.icone]"></i>
            <span class="text-muted custom-span">{{ button.label }}</span>
          </div>
        </button>
      </div>
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
.custom-button {
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.custom-icon {
  margin-left: 10px;
  font-size: 50px;
}

.custom-button i {
  margin-bottom: 5px;
}

.custom-button:hover {
  border: 2px solid #FF6905;
}

.custom-span{
  margin-left: 10px;
}

@media (max-width: 1000px) {
  .custom-button {
    width: 150px !important;
    height: 80px !important; 
  }
  .custom-icon {
    margin-left: 5px;
    font-size: 30px;
  }

  .custom-span {
    font-size: 14px;
  }
}

@media (max-width: 770px) {
  .custom-span {
    display: none;
  }
  .custom-button {
    display: inline-flex !important;
    width: 200px !important;
    height: 150px !important; 
  }
}

</style>

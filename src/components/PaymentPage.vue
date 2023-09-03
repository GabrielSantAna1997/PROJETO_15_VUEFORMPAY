<template>
  <div>
    <div class="container mt-4">
      <div class="card">
        <div class="d-flex justify-content-center align-items-center">

          <ButtonPay :paymentForms="paymentForms"
          @selectedPaymentMethod="handleSelectedPaymentMethod"/>

        </div>

        <div>
          <CreditCardMethod ref="CreditCardMethod" v-if="selectMethodPay === 'creditCard'" />
          <PixMethod v-if="selectMethodPay === 'pix'" />
          <TicketMethod ref="TicketMethod" v-if="selectMethodPay === 'ticket'" />
        </div>

        <div class="card mt-4 text-start border-0" style="margin-left: 15px;">
          <div class="card-body mb-3 mt-0">
            <h5 class="card-title mb-3">Detalhes da compra</h5>
            <div class="d-flex align-items-center mb-3">
              <p class="card-text bold-class" style="flex: 1;">Nome do Produto</p>
              <span>R$ 50,00 / Mês</span>
            </div>
            <div  v-if="methodPay === 'creditCard'" class="d-flex align-items-center">
              <i class="bi bi-credit-card me-2" alt="Ícone de Cartão"></i>
              <p class="custom-textmini text-muted">Essa cobrança aparecerá na sua fatura como: PAY T*NomeDoProduto</p>
            </div>
            <div v-if="methodPay === 'ticket'">
              <p class="card-text" style="flex: 1;">CPF/CNPJ (Para emissão de Nota Fiscal)</p>
              <div class="d-flex flex-column text-left">
                <input type="text" v-model="cpfCnpj" class="form-control" style="width: 50%;">
              </div>
            </div>
            <button type="button" class="btn btn-lg mt-3 custom-color" v-on:click="save()">Comprar Agora</button>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>




<script>
import { mapMutations, mapState } from 'vuex';
import CreditCardMethod from './typesPayments/CreditCardMethod.vue';
import PixMethod from './typesPayments/PixMethod.vue';
import TicketMethod from './typesPayments/TicketMethod.vue';
import ButtonPay from './subComponents/ButtonPay.vue'

export default {
  data() {
    return {
      cpfCnpj: '',
      selectMethodPay: 'creditCard',
      paymentForms: [
        {
          'value': 'creditCard',
          'icone': 'bi bi-credit-card',
          'label': 'Cartão de Crédito'
        },
        {
          'value': 'pix',
          'icone': 'bi bi-x-diamond-fill',
          'label': 'Pix'
        },
        {
          'value': 'ticket',
          'icone': 'bi bi-upc',
          'label': 'Boleto'
        },
      ],
    };
  },
  components: {
    CreditCardMethod,
    PixMethod,
    TicketMethod,
    ButtonPay
  },
  computed: {
    ...mapState(['methodPay', 'validForm']),
  },
  methods: {
    ...mapMutations(['updateMethodPay']),
    handleSelectedPaymentMethod(methodPay) {
      this.updateMethodPay(methodPay);
      this.AddPaymentInfo(methodPay)
      this.selectMethodPay = methodPay
    },
    AddPaymentInfo(methodPay) {
      const labels = {
        'creditCard': 'Cartão de Crédito - Informações do Cartão de Crédito',
        'pix': 'Pix - CPF/CNPJ',
        'ticket':'Boleto - CPF/CNPJ'
      }

      console.log(labels[methodPay])
    },
    save() {
      const validFormCredit = this.$refs.CreditCardMethod.checkFormValid();

      const formValidTicket = this.methodPay === 'ticket' && this.cpfCnpj && this.validForm
      const formValidPix = this.methodPay === 'pix' &&  this.validForm
      const formValidCredit = this.methodPay === 'creditCard' &&  this.validForm && validFormCredit

      if(formValidTicket || formValidPix || formValidCredit){
        this.purchase()
      }else{
        this.purchaseFail()
      }

    },
    purchase() {
      console.log('FORMULÁRIO É VÁLIDO')
    },
    purchaseFail() {
      console.log('FORMULÁRIO É INVÁLIDO')
    }
  },
};
</script>

<style>
.custom-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px; /* Largura desejada */
  height: 70px; /* Altura desejada */
  margin: 20px; /* Espaçamento entre os botões */
  color: white;
  border: 2px solid grey; 
  cursor: pointer;
  margin-bottom: 60px;
  transition: background-color 0.3s, border-color 0.3s;
}

.card-text {
    text-align: left !important;
  }

.custom-textmini {
  margin: 0;
  font-size: 13px
}

.custom-color {
    width: 430px;
    height: 70px;
    background-color: #FF6905 !important; 
    color: #ffffff !important; 
    border: none; 
}

@media (max-width: 550px) {
  .custom-color {
    width: auto; 
  }
}

</style>
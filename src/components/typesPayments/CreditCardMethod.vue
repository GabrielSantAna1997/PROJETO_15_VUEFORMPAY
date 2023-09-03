<template>
  <div class="cartao-credito-container">
    <div class="formulario-cartao">
      <form>
        <div class="mb-3 position-relative">
          <label class="form-label bold-class left-align-label">Número do Cartão</label>
          <div class="input-with-image">
            <input type="text" class="form-control" v-model="cardNumber"  placeholder="Digite somente os números" @input="validateCardNumber" />
            <img v-if="flagCard" :src="flagCardimage" alt="Cartão de Exemplo" class="custom-flag mt-2 me-2" />
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label bold-class left-align-label">Titular do Cartão</label>
          <input type="text" class="form-control" placeholder="Digite o nome impresso no cartão"
            v-model="cardHolder" />
        </div>
        <div class="mb-3">
          <label class="form-label bold-class left-align-label">CPF/CNPJ do Titular</label>
          <input type="text" class="form-control" placeholder="Para emissão da nota fiscal" v-model="cpfCnpj" />
        </div>
        <div class="mb-3">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <label class="form-label bold-class left-align-label">Validade do Cartão</label>
              <div class="d-flex">
                <select class="form-select me-2" v-model="selectedMonth">
                  <option value="" disabled selected>Mês</option>
                  <option v-for="option in month" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
                <select class="form-select" v-model="validYear">
                  <option value="" disabled selected>Ano</option>
                  <option v-for="ano in years" :key="ano" :value="ano">{{ ano }}</option>
                </select>
              </div>
            </div>
            <div>
              <label class="form-label bold-class left-align-label">CVV</label>
              <input type="text" class="form-control" placeholder="CVV" v-model="cvv" />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label bold-class left-align-label">Número de Parcelas</label>
          <div class="d-flex justify-content-between align-items-center">
            <select class="form-select" v-model="selectedInstallmentNumbers">
              <option v-for="option in installmentNumbers" :key="option.value" :value="option.value">{{ option.label }}
              </option>
            </select>
          </div>
        </div>


      </form>
    </div>
    <div class="cartao-exemplo">
      <img src="@/assets/CartãoEx.png" alt="Cartão de Exemplo" class="cartao-exemplo-img" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardHolder: '',
      cpfCnpj: '',
      cvv: '',
      selectedInstallmentNumbers: 1,
      selectedMonth: '',
      validYear: '',
      cardNumber: "",
      flagCard: null,
      installmentNumbers: [
        { value: 1, label: '1x de R$ 50,00' },
        { value: 2, label: '2x de R$ 25,00' },
        { value: 3, label: '3x de R$ 16,67' },
        { value: 4, label: '4x de R$ 12,50' },
        { value: 5, label: '5x de R$ 10,00' },
      ],
      month: [
        { value: 1, label: 'Jan' },
        { value: 2, label: 'Fev' },
        { value: 3, label: 'Mar' },
        { value: 4, label: 'Abr' },
        { value: 5, label: 'Mai' },
        { value: 6, label: 'Jun' },
        { value: 7, label: 'Jul' },
        { value: 8, label: 'Ago' },
        { value: 9, label: 'Set' },
        { value: 10, label: 'Out' },
        { value: 11, label: 'Nov' },
        { value: 12, label: 'Dez' }
      ],
      flags: ['visa','mastercard','diners','amex','hipercard','elo'],
      validFormCard: false
    };
  },
  computed: {
    years() {
      const currentYear = new Date().getFullYear();
      const years = [];
      const amountOfYears = 12;

      for (let i = 0; i < amountOfYears; i++) {
        years.push(currentYear + i);
      }

      return years;
    },
    flagCardimage() {
      if(this.flags.includes(this.flagCard)){
        return require( `@/assets/${this.flagCard}.png`);
      }

      return null
    },
  },
  methods: {
    validateCardNumber() {
      this.flagCard = null;

      const regexFlagsCard = {
        visa: /^4[0-9]{15}$/,
        mastercard: /^(50|5[6-9]|6007|6220|6304|6703|6708|6759|676[1-3])|((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        amex: /^3[47][0-9]{13}$/,
        hipercard: /^606282|^3841(?:[0|4|6]{1})0/,
        elo: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
      };

      for (const flag in regexFlagsCard) {
        if (regexFlagsCard[flag].test(this.cardNumber)) {
          this.flagCard = flag;
          return;
        }
      }
    },
    checkFormValid() {
      return !!this.cardNumber &&
        !!this.cardHolder &&
        !!this.cpfCnpj &&
        !!this.cvv &&
        !!this.selectedMonth &&
        !!this.validYear &&
        !!this.selectedInstallmentNumbers;
    },
  },
};
</script>

<style scoped>
.cartao-credito-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 5%;
}

.formulario-cartao,
.cartao-exemplo {
  flex-basis: 50%;
}


.left-align-label {
  text-align: left;
  display: block;
}

.input-with-image {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-image input {
  flex: 1;
}

.input-with-image img {
  position: absolute;
  top: 30%;
  transform: translateY(-50%);
  right: 10px;
  width: 35px;
}

.cartao-exemplo-img {
  width: 100%;
  max-width: 300px; 
  height: auto; 
}


@media screen and (max-width: 768px) {

  .cartao-credito-container {
    flex-direction: column;
    align-items: center;
  }

  .formulario-cartao,
  .cartao-exemplo {
    flex-basis: 100%; 
  }

  .input-with-image img {
    top: initial; 
    transform: none; 
    right: initial; 
    margin-top: 10px;
  }
}


</style>

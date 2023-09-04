<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h2 class="card-title text-center">Teste API</h2>
            </div>
            <div class="card-body">
              <h2 class="card-title text-center">Formulário de Endereço</h2>
  
              <form @submit.prevent="submitForm">
                <div class="form-group mb-3">
                  <label for="zip">CEP:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    v-model="address.zip.value"
                    @blur="handleZipInput(address.zip.value)"
                  />
                </div>
                <div class="address-fields" v-for="field in addressFields" :key="field.key">
                  <label :for="field.key">{{ field.label }}:</label>
                  <input
                    :type="field.type"
                    class="form-control"
                    :id="field.key"
                    v-model="field.model"
                    :disabled="field.disabled"
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block mt-4">PROXIMO</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import minins from '../minins';
  import { mapMutations } from 'vuex';
  
  export default {
    mixins: [minins],
    data() {
      return {
        address: {
          zip: { value: '', disabled: false },
          uf: { value: '', disabled: false },
          localidade: { value: '', disabled: false },
          logradouro: { value: '', disabled: false },
          complemento: { value: '', disabled: false },
          bairro: { value: '', disabled: false },
          number: { value: '', disabled: false },
        },
      };
    },
    computed: {
      addressFields() {
        return [
          { key: 'uf', label: 'Estado', type: 'text', model: this.address.uf.value, disabled: this.address.uf.disabled },
          { key: 'localidade', label: 'Cidade', type: 'text', model: this.address.localidade.value, disabled: this.address.localidade.disabled },
          { key: 'logradouro', label: 'Rua', type: 'text', model: this.address.logradouro.value, disabled: this.address.logradouro.disabled },
          { key: 'number', label: 'Número', type: 'number', model: this.address.number.value, disabled: this.address.number.disabled },
          { key: 'complemento', label: 'Complemento', type: 'text', model: this.address.complemento.value, disabled: this.address.complemento.disabled },
          { key: 'bairro', label: 'Bairro', type: 'text', model: this.address.bairro.value, disabled: this.address.bairro.disabled },
        ];
      },
    },
    methods: {
        ...mapMutations(['updateshowFormAddress']),
      submitForm() {
        this.updateshowFormAddress(false)
      },
      async handleZipInput(zip) {
        this.resetAddress();
        this.address.zip.value = zip
        if (zip.length > 6) {
          const { data } = await this.getAddress(zip);
          if (data) {
            for (const key in this.address) {
              if (data[key] !== undefined && data[key] !== '') {
                this.address[key].value = data[key];
                this.address[key].disabled = true;
              }
            }
          }
        }
      },
      updateField(key, value) {
        this.address[key].value = value;
      },
      resetAddress() {
        for (const key in this.address) {
          this.address[key].value = '';
          this.address[key].disabled = false;
        }
      },
    },
  };
  </script>
  
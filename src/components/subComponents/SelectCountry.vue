<template>
  <div class="container mt-4">
    <div class="form-group">
      <select class="form-control" id="selectCountry" v-model="selectedCountry">
        <option v-for="option in countryOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
      </select>
    </div>
  </div>
</template>
  
<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      selectedCountry: '',
      countryOptions: [
        { value: '', label: 'País:' },
        { value: 'BR', label: 'Brasil', currency: 'R$' },
        { value: 'PT', label: 'Portugal', currency: '€' },
        { value: 'FR', label: 'França', currency: '€' },
        { value: 'EUA', label: 'Estados Unidos', currency: '$' },
      ]
    };
  },
  methods: {
    ...mapMutations(['updateCountry']),
  },
  watch: {
    selectedCountry() {
      if (this.selectedCountry !== '') {
        const selectedOption = this.countryOptions.find(option => option.value === this.selectedCountry);
        this.updateCountry(selectedOption);
      }
    }
  },
};
</script>

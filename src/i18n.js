import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './locales/locales';

Vue.use(VueI18n);


const i18n = new VueI18n({
  locale: 'pt',
  messages,
});

export default i18n;


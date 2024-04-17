import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createI18n } from 'vue-i18n';
// Arquivos de tradução 
import { es } from './locales/es';
import { en } from './locales/en';
import { pt_br } from './locales/pt_br';

const linguagens = {
    pt_br,
    en,
    es
}

const i18n = createI18n({
    locale: 'pt_br',
    fallbackLocale: 'pt_br',
    messages: linguagens
})

createApp(App).use(router).use(i18n).mount('#app');

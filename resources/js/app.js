import './bootstrap';
import {createApp} from 'vue';
import Survey from './components/Survey.vue'

createApp({})
    .component('Survey', Survey)
    .mount('#app')

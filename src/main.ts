import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';


import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Toast from 'primevue/toast';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Card from 'primevue/card';

const app = createApp(App);

app.use(ToastService);
app.use(PrimeVue, { ripple: true })

app.component('Toast', Toast)
app.component('InputText', InputText)
app.component('Dropdown', Dropdown)
app.component('Button', Button)
app.component('Card', Card)

app.mount("#app");

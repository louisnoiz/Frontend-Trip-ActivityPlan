// import App from './App.vue'
import './assets/tailwind.css'
import 'bulma/css/bulma.css'
import router from './router/index'
// import Vue from 'vue'
import App from './App.vue'
import { createApp } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
app.component('VueDatePicker', VueDatePicker);

app.mount('#app')

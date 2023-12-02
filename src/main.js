import 'primevue/resources/themes/lara-light-teal/theme.css'
import '../node_modules/primeflex/primeflex.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';


import Button from "primevue/button";
import Menubar from 'primevue/menubar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import Calendar from 'primevue/calendar';

const app = createApp(App)

app.use(router)
app.use(store)
app.use(PrimeVue);


app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Dialog', Dialog);
app.component('Dropdown', Dropdown);
app.component('Checkbox', Checkbox);
app.component('Calendar', Calendar);


app.mount('#app')

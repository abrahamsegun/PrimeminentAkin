import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone,faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter , faSquareInstagram} from '@fortawesome/free-brands-svg-icons'

// import {faXTwitter} from '@fortawesome/free-brands-svg-icons'

library.add(faPhone, faEnvelope , faXTwitter, faSquareInstagram, faBars)

// const app = createApp(App)

// app.use(router)

// app.mount('#app')
const app = createApp(App);
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');

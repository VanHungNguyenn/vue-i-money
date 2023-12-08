import './assets/styles/tailwind.css'
import './assets/styles/global.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import { auth } from './configs/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { registerGlobalComponent } from './utils/import'

let app

onAuthStateChanged(auth, () => {
	if (!app) {
		app = createApp(App)

		registerGlobalComponent(app)

		app.use(router)
		app.mount('#app')
	}
})

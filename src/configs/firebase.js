import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, Timestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC4LhaTZMM2F-WW2BMemeLvwg_Sez_jeZI',
	authDomain: 'imoney-bdb02.firebaseapp.com',
	projectId: 'imoney-bdb02',
	storageBucket: 'imoney-bdb02.appspot.com',
	messagingSenderId: '886812450288',
	appId: '1:886812450288:web:4e850e055ef328823a1135',
	measurementId: 'G-9RTZSEQCHW',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const fireStore = getFirestore(app)
const auth = getAuth(app)

const timestamp = Timestamp.now()

export default { app, analytics, fireStore, auth, timestamp }

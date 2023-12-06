import { ref } from 'vue'
import { auth } from '../configs/firebase'

const error = ref(null)
const isPending = ref(false)

async function signup(email, password, fullName) {
	await auth.createUserWithEmailAndPassword(email, password)
}

export function useSignUp() {}

import { ref } from 'vue'
import { auth } from '@/configs/firebase'
import { signOut } from 'firebase/auth'

const error = ref(null)

async function logout() {
	error.value = null

	try {
		const response = await signOut(auth)

		return response
	} catch (err) {
		console.error(err)
		error.value = err.message
	}
}

export function useLogout() {
	return { error, logout }
}

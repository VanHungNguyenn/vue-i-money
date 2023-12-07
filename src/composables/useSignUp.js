import { ref } from 'vue'
import { auth } from '../configs/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const error = ref(null)
const isPending = ref(false)

async function signup(email, password, fullName) {
	error.value = null
	isPending.value = true

	try {
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		)

		if (!response) throw new Error('Could not create user')

		if (response.user) {
			await updateProfile(response.user, {
				displayName: fullName,
			})
		}

		return response
	} catch (err) {
		console.error(`err`, err)
		error.value = err.message
	} finally {
		isPending.value = false
	}
}

export function useSignUp() {
	return { error, isPending, signup }
}

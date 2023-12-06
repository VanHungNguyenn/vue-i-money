import { ref } from 'vue'
import { auth } from '../configs/firebase'

const error = ref(null)
const isPending = ref(false)

async function signup(email, password, fullName) {
	error.value = null
	isPending.value = true

	try {
		// Create user with email and password
		const response = await auth.createUserWithEmailAndPassword(
			email,
			password
		)

		if (!response) {
			throw new Error('Failed to create new user')
		}

		// Update profile with full name
		await response.user.updateProfile({ displayName: fullName })

		// Reset states after successful signup
		isPending.value = false

		return response
	} catch (err) {
		console.error(err.message)
		error.value = err.message
		isPending.value = false
	}
}

export function useSignUp() {
	return { error, isPending, signup }
}

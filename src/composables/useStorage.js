import { ref } from 'vue'
import { storage } from '@/configs/firebase'
import {
	ref as storageRef,
	uploadBytes,
	getDownloadURL,
} from 'firebase/storage'
import { useUser } from './useUser'

const { getUser } = useUser()
const { user } = getUser()

const useStorage = (name) => {
	const error = ref(null)
	const filePath = ref('')
	const url = ref(null)

	const uploadFile = async (file) => {
		error.value = null
		filePath.value = `${name}/${user.value.uid}/${file.name}`

		try {
			// Create a reference to the file location in Firebase Storage
			const fileRef = storageRef(storage, filePath.value)

			// Upload the file to Firebase Storage
			const uploadResult = await uploadBytes(fileRef, file)

			// Retrieve and store the download URL
			url.value = await getDownloadURL(uploadResult.ref)

			return url.value
		} catch (err) {
			console.error(err)
			error.value = err.message
		}
	}

	return { error, uploadFile, filePath, url }
}

export default useStorage

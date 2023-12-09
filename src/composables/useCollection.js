import { ref } from 'vue'
import { fireStore } from '@/configs/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

const useCollection = (collectionName) => {
	const error = ref(null)
	const allRecords = ref([])

	const addRecord = async (newRecord) => {
		error.value = null

		const colRef = collection(fireStore, collectionName)

		try {
			const docRef = await addDoc(colRef, newRecord)

			return docRef
		} catch (err) {
			console.error(err)
			error.value = err.message
		}
	}

	const getAllRecords = async () => {
		error.value = null
		allRecords.value = []

		const colRef = collection(fireStore, collectionName)

		try {
			const querySnapshot = await getDocs(colRef)
			allRecords.value = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}))
		} catch (err) {
			console.error(err)
			error.value = err.message
		}
	}

	return { error, addRecord, getAllRecords, allRecords }
}

export default useCollection

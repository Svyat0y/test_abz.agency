import axios from 'axios'


const instance = axios.create({
	baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/',
	headers: {
		'Content-Type': 'multipart/form-data'
	}
})


export const fetchUsers = async (currentPage) => {
	try {
		const {data} = await instance.get(`users?page=${currentPage}&count=6`)
		return data
	}
	catch (e) {console.log('error message:', e.message)}
}

export const fetchPositions = async () => {
	try {
		const {data} = await instance.get('positions')
		return data
	}
	catch (e) {console.log('error message', e.message)}
}

export const fetchRegistration = async ({name, email, phone, radio: position_id, file: photo}) => {
	const body = {name, email, phone, photo, position_id,}

	try {
		const dataToken = await instance.get('token')
		const data = await instance.post('users', body, {
			headers: {'Token': dataToken.data.token}
		})

		if (data.status.toString()[0] === '2') return 'ok'
	}
	
	catch (e) {
		if (e.response.status === 409) {
			return {error: e.response.data.message}
		}
		else if (e.response.status === 401) {
			console.log({error: e.response.data.message})
			return {error: 'Something went wrong, please try again later'}
		}
		else {
			throw new Error(e.response.data.message)
		}
	}
}

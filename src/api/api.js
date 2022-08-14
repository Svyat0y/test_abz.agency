import axios from 'axios'


const instance = axios.create({
	baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/'
})

// fetch users ===============
export const fetchUsers = async (currentPage) => {
	try {
		const { data } = await instance.get(`users?page=${ currentPage }&count=6`)
		return data
	}
	catch ( e ) {
		console.log('error message:', e.message)
	}
}

export const fetchPositions = async () => {
	try {
		const { data } = await instance.get('positions')
		return data
	}
	catch ( e ) {
		console.log('error message', e.message)
	}
}
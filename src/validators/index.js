import * as Yup from 'yup'


/*export const checkImageRes = async (provideFile) => {
	const imgRes = { width: null, height: null }

	return new Promise(resolve => {
		const reader = new FileReader()

		reader.readAsDataURL(provideFile)
		reader.onload = function () {
			const img = new Image()

			img.onload = function () {
				imgRes.width = img.width
				imgRes.height = img.height
				resolve(imgRes)
			}
		}
	})
}

Yup.addMethod(Yup.mixed, 'imageDimensionCheck', function (message, requiredWidth, requiredHeight) {
	return this.test('image-width-height-check', message, async function (value) {
		const { path, createError } = this
		if ( !value ) {
			return
		}

		const imgDimensions = await checkImageRes(value)
		if ( imgDimensions.width < requiredWidth || imgDimensions.height < requiredHeight ) {
			console.log(imgDimensions.width, imgDimensions.height)
			return createError({
				path,
				message: 'The photo resolution must be 70x70 px!'
			})
		}

		return true
	})
})*/


const FILE_SIZE = 5 * 1024 * 1024
const SUPPORTED_FORMATS = [
	'image/jpeg',
	'image/jpg'
]

const phoneRegExr = /^[+]{0,1}380([0-9]{9})$/
const emailRegExr = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])$/

export const validationSchema = Yup.object({
	name: Yup.string().required('Enter your name').matches(/^[zA-zа-яА-Я ]+$/, 'Only lowercase and uppercase letters').min(2).max(62),
	email: Yup.string().matches(emailRegExr, 'Wrong format').required('Enter your email'),
	phone: Yup.string().matches(phoneRegExr, 'Number should start with +380 and numbers').required('Enter your phone number'),
	radio: Yup.string().required('Сhoose one option'),
	file: Yup.mixed().required('photo required').test('fileSize', 'File too large', (value) => value === null || (value && value.size <= FILE_SIZE)).test(
		'fileFormat',
		'Unsupported file type',
		(value) => value === null || (value && SUPPORTED_FORMATS.includes(value.type))
	)
})

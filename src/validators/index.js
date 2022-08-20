import * as Yup from 'yup'


//get photo resolution
const checkImageRes = async (provideFile) => {
	const imgRes = {width: null, height: null}

	return new Promise(resolve => {
		const reader = new FileReader()

		reader.readAsDataURL(provideFile)
		reader.onload = function() {
			const img = new Image()
			img.src = reader.result

			img.onload = function() {
				imgRes.width = img.width
				imgRes.height = img.height
				resolve(imgRes)
			}
		}
	})
}

//added new method to yup to check photo resolution
Yup.addMethod(Yup.mixed, 'imageDimensionCheck', function(message, requiredWidth, requiredHeight) {
	return this.test('image-width-height-check', message, async function(value) {
		const {path, createError} = this
		if (!value) {
			return
		}

		const imgDimensions = await checkImageRes(value)
		if (imgDimensions.width < requiredWidth || imgDimensions.height < requiredHeight) {
			return createError({
				path,
				message: 'Minimum size of photo 70x70px'
			})
		}
		return true
	})
})


const FILE_SIZE = 5 * 1024 * 1024
const SUPPORTED_FORMATS = [
	'image/jpeg',
	'image/jpg'
]

const phoneRegExr = /^[+]{0,1}380([0-9]{9})$/
const emailRegExr = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])$/

export const validationSchema = Yup.object({
	name: Yup.string().required('Name is required').matches(/^[zA-zа-яА-Я ]+$/, 'Only lowercase and uppercase letters').min(2).max(62),
	email: Yup.string().required('Email is required').matches(emailRegExr, 'Wrong format'),
	phone: Yup.string().required('Phone number is required').matches(phoneRegExr, 'Number should start with +380 and numbers'),
	radio: Yup.string().required('Option is required'),
	file: Yup.mixed().required('').test('fileSize', 'The photo may not be greater than 5 Mbytes', (value) => value == null || (value && value.size <= FILE_SIZE)).test(
		'fileFormat',
		'Unsupported file type',
		(value) => value == null || (value && SUPPORTED_FORMATS.includes(value.type))).imageDimensionCheck('', 70, 70)
})

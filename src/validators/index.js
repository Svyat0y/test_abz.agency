import * as Yup from 'yup'


const FILE_SIZE = 520 * 1024
const SUPPORTED_FORMATS = [
	'image/jpeg', 'image/png'
]


const phoneRegExr = /^[+]{0,1}380([0-9]{9})$/
const emailRegExr = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

export const validationSchema = Yup.object().shape({
	name: Yup.string().required('Enter your name').matches(/^[zA-zа-яА-Я ]+$/, 'Only lowercase and uppercase letters').min(2).max(62),
	email: Yup.string().matches(emailRegExr, 'Wrong format').required('Enter your email'),
	phone: Yup.string().matches(phoneRegExr, 'Phone number is not valid').required('Enter your phone number'),
	radio: Yup.string().required('Сhoose one option'),
	file: Yup.mixed()
		.test('fileSize', 'File too large', (value) => value === null || (value && value.size <= FILE_SIZE))
		.test(
			'fileFormat',
			'Unsupported file type',
			(value) => value === null || (value && SUPPORTED_FORMATS.includes(value.type))
		)
})
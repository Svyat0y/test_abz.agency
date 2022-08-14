import * as Yup from 'yup'


const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

export const validationSchema = Yup.object({
	name: Yup.string().required('Enter your name').matches(/^[a-zA-zа-яА-Я]+$/, 'Only lowercase and uppercase letters').min(2).max(62),
	email: Yup.string().email('Wrong format').required('Enter your email'),
	phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Enter your phone number'),
	radio: Yup.string().required('Сhoose one option')
})
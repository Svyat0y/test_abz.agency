import React, { useEffect } from 'react'


const AutofillSync = ({ props }) => {

	console.log(props)

	useEffect(() => {
		if ( document.querySelector('input[name="email"]')?.value ||
			document.querySelector('input[name="email"]')?.value ||
			document.querySelector('input[name="phone"]')?.value ) {
			if ( !props.values.name || !props.values.email || !props.values.phone ) {
				props.setValues({
					name: document.querySelector('input[name="email"]')?.value,
					email: document.querySelector('input[name="email"]')?.value,
					phone: document.querySelector('input[name="phone"]')?.value
				})
			}
		}

	}, [])

	return null
}

export default AutofillSync
// Login.jsx
import React from 'react'
import { Form } from '../../components/Form/Form'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../redux/auth/authOperations'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'
import { loginSchema } from '../../schemas/loginSchema'

export const Login = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const navigate = useNavigate()
	const handleSubmit = data => {
		dispatch(loginThunk(data))
			.unwrap()
			.then(data => {
				toast.success(`Welcome back, ${data.user.name}!`)
				navigate(location.state?.from || '/', { replace: true })
			})
			.catch(err => {
				toast.error('Credentials is not valid!')
			})
	}
	
	return (
		<div>
			<Form formType='login' schema={loginSchema} onDataSubmit={handleSubmit} />
		</div>
	)
}
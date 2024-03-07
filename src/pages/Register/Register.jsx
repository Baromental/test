//Register.jsx
import React from 'react'
import { Form } from '../../components/Form/Form'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../../redux/auth/authOperations'
import { useNavigate } from 'react-router-dom';
// import * as yup from 'yup'
import { registerSchema } from '../../schemas/registerSchemas'
import { toast } from 'react-toastify';

export const Register = () => {
	 const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = data => {
    dispatch(registerThunk(data)).unwrap()
			.then(() => {
        navigate('/contacts')
        toast.success(`Welcome, ${data.name}`)
			})
  }

	return (
		<div>
			<Form onDataSubmit={handleSubmit} schema={registerSchema} />
		</div>
	)
}
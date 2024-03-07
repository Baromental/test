// Preloader.jsx
import React from 'react'
import { MutatingDots } from 'react-loader-spinner'
import s from './Preloader.module.css'
export const Preloader = () => {
	return (
		<div className={s.wrapper}>
			<MutatingDots
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  secondaryColor="#4fa94d"
  radius="12.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
			<h1>Loading...</h1>
		</div>
	)
}
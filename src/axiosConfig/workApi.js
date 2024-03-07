// workApi.js
import axios from 'axios'

export const workApi = axios.create({
	baseURL: 'https://connections-api.herokuapp.com/',
})

export const setToken = token => {
	workApi.defaults.headers.common.Authorization = `Bearer ${token}`
}
export const removeToken = () => {
	workApi.defaults.headers.common.Authorization = ``
}
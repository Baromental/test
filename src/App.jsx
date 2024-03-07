//App.jsx
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { Layout } from './components/Navbar/Layout'
import { Home, Login, NotFound, Register, ContactPage } from './pages'
import { refreshThunk } from './redux/auth/authOperations'
import { PrivateRoute } from './routes/PrivateRoute'
import { PublicRoute } from './routes/PublicRoute'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsRefresh } from './redux/auth/authSlice'
import { Preloader } from './components/Preloader/Preloader'
import './index.css'

export const App = () => {
	const isRefresh = useSelector(selectIsRefresh)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
	return isRefresh ? (
		<Preloader />
	) : ( <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={
          <PrivateRoute>
            <ContactPage />
          </PrivateRoute>
          } />
        <Route path="register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
          } />
        <Route path="login" element={
          <PublicRoute>
             <Login />
          </PublicRoute>
         } />
        <Route path="*" element={<NotFound />} />
      </Route>
  </Routes>
  );

}



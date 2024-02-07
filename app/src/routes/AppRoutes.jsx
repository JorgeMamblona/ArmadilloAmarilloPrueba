import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import HomePage from '../pages/HomePage/HomePage'
import NowPlayingPage from '../pages/NowPlayingPage/NowPlayingPage'
import PopularPage from '../pages/PopularPage/PopularPage'

import PrivateRoute from './PrivateRoute'

import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sign-up' element={<SignupPage />} />
            <Route path='/log-in' element={<LoginPage />} />
            {/* <Route element={<PrivateRoute />}> */}
            <Route path='/nowPlaying' element={<NowPlayingPage />} />
            <Route path='/popular' element={<PopularPage />} />
            {/*  </Route>*/}

            <Route path='*' element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes
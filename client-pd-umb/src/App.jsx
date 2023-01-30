import Home from './pages/home';
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Login from './pages/login';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import DataClosing from './pages/marketing/data-closing';
import Guest from './pages/Guest';


function App() {
    const user = useSelector(state => state.authReducer.authData);

    return (
        <div>
            {/* {
                user ? <Navbar /> : ""
            }
            <Outlet /> */}

            <Routes>
                <Route
                    path='/login'
                    element={user ? <Navigate to="/" /> : <Login />}
                />

                <Route
                    path='/register'
                    element={user ? <Register /> : <Navigate to='/' />}
                />

                <Route
                    path='/'
                    element={user ? <Home /> : <Guest />}
                />

                {/* <Route
                    path='/guest'
                    element={<Guest />}
                />

                <Route
                    path='/home'
                    element={user ? <Home /> : <Navigate to='../login' />}
                /> */}

                <Route
                    path='/marketing/data-closing'
                    element={user ? <DataClosing /> : <Navigate to='/login' />}
                />
                {/* <Route
                    path='/profile/:id'
                    element={user ? <Profile /> : <Navigate to='../auth' />}
                /> */}
            </Routes>

        </div>
    )
}

export default App

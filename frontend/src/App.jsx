import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import DataClosing from './pages/marketing/data-closing';
import Guest from './pages/Guest';
import ResetPass from './pages/Profile';
import Profile from './pages/Profile';
import PermintaanPembayaran from './pages/keuangan/permintaan-pembayaran';
import LaporanKeuangan from './pages/keuangan/laporan-keuangan';
import Mahasiswa from './pages/mahasiswa/mahasiswa';
import UangKuliah from './pages/mahasiswa/uang-kuliah';
import MarketingCost from './pages/marketing/marketing-cost';
import Presensi from './pages/pegawai/presensi';
import RasioDosen from './pages/pegawai/rasio-dosen';
import HambalangFarm from './pages/proyek/hambalang-farm';
import Akreditasi from './pages/akreditasi/akreditasi';


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
                    path='/reset-password/:id'
                    element={user ? <ResetPass /> : <Navigate to='../login' />}
                />

                <Route
                    path='/profile/:id'
                    element={user ? <Profile /> : <Navigate to='../auth' />}
                />


                {/* Route pages */}
                <Route
                    path='/keuangan/permintaan-pembayaran'
                    element={user ? <PermintaanPembayaran /> : <Navigate to='/login' />}
                />

                <Route
                    path='/keuangan/laporan-keuangan'
                    element={user ? <LaporanKeuangan /> : <Navigate to='/login' />}
                />

                <Route
                    path='/mahasiswa/data-mahasiswa'
                    element={user ? <Mahasiswa /> : <Navigate to='/login' />}
                />

                <Route
                    path='/mahasiswa/uang-kuliah'
                    element={user ? <UangKuliah /> : <Navigate to='/login' />}
                />

                <Route
                    path='/marketing/data-closing'
                    element={user ? <DataClosing /> : <Navigate to='/login' />}
                />

                <Route
                    path='/marketing/marketing-cost'
                    element={user ? <MarketingCost /> : <Navigate to='/login' />}
                />

                <Route
                    path='/pegawai/presensi'
                    element={user ? <Presensi /> : <Navigate to='/login' />}
                />

                <Route
                    path='/pegawai/rasio-dosen'
                    element={user ? <RasioDosen /> : <Navigate to='/login' />}
                />

                <Route
                    path='/proyek/hambalang-farm'
                    element={user ? <HambalangFarm /> : <Navigate to='/login' />}
                />

                <Route
                    path='/akreditasi'
                    element={user ? <Akreditasi /> : <Navigate to='/login' />}
                />
            </Routes>

        </div>
    )
}

export default App

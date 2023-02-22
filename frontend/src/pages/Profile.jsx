import { useState } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { ImArrowLeft2 } from 'react-icons/im'
import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'
import { uploadImage } from '../action/UploadAction'
import { updateUser } from '../action/UserAction'
import { logout } from '../action/AuthAction'

const Profile = () => {

    // For eye icon in password field
    const [visiblePass, setVisiblePass] = useState(true)
    const [visibleCPass, setVisibleCPass] = useState(true)

    // Check the password and the confirm password is same or not
    const [confirmPass, setConfirmPass] = useState(true)

    const { user } = useSelector((state) => state.authReducer.authData);

    const [formData, setFormData] = useState(user)

    const [profileImage, setProfileImage] = useState(null);

    const dispatch = useDispatch()
    const param = useParams()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setProfileImage(img)
        }
    };

    // form submission
    const handleSubmit = (e) => {
        // e.preventDefault();

        let UserData = formData;
        // const data = new FormData();
        // const fileName = Date.now() + profileImage.name;
        // data.append("name", fileName);
        // data.append("file", profileImage);
        // UserData.profilePicture = fileName;
        // try {
        //     dispatch(uploadImage(data));
        // } catch (err) {
        //     console.log(err);
        // }
        // // Check the password and the confirm password is same or not
        // formData.password === formData.confirmPassword
        //     // Send the data to be proceed by backend using Dispatch from Redux
        //     ? dispatch(updateUser(param.id, UserData))
        //     : setConfirmPass(false)
        dispatch(updateUser(param.id, UserData))
        dispatch(logout())
    };

    return (
        <>
            <a
                href='/'
                className='flex justify-center items-center gap-3 absolute top-5 left-10 group cursor-pointer'>
                <div className='bg-primary-blue border-2 border-primary-blue p-3 rounded-full flex justify-center items-center group-hover:bg-transparent duration-300'>
                    <ImArrowLeft2 className='text-white text-lg group-hover:text-primary-blue active:text-primary-blue' />
                </div>
                <p className='text-primary-blue font-medium opacity-0 group-hover:opacity-100 duration-300'>Back to Home</p>
            </a>

            <div className='w-full h-screen flex justify-center items-center'>
                <form
                    className='w-full max-w-[40rem] mx-auto shadow-lg p-[5rem] rounded-md flex flex-col gap-4'
                >
                    {/* <h2 className='font-semibold text-xl'>Ganti Nama</h2>
                    <div className='flex items-center w-full '>
                        <input
                            type='text'
                            placeholder='Username'
                            className='input-form text-base'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div> */}

                    <h2 className='font-semibold text-xl mt-9'>Ganti Password</h2>
                    <div className='flex items-center w-full'>
                        <input
                            type={visiblePass ? "password" : "text"}
                            placeholder='Password'
                            className='input-form text-base'
                            name='password'
                            onChange={handleChange}
                        />
                        <div className='cursor-pointer ml-[-2.5rem] text-xl text-primary-blue' onClick={() => setVisiblePass((prev) => !prev)}>
                            {visiblePass ? <FiEye /> : <FiEyeOff />}
                        </div>
                    </div>

                    <div className='flex items-center w-full'>
                        <input
                            type={visibleCPass ? "password" : "text"}
                            placeholder='Confirm Password'
                            className='input-form text-base'
                            name='confirmPassword'
                            onChange={handleChange}
                        />
                        <div className='cursor-pointer ml-[-2.5rem] text-xl text-primary-blue' onClick={() => setVisibleCPass((prev) => !prev)}>
                            {visibleCPass ? <FiEye /> : <FiEyeOff />}
                        </div>
                    </div>
                    <span className={confirmPass ? 'hidden' : 'block text-rose-600 text-sm'}>
                        * Confirm Password in not same
                    </span>

                    {/* <h2 className='font-semibold text-xl mt-9'>Ganti Foto Profil</h2>
                    <input type="file" name="profileImage" onChange={onImageChange} /> */}

                    <button
                        className='button-primary mt-8 self-end'
                        type='submit'
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}

export default Profile
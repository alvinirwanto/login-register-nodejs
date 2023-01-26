import { useSelector } from 'react-redux'

const DataClosing = () => {
    const { user } = useSelector((state) => state.authReducer.authData);

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            {
                user.role
            }

            closing coyy
        </div>
    )
}

export default DataClosing
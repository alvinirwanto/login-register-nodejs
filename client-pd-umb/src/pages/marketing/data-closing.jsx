import { useSelector } from 'react-redux'

const DataClosing = () => {
    const { user } = useSelector((state) => state.authReducer.authData);

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            {
                user.role === 'marketing'
                    ?
                    <h1>Hello</h1>

                    :

                    <h2>Hello kalo bukan orangnya</h2>
            }
        </div>
    )
}

export default DataClosing
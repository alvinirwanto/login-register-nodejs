import { useState, useEffect } from 'react'
import axios from 'axios'

const apiData = "http://localhost:5000/user"

export default function Success() {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        // Using axios
        const response = await axios.get(apiData)
        const jsonData = await response.data

        setData(jsonData)
    }
    return (
        <div>
            {
                data.map((user) => (
                    <div className='flex gap-5'>
                        <span>{user.username}</span>
                        <span>{user.email}</span>
                        <span>{user.role}</span>
                        <span>{user.role2}</span>
                        <span>{user.role3}</span>
                        <span>{user.role4}</span>
                        <span>{user.role5}</span>
                        <span>{user.role6}</span>
                        <span>{user.role7}</span>
                    </div>
                ))
            }
        </div>
    )
}

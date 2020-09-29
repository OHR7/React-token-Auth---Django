import Axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'


const HomeComponent = () => {

    const { data } = useContext(AuthContext)
    const [user, setUser] = useState(null)


    useEffect(() => {
        axios.get(
            'http://localhost:8000/users/user',
            {headers : {
                "Authorization": `Token ${data.token}`
            }}
        )
            .then((res) => {
                setUser(res.data)
            })
    }, [])



    return (
        <div>
            <h1>Home Screen</h1>

        <pre>{JSON.stringify(user, null, 4)}</pre>
        </div>
    )
}

export default HomeComponent

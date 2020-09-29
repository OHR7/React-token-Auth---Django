import React, { useContext }from 'react'
import {
    Redirect,
    Route
} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


export const PrivateRoute = ({
    component: Component,
    ...rest 
}) => {

    const { data } = useContext(AuthContext)

    return (
        <Route { ...rest }
            component={ (props) => (
                ( data.token ) 
                    ? ( <Component {...props}/> )
                    : ( <Redirect to='/login'/> )
            )}

        />
    )
}

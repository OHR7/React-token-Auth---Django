import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import LoginComponent from '../components/LoginComponent'
import HomeComponent from '../components/HomeComponent'
import { PrivateRoute } from './PrivateRoute'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route
                    path='/login'
                    component={LoginComponent}
                />
                <PrivateRoute
                    path='/home'
                    component={HomeComponent}
                />
            </Switch>
        </Router>
    )
}

export default AppRouter

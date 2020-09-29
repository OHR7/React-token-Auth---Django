import React, {useContext, useState} from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'


const LoginComponent = () => {
    const { loginThunk } = useContext(AuthContext)
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    })
    const history = useHistory()

    const {username, password} = formState

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <div>
            <h1>Login</h1>

            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        name='username'
                        type='text'
                        value={username}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name='password'
                        type='password'
                        value={password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button
                    variant='primary'
                    type='submit'
                    onClick={(e) => {
                        e.preventDefault()
                        // custom code abajo
                        loginThunk(formState.username, formState.password)
                            .then(() => {
                                history.push('/home')
                            })
                    }}
                >
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default LoginComponent

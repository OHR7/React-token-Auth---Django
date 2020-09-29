import React, { useReducer } from 'react';
import './App.css';
import { AuthContext } from './context/AuthContext';
import { authReducer, LOGIN } from './reducers/authReducer';
import AppRouter from './routers/AppRouter';
import axios from 'axios'

const App = () => {

  const [data, dispatch] = useReducer(authReducer, {token: null})
  const loginThunk = async (username, password) => {
    const res = await axios.post(
      'http://localhost:8000/auth/',
      { username: username, password: password}
    )
    console.log(res.data.token)
    dispatch({ type: LOGIN, token: res.data.token })
  }

  return (
    <AuthContext.Provider value={{
      data,
      loginThunk
    }}>
      <AppRouter/>
    </AuthContext.Provider>
  );
}

export default App;

import React , {useState} from 'react'
import {BrowserRouter , Route} from 'react-router-dom';
import Login from './Component/Login/Login';
import Home from './Component/Home/Home';
import ProtectedRoutes from "./Component/Login/protectedRoutes";

export default function App() {
    const [isAuth,setAuth]=useState();
    return (
        <BrowserRouter>
            <Route exact path='/'>
                <Login setAuth={setAuth} />
            </Route>
            <ProtectedRoutes exact path='/home' component={Home} isAuth={isAuth}/>
        </BrowserRouter>
    )
}

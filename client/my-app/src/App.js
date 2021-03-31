import React from 'react'
import {BrowserRouter,Route, Link} from 'react-router-dom'

import Home from './component/Home'
import Register from './component/Register'
import Users from './component/users'
import Dashboard from'./component/Dashboard'
import './index.css'
import {connect } from 'react-redux'

function App(props){
    return(
        <BrowserRouter>
                <div>
                        <Link to ="/">Home</Link>
                        <Link to ="/register">Add Customer</Link>
                        <Link to ="/dashboard">Dashboard</Link>

                        <Route path="/"component={Home} exact={true}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/dashboard" component={Dashboard}/>
                    </div>
        </BrowserRouter>
    )
}
export default App
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'


export const Login = () => {
    const navigate = useNavigate()
    const{login ,signUpWithGmail } = useContext(AuthContext)

    const handleLogin = (event) => {

        
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        login(email , password).then((userCredentials)=>{
            console.log("user Logged in")
            navigate("/", {replace:true})
        }).catch((error)=>{
            console.log(error)
        })
    }

    const handleGoogleButton=()=>{
        console.log("Google sign in")
        signUpWithGmail().then((results)=>{
            const user =results.user
            navigate("/", {replace:true})
            console.log(user)
        }).catch((error)=>{
            console.log(error)
        })   
    }

return (
    <div class="main">
        <div class="container ">
            
            <div class="row">
                
                <div class=" login-1 col-8 col-sm-10 col-md-2 col-lg-8 mx-auto mt-5 shadow p-3 rounded bg-primary-subtle">
                    <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input name='email' class="form-control" type="text" placeholder="Username"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input name='password' class="form-control" type="password" placeholder="Password"/>
                    </div>
                    
                    <div>
                        <input class="btn btn-outline-danger " type="submit" value="Login"/>
                        Don't Have an Account?? <Link to="/Register">register</Link>
                    </div>
                    <div>
                        <input onClick={handleGoogleButton} class="btn btn-outline-success " type="submit" value="Login With Google"/>
                    </div>
                    </form>
                    
                </div>
                
            </div>
        </div>
    </div>
)
}

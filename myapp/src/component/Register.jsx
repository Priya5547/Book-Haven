import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

export const Register = () => {
    const navigate = useNavigate()
    const {createUser,signUpWithGmail}=useContext(AuthContext)

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

    const handleSignUp = (event)=>{
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        createUser(email , password).then((userCredentials)=>{
            console.log(userCredentials.user)
        }).catch((error)=>{
            console.log(error)
        })   
    }
return (
<div class="container">
    <div class="row">
        <div class="col-8 col-sm-8 col-md-5 col-lg-8 mt-5 p-3 mx-auto shadow bg-info-subtle rounded-3"> 

            <h2> User Register</h2>
            <form onSubmit={handleSignUp}>    
                <div> 
                    <label className="form-label mt-3"> Email</label>
                    <input placeholder="Email" name='email' class="form-control"/> 
                </div>
                <div> 
                    <label className="form-label mt-3"> Password </label>
                    <input placeholder="Password" name='password' class="form-control" type="password"/> 
                </div>
                <div> 
                    <label className="form-label mt-3"> Confirm Password </label>
                    <input placeholder="Confirm Password" class="form-control" type="password"/> 
                </div>
                <div>
                    <input type="submit" className="btn btn-danger m-3"/>
                    Already have an account?... <Link to="/login">Login</Link>
                </div>
            </form>

            <button onClick={handleGoogleButton}  className="btn btn-danger m-3">SignUp with google </button>


        </div>
    </div>

    </div>
)
}

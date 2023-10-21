import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [error,setError] = useState('')
    const navigate = useNavigate()

    const {createUser} = useContext(AuthContext)

    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value
        console.log(email,confirm,password)

        if(password !== confirm){
         setError('Your password did not match')
         return
        }
        else if(password.length < 6){
            setError('password must be 6 characters')
        }

        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
            navigate('/login')
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    
    return (
        <>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp Now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
        </div>
      </form>
      <div className='mb-8 ml-3'>
     <small>Already have an account ? <Link className='bg-violet-300 px-2 rounded'  to='/login'>Login</Link> </small>
     </div>
    </div>
  </div>
  <p className='text-red-500'>{error}</p>
</div>  
        </>
    );
};

export default SignUp;
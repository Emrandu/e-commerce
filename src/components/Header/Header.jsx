import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then(result=>{})
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <>
         <div className='header'>
             <img src={logo} alt="" />
             <nav>
                <Link to='/'>Shop</Link>
                <Link to='/orders'>Order</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signUp'>SignUp</Link>
               { user && <span className='text-white'> Welcome to {user.email}
                <button className='bg-black p-2 rounded ml-2 px-4' onClick={handleLogOut} > SignOut</button>
                </span>}
             </nav>
        </div>   
        </>
    );
};

export default Header;
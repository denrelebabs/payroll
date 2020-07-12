import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Logo from './assets/KimberylyLogo.png'

const Navbar = () => {
    return (
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm" style={{justifyContent: 'space-between',}}>
            <div style={{
                backgroundImage: `url(${Logo})`,
                width: 350,
                height: 60,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <nav class="my-2 my-md-0 mr-md-3">
                <Link to='/admin' class="p-2 text-dark" href="#">Admin</Link>
                <Link to='/employee' class="p-2 text-dark" href="#">Employee</Link>
                <a class="p-2 text-dark" href="#">Tax Filling</a>
                <a class="p-2 text-dark" href="#">Compensation Admin</a>
            </nav>
           
        </div>
    )
}

export default Navbar

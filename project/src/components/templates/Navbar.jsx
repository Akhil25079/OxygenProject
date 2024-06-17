import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className='bg-secondary text-2xl text-primary' >
            <div className='flex justify-between'>
                <div className=''>
                    <img src={require('../assets/logo2.jpg')} alt="Imagebroken" className='h-16 w-16 py-1' />
                </div>
                <nav>
                    <div className='flex text-xl p-2 justify-between'>
                    <div className=' px-6 text-primary'>

                        <Link to='/'>Home</Link>

                    </div>
                    <div className='px-6 text-primary'>
                        <Link to='/about'>About</Link>
                    </div>
                    <div className='px-6 text-primary'>
                    <Link to='/contact'>Contact</Link>
                    </div>
                    </div>
                </nav>

                <div className='flex'>
                    <div className='flex px-2 text-xl py-4'>

                        <button className=' hover:border-2 hover:rounded-md hover:bg-slate-300 hover:text-primary'>
                            <Link to='/login'>Login</Link>
                            </button>
                        /
                        <button className='hover:border-2 hover:rounded-md hover:bg-slate-300 hover:text-primary'>
                        <Link to='/register'>Register</Link>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar

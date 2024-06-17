import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission
        // try{
        //   const response = await axios.post('http://localhost:5000/api/users/register', formData)
        //   console.log('Form submitted:', response.data);
        // } catch (error) {
        //   console.error('Registration error:', error);
        // }
        console.log('Form submitted:', formData);
    };



    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <img src={require('../assets/simple-bg.jpg')} alt="Imagebroken"
                    className='w-full h-full object-cover absolute mix-blend-overlay' />
                <div className="flex bg-gradient-to-tr from from-gray-300 to-gray-700 items-center justify-center min-h-screen bg-gray-100">
                    <div className="w-full max-w-md p-8 space-y-4 bg-secondary rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-center">Register</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                                >
                                    <Link to='/login'>Register</Link>

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Register

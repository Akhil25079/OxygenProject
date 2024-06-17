import React from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import backgroundImage from '../assets/simple-bg.jpg'

function Contact() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='h-svh'>
                {/* <img src={require('../assets/simple-bg.jpg')} alt="Imagebroken" */}
                {/* className='w-full h-full object-cover absolute mix-blend-overlay' /> */}

                <div >

                    <div className="flex h-screen">
                        {/* Left Column */}
                        <div className="w-1/2 bg-gray-200 p-8">
                            <h1 className="text-3xl font-bold mb-6 text-yellow-700">Our Branches</h1>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="text-xl font-semibold text-yellow-600 mb-2">US Office</h2>
                                    <p className="text-gray-700">123 Main St.</p>
                                    <p className="text-gray-700">New York, NY 10027</p>
                                    <p className="text-gray-700">USA</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="text-xl font-semibold text-yellow-600 mb-2">CA Office</h2>
                                    <p className="text-gray-700">456 Elm St.</p>
                                    <p className="text-gray-700">St. Mary's, ON N4X 1X7</p>
                                    <p className="text-gray-700">Canada</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="text-xl font-semibold text-yellow-600 mb-2">UK Office</h2>
                                    <p className="text-gray-700">789 Oak St.</p>
                                    <p className="text-gray-700">TUNBRIDGE WELLS TN12 1UF</p>
                                    <p className="text-gray-700">UK</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="text-xl font-semibold text-yellow-600 mb-2">India Office</h2>
                                    <p className="text-gray-700">101 Pine St.</p>
                                    <p className="text-gray-700">Hyderabad, Telangana, 500070</p>
                                    <p className="text-gray-700">India</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="w-1/2 bg-primary bg-cover bg-center p-8"
                            style={{ backgroundImage: `url(${backgroundImage})` }}>
                            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                            <form className="space-y-4 text-lg text-black">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Your message"
                                        rows="4"
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact

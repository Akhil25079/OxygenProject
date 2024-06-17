import React from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'

function About() {
    return (
        <div>
          <div>
            <Navbar />
          </div>
          <div className='h-svh'>
          <img src={require('../assets/simple-bg.jpg')} alt="Imagebroken"
                    className='w-full h-full object-cover absolute mix-blend-overlay ' />
                    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Column */}
      <div className="md:w-1/2 bg-gray-900 bg-opacity-80 p-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
        <p className="text-lg text-gray-200 mb-4">
          We are a company dedicated to providing the best services to our customers. Our mission is to deliver high-quality products and ensure customer satisfaction.
        </p>
        <p className="text-lg text-gray-200 mb-4">
          Our team is composed of experienced professionals who are passionate about their work. We believe in innovation, integrity, and excellence.
        </p>
        <p className="text-lg text-gray-200 mb-4">
          With a global presence, we strive to make a positive impact in the communities we serve.
        </p>
        <p className="text-lg text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula metus quis augue hendrerit scelerisque.
        </p>
      </div>

      {/* Right Column - Placeholder */}
      <div className="md:w-1/2 bg-gray-800 bg-opacity-80 p-8 flex items-center justify-center">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-lg text-gray-200">
            To be a leader in our industry, recognized for our innovative solutions and exceptional customer service.
          </p>
        </div>
      </div>
    </div>
          </div>
        <div>
            <Footer/>
        </div>
        </div>
    )
}

export default About

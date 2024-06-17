import React from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'

function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <div className='text-3xl font-bold text-primary  '>

                    <div className='bg-gradient-to-tr from from-gray-600 to-gray-700 h-96 w-full relative '>
                        <img src={require('../assets/leaf-bg.jpg')} alt="Imagebroken"
                            className='w-full h-full object-cover absolute mix-blend-overlay' />
                        <div className='p-24'>
                            <h5 className='text-4xl text-slate-200 font-bold items-center justify-center font-bold'> AI-Powered Carbon Measurement & Reporting</h5>
                        </div>
                    </div>
                    <div className=' p-6 text-lg font-normal '>
                        <p >
                            Just like vetting any other software tool, there are plenty of options to choose from when it comes to emissions management software (EMS). Each of them carries different features and tools that’ll cater to the various needs of a company’s emissions initiatives.
                            How do you choose which emissions management tool is right for you? How do you make sure the product comes with the built-in features that’ll help you communicate your sustainability efforts, manage greenhouse gas emissions, and add clarity to your data?
                            To help with the process, this guide was written to shine a light on all things EMS. What features to look for, what the software actually is, and what your best choices are from our handpicked list.
                            Let’s dive in.
                        </p>
                        <br />

                        <h2 className='text-bold text-2xl font-bold'>What is Emissions Management Software?</h2>
                        <br />
                        <p>
                            Emissions management software can be described in a few words: Measure, manage, report, and reduce.
                            The best emissions management software is built to help enterprise businesses effectively measure and record their emissions data. Whether it’s to be used to inform key company stakeholders or used to create future sustainability initiatives.
                            An effective EMS also helps businesses manage, report, and find unique insights to reduce their emissions. Modeling, benchmarking, and compliance are usually key parts of EMS because it enables companies to comply with regional emissions disclosure compliance laws, model trajectory toward emissions targets, and benchmark against sector and geographic peers.
                            Without the implementation of emissions management software, strategic planning through analyzing historical and current data is significantly more difficult. With a solid EMS, large companies can harness its features to refine their operations and decrease their operational carbon footprint.
                            Companies that incorporate emissions management software into their operations can benefit from:
                        </p>
                        <ul class="list-disc px-8">
                            <li>Lower costs of managing emissions</li>
                            <li>Easier compliance with carbon emission reporting mandates </li>
                            <li>Improved company reputation</li>
                            <li>Better stakeholder relationships</li>
                        </ul>
                        <br />
                        <h2 className='text-bold text-2xl font-bold'>What Features to Look for in Emissions Management Software?</h2>
                        <br />
                        <p>
                            The key features to prioritize in an EMS will vary depending on the specific needs of a business and the industry it operates in. For example, more basic needs like emissions monitoring and data analysis can be achieved with an accessible EMS.
                            However, if you’re a company in search of an EMS that prioritizes supply chain emissions management and monitoring, consider searching for more robust software solutions that bring the functionality capable of managing increasingly complex methodologies. Here are a few additional EMS features worth considering:
                        </p>
                        <p><strong>Personalized support: </strong>Some of the best emissions management software comes with the added feature of personalized and often real-time support according to the needs of a business. Often, software features alone are hardly enough for organizations to implement their emissions strategies effectively. </p>
                        <p><strong>Industry expertise:</strong> Relevant industry experience matters. Effective emissions management solutions often depend on the founders' industry experience and relevant know-how. Consider gaining insight into the history of an EMS, its team, and how it came to market. &nbsp;</p>
                        <p><strong>Regulatory reporting and analytics:</strong> Detailed analytics, emissions data, and reporting in line with climate disclosure mandates are fundamental for any emissions software worth implementing. </p>
                        <p><strong>Relevant industry partnerships: </strong>Partnerships are a strong indicator of industry knowledge and the ability to cater to current and future climate change and emissions needs. The better a software’s partnerships, the more equipped it is to deal with various emissions needs. </p>
                    </div>
                </div>
            </div>

                <div>
                    <Footer />
                </div>

            </div>
            )
}

            export default Home

import Footer from '../../components/Footer'
import Navbar from '../../components/navbar'
import Signup from '../../components/Signup'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <div className=''>
        <Signup />
      </div>
      <div className=' pt-40 bg-[#280253]'>
        <Footer />
      </div>

    </div>
  )
}

export default page

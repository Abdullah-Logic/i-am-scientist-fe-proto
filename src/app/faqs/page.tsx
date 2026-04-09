import React from 'react'
import FAQ from '../components/Faqs'
import { FAQsMain } from '../constant/data'

const page = () => {
  return (
    <div>
        <FAQ faqs={FAQsMain} />
        </div>
  )
}

export default page
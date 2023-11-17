import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

const Container = () => {
  return (
    <div className='xl:w-1/2 w-4/5 sm:h-[560px] h-[580px] bg-white mx-auto my-40 shadow-lg rounded-b-lg rounded-t-xl flex flex-col relative'>
        <Header />
        <Content />
        <Footer />
    </div>
  )
}

export default Container
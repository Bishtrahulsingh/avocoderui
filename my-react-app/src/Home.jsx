import React from 'react'
import Button from 'avocode-ui-library/src/components/Button'

const Home = () => {
  const docs = import.meta.env.VITE_DOCS_URL;
  return (
    
    <div className='flex flex-col items-center'>
        
        <div className=' mt5 flex flex-col items-center mb5 pt5 pb5'>
            <h1 style={{fontSize:"50px"}} className='text-center w-full md:w-1/2 '>Build sleek, responsive interfaces with Avocode-UI</h1>
            <h3 className='m5 text-gray-600 w-2/3 md:w-1/2 text-justify'>A lightweight, utility-first CSS framework built for speed and scalability. Customize your design system effortlessly with modern classes, responsive breakpoints, and dark mode support. Designed to streamline your workflow and bring your UI vision to life — fast.</h3>
        </div>
        {/* how to download */}
        <div className='m5 w-64 bg-gray-500 text-center p3 font-bold pointer'>
            npm install avocode-ui-library
        </div>
        {/* how to use extra */}
        <div className='md:flex  md:flex-row m4 md:justify-around gap-5 md:w-2/3'>
            <div className='mb5'>
                <h2 style={{fontSize:"32px"}} className='mb4'>📦 Install via Package Manager</h2>
                <p className='font-bold text-md opacity-60'>Install Avocode-UI’s core CSS utilities and JavaScript plugins using your favorite package manager. Our minimal and modular structure makes it easy to integrate into any frontend project. You can also explore pre-built UI examples to kickstart your next design with speed and flexibility.</p>
                <div className='mt5 w-64 bg-gray-500 text-center p2 font-bold pointer'>
                    <code>npm install avocode-ui-library</code>
                </div>
            </div>
            <hr />
            <div className='mb5'>
                <h2 style={{fontSize:"32px"}} className='mb4'>🌐 Include via CDN</h2>
                <p className='font-bold text-md opacity-60'>
                    Quickly get started with Avocode-UI by including the compiled CSS directly from our CDN. It’s the easiest way to explore the framework and build fast, responsive interfaces without any build setup. You can also browse our UI examples to jumpstart your next project with minimal effort.
                </p>
                <div className='mt5  bg-gray-500 text-center p2 font-bold pointer' >
                    <code >
                        https://cdn.jsdelivr.net/npm/avocode-ui-library/dist/assets/index-1y7S7Gk-.css
                    </code>
                </div>
            </div>
        </div>
        <div className='font-bold m5 p2 text-center w-full md:w-2/3 opacity-60 text-justify'>
                To personalize your Avocode-UI website with Bootstrap Components, you can integrate the full range of Bootstrap components, each of which is designed to work seamlessly with your website. Bootstrap provides a modular and flexible set of UI components like buttons, navbars, forms, cards, alerts, and more. By utilizing these components, you can create a highly functional, responsive, and visually appealing UI with minimal effort.
                <br />
                <Button className='bg-black mt3 border p2'>
                    <a className='no-underline text-white font-bold  mt5 mb5 block' href={docs}>Check docs -&gt;</a>
                </Button>
        </div>
    </div>
  )
}

export default Home
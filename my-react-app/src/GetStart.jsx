import React from 'react'

const GetStart = () => {
  return (
    <div>
         <div className='m4'>
            <div className='mb5'>
                <h2 style={{fontSize:"32px"}} className='mb4'>📦 Install via Package Manager</h2>
                <p className='font-bold text-md opacity-60'>Install Avocode-UI’s core CSS utilities and JavaScript plugins using your favorite package manager. Our minimal and modular structure makes it easy to integrate into any frontend project. You can also explore pre-built UI examples to kickstart your next design with speed and flexibility.</p>
                <div className='mt5 w-64 bg-gray-500 text-center p2 font-bold pointer'>
                    <code>npm install avocode-ui-library</code>
                </div>
                <div className='mt5 mb5 '>
                    <img src="/public/avocodenpm.png" className='w-full md:w-2/3' alt="cdn img" />
                </div>
            </div>
            <hr />
            <div className='mt5'>
                <h2 style={{fontSize:"32px"}} className='mb4'>🌐 Include via CDN</h2>
                <p className='font-bold text-md opacity-60'>
                    Quickly get started with Avocode-UI by including the compiled CSS directly from our CDN. It’s the easiest way to explore the framework and build fast, responsive interfaces without any build setup. You can also browse our UI examples to jumpstart your next project with minimal effort.
                </p>
                <div className='mt5  bg-gray-500 p2 font-bold pointer md:w-2/3' >
                    <code >
                        https://cdn.jsdelivr.net/npm/avocode-ui-library@1.0.2/dist/assets/index-B053_CXX.css
                    </code>
                </div>
                <div className='mt5 mb5'>
                    <img src="/public/avocodecdn.png" className='w-full md:w-2/3' alt="cdn img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetStart
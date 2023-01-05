import React from 'react'

function ImageCard({ data }: { data?: propsData }) {
    return (
        <div className="w-[90%] md:w-[60%] m-auto text-center bg-black rounded-lg overflow-auto	">
            <img src={data?.url} className='h-[300px] mx-auto w-full rounded-t-lg' />
            <div className="p-4">
                <h1 className="text-white text-3xl my-4">{data?.title}</h1>
                <p className='text-gray-100'>{data?.explanation}</p>
                <div className="flex justify-between items-center mt-16 mb-4 px-4">
                    <h3 className='text-gray-400'>copyright :{data?.copyright}</h3>
                    <h3 className='text-gray-400'>{data?.date}</h3>
                </div>
            </div>
        </div>
    )
}

export default ImageCard

type propsData = {
    url: string,
    title: string,
    explanation: string,
    copyright: string,
    date: string
}
import React from 'react'
import ShimmerCard from './ShimmerCard'


function Shimmer() {

    return (
        <>
            <div className='flex justify-around flex-wrap'>
                {Array(15).fill("").map((e, index) => (
                    <ShimmerCard key={index} />
                ))}
            </div>
        </>
    )
}

export default Shimmer
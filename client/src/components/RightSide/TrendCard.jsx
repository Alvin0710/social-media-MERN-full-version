import React from 'react'
import { TrendData } from '../../data/TrendData'

const TrendCard = () => {
    return (
        <div className='flex flex-col gap-4 bg-[color:var(--card-color)] p-8 rounded-md'>
            <h3 className='text-lg font-bold'>Trends for you</h3>

            {TrendData.map((trend, id) => {
                return (
                    <div className='flex flex-col gap-1'>
                        <span className='hidden'>{id}</span>
                        <span className='font-bold'>#{trend.name}</span>
                        <span className='text-gray-400'>{trend.shares}k shares</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendCard
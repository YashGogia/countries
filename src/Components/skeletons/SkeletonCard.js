import React from 'react'
import SkeletonElement from './SkeletonElement'
import { Shimmer } from './Shimmer'

export function SkeletonCard() {
  return (
    <div className="skeleton-wrapper">
      <SkeletonElement type={"countryCard"}>
        <SkeletonElement type={"img"} />
        <div className='details'>
          <SkeletonElement type={'name'} />
          {
            Array.from({ length: 3 }).map((_, idx) => <SkeletonElement key={idx} type={'detail'} />)
          }
        </div>
      </SkeletonElement>
      <Shimmer />
    </div>
  )
}
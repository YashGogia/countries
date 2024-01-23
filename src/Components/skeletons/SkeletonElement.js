import React from 'react'
import './skeleton.css'

export default function SkeletonElement({ type, children }) {
  const name = `skeleton ${type}`;
  return (
    <div className={name}>
      {children}
    </div>
  )
}

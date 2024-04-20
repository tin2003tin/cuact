import { Skeleton } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <div><Skeleton variant="rectangular" className='w-full h-full' /></div>
  )
}

export default Loading
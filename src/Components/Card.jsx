import React from 'react'

const Card = ({todo}) => {
    const {id, title,completed} = todo
  return (
    <div className={`border w-64  m-3 bg-${completed? 'green-500' : 'red-500'}` }>
        <h1 className=''>#{id}</h1>
        <p className=' max-w-[20ch] truncate'>{title}</p>
    </div>
  )
}

export default Card
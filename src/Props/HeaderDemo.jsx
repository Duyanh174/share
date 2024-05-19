import React from 'react'

const HeaderDemo = (props) => {

  return (
    <div>
      <h1 className='text-center text-white p-3 fs-3 ' style={{
        background: props.background
      }}>HEADER</h1>
      <p>background: {props.background}</p>
      
    </div>
  )
}

export default HeaderDemo

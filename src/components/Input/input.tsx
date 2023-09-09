import React from 'react'

interface TextfieldProps{
    label?: string
}

const Input = (props:TextfieldProps) => {
    const {label} = props
  return (
    <div>
        {label && <label>{label}</label>}
        <input type="text"  className='font-mont bg-light border-2 border-black dark:bg-dark -full' />
    </div>
  )
}

export default Input
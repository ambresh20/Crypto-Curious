import React from 'react'

const SelectButton = ({ children, selected, onClick }) => {

  return (
	<span onClick={onClick} className='rounded-md px-5 py-3 mx-5 border-2 border-yellow-300 cursor-pointer hover:text-black hover:bg-yellow-300 gap-2'>
	    {children}
  </span>
  )
}

export default SelectButton ;


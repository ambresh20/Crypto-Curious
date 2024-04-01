import React from 'react'
import { Link } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'

const Header = () => {

	const {currency, setCurrency} = CryptoState() ;
	console.log(currency) ;

  return (
	<div className='bg-transparent border-black border-y-2 static h-10 flex justify-between items-center py-8 px-16'>

		<div className='text-3xl text-yellow-500 font-bold '>
			<Link to="/" >
                <h2 className='cursor-pointer'>Crypto Curious</h2>
			</Link>
		</div>

		<div>
            <form className='max-w-sm mx-auto'>
				<select
				value={currency} onChange={(e)=> setCurrency(e.target.value)}
				id='currencytype' 
				className=' border text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2 bg-gray-700 border-gray-600 cursor-pointer  '>
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
				</select>
			</form>
		</div>

	</div> 

	// 			style={{width:100, height:40, marginLeft:15 }}>
	// 				<MenuItem value={"INR"} >INR</MenuItem>
	// 				<MenuItem value={"USD"} >USD</MenuItem>

  )
}

export default Header
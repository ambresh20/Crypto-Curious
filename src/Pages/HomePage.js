import React from 'react' ;
import Banner from '../Components/Banner/Banner' ;
import CoinTable from '../Components/CoinTable' ;
import cryptocurrency2bg from '../Asset/cryptocurrency2bg.png'
import TrendingPart from '../Components/TrendingPart';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
	<div >
	  <Banner />
	  <CoinTable/>
      {/* trending part  */}
	  <div className='my-20 '>
          <TrendingPart />
	  </div>

	  <div className='my-20 h-1/2 '>
	        <div className='bg-cover bg-center h-[60vh] w-full  ' 
	            style={{backgroundImage: `url(${cryptocurrency2bg})` }}>
			</div>
	  </div>

	  <div className='flex justify-center items-center p-3 h-[8vh] w-full bg-purple-950'>
		<Link to="https://github.com/ambresh20"  className='text-xl text-green-400 font-bold'>
			Created By Ambresh Vaishya
		</Link>
	  </div>

	</div>
  )
}

export default HomePage

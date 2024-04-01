import React from 'react' ;
import CarouselBar from './CarouselBar';
import cryptobanner from '../../Asset/cryptobanner.jpg' ;


const Banner = () => {
  return (
	<div className='bg-cover bg-center h-[70vh] w-full' 
	style={{backgroundImage: `url(${cryptobanner})` }}>

		<div className='flex flex-col justify-around mt-[25] h-[400] items-center '>
            <div>
				<h2 className='font-bold  text-5xl mt-10 mb-7'>Crypto Curious</h2>
			</div>
			<div className='mb-10'>
				<p> Get all the Info regarding your favorite Crypto Currency </p>
			</div>
			<div>
                <CarouselBar />
			</div>
		</div>
	  
	</div>
  )
}

export default Banner ;


// Optional img : https://img.freepik.com/free-vector/abstract-big-data-digital-technology-background-design_1017-22920.jpg?w=1060&t=st=1710354779~exp=1710355379~hmac=cfbe1c03ba0a7116eaca3dfc1ccbed42f9c22bb7575c0dea710ff3c25c71daec
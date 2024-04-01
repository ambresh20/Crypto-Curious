import React, { useEffect, useState } from 'react' ;
// import { TrendingPartCoins } from '../Config/api';
import Carousel from 'better-react-carousel';
import { Link } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import axios from 'axios';

const TrendingPart = () => {

	const [trendingCoin, setTrendingCoin] = useState([]) ;
	const {currency, symbol} = CryptoState() ; 
	
	const fetchData = async() => {
		try {
			const {data} = await axios.get('https://api.coingecko.com/api/v3/search/trending') ;
			setTrendingCoin(data.coins) ;
			console.log(data) ;
		} catch (error) {
			console.log("trending part :", error) ;
		}
		console.log("trending data") ;
		console.log(trendingCoin) ;
	}

	useEffect( () => {
		fetchData() ;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currency]) ;

	useEffect(() => {
        console.log("trending data:", trendingCoin);
    }, [trendingCoin]);


	function numberWithCommas(number) {
		return number.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
	}


  return (
	<div >
		<h1 className='text-center font-bold text-5xl mb-12'>Trending Coins</h1>

		<div className='flex items-center ml-[20%]  xl:ml-[40%]'>
		    <Carousel cols={1} rows={1} gap={15} autoplay={2000} loop={true} showDots={false} hideArrow={true} >
	
	{
		trendingCoin.map( (coin) => { 
			const profit = coin.item.data.price_change_percentage_24h.inr >0 ;

		return ( <Carousel.Item> 
				<Link to={`/coins/${coin.item.id}`} key={coin.item.coin_id} className='flex flex-col' >

					<div className='flex gap-10'>

						<div>
							<img src={coin.item.large} alt={coin.item.name} 
							className='mb-5 h-[100px] w-[100px] rounded-full' />
						</div>

						<div className='flex flex-col gap-5 text-2xl mt-3'>
							<div className='uppercase '>
								{coin.item.symbol}
							</div>

							<div style={{color: profit > 0 ? "green" : "red", fontWeight:500, fontSize:'1.2rem',}}>
								{profit && "+"} {coin.item.data.price_change_percentage_24h.inr?.toFixed(2)}%
							</div>
		
						</div>
						
					</div>

					<div className='text-2xl mb-2'>
						{coin.item.name}
					</div>

					<div className='font-bold text-3xl'>
						{symbol} &nbsp;
						{(coin.item.data.price * 83).toFixed(4)}  
					</div>

				</Link>

				

			</Carousel.Item>  )
		} ) 
	}   
	
            </Carousel>
		</div>
		
	</div>
  )
}

export default TrendingPart ;
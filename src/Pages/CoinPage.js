import React, { useEffect, useState } from 'react' ;
import { CryptoState } from '../CryptoContext';
import { useParams } from 'react-router-dom';
import { SingleCoin } from '../Config/api';
import axios from 'axios';
// import CoinInfo from '../Components/CoinInfo';
import parse from 'html-react-parser';
import './CoinPage.css'
import { LinearProgress } from '@mui/material';
import TradingViewWidget from '../Components/TradingViewWidget';

const CoinPage = () => {

	const {id} = useParams() ;

	const [coin, setCoin] = useState() ;
	const {currency, symbol} = CryptoState()  ;

	const fetchCoin = async () => {
		try {
			const {data} = await axios.get(SingleCoin(id)) ;
			setCoin(data) ;
		} catch (error) {
			console.log("Error in Single coin", error) ;
		}
	}
	// console.log("single coin data :", coin) ;

	useEffect( () => {
        fetchCoin() ;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currency]) ;

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	const parsedReactElements = parse(coin?.description?.en || '');
    // for split --> coin.description.en.split(".")[1]
     
	if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
	<div>
		{/* main part side bar and charts  */}
        <div className='w-[100vw] flex flex-col lg:flex-row mb-12'>

            {/* side Bar  */}
            <div className='lg:w-[30%] w-full flex flex-col mt-4 lg:mt-6 border-r-4 border-gray-200  '> 

	<img src={coin?.image?.large} alt={coin?.name} className='h-[200px] w-[200px] mb-5 m-auto rounded-lg' />

	<h2 className='font-bold text-4xl mb-5 text-center'>{coin?.name}</h2>

	<div className='mb-5 px-5'>
		<p className='text-2xl mb-4'> 
			<span className='font-bold'>Rank :&nbsp;</span>
			<span className='text-gray-400'>
				{numberWithCommas(coin?.market_cap_rank)}
			</span> 
		</p>

		<p className='text-2xl mb-4'> 
			<span className='font-bold'>Current Price :&nbsp; </span> 
			<span className='text-gray-400'>
				{symbol}{" "} {numberWithCommas(
				coin?.market_data.current_price[currency.toLowerCase()]
				)}
			</span> 
		</p>

		<p className='text-2xl'> 
			<span className='font-bold'>Market Cap :&nbsp;</span> 
			<span className='text-gray-400'>
				{symbol} {" "} {numberWithCommas(
				coin?.market_data.market_cap[currency.toLowerCase()]
				.toString().slice(0, -6)
			)} M</span> 
		</p>

	</div>

	<div className='desciption w-full p-6 pb-2 pt-1 mb-5'>
			{coin?.description?.en && parsedReactElements}
	</div>
	
            </div>


            {/* Charts  */} 
            <div className='-mx-1 mb-8 w-[90vw] lg:w-[64vw] h-[70vh] lg:h-[80vh] md:mb-2'>
	            <TradingViewWidget coinSymbol={coin.symbol} />
            </div>


        </div>

   
        {/* Other details in bottoms */}
		<div className=''>
            
	        <div className=' mt-20 m-auto flex justify-around lg:flex-row'>
				<div>
				    <a href={coin?.links?.homepage[0]} target="_blank" rel="noopener noreferrer">
				    <button className="text-white focus:ring-4  font-medium rounded-lg text-sm px-3 py-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 inline-flex items-center" >
					    <svg className="fill-current w-7 h-7 mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					    <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z"/>
					    <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z"/>
					    </svg>
					    <span>Main Website</span>
					</button>
			        </a>
				</div>

			    <div>
				    <a href={coin?.links?.repos_url?.github[0]} target="_blank" rel="noopener noreferrer">
					    <button className="text-white focus:ring-4  font-medium rounded-lg text-sm px-3 py-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 inline-flex items-center" >
					        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-8 h-8 mr-2" viewBox="0 0 30 30">
					            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
					        </svg>
					        <span>GitHub</span>
					</button>
				    </a>
			    </div>

	        </div>


	        <div className='my-5 px-8 mb-10 ml-16 '>
			    <p className='font-semibold mb-2'>Release Date : {' '}
				<span className='text-gray-400'>{ coin.genesis_date}</span>
			    </p>
			    <p className='font-semibold mb-2'>Twitter Follower : {' '}
				<span className='text-gray-400'>{ numberWithCommas(coin.community_data.twitter_followers) }</span> 
			    </p>
			    <p className='font-semibold mb-2'>Forks : {' '}
				<span className='text-gray-400'>{ numberWithCommas(coin.developer_data.forks) }</span> 
			    </p>
			    <p className='font-semibold mb-2'>Stars : {' '}
				<span className='text-gray-400'>{ numberWithCommas(coin.developer_data.stars) }</span> 
			    </p>
			    <p className='font-semibold mb-2'>Total Issues : {' '}
				<span className='text-gray-400'>{ numberWithCommas(coin.developer_data.total_issues) }</span> 
			    </p>
			    <p className='font-semibold mb-2'>Closed Issues : {' '}
				<span className='text-gray-400'>{ numberWithCommas(coin.developer_data.closed_issues) }</span> 
			    </p>
	        </div>

        </div>



	</div>
  )
}

export default CoinPage ;

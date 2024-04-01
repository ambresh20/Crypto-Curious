import React, { useEffect, useState } from 'react'
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { HistoricalChart } from '../Config/api';
// import SelectButton from './SelectButton';
import CircularProgress from '@mui/material/CircularProgress';
// import { chartDays } from '../Config/Data';
import TradingViewWidget from './TradingViewWidget';

const CoinInfo = ({id}) => {

	const [historicalData, setHistoricalData] = useState() ;
	const [days, setDays] = useState(1) ;
	const {currency} = CryptoState() ;

	const fetchHistoricData = async () => {
		try {
			const response = await axios.get(HistoricalChart(id, days, currency)) ;
			setHistoricalData(response.data.prices) ; 
			// console.log(response) 
		} catch (error) {
			console.log("Error in Historic Data", error) ;
		}
	}

	useEffect( () => {
    fetchHistoricData() ;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currency, days])

	// console.log("historical data")
	// console.log(historicalData) ;
	

  return (
	<div className=''>
    <TradingViewWidget />

		{/* <div className=''>
		    {!historicalData ? (
            <CircularProgress
                style={{ color: "gold" , display:'flex', justifyContent:'center', alignItems:'center'}} size={250} thickness={1} />
            ) : (

            <>
            </>

            )}
		</div> */}

	</div>
  )
}

export default CoinInfo ;

// Chart live views
// https://www.tradingview.com/widget-docs/widgets/charts/advanced-chart/


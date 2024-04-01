// import axios from 'axios';
// import React, { useEffect, useState } from 'react' ;
// import { CryptoState } from '../../CryptoContext'; 
// import {TrendingCoins} from '../../Config/api' ;
import { Link } from 'react-router-dom';
import Carousel from "better-react-carousel";
// import {carouselData} from '../../Config/Data' ;

const CarouselBar = () => {
	// const [trending , setTrending] = useState([]) ;
	// const {currency, symbol} = CryptoState() ; 

	const carouselData = [
		{
		   "id":"bitcoin",
		   "symbol":"btc",
		   "name":"Bitcoin",
		   "image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
		},
		{
		   "id":"ethereum",
		   "symbol":"eth",
		   "name":"Ethereum",
		   "image":"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
		},
		{
		   "id":"tether",
		   "symbol":"usdt",
		   "name":"Tether",
		   "image":"https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
		},
		{
		   "id":"binancecoin",
		   "symbol":"bnb",
		   "name":"BNB",
		   "image":"https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
		},
		{
		   "id":"solana",
		   "symbol":"sol",
		   "name":"Solana",
		   "image":"https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
		},
		{
		   "id":"ripple",
		   "symbol":"xrp",
		   "name":"XRP",
		   "image":"https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
		},
		{
		   "id":"staked-ether",
		   "symbol":"steth",
		   "name":"Lido Staked Ether",
		   "image":"https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
		},
		{
		   "id":"usd-coin",
		   "symbol":"usdc",
		   "name":"USDC",
		   "image":"https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
		},
		{
		   "id":"dogecoin",
		   "symbol":"doge",
		   "name":"Dogecoin",
		   "image":"https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
		},
		{
		   "id":"cardano",
		   "symbol":"ada",
		   "name":"Cardano",
		   "image":"https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
		},
		{
		   "id":"avalanche-2",
		   "symbol":"avax",
		   "name":"Avalanche",
		   "image":"https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369",
		},
		{
		   "id":"shiba-inu",
		   "symbol":"shib",
		   "name":"Shiba Inu",
		   "image":"https://assets.coingecko.com/coins/images/11939/large/shiba.png?1696511800",
		},
		{
		   "id":"the-open-network",
		   "symbol":"ton",
		   "name":"Toncoin",
		   "image":"https://assets.coingecko.com/coins/images/17980/large/ton_symbol.png?1696517498",
		},
		{
		   "id":"polkadot",
		   "symbol":"dot",
		   "name":"Polkadot",
		   "image":"https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1696512008",
		},
		{
		   "id":"bitcoin-cash",
		   "symbol":"bch",
		   "name":"Bitcoin Cash",
		   "image":"https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501932",
		},
		{
		   "id":"chainlink",
		   "symbol":"link",
		   "name":"Chainlink",
		   "image":"https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
		},
		{
		   "id":"wrapped-bitcoin",
		   "symbol":"wbtc",
		   "name":"Wrapped Bitcoin",
		   "image":"https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857",
		},
		{
		   "id":"tron",
		   "symbol":"trx",
		   "name":"TRON",
		   "image":"https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1696502193",
		},
		{
		   "id":"uniswap",
		   "symbol":"uni",
		   "name":"Uniswap",
		   "image":"https://assets.coingecko.com/coins/images/12504/large/uni.jpg?1696512319",
		},
		{
		   "id":"matic-network",
		   "symbol":"matic",
		   "name":"Polygon",
		   "image":"https://assets.coingecko.com/coins/images/4713/large/polygon.png?1698233745",
		},
		{
		   "id":"internet-computer",
		   "symbol":"icp",
		   "name":"Internet Computer",
		   "image":"https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png?1696514180",
		},
		{
		   "id":"litecoin",
		   "symbol":"ltc",
		   "name":"Litecoin",
		   "image":"https://assets.coingecko.com/coins/images/2/large/litecoin.png?1696501400",
		},
		{
		   "id":"near",
		   "symbol":"near",
		   "name":"NEAR Protocol",
		   "image":"https://assets.coingecko.com/coins/images/10365/large/near.jpg?1696510367",
		},
		{
		   "id":"aptos",
		   "symbol":"apt",
		   "name":"Aptos",
		   "image":"https://assets.coingecko.com/coins/images/26455/large/aptos_round.png?1696525528",
		},
		{
		   "id":"leo-token",
		   "symbol":"leo",
		   "name":"LEO Token",
		   "image":"https://assets.coingecko.com/coins/images/8418/large/leo-token.png?1696508607",
		},
		{
		   "id":"filecoin",
		   "symbol":"fil",
		   "name":"Filecoin",
		   "image":"https://assets.coingecko.com/coins/images/12817/large/filecoin.png?1696512609",
		},
		{
		   "id":"blockstack",
		   "symbol":"stx",
		   "name":"Stacks",
		   "image":"https://assets.coingecko.com/coins/images/2069/large/Stacks_Logo_png.png?1709979332",
		},
		{
		   "id":"ethereum-classic",
		   "symbol":"etc",
		   "name":"Ethereum Classic",
		   "image":"https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1696501717",
		},
		{
		   "id":"cosmos",
		   "symbol":"atom",
		   "name":"Cosmos Hub",
		   "image":"https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1696502525",
		},
		{
		   "id":"dai",
		   "symbol":"dai",
		   "name":"Dai",
		   "image":"https://assets.coingecko.com/coins/images/9956/large/Badge_Dai.png?1696509996",
		},
		{
		   "id":"dogwifcoin",
		   "symbol":"wif",
		   "name":"dogwifhat",
		   "image":"https://assets.coingecko.com/coins/images/33566/large/dogwifhat.jpg?1702499428",
		},
		{
		   "id":"arbitrum",
		   "symbol":"arb",
		   "name":"Arbitrum",
		   "image":"https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg?1696516109",
		},
		{
		   "id":"immutable-x",
		   "symbol":"imx",
		   "name":"Immutable",
		   "image":"https://assets.coingecko.com/coins/images/17233/large/immutableX-symbol-BLK-RGB.png?1696516787",
		},
		{
		   "id":"render-token",
		   "symbol":"rndr",
		   "name":"Render",
		   "image":"https://assets.coingecko.com/coins/images/11636/large/rndr.png?1696511529",
		},
		{
		   "id":"mantle",
		   "symbol":"mnt",
		   "name":"Mantle",
		   "image":"https://assets.coingecko.com/coins/images/30980/large/token-logo.png?1696529819",
		},
		{
		   "id":"crypto-com-chain",
		   "symbol":"cro",
		   "name":"Cronos",
		   "image":"https://assets.coingecko.com/coins/images/7310/large/cro_token_logo.png?1696507599",
		},
		{
		   "id":"stellar",
		   "symbol":"xlm",
		   "name":"Stellar",
		   "image":"https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1696501482",
		},
		{
		   "id":"hedera-hashgraph",
		   "symbol":"hbar",
		   "name":"Hedera",
		   "image":"https://assets.coingecko.com/coins/images/3688/large/hbar.png?1696504364",
		},
		{
		   "id":"okb",
		   "symbol":"okb",
		   "name":"OKB",
		   "image":"https://assets.coingecko.com/coins/images/4463/large/WeChat_Image_20220118095654.png?1696505053",
		},
		{
		   "id":"optimism",
		   "symbol":"op",
		   "name":"Optimism",
		   "image":"https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385",
		},
		{
		   "id":"the-graph",
		   "symbol":"grt",
		   "name":"The Graph",
		   "image":"https://assets.coingecko.com/coins/images/13397/large/Graph_Token.png?1696513159",
		},
		{
		   "id":"maker",
		   "symbol":"mkr",
		   "name":"Maker",
		   "image":"https://assets.coingecko.com/coins/images/1364/large/Mark_Maker.png?1696502423",
		},
		{
		   "id":"bittensor",
		   "symbol":"tao",
		   "name":"Bittensor",
		   "image":"https://assets.coingecko.com/coins/images/28452/large/ARUsPeNQ_400x400.jpeg?1696527447",
		},
		{
		   "id":"vechain",
		   "symbol":"vet",
		   "name":"VeChain",
		   "image":"https://assets.coingecko.com/coins/images/1167/large/VET_Token_Icon.png?1710013505",
		},
		{
		   "id":"pepe",
		   "symbol":"pepe",
		   "name":"Pepe",
		   "image":"https://assets.coingecko.com/coins/images/29850/large/pepe-token.jpeg?1696528776",
		},
		{
		   "id":"injective-protocol",
		   "symbol":"inj",
		   "name":"Injective",
		   "image":"https://assets.coingecko.com/coins/images/12882/large/Secondary_Symbol.png?1696512670",
		},
		{
		   "id":"fetch-ai",
		   "symbol":"fet",
		   "name":"Fetch.ai",
		   "image":"https://assets.coingecko.com/coins/images/5681/large/Fetch.jpg?1696506140",
		},
		{
		   "id":"kaspa",
		   "symbol":"kas",
		   "name":"Kaspa",
		   "image":"https://assets.coingecko.com/coins/images/25751/large/kaspa-icon-exchanges.png?1696524837",
		},
		{
		   "id":"thorchain",
		   "symbol":"rune",
		   "name":"THORChain",
		   "image":"https://assets.coingecko.com/coins/images/6595/large/Rune200x200.png?1696506946",
		},
		{
		   "id":"theta-token",
		   "symbol":"theta",
		   "name":"Theta Network",
		   "image":"https://assets.coingecko.com/coins/images/2538/large/theta-token-logo.png?1696503349",
		},
		{
		   "id":"fantom",
		   "symbol":"ftm",
		   "name":"Fantom",
		   "image":"https://assets.coingecko.com/coins/images/4001/large/Fantom_round.png?1696504642",
		},
		{
		   "id":"celestia",
		   "symbol":"tia",
		   "name":"Celestia",
		   "image":"https://assets.coingecko.com/coins/images/31967/large/tia.jpg?1696530772",
		},
		{
		   "id":"arweave",
		   "symbol":"ar",
		   "name":"Arweave",
		   "image":"https://assets.coingecko.com/coins/images/4343/large/oRt6SiEN_400x400.jpg?1696504946",
		},
		{
		   "id":"first-digital-usd",
		   "symbol":"fdusd",
		   "name":"First Digital USD",
		   "image":"https://assets.coingecko.com/coins/images/31079/large/firstfigital.jpeg?1696529912",
		},
		{
		   "id":"lido-dao",
		   "symbol":"ldo",
		   "name":"Lido DAO",
		   "image":"https://assets.coingecko.com/coins/images/13573/large/Lido_DAO.png?1696513326",
		},
		{
		   "id":"gala",
		   "symbol":"gala",
		   "name":"GALA",
		   "image":"https://assets.coingecko.com/coins/images/12493/large/GALA_token_image_-_200PNG.png?1709725869",
		},
		{
		   "id":"monero",
		   "symbol":"xmr",
		   "name":"Monero",
		   "image":"https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1696501460",
		},
		{
		   "id":"sui",
		   "symbol":"sui",
		   "name":"Sui",
		   "image":"https://assets.coingecko.com/coins/images/26375/large/sui_asset.jpeg?1696525453",
		},
		{
		   "id":"floki",
		   "symbol":"floki",
		   "name":"FLOKI",
		   "image":"https://assets.coingecko.com/coins/images/16746/large/PNG_image.png?1696516318",
		},
		{
		   "id":"sei-network",
		   "symbol":"sei",
		   "name":"Sei",
		   "image":"https://assets.coingecko.com/coins/images/28205/large/Sei_Logo_-_Transparent.png?1696527207",
		},
		{
		   "id":"algorand",
		   "symbol":"algo",
		   "name":"Algorand",
		   "image":"https://assets.coingecko.com/coins/images/4380/large/download.png?1696504978",
		},
		{
		   "id":"rocket-pool-eth",
		   "symbol":"reth",
		   "name":"Rocket Pool ETH",
		   "image":"https://assets.coingecko.com/coins/images/20764/large/reth.png?1696520159",
		},
		{
		   "id":"flow",
		   "symbol":"flow",
		   "name":"Flow",
		   "image":"https://assets.coingecko.com/coins/images/13446/large/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png?1696513210",
		},
		{
		   "id":"jupiter-exchange-solana",
		   "symbol":"jup",
		   "name":"Jupiter",
		   "image":"https://assets.coingecko.com/coins/images/34188/large/jup.png?1704266489",
		},
		{
		   "id":"quant-network",
		   "symbol":"qnt",
		   "name":"Quant",
		   "image":"https://assets.coingecko.com/coins/images/3370/large/5ZOu7brX_400x400.jpg?1696504070",
		},
		{
		   "id":"bitcoin-cash-sv",
		   "symbol":"bsv",
		   "name":"Bitcoin SV",
		   "image":"https://assets.coingecko.com/coins/images/6799/large/BSV.png?1696507128",
		},
		{
		   "id":"aave",
		   "symbol":"aave",
		   "name":"Aave",
		   "image":"https://assets.coingecko.com/coins/images/12645/large/AAVE.png?1696512452",
		},
		{
		   "id":"mantle-staked-ether",
		   "symbol":"meth",
		   "name":"Mantle Staked Ether",
		   "image":"https://assets.coingecko.com/coins/images/33345/large/symbol_transparent_bg.png?1701697066",
		},
		{
		   "id":"conflux-token",
		   "symbol":"cfx",
		   "name":"Conflux",
		   "image":"https://assets.coingecko.com/coins/images/13079/large/3vuYMbjN.png?1696512867",
		},
		{
		   "id":"beam-2",
		   "symbol":"beam",
		   "name":"Beam",
		   "image":"https://assets.coingecko.com/coins/images/32417/large/chain-logo.png?1698114384",
		},
		{
		   "id":"bonk",
		   "symbol":"bonk",
		   "name":"Bonk",
		   "image":"https://assets.coingecko.com/coins/images/28600/large/bonk.jpg?1696527587",
		},
		{
		   "id":"wrapped-eeth",
		   "symbol":"weeth",
		   "name":"Wrapped eETH",
		   "image":"https://assets.coingecko.com/coins/images/33033/large/weETH.png?1701438396",
		},
		{
		   "id":"singularitynet",
		   "symbol":"agix",
		   "name":"SingularityNET",
		   "image":"https://assets.coingecko.com/coins/images/2138/large/singularitynet.png?1696503103",
		},
		{
		   "id":"elrond-erd-2",
		   "symbol":"egld",
		   "name":"MultiversX",
		   "image":"https://assets.coingecko.com/coins/images/12335/large/egld-token-logo.png?1696512162",
		},
		{
		   "id":"ribbon-finance",
		   "symbol":"rbn",
		   "name":"Ribbon Finance",
		   "image":"https://assets.coingecko.com/coins/images/15823/large/ribbon.png?1709186956",
		},
		{
		   "id":"dydx-chain",
		   "symbol":"dydx",
		   "name":"dYdX",
		   "image":"https://assets.coingecko.com/coins/images/32594/large/dydx.png?1698673495",
		},
		{
		   "id":"the-sandbox",
		   "symbol":"sand",
		   "name":"The Sandbox",
		   "image":"https://assets.coingecko.com/coins/images/12129/large/sandbox_logo.jpg?1696511971",
		},
		{
		   "id":"axie-infinity",
		   "symbol":"axs",
		   "name":"Axie Infinity",
		   "image":"https://assets.coingecko.com/coins/images/13029/large/axie_infinity_logo.png?1696512817",
		},
		{
		   "id":"starknet",
		   "symbol":"strk",
		   "name":"Starknet",
		   "image":"https://assets.coingecko.com/coins/images/26433/large/starknet.png?1696525507",
		},
		{
		   "id":"bittorrent",
		   "symbol":"btt",
		   "name":"BitTorrent",
		   "image":"https://assets.coingecko.com/coins/images/22457/large/btt_logo.png?1696521780",
		},
		{
		   "id":"havven",
		   "symbol":"snx",
		   "name":"Synthetix Network",
		   "image":"https://assets.coingecko.com/coins/images/3406/large/SNX.png?1696504103",
		},
		{
		   "id":"ethena-usde",
		   "symbol":"usde",
		   "name":"Ethena USDe",
		   "image":"https://assets.coingecko.com/coins/images/33613/large/3466ef_3c088c66c7d941e8856339d0bddf33cc_mv2.png?1702514458",
		},
		{
		   "id":"bitget-token",
		   "symbol":"bgb",
		   "name":"Bitget Token",
		   "image":"https://assets.coingecko.com/coins/images/11610/large/icon_colour.png?1696511504",
		},
		{
		   "id":"gatechain-token",
		   "symbol":"gt",
		   "name":"Gate",
		   "image":"https://assets.coingecko.com/coins/images/8183/large/gate.png?1696508395",
		},
		{
		   "id":"pyth-network",
		   "symbol":"pyth",
		   "name":"Pyth Network",
		   "image":"https://assets.coingecko.com/coins/images/31924/large/pyth.png?1701245725",
		},
		{
		   "id":"ether-fi-staked-eth",
		   "symbol":"eeth",
		   "name":"ether.fi Staked ETH",
		   "image":"https://assets.coingecko.com/coins/images/33049/large/ether.fi_eETH.png?1700473063",
		},
		{
		   "id":"worldcoin-wld",
		   "symbol":"wld",
		   "name":"Worldcoin",
		   "image":"https://assets.coingecko.com/coins/images/31069/large/worldcoin.jpeg?1696529903",
		},
		{
		   "id":"tezos",
		   "symbol":"xtz",
		   "name":"Tezos",
		   "image":"https://assets.coingecko.com/coins/images/976/large/Tezos-logo.png?1696502091",
		},
		{
		   "id":"chiliz",
		   "symbol":"chz",
		   "name":"Chiliz",
		   "image":"https://assets.coingecko.com/coins/images/8834/large/CHZ_Token_updated.png?1696508986",
		},
		{
		   "id":"ordinals",
		   "symbol":"ordi",
		   "name":"ORDI",
		   "image":"https://assets.coingecko.com/coins/images/30162/large/ordi.png?1696529082",
		},
		{
		   "id":"mina-protocol",
		   "symbol":"mina",
		   "name":"Mina Protocol",
		   "image":"https://assets.coingecko.com/coins/images/15628/large/JM4_vQ34_400x400.png?1696515261",
		},
		{
		   "id":"ecash",
		   "symbol":"xec",
		   "name":"eCash",
		   "image":"https://assets.coingecko.com/coins/images/16646/large/Logo_final-22.png?1696516207",
		},
		{
		   "id":"ondo-finance",
		   "symbol":"ondo",
		   "name":"Ondo",
		   "image":"https://assets.coingecko.com/coins/images/26580/large/ONDO.png?1696525656",
		},
		{
		   "id":"flare-networks",
		   "symbol":"flr",
		   "name":"Flare",
		   "image":"https://assets.coingecko.com/coins/images/28624/large/FLR-icon200x200.png?1696527609",
		},
		{
		   "id":"decentraland",
		   "symbol":"mana",
		   "name":"Decentraland",
		   "image":"https://assets.coingecko.com/coins/images/878/large/decentraland-mana.png?1696502010",
		},
		{
		   "id":"apecoin",
		   "symbol":"ape",
		   "name":"ApeCoin",
		   "image":"https://assets.coingecko.com/coins/images/24383/large/apecoin.jpg?1696523566",
		},
		{
		   "id":"eos",
		   "symbol":"eos",
		   "name":"EOS",
		   "image":"https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png?1696501893",
		},
		{
		   "id":"ronin",
		   "symbol":"ron",
		   "name":"Ronin",
		   "image":"https://assets.coingecko.com/coins/images/20009/large/14101.png?1711464498",
		},
		{
		   "id":"axelar",
		   "symbol":"axl",
		   "name":"Axelar",
		   "image":"https://assets.coingecko.com/coins/images/27277/large/V-65_xQ1_400x400.jpeg?1696526329",
		},
		{
		   "id":"whitebit",
		   "symbol":"wbt",
		   "name":"WhiteBIT Coin",
		   "image":"https://assets.coingecko.com/coins/images/27045/large/wbt_token.png?1696526096",
		}
	] ;


	// console.log(carouselData[0].id , "id ") ; 
	// console.log(carouselData[0].name, "this is name of coin") ;
	// console.log(carouselData[0].symbol, "not available") ;

	// console.log(currency) ;

	// const fetchTrendingCoins = async () => {
	// 	try {
	// 		const {data} = await axios.get(TrendingCoins(currency)) ;
	// 	    setTrending(data) ;
	// 	} catch (error) {
	// 		console.log("Error in Fetching data carousel" , error) ;
	// 	}
	// }

	// useEffect( () => {
    // fetchTrendingCoins() ;
	// // eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [currency])  ;       
	// console.log(trending) ;

	// function numberWithCommas(number) {
	// 	return number.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
	// }
	  

  return (
	<div className='flex items-center h-[40%] mt-2 w-[85vw]  xl:w-[20vw]'>
		
	    {/* <Carousel cols={1} gap={5} autoplay={3000} loop={true} showDots={false} hideArrow={true} >
	
			{
				trending.map( (coin) => { 
					const profit = coin.price_change_percentage_24h >0 ;

	            return ( <Carousel.Item> 
					    <Link to={`/coins/${coin.id}`} key={coin.id} className='flex flex-col' > 

			                <img src={coin.image} alt={coin.name} 
			                    className='mb-5 h-[100px] w-[100px] rounded-full' />

	                    </Link>

						<div>
							<span className='uppercase text-2xl'>
				                {coin.symbol}
				                &nbsp; symbol
				                <span style={{color: profit > 0 ? "green" : "red", fontWeight:500, fontSize:'1.2rem',}}>
					                {profit && "+"} {coin.price_change_percentage_24h?.toFixed(2)}%
				                </span>
			                </span> 

			                <span className='font-bold text-3xl'>
				                {symbol} &nbsp;
				                {numberWithCommas(coin.current_price)}
			                </span> 
						</div>

					</Carousel.Item>  )
            } ) 
			} 
           
            
        </Carousel> */}


        <Carousel cols={1} rows={1} gap={2} loop={true} autoplay={2000} hideArrow={true} scrollSnap={true} >
            <Carousel.Item>
        <Link to={`/coins/${carouselData[0].id}`}  className='flex flex-col' > 
			    <img src={carouselData[0].image} alt={carouselData[0].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[0].name}
			    </span>
	      </Link>
            </Carousel.Item>
      
      <Carousel.Item>
        <Link to={`/coins/${carouselData[1].id}`}  className='flex flex-col' > 
			    <img src={carouselData[1].image} alt={carouselData[1].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[1].name}
			    </span>

	      </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to={`/coins/${carouselData[2].id}`}  className='flex flex-col' > 
			    <img src={carouselData[2].image} alt={carouselData[2].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[2].name}
			    </span>

	      </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to={`/coins/${carouselData[3].id}`}  className='flex flex-col' > 
			    <img src={carouselData[3].image} alt={carouselData[3].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[3].name}
			    </span>

	      </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to={`/coins/${carouselData[4].id}`}  className='flex flex-col' > 
			    <img src={carouselData[4].image} alt={carouselData[4].name} 
			                    className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[4].name}
			    </span>

	      </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to={`/coins/${carouselData[5].id}`}  className='flex flex-col' > 
			    <img src={carouselData[5].image} alt={carouselData[5].name} 
			    className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[5].name}
			    </span>


	      </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to={`/coins/${carouselData[6].id}`}  className='flex flex-col' > 
			    <img src={carouselData[6].image} alt={carouselData[6].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[6].name}
			    </span>

	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[7].id}`}  className='flex flex-col' > 
			    <img src={carouselData[7].image} alt={carouselData[7].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[7].name}
			    </span>

	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[8].id}`}  className='flex flex-col' > 
			    <img src={carouselData[8].image} alt={carouselData[8].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[8].name}
			    </span>

	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[9].id}`}  className='flex flex-col' > 
			    <img src={carouselData[9].image} alt={carouselData[9].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[9].name}
			    </span>

	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[10].id}`}  className='flex flex-col' > 
			    <img src={carouselData[10].image} alt={carouselData[10].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[10].name}
			    </span>

	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[11].id}`}  className='flex flex-col' > 
			    <img src={carouselData[11].image} alt={carouselData[11].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[11].name}
			    </span>

	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[12].id}`}  className='flex flex-col' > 
			    <img src={carouselData[12].image} alt={carouselData[12].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[12].name}
			    </span>

	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[13].id}`}  className='flex flex-col' > 
			    <img src={carouselData[13].image} alt={carouselData[13].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[13].name}
			    </span>

	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[14].id}`}  className='flex flex-col' > 
			    <img src={carouselData[14].image} alt={carouselData[14].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[14].name}
			    </span>

	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[15].id}`}  className='flex flex-col' > 
			    <img src={carouselData[15].image} alt={carouselData[15].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[15].name}
			    </span>

	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[16].id}`}  className='flex flex-col' > 
			    <img src={carouselData[16].image} alt={carouselData[16].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[16].name}
			    </span>

	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[17].id}`}  className='flex flex-col' > 
			    <img src={carouselData[17].image} alt={carouselData[17].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[17].name}
			    </span>

	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[18].id}`}  className='flex flex-col' > 
			    <img src={carouselData[18].image} alt={carouselData[18].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[18].name}
			    </span>

	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[19].id}`}  className='flex flex-col' > 
			    <img src={carouselData[19].image} alt={carouselData[19].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[19].name}
			    </span>

	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[20].id}`}  className='flex flex-col' > 
			    <img src={carouselData[20].image} alt={carouselData[20].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[20].name}
			    </span>

	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[21].id}`}  className='flex flex-col' > 
			    <img src={carouselData[21].image} alt={carouselData[21].name} 
			      className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[21].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[22].id}`}  className='flex flex-col' > 
			    <img src={carouselData[22].image} alt={carouselData[22].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[22].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[23].id}`}  className='flex flex-col' > 
			    <img src={carouselData[23].image} alt={carouselData[23].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[23].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[24].id}`}  className='flex flex-col' > 
			    <img src={carouselData[24].image} alt={carouselData[24].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[24].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[25].id}`}  className='flex flex-col' > 
			    <img src={carouselData[25].image} alt={carouselData[25].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[25].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[26].id}`}  className='flex flex-col' > 
			    <img src={carouselData[26].image} alt={carouselData[26].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[26].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[27].id}`}  className='flex flex-col' > 
			    <img src={carouselData[27].image} alt={carouselData[27].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[27].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[28].id}`}  className='flex flex-col' > 
			    <img src={carouselData[28].image} alt={carouselData[28].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[28].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[29].id}`}  className='flex flex-col' > 
			    <img src={carouselData[29].image} alt={carouselData[29].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[29].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[30].id}`}  className='flex flex-col' > 
			    <img src={carouselData[30].image} alt={carouselData[30].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[30].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[31].id}`}  className='flex flex-col' > 
			    <img src={carouselData[31].image} alt={carouselData[31].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[31].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[32].id}`}  className='flex flex-col' > 
			    <img src={carouselData[32].image} alt={carouselData[32].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[32].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[33].id}`}  className='flex flex-col' > 
			    <img src={carouselData[33].image} alt={carouselData[33].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[33].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[34].id}`}  className='flex flex-col' > 
			    <img src={carouselData[34].image} alt={carouselData[34].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[34].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[35].id}`}  className='flex flex-col' > 
			    <img src={carouselData[35].image} alt={carouselData[35].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[35].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[36].id}`}  className='flex flex-col' > 
			    <img src={carouselData[36].image} alt={carouselData[36].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[36].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[37].id}`}  className='flex flex-col' > 
			    <img src={carouselData[37].image} alt={carouselData[37].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[37].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[38].id}`}  className='flex flex-col' > 
			    <img src={carouselData[38].image} alt={carouselData[38].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[38].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[39].id}`}  className='flex flex-col' > 
			    <img src={carouselData[39].image} alt={carouselData[39].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[39].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[40].id}`}  className='flex flex-col' > 
			    <img src={carouselData[40].image} alt={carouselData[40].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[40].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  {/* <Carousel.Item>
        <Link to={`/coins/${carouselData[41].id}`}  className='flex flex-col' > 
			    <img src={carouselData[41].image} alt={carouselData[41].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[41].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[42].id}`}  className='flex flex-col' > 
			    <img src={carouselData[42].image} alt={carouselData[42].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[42].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[43].id}`}  className='flex flex-col' > 
			    <img src={carouselData[43].image} alt={carouselData[43].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[43].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[44].id}`}  className='flex flex-col' > 
			    <img src={carouselData[44].image} alt={carouselData[44].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[44].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[45].id}`}  className='flex flex-col' > 
			    <img src={carouselData[45].image} alt={carouselData[45].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[45].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[46].id}`}  className='flex flex-col' > 
			    <img src={carouselData[46].image} alt={carouselData[46].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[46].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[47].id}`}  className='flex flex-col' > 
			    <img src={carouselData[47].image} alt={carouselData[47].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[47].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[48].id}`}  className='flex flex-col' > 
			    <img src={carouselData[48].image} alt={carouselData[48].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[48].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[49].id}`}  className='flex flex-col' > 
			    <img src={carouselData[49].image} alt={carouselData[49].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[49].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[50].id}`}  className='flex flex-col' > 
			    <img src={carouselData[50].image} alt={carouselData[50].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[50].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[51].id}`}  className='flex flex-col' > 
			    <img src={carouselData[51].image} alt={carouselData[51].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[51].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[52].id}`}  className='flex flex-col' > 
			    <img src={carouselData[52].image} alt={carouselData[52].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[52].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[53].id}`}  className='flex flex-col' > 
			    <img src={carouselData[53].image} alt={carouselData[53].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[53].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[54].id}`}  className='flex flex-col' > 
			    <img src={carouselData[54].image} alt={carouselData[54].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[54].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[55].id}`}  className='flex flex-col' > 
			    <img src={carouselData[55].image} alt={carouselData[55].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[55].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[56].id}`}  className='flex flex-col' > 
			    <img src={carouselData[56].image} alt={carouselData[56].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[56].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[57].id}`}  className='flex flex-col' > 
			    <img src={carouselData[57].image} alt={carouselData[57].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[57].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[58].id}`}  className='flex flex-col' > 
			    <img src={carouselData[58].image} alt={carouselData[58].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[58].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[59].id}`}  className='flex flex-col' > 
			    <img src={carouselData[59].image} alt={carouselData[59].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[59].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[60].id}`}  className='flex flex-col' > 
			    <img src={carouselData[60].image} alt={carouselData[60].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[60].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[61].id}`}  className='flex flex-col' > 
			    <img src={carouselData[61].image} alt={carouselData[61].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[61].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[62].id}`}  className='flex flex-col' > 
			    <img src={carouselData[62].image} alt={carouselData[62].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[62].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[63].id}`}  className='flex flex-col' > 
			    <img src={carouselData[63].image} alt={carouselData[63].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[63].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[64].id}`}  className='flex flex-col' > 
			    <img src={carouselData[64].image} alt={carouselData[64].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[64].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[65].id}`}  className='flex flex-col' > 
			    <img src={carouselData[65].image} alt={carouselData[65].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[65].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[66].id}`}  className='flex flex-col' > 
			    <img src={carouselData[66].image} alt={carouselData[66].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[66].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[67].id}`}  className='flex flex-col' > 
			    <img src={carouselData[67].image} alt={carouselData[67].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[67].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[68].id}`}  className='flex flex-col' > 
			    <img src={carouselData[68].image} alt={carouselData[68].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[68].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[69].id}`}  className='flex flex-col' > 
			    <img src={carouselData[69].image} alt={carouselData[69].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[69].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[70].id}`}  className='flex flex-col' > 
			    <img src={carouselData[70].image} alt={carouselData[70].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[70].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[71].id}`}  className='flex flex-col' > 
			    <img src={carouselData[71].image} alt={carouselData[71].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[71].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[72].id}`}  className='flex flex-col' > 
			    <img src={carouselData[72].image} alt={carouselData[72].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[72].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[73].id}`}  className='flex flex-col' > 
			    <img src={carouselData[73].image} alt={carouselData[73].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[73].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[74].id}`}  className='flex flex-col' > 
			    <img src={carouselData[74].image} alt={carouselData[74].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[74].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[75].id}`}  className='flex flex-col' > 
			    <img src={carouselData[75].image} alt={carouselData[75].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[75].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[76].id}`}  className='flex flex-col' > 
			    <img src={carouselData[76].image} alt={carouselData[76].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[76].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[77].id}`}  className='flex flex-col' > 
			    <img src={carouselData[77].image} alt={carouselData[77].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[77].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[78].id}`}  className='flex flex-col' > 
			    <img src={carouselData[78].image} alt={carouselData[78].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[78].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[79].id}`}  className='flex flex-col' > 
			    <img src={carouselData[79].image} alt={carouselData[79].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[79].name}
			    </span>
	      </Link>
      </Carousel.Item>

	  <Carousel.Item>
        <Link to={`/coins/${carouselData[80].id}`}  className='flex flex-col' > 
			    <img src={carouselData[80].image} alt={carouselData[80].name} 
			        className='mb-5 h-[100px] w-[100px] rounded-full' />
		
			    <span className='uppercase text-2xl'>
				    {carouselData[80].name}
			    </span>
	      </Link>
      </Carousel.Item> */}

	

        </Carousel>


	</div>
  )
}


export default CarouselBar ;




// <Carousel cols={2} gap={5} loop={true} autoplay={1000} hideArrow={true}>
	

// {
// 	trending.map( (coin) => { 
// 		 const profit = coin.price_change_percentage_24h >0 ;

// 		 return ( <Carousel.Item> 
// 				<Link to={`/coins/${coin.id}`} key={coin.id} className='flex flex-col' > 
// 					<img src={coin.image} alt={coin.name} 
// 					className='mb-5 h-[100px] w-[100px] rounded-full' />

// 					<span className='uppercase text-2xl'>
// 					{coin.symbol}
// 					&nbsp; symbol
// 					<span style={{color: profit > 0 ? "green" : "red", fontWeight:500, fontSize:'1.2rem',}}>
// 						{profit && "+"} {coin.price_change_percentage_24h?.toFixed(2)}%
// 					</span>
// 					</span>

// 					<span className='font-bold text-3xl'>
// 					{symbol} &nbsp;
// 					{numberWithCommas(coin.current_price)}
// 					</span>

// 				</Link>
// 			</Carousel.Item>  )
// 	} ) 
	
// } 


// </Carousel>




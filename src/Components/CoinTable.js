import React, { useEffect, useState } from "react";
import {Container, createTheme,TableCell,LinearProgress,ThemeProvider,Typography,TableBody,TableRow,
TableHead,TableContainer,Table,Paper, Pagination} from "@mui/material";
import axios from "axios";
import { CoinList } from "../Config/api" ;
import { CryptoState } from "../CryptoContext";
import { useNavigate } from "react-router-dom";


export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CoinsTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency, symbol } = CryptoState();
  const navigate = useNavigate() ;

  const darkTheme = createTheme({
    palette: {
      mode: 'dark', // Set the default theme to dark
      primary: {
        main: '#ffffff', // White for text and active elements in dark mode
      },
      background: {
        default: '#212121', // Dark background color
      },
    },
  });

  const fetchCoins = async () => {
    setLoading(true);
    try {
        const { data } = await axios.get(CoinList(currency));
        // console.log(data);
        setCoins(data);
    } catch (error) {
        console.log("Error in Coin list", error) ;
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const handleSearch = () => {
    return coins.filter( (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center",}}>

        <Typography variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat", letterSpacing:3 }}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>

        
        <form className=" mb-10">   
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input onChange={(e) => setSearch(e.target.value)}
                type="search" id="default-search" className="block w-full p-4 ps-10 text-xl  border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search For a Crypto Currency..."  /> 
            </div>
        </form>


        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table aria-label="simple table">

              <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                <TableRow>
                  {["Rank", "Coin", "Price", "24h Change", "Market Cap", "Volume", "Circulating Supply",].map((head) => (
                    <TableCell
                      style={{color: "black", fontWeight: "900",fontSize:"1.2rem", fontFamily: "Montserrat",}}
                      key={head}
                      align={head === "Coin" ? "center" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleSearch()
                .slice((page-1) * 10, (page-1) * 10 + 10)
                .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => navigate(`/coins/${row.id}`)}
                        sx={[
                            {backgroundColor:'#16171a', cursor:'pointer',},
                            {
                              '&:hover': {
                                // color: 'black',
                                backgroundColor: 'black',
                              },
                            },
                          ]}
                        key={row.name} >
                        
                        <TableCell sx={{color:'white', textAlign:'left',fontWeight: "900", fontSize:"35" }} >
                            {row.market_cap_rank}
                        </TableCell>

                        <TableCell
                            component="th" scope="row"
                            style={{display: "flex", gap: 15,}}
                        >
                            <img className="h-[50px] w-[50px] mb-3"
                                src={row?.image} alt={row.name} />

                            <div className="flex flex-col text-white">
                                <span style={{textTransform: "uppercase", fontSize: 22,}} >
                                    {row.symbol}
                                </span>
                                <span className="text-gray-400">
                                    {row.name}
                                </span>
                            </div>
                        </TableCell>

                        <TableCell sx={{color:'white', textAlign:'right'}}>
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>

                        <TableCell align="right"
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>

                        <TableCell sx={{color:'white', textAlign:'right'}} >
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>

                        <TableCell sx={{color:'white', textAlign:'right'}}>
                          {symbol}{" "}
                          {numberWithCommas(row.total_volume.toFixed(2))}
                        </TableCell>

                        <TableCell sx={{color:'white', textAlign:'right'}} >
                            {numberWithCommas(row.circulating_supply.toFixed(2))}
                        </TableCell>

                      </TableRow>
                    );
                  })}
              </TableBody>

            </Table>
          )}
        </TableContainer>


        {/* Comes from @mui/material/pagination */}
        <Pagination
          count={(handleSearch()?.length / 10).toFixed(0)} 
          size="large"
          style={{
            color:'white',
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }} 
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />

      </Container>
    </ThemeProvider>
  );
}
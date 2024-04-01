// // TradingViewWidget.jsx
"use client";
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget(props) {
  const symbol = props.coinSymbol.toUpperCase() ;
  const container = useRef(null);

  console.log("trading view page")
  console.log(symbol.toUpperCase()) ;

  useEffect( () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      //   "width" :'90%',
      // "height" : '80%',
      script.innerHTML = `
        {
          "autosize": "true",
          "symbol": "CRYPTO:${symbol.toUpperCase()}USD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": false,
          "hide_volume": true,
          "hide_legend": true,
          "allow_symbol_change": true,
          "save_image": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      // container.current.appendChild(script);

      if (container.current) {
        container.current.appendChild(script);
      }
    return () => script.remove();
  }, [symbol] ) ;


  return (
    <div className="tradingview-widget-container w-full h-full m-8" ref={container}>
      <div className="tradingview-widget-container__widget w-full h-[calc(100%-32px)] mt-3 ml-1 md:ml-3 "></div>
    </div>
  );
};

export default memo(TradingViewWidget);



// TradingViewWidget.jsx
// import React, { useEffect, useRef, memo } from 'react';

// function TradingViewWidget(props) {
//   const symbol = props.coinSymbol.toUpperCase() ;
//   const container = useRef(null);

//   useEffect( () => {
//       const script = document.createElement("script");
//       script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
//       script.type = "text/javascript";
//       script.async = true;
//       script.innerHTML = `
//         {
//           "symbols": "CRYPTO:${symbol.toUpperCase()}USD",
//           "chartOnly": false,
//           "width": 900,
//           "height": 580,
//           "locale": "en",
//           "colorTheme": "dark",
//           "autosize": false,
//           "showVolume": false,
//           "showMA": false,
//           "hideDateRanges": false,
//           "hideMarketStatus": false,
//           "hideSymbolLogo": false,
//           "scalePosition": "right",
//           "scaleMode": "Normal",
//           "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
//           "fontSize": "10",
//           "noTimeScale": false,
//           "valuesTracking": "1",
//           "changeMode": "price-and-percent",
//           "chartType": "area",
//           "maLineColor": "#2962FF",
//           "maLineWidth": 1,
//           "maLength": 9,
//           "lineWidth": 2,
//           "lineType": 0,
//           "dateRanges": [
//             "1d|1",
//             "1w|30",
//             "1m|60",
//             "3m|60",
//             "6m|60",
//             "12m|1D",
//             "60m|1W",
//             "all|1M"
//           ]
//         }`;
//       container.current.appendChild(script);

//     }, [symbol] );

//   return (
//     <div className="tradingview-widget-container m-10" ref={container}>
//       <div className="tradingview-widget-container__widget m-10"></div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);


// https://github.com/TanX-009/koinx
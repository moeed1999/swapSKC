
// import axios from 'axios';
// const initialState = [{name:'2',address:'1'},{name:'4',address:'1'},{name:'1',address:'1'}]

// var tokens = [];

// const getAllAvailableTokens = (state=initialState, action) => {

// // switch (action.type) {
// //     case 'GET_ALL_AVAILABLE_TOKENS': 
// //     {
//     // debugger
//         console.log("initializing");
//     axios.get('https://tokens.coingecko.com/uniswap/all.json').then((response)=> {
//     let tokenListJSON =  response;
//     console.log("listing available tokens: ", tokenListJSON);
//     tokens = tokenListJSON.data.tokens;
//     tokens = tokens.sort(function(a,b){
//         if(a.symbol.includes('ETH') && !b.symbol.includes('ETH')){
//             return -1
//         }
//         if(!a.symbol.includes('ETH') && b.symbol.includes('ETH')){
//             return 1
//         }
//         return 0
//     })
//     tokens = tokens.sort(function(a,b){
//         if(a.symbol.includes('BTC') && !b.symbol.includes('BTC')){
//             return -1
//         }
//         if(!a.symbol.includes('BTC') && b.symbol.includes('BTC')){
//             return 1
//         }
//         return 0
//     })

//     console.log("options-->> ", tokens);
    
// })
// console.log(tokens,'####')
// return  tokens;
// }
// //     default: console.log('null');
// // }
// // }

// export default getAllAvailableTokens;



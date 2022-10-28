import React,{useEffect, useState} from 'react'
import Header from "../../components/homeHeader/Header"
import './styles.css'
import SelectVariants from '../../components/selector/Select'
import axios from 'axios';


const Home = () => {
  const [currency, setCurrency] = useState()
  const [currencyType, setCurrencyType] = useState('BTC')
  const [convertedCurrencyType, setConvertedCurrencyType] =useState('Ethereum')
  const [options, setOptions] = useState([{name:'1',address:'1'},{name:'1',address:'1'},{name:'1',address:'1'}])
  const [balance, setBalance] = useState()
  const [swapFlag, setSwapFlag] = useState(false)

var tokens = [];

const getAllAvailableTokens = () => {

        console.log("initializing");
    axios.get('https://tokens.coingecko.com/uniswap/all.json').then((response)=> {
    let tokenListJSON =  response;
    console.log("listing available tokens: ", tokenListJSON);
    tokens = tokenListJSON.data.tokens;
    tokens = tokens.sort(function(a,b){
        if(a.symbol.includes('ETH') && !b.symbol.includes('ETH')){
            return -1
        }
        if(!a.symbol.includes('ETH') && b.symbol.includes('ETH')){
            return 1
        }
        return 0
    })
    tokens = tokens.sort(function(a,b){
        if(a.symbol.includes('BTC') && !b.symbol.includes('BTC')){
            return -1
        }
        if(!a.symbol.includes('BTC') && b.symbol.includes('BTC')){
            return 1
        }
        return 0
    })

    console.log("options-->> ", tokens);
    setOptions(tokens)
    
})
}

const trySwap = async() => {

  // Only work if MetaMask is connect
  // Connecting to Ethereum: Metamask
  // const web3 = new Web3(Web3.givenProvider);

  // // The address, if any, of the most recently used account that the caller is permitted to access
  let accounts = await window.ethereum.request({ method: "eth_accounts" });
  let takerAddress = accounts[0];
  console.log("takerAddress: ", takerAddress);

console.log(currencyType,convertedCurrencyType,currency,takerAddress)

  axios.get(`https://api.0x.org/swap/v1/quote?sellToken=${currencyType}&buyToken=${convertedCurrencyType}&sellAmount=${currency}&takerAddress=${takerAddress}`).then((response)=>{
console.log(response)
  }).catch((e)=>{
console.log(e,'----')
  })
}

useEffect(()=>{
  getAllAvailableTokens()
},[])

  return (
    
    <div className='mainContainer'>
    
      <Header 
      setSwapFlag={setSwapFlag} 
      setBalance={setBalance}
      showConnectorButton = {true}
      />
       
       <div className='contentContainer'>
<div style={{
  fontSize:30,
  fontWeight:'bold',
  color:'rgb(19, 19, 34)',
  marginBottom:20

}}>
  Welcome to FibiSwap
</div>
        <div className='swapContainer'>
       <div className='upperContainer'>
        <div className='swapBox'>
            SWAP
            <div className='inputFieldContainer'>
            <input
            value = {currency}
            onChange = {(val) => setCurrency(val.target.value)}
            rows = {1}
            className = 'inputFields'
            placeholder='0'
            color='white'
            type={'number'}
            />
            <SelectVariants label={'choose coin'} options = {options} val={currencyType} setVal={setCurrencyType}/>
        </div>
        </div>
        </div>

        <div className='lowerContainer'>
        <div className='swapBox'>
        <div className='inputFieldContainer'>
            <textarea
            className = 'inputFields'
            placeholder='0'
            disabled
            type
            />
            <SelectVariants label={'choose coin'} options = {options} val={convertedCurrencyType} setVal={setConvertedCurrencyType}/>
        </div>
        </div>
        <div>
          Estimated GAS:
        </div>
        <div>
          Current Balance: {balance}
        </div>
        <div className='walletButtonContainer'>
          <div className={` walletButton ${!swapFlag && 'disableWalletButton'}`}
          onClick={trySwap}
          >
          SWAP
          </div>
        </div>
        </div>

        
       </div>
        </div>
    </div>
  )
}

export default Home
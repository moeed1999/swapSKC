import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useHistory} from  "react-router-dom"
const web3 = require('web3');


export default function ButtonAppBar({setSwapFlag,setBalance,showConnectorButton}) {
    const history = useHistory()
    const [buttonLabel, setButtonLabel] = useState('Connect to Meta Mask')

const connectToMetaMask = async () => {
    
    if (typeof window.ethereum !== "undefined") {
        try {
            console.log("connecting");
            await window.ethereum.request({ method: "eth_requestAccounts" });
            let  web3instnce = new web3(window.ethereum);
            await window.ethereum.enable();
            var accounts = await web3instnce.eth.getAccounts();
            console.log('accounts', accounts)
            const number = await web3instnce.eth.getBalance(accounts[0])
            const balance = await web3instnce.utils.fromWei(number) 
            console.log('balance----------->>>>>>', balance)
            setBalance(balance)
            setSwapFlag(true)
            setButtonLabel('Connected')
            
            return balance
            
        } catch (error) {
            console.log('------->>',error);
        }
    } 
    else {
        setButtonLabel("Please install MetaMask")
    }
}

  return (
    <Box sx={{ flexGrow: 1, backgroundColor:'red',color:'red' }}>
      <AppBar position="static"
      sx={{
        backgroundColor:'rgb(19, 19, 34)'
      }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <>
          <Typography variant="h6" component="div" sx={{ cursor:'pointer' }}
          onClick={()=> history.push('/')}
          >
            Swap
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,cursor:'pointer',marginLeft:5 }}
          onClick={()=> history.push('/analytic')}
          >
            Analytics
          </Typography>
          </>
          {showConnectorButton &&
          <div
          style={{backgroundColor:'#EC3A62',padding:10,borderRadius:7,cursor:'pointer'}}
          onClick={connectToMetaMask}
          >
          {buttonLabel}
          </div>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

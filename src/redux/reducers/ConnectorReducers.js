// const web3 = require('web3');
// const totalBalance = 0;

// const ConnectToMetaMask = async () => {
    
//     if (typeof window.ethereum !== "undefined") {
//         try {
//             console.log("connecting");
//             await window.ethereum.request({ method: "eth_requestAccounts" });
//             let  web3instnce = new web3(window.ethereum);
//             await window.ethereum.enable();
//             var accounts = await web3instnce.eth.getAccounts();
//             console.log('accounts', accounts)
//             const number = await web3instnce.eth.getBalance(accounts[0])
//             const balance = await web3instnce.utils.fromWei(number) 
//             console.log('balance----------->>>>>>', balance)
//             totalBalance = balance
//             document.getElementById("current_balance").innerHTML = balance+' ETH'
//             return balance
            
//         } catch (error) {
//             console.log(error);
//         }
//         // document.getElementById("login_button").innerHTML = "Connected";
//         // document.getElementById("swap_button").disabled = false;
//     } 
//     else {
//         document.getElementById("login_button").innerHTML = "Please install MetaMask";
//     }
// }
// export default ConnectToMetaMask;
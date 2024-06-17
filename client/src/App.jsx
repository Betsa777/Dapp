import { ethers } from 'ethers';
import { useEffect, useState } from 'react'
import abi from "./contractJson/Chai.json"
import Buy from "./components/Buy"
import Memos from "./components/Memos"


function App() {
  const [state,setState] = useState({
    provider:null,
    signer:null,
    contract:null
  });

  const [account,setAccount] =useState('Not connected');

  useEffect(()=>{
    const template= async() =>{
        const contractAddress ="0xE42379bDF97C5924A0196f4E64E8fCA16543ad07";
        const contractAbi=abi.abi;

        try {
          const {ethereum} =window;
          const account =await ethereum.request({
           method:"eth_requestAccounts"
        });
        window.ethereum.on("accountsChanged",()=>{
          window.location.reload()
        })
      //   window.ethereum.on("chainChanged", () => {
      //     window.location.reload();
      // });
        setAccount(account);

        const provider = new ethers.BrowserProvider(ethereum);
        const signer =await provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
       

        
        setState({provider,signer,contract});
        } catch (error) {
          alert(error);
        }

        
    }
    template()
  },[])

  return (
      <div className="container-fluid text-center">
       <h3 className="text-bg-secondary p-3 mr-3">Welcome to coffee Dapp tracker . MADE IN ESI</h3>
        <div className='container border border-dark rounded mt-5'>
          
        <p className='fw-bold'>Connected Account : {account} </p>
        
        <Buy state={state}></Buy>
        
        </div>
        

        <Memos state={state}></Memos>
      </div>
  );
}

export default App

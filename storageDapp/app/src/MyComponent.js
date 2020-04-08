import React from "react";
import {Helmet} from "react-helmet";

import {
  AccountData,
  ContractData,
  ContractForm,
} from "@drizzle/react-components";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



import logo from "./logoB101.png";
import favicon from "./favicon.png";

export default ({ accounts }) => (
 
  <div className="App">

    <Helmet>
    
    <title>Wallet101</title>
    <link  rel="shortcut icon" src={favicon} sizes="32x32" />
    
    </Helmet>
    
	<ToastContainer />
    <div>
      <img src={logo} alt="drizzle-logo" />
      <h1>Wallet101 token</h1>
      <p>How much Wallet101 token [WOAO] you want ?</p>
    </div>

    <div className="section">
      <h2>Active Account</h2>
      <AccountData accountIndex={0} units="ether" precision={3} />
    </div>

    

    <div className="section">
      <h2>Buy Token</h2>
      
      <p>
        <strong>Total Supply: </strong>
        <ContractData
          contract="TutorialToken"
          method="totalSupply"
          methodArgs={[{ from: accounts[0] }]}
        />{" "}
        <ContractData contract="TutorialToken" method="symbol" hideIndicator />
      </p>
      <p>
        <strong>Available: </strong>
        <ContractData
          contract="TutorialToken"
          method="balanceOf"
          methodArgs={[accounts[0]]}
        />
      </p>
      <h3>Send Tokens</h3>
      <ContractForm
        contract="TutorialToken"
        method="transfer"
        labels={["To Address", "Amount to Send"]}
      />
    </div>
    
  </div>
);

import Web3 from "web3";
import SimpleStorage from "./contracts/SimpleStorage.json";
import ComplexStorage from "./contracts/ComplexStorage.json";
import TutorialToken from "./contracts/TutorialToken.json";

const options = {
  contracts: [SimpleStorage, ComplexStorage, TutorialToken],
  web3: {
    block: false,
    fallback :{
  type: "ws",
  url: "ws://127.0.0.1:7545",
  },
  
  events: {
    SimpleStorage: ["StorageSet"],
  },
  polls: {
    accounts: 1500,
    },
  }
};

export default options;

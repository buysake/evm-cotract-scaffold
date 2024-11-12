import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const PRIVATE_KEY = vars.get("EVM_COTRACT_SCAFFOLD_PRIVATE_KEY");

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    citrea: {
      url: "https://rpc.testnet.citrea.xyz",
      accounts: [`${PRIVATE_KEY}`],
    },
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`${PRIVATE_KEY}`],
    },
  },
};

export default config;

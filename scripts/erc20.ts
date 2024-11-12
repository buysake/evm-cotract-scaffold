import { ethers } from "hardhat";
import { parseEther } from "ethers";
import { Erc20Scaffold__factory } from "../typechain-types";

export const sleep = async (n: number) =>
  new Promise((r) => setTimeout(() => r(null), n));

(async () => {
  try {
    const [deployer] = await ethers.getSigners();

    const erc20 = await ethers.getContractFactory("Erc20Scaffold");

    const erc20Deploy = await erc20.deploy(deployer.address, {});
    await erc20Deploy.waitForDeployment();
    const erc20Deployed = Erc20Scaffold__factory.connect(
      erc20Deploy.target.toString(),
      deployer
    );

    const mintErc20Tx = await erc20Deployed.mint(
      deployer.address,
      parseEther("100")
    );

    await mintErc20Tx.wait();

    const burnErc20Tx = await erc20Deployed.transfer(
      deployer.address,
      parseEther("100")
    );

    await burnErc20Tx.wait();

    const output = {
      contract: {
        erc20: erc20Deploy.target,
      },
      tx: {
        mintErc20: mintErc20Tx.hash,
        burnErc20Tx: burnErc20Tx.hash,
      },
    };

    console.log("Succes", output);
  } catch (e) {
    console.error(e);
    process.exitCode = 1;
  }
})();

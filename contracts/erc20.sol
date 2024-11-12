pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Erc20Scaffold is ERC20, Ownable {
  constructor(address owner) ERC20("Erc20Scaffold", "E20S") Ownable(owner) {}
    
  function mint(address to, uint256 amount) external onlyOwner {
    _mint(to, amount);
  }
}

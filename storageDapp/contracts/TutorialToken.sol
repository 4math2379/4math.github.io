pragma solidity >=0.4.21 <0.7.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract TutorialToken is ERC20 {
    string public name = "Wallet101";
    string public symbol = "WOAO";
    uint public decimals = 2;
    uint public INITIAL_SUPPLY = 12000000000;

    constructor() public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}

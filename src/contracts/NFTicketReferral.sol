// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts@4.4.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.4.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.4.2/security/Pausable.sol";
import "@openzeppelin/contracts@4.4.2/access/Ownable.sol";

contract NFTicketReferal is ERC20, ERC20Burnable, Pausable, Ownable {
    constructor() ERC20("NFTicketReferal", "NFK") {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}

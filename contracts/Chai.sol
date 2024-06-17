//SPDX-License-Identifier:MIT

pragma solidity >=0.7.0 <0.9.0;
error notOwner();

contract Chai {
    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    address payable owner; // owner is going to receive funds

    constructor() {
        owner = payable(msg.sender);
    }

    function buyChai(
        string calldata _name,
        string calldata _message
    ) external payable UserIsNotOwner {
        (bool callSuccess, ) = owner.call{value: address(this).balance}("");
        require(callSuccess, "Error during selling the amount");
        memos.push(Memo(_name, _message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }

    modifier UserIsNotOwner() {
        if (owner != msg.sender) {
            revert notOwner();
        }
        if (msg.value <= 0) {
            revert("Must be great than 0");
        }
        _;
    }
}

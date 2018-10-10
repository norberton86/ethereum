pragma solidity ^0.4.17;

contract CampaignFactory{

    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public{
        address newCampaign = new Campaign(minimum,msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }
    
}

contract Campaign {

    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount; //number of 'yes' votes
        mapping(address=>bool)approvals; //track who has voted
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address=>bool)public approvers;
    uint public approversCount;
    
    constructor(uint minimum,address creator) public{
        manager = creator;
        minimumContribution = minimum;
    }
    
    modifier restricted{
        require(msg.sender == manager);
        _;
    }
    
    function contribute()public payable{
        
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string description,uint value,address recipient) public restricted{
        
        Request memory request = Request({description:description, value:value,recipient:recipient,complete:false,approvalCount:0});
        
        requests.push(request);
    }
    
    function approveRequest(uint index) public {  //index of request to be voted
    
        Request storage request = requests[index];
    
        require(approvers[msg.sender]);     //the account who is trying to vote needs to be an approvers(it has donated before)
        
        require(!request.approvals[msg.sender]);  //people only can vote once
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted{
        
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount/2)); //needs to have at least the half of the approvers voting 'yes'
        require(!request.complete);
        
        request.recipient.transfer(request.value);//give money to the recipient
        request.complete = true;  //finalize the request
    }

    function getSummary() public view returns (uint,uint,uint,uint,address){
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint){
        return requests.length;
    }
}
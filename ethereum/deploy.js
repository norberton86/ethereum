const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new HDWalletProvider(
    'grocery bicycle antique property basic avocado zoo picture clump dream arm hint',
    'https://rinkeby.infura.io/v3/e58d332f7a8f4dc1b989d685a25cd87b'
);

const web3 = new Web3(provider);

const deploy = async () =>{
   const accounts = await web3.eth.getAccounts()

   console.log('Attemting to deploy from account',accounts[0])

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))  //create a contrat  with the ABI interface, in web3 inbox(indeed is the contract) will be a javascript representation
   .deploy({data:compiledFactory.bytecode})       //deploy with the bytecode generated and passing arguments for the constructor. Ex constructor(string initialMessage)
   .send({from:accounts[0],gas:'1000000' })             //using one of the ganech network accounts and open to spend 1000000 in gas

   
   console.log('Contract deployed to',result.options.address); //here we are printing the contract address
};

deploy();
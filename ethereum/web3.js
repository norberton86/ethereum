import Web3 from 'web3'

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){   // if we are running in the browser and running metamask
    web3 = new Web3(window.web3.currentProvider)
}
else{ //We are on the browser or the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/e58d332f7a8f4dc1b989d685a25cd87b"
    );
    web3 = new Web3(provider)
}

export default web3;
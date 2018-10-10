import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xE6523551aCC2AAeB707aF3a2b1b5CC02Aa8c6a12'
);

export default instance;
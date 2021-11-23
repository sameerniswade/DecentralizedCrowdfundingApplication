import web3 from "./web3";

import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x384d79d415f0b38a2206a8A8177B31F60397c0Ea"
);

export default instance;

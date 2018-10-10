const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname,'contracts','Campaign.sol');
const source = fs.readFileSync(campaignPath,'utf8');
const output = solc.compile(source,1).contracts //we have two contracts definition here

fs.ensureDirSync(buildPath); //create the 'build' folder

console.log(output)
for (let contract in output)  // create the files with the contract ABI
{
    fs.outputJson(
        path.resolve(buildPath,contract.replace(':','') + '.json'),
        output[contract]
    )
}
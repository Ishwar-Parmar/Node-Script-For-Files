const fs = require("fs");

// Replace 'YOUR_ABI_JSON_HERE' with your ABI in JSON format
const ONFTPath = "ABIs/ONFT.json";
const ONFTTxtPath = "ABIs/ONFT.txt";
const traverseTxtPath = "ABIs/d_abi_text.txt";
const traversePath = "ABIs/d_abi.json";
const abiJson = JSON.parse(fs.readFileSync(traversePath, "utf8"));

// Replace 'YOUR_NETWORK_URL' with the Ethereum node URL
// const web3 = new Web3(new Web3.providers.HttpProvider("YOUR_NETWORK_URL"));

// Function to parse ABI and print details
function parseABI(abi) {
  let detailsString = "";
  abi.forEach((item) => {
    if (item.type === "function") {
      detailsString += `Function: ${item.name}\n`;
      detailsString += `Inputs: ${JSON.stringify(item.inputs)}\n`;
      detailsString += `Outputs: ${JSON.stringify(item.outputs)}\n`;
      detailsString += `StateMutability: ${JSON.stringify(item.stateMutability)}\n`;
      detailsString += "--------------------------------------\n";
    }
  });
  return detailsString;
}

// Call the function with your ABI
const abiDetails = parseABI(abiJson);

// Write the details to a text file
fs.writeFileSync(traverseTxtPath, abiDetails, "utf8");

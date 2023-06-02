const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  const tree = new MerkleTree(niceList);
  const name = "Jeremy Hansen III";
  const proof = tree.getProof(niceList.indexOf(name));
  console.log(tree.getRoot());
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    proof,
    name,
  });

  console.log({ gift });
}

main();

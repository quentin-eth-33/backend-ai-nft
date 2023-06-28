const { verify } = require("../utils/verify")

const COST_AMOUNT = ethers.utils.parseUnits("0.001", "ether")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  log("----------------------------------------------------")
  const arguments = ["Nft AI Collection", "NFTAI", COST_AMOUNT]
  const nftai = await deploy("NftAI", {
    from: deployer,
    args: arguments,
    log: true,
    waitConfirmations: 6,
  })

  log("Verifying...")
  await verify(nftai.address, arguments)

  log("Contract deployed!")
  log("----------------------------------------------------")
}

module.exports.tags = ["all", "NftAI"]

const cudos = require("cudosjs")

async function main() {

  const signer = await cudos.DirectSecp256k1HdWallet
    .fromMnemonic("ordinary witness such toddler tag mouse helmet perfect venue eyebrow upgrade rabbit", { prefix: "cudos" })

  const [account] = await signer.getAccounts()

  const client = await cudos.SigningStargateClient
    .connectWithSigner("https://sentry1.gcp-uscentral1.cudos.org:36657",
      signer,
      { gasPrice: { amount: "5000000000000", denom: "acudos" } }
    )

  console.log(await client.getAllBalances(account.address))

  await client.sendTokens(account.address, "<recipient-address>", { denom: "acudos", amount: "1000000000000000000" })

}

main()

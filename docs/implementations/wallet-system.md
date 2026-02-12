---
sidebar_position: 10
---

# Wallet system

The wallet system is made up to allow devs and users to have great powers of customization for crypto management, it improves a lot of aspects of Web3 experience including:

- **DApps for every crypto**
- **Easy support for any kind of account**, just adding BSQ token to Orivon will automatically ad support for Mnemonic, Hardware wallets, and way more
- **Increased security**, the less complex is the security model, the safer user is, if the user can use a single account (maybe Hardware wallet) for his entire Web3 experience he has less ways of having his security broken (ex. device compromise)
- **More control on address generation**, under the same key you can manage non-conventional addresses list by special apps logic, while still being safely tied to your account
- **Establishing new shared standards** to simplify the collaboration across devs worldwide 


There are 3 layers of integration of Apps into the Wallet system

### Layer 1: Accounts

The Orivon Wallet is organized in accounts, which Apps can implement with their own logic

Every account may represent a Mnemonic, an Hard wallet account or anything else by the integration App logic (ex. multisig, smart accounts etc...)  

At transaction point these Apps may want to open a GUI to interact with the user before completing the operation  
Every account type exposes various functions, the more of these effective functions are exposed, and more this account type will be integrable with as much crypto as possible (relative standards yet to be defined)

Depending on user settings and [Web3 Score](web3-score), an account may connect automatically to visited web3sites  

### Layer 2: Crypto

Crypto integrating apps has the job to implement support for a new Crypto functions scheme:  
Precisely, implementing a set of functions which allows to be compatible with all of the functions of that crypto, like generating addresses, sign and verify transactions and correctly interact with the network

Each Crypto set of available functions is identified trough a standardized TAG (ex: MONERO_V1), websites usually declares what TAG supports or it needs to work, so that Orivon can communicate to it the availability of that Crypto

Definition of new TAG's and standards set of functions are left to the community, as Orivon we will make available a category on our [**OrivonStack**](https://orivonstack.com) so that standards can me made and discussed

### Layer 3: Address book

Address book is what allows Apps to actually generate the address list usable by users for of their means

These kind of apps has no direct access to any of the user private key, so they're considered generally safe

These could be just adding the default address book with the default derivation paths, or generating a vanity address book, always out of the same account keys  
Furthermore it could be used to add Gnosis safe addresses and other custom kinds of address list

Also address book Apps may need to open a GUI to complete the operation, that's allowed too by Orivon
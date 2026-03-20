---
sidebar_position: 10
---

# Wallet system

The wallet system is made up to allow devs and users to have great powers of customization for crypto management, it improves a lot of aspects of Web3 experience including:

- **DApps for every crypto**
- **Easy support for any kind of account**, just adding BSQ token to Orivon will automatically add support for Mnemonic, Hardware wallets, and way more
- **Increased security**, the less complex is the security model, the safer user is, if the user can use a single account (maybe Hardware wallet) for his entire Web3 experience he has less ways of having his security broken (ex. device compromise)
- **More control on address generation**, under the same key you can manage non-conventional address lists by special app logic, while still being safely tied to your account
- **Establishing new shared standards** to simplify the collaboration across devs worldwide

There are 3 layers of integration of Apps into the Wallet system

---

### Layer 1: Accounts

The Orivon Wallet is organized in accounts, which Apps can implement with their own logic.

Every account may represent a Mnemonic, a Hardware wallet account or anything else by the integration App logic (ex. multisig, smart accounts etc...)

**For users:**
When a user opens Orivon for the first time, they can add an account by installing an Account App — for example a mnemonic wallet or a hardware wallet App. Once added, that account becomes available across all compatible crypto implementations without any additional setup. The user manages all their crypto from a single account, rather than juggling separate wallets for each coin.

When a Web3site requests wallet access, Orivon asks the user which account to connect, based on the user's Web3 Score settings and preferences. The account App may open a GUI to confirm the operation (for example, a hardware wallet confirmation screen).

**For developers:**
An Account App must expose a standardized set of functions so that Orivon can understand what the account is capable of. This is done through the [CapabilityDescriptor](/docs/technical-design/orivon-objects#capabilitydescriptor), which describes the supported cryptographic algorithms, key derivation paths and any limitations.
Some account type examples are: Mnemonic, Hardware wallet and Smart card

The more capabilities an Account App exposes through its `CapabilityDescriptor`, the more Crypto Apps it will be compatible with automatically.

Account Apps can optionally open a GUI at transaction time to interact with the user before completing an operation.

Depending on user settings and [Web3 Score](/docs/implementations/web3-score), an account may connect automatically to visited Web3sites.

---

### Layer 2: Crypto

Crypto Apps implement support for a specific cryptocurrency by exposing a standardized set of functions that cover everything needed to interact with that crypto — generating addresses, signing and verifying transactions, and communicating with its network.

**For users:**
Once a Crypto App is installed (for example, a Bitcoin or Ethereum implementation), it becomes available for any compatible account automatically. The user does not need to manually link their wallet to each crypto — Orivon handles compatibility checks in the background using the account's `CapabilityDescriptor`.

Users can install multiple Crypto Apps and switch between implementations if needed (for example, choosing between different Bitcoin implementations with different feature sets).

**For developers:**
A Crypto App must implement a standardized interface that Orivon uses to interact with it. This interface covers:

- Generating addresses for a given account and derivation path
- Building, signing and verifying transactions
- Communicating with the network layer

Each Crypto implementation exposes a `CryptoDescriptor` describing its capabilities and the derivation paths it supports, so that higher level components like the Address Book can interact with it generically without needing to know which specific crypto it is talking to.

Definition of new crypto standards and function sets is left to the community. Orivon will make available a category on [**OrivonStack**](https://orivonstack.com) so that standards can be proposed, discussed and finalized.

---

### Layer 3: Address book

The Address Book is what allows Apps to generate and manage the address list usable by users for their needs.

Address Book Apps have no direct access to any user private key, so they are considered generally safe and can be installed with lower trust requirements.

**For users:**
The user sees a list of addresses derived from their account, organized by crypto type. They can label addresses, mark addresses as non-spendable, and export descriptors for wallet backup or recovery tools.

By default, each Crypto App comes with its own default Address Book implementation that follows the standard derivation paths for that crypto (for example BIP44/84/86 for Bitcoin). Users can also install additional Address Book Apps for special use cases — for example a vanity address generator, or a Gnosis Safe address list.

When multiple Address Book Apps are available for the same crypto, Orivon lets the user choose which one to use.

**For developers:**
An Address Book App receives a `CryptoDescriptor` from the Crypto layer and uses it to understand which derivation paths are available and allowed for the connected account. Address generation always goes through this descriptor — if a requested path is outside the allowed range, the error is returned by the account or the crypto implementation, not the Address Book itself.

Address Book Apps can also open a GUI when needed, for example to display a QR code or to confirm an address before sharing it.
```

---

**Commit message:** `Expand wallet-system implementation with user and developer perspective`

**Extended description:**
```
The existing wallet-system page described the 3 layers at a high level but 
did not explain how they actually work from a user or developer perspective.

Added user-facing descriptions for each layer explaining what the user 
sees and how they interact with it — account setup, crypto installation, 
address management. Added developer-facing descriptions explaining what 
each App must implement and why, including how CapabilityDescriptor and 
CryptoDescriptor are used to keep the layers generic and compatible.

These additions give the Foundation Implementation the detail it needs 
for Technical Design to correctly build on top of it.

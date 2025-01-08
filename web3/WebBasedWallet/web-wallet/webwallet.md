
# Web Wallet - An web based wallet simillar to Backpack extension wallet

## Definitions and Understanding of Account, Network and Wallet in this project


An account is generated from seed phrase, i.e. account == seed phrase (an account is associated with mnemonics)

Solana, Ethereum (different blockchains) are called networks. An account can add multiple networks.

Each network can have multiple wallets (public/private keypair)


### 1. Account == Seed Phrase

    In Backpack, the account is essentially the root identity tied to the mnemonic seed phrase.
    This account acts as the overarching container for managing assets and activities across multiple blockchains (networks).
    Observation: You are correct that an account is fundamentally associated with a seed phrase. The seed phrase generates all private/public key pairs for wallets within the account.

### 2. Networks == Blockchains

    Networks refer to the blockchains that the wallet supports (e.g., Solana, Ethereum, Avalanche).
    Each network has its unique protocol, address format, and rules for managing assets.
    In Backpack:
        You can interact with multiple networks under a single account.
        Adding a network enables generating wallets for that specific blockchain.

### 3. Wallets = Key Pairs (Public/Private)

Each network can have multiple wallets under the same account.

    These wallets are private/public key pairs derived from the seed phrase, but they are unique to the specific network due to differences in derivation paths.

In Backpack:

    Wallets represent the actual public/private key pairs generated from the seed phrase for a particular network.
    An account can have multiple wallets, one for each blockchain network you want to interact with (e.g., one wallet for Ethereum, one wallet for Solana).

Each wallet corresponds to:

    Private key: Used to sign transactions and access funds.
    Public key: The address on the blockchain to which others can send tokens.

### Backpack Architecture Summary

    Account (Seed Phrase):
        The root identity tied to the mnemonic.
        Represents a single master account.

    Networks:
        Blockchains like Solana, Ethereum, Avalanche.
        Added to the account for cross-chain interaction.

    Wallets:
        Private/public key pairs derived from the seed phrase.
        Unique for each network and can have multiple wallets per network.

### Example in Backpack:

    You create a single account with a seed phrase.
    Account → Can be linked to multiple networks (Ethereum, Solana).
    Networks → Can have multiple wallets (public/private key pairs) for each blockchain.

## Terms for Web Wallet project

Mnemonic/SeedPhrase     ==>     Acccount
Network/Chain           ==>     Network
KeyPair                 ==>     Wallet


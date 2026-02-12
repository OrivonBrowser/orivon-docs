---
sidebar_position: 3
---

# Web3 scores

The 2 **Trustlessity** and **Security** scores are the best tools to give users fast knowledge about what they are using and is a core part of Orivon to drastically improve safety and trust into the Web3 ecosystem

## Who gives the evaluations?

Actually any App can be chosen as a Web3 Score Provider  
Orivon will choose by default the one with the highest Trustless and Security score + Privacy

We got to understand that Trustlessity and Security scores aren't completely mathematically predictable concepts, they are relative and needs an human or intelligent evaluation: needs to understand the code, research the actual decentralization backing it, think about the game theory realistic risks etc...

The ideal Web3 Score provider would be a reputable enough decentralized DAO or provable system which is extremely secure and accurate on it's work of scoring  

If no one comes before us, we will create our own provider, eventually backed by our DAO  
Any suitable provider will be integrated too, and if it happens to be better than Orivon, will replace it at all

## How evaluations system works?

As Orivon, we made this evaluation model which we believe it can be refined to become a standardized way of classifying Web3 Scores

As for Trustlessity score, it splits into 3 different evaluations: Websites, Operations, Connections  
Each of them has different Trustlessity score levels

Security score instead exist only for operations, evaluating the safety of the entire sequence of the process

### Trustlessity levels

The highest level means that it is reasonably completely trustless, the lowest means you are putting complete trust on a single or few actors

<details>
<summary><strong>Trustlessity Levels for Websites</strong></summary>

**Level 1**: It’s a standard website, without [DDOC](../orivon#ddoc) (Automatically detected)  

**Level 2**: The site supports [DDOC](../orivon#ddoc) (Automatically detected)  

**Level 3**: The site root is open source and won’t execute any external code without the user willingly consenting it and being aware of its risk/trustlessness  

**Level 4**: The site is enough trustless into all of its operations (Level 4 operations) and external connections (Level 2 connections)  
It counts passive operations, as example, getting an IBAN from a bank isn’t accepted for this level, it’s a passive Operation Level 1  
**Exceptions** are for operations which the user is clearly made aware of the trustlessness, as long as everything else is managed in a trustless way (Example: Bisq which provides Fiat Exchange, you clearly know that Fiat interactions by themselves are not trustless)

**Level 4 + Privacy**: Every single activity on the Web3site including *Connections* and *Operations* are reasonably privacy preserving and keeping the user aware of privacy risks on specific risky actions
</details>



<details>
<summary><strong>Trustlessity Levels for Operations (sending money, smart contract, transaction, signing etc...)</strong></summary>

**Level 1**: The operation or some parts of it’s source code aren’t available / It’s not possible to know what’s really going on  

**Level 2**: The operation source code is available and does what promised / Can be verified that it’s logic does what promised  

**Level 3**: All the Network contexts the operations relies on, are considered trustless enough (Like Bitcoin, Ethereum etc…)  

**Level 4**: The operation does not allows centralized or untrusted decentralized parties to act against the user interests, compared to the operation promise. (decentralized actors like DAO’s are still allowed, but should be considered safe and 
decentralized enough)  

**Level 5**: The operation is immutable and does what promised in a completely trustless manner, a third party can have special powers on it for security reasons, but these can’t never go against user interests by design (Ex. an Ethereum L2 may have a security stop in case of vulnerability rolling back at few hours before, but user should be always able to exit within a reasonable amount of time)  

**Level 4/5 + Privacy**: The operation is reasonably untrackable and indecipherable without user consent
</details>

<details>
<summary><strong>Trustlessity Levels for Connection to network (trustlessity of your connection)</strong></summary>

**Level 1**: Connection relies on centralized parties, received data verification to a trustless system is not possible  

**Level 2**: Connection allows to verify received data to a trustless system, so it won’t put user at any particular risk  

**Level 3**: Connection is completely decentralized and/or does not put trust on centralized parties for data availability  

**Level 3 + Privacy**: The connection gives reasonable anonymity
</details>


### Security levels

Work in progress...
# ENS Client MVP

## Goal
Resolve a .eth name and launch the correct social client.

## Supported client types
- nostr
- mastodon

## ENS text records
- app.type
- app.target
- nostr.pubkey
- mastodon.handle

## Flow
1. User enters ENS name
2. System resolves ENS
3. System reads text records
4. System identifies app type
5. System renders launch screen
6. User opens client

## Output model
- ensName
- appType
- target
- identity
- status

## Out of scope
- posting
- authentication
- signing
- relay management
- federation controls
- full native runtime integration
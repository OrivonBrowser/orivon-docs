---
sidebar_position: 1
---

# DNS Resolution

Since Web3 is not about a central way of doing things, Orivon intends by design to easily allow Apps to support the resolution of new first level domains

An [**Application**](../orivon#applications--also-called-special-extensions-) can implement support for one or more first level domains

DNS Resolutions Apps are required to return the entire DNS Record list, so that the [**Data Gathering**](./data-gathering) app can use it for its needs

Since multiple Apps may have support for the same domain, Orivon has a priority table available in settings for each first level domain  

The first installed App supporting a specific domain will keep being the default and new Apps wouldn't override it automatically  

Anyway, if an App fails to solve a domain, another try will be given to a second App supporting the same domain, if it is available


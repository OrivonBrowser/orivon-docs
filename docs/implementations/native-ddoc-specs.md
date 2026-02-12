---
sidebar_position: 9
---

# Native DDOC Support

Orivon implements natively a way for sites to meet the DDOC requirement

It works by checking an hash to a Core hash-tree available on the site DNS records   
Core hash-tree contains an hash list of each Page hash-tree  

**What is a Page hash-tree?**  
Each .html file (or page) has it's own Page hash-tree, containing the hashes and relative paths of all files this page will load

### More technical

Specifically it works by first checking if the DNS Records contains a DDOC Hash record  
If it does, Orivon will try to load example.com/path/whatever.html.hashes  
If the site correctly supports DDOC, the hash-tree file will be received, always containing both Core hash-tree and Page hash-tree.

Core hash-tree usually is always the same across multiple pages for the same domain
Page hash-tree changes at each page and should find its hash in the Core hash-tree

Then, for each file Orivon Browser happens to receive, his content will be hashed and compared with the hash indicated on the Page hash-tree. In case of mismatch, DDOC immediately fails, alerting the user of a possible site compromise


The DNS record for DDOC is “DDOC [number] [hash]” 

Example:  
*DDOC 0 01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b*  

The number serves for versioning, so that Domain owners can have multiple DDOC Hashes and update their sites across time without causing DDOC to fail

#### Script for site owners

Who owns a Static Export (or builded) website will be able to add support of DDOC by simply running a script

The script will add needed files in the site source for each page (whatever/name.html.hashes), and will output the appropriate DNS Record

It will probably run headless chromium to identify all files each html page will ever load and generate the appropriate extensive Page hash-tree.

Currently we haven’t plans for dynamic sites like PHP because usually they do not guarantee that easily the same levels of security Web3 standards aims, if you think otherwise you can argument it in our forum [**OrivonStack**](https://orivonstack.com), we are happy to get advices and feedbacks!
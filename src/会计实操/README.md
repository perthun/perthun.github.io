---
title: 会计实操
icon: 
order: 
date: 2023-08-04
---

```mermaid
flowchart LR
  jz{记账};dj(单据);bg(表格);fp(发票);bs(报税)
  bg<-->dj;bg-->jz
  fp-->dj;fp-->bs
  dj-->jz
  jz-->bs
```


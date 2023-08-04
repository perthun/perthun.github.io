---
title: 会计实操
icon: 
order: 
date: 2023-08-04
---

```mermaid
flowchart LR
  jz{记账};dj(单据);bg(表格);fp(发票);bs(报税);bb(报表)
  fp-->dj;fp-->bs
  bg<-->dj;bg<-->jz
  dj-->jz
  jz<-->bb;jz-->bs
  bb-->bs



  
```


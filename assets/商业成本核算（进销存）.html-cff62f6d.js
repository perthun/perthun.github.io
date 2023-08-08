import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as p,d as t}from"./app-5185b1a9.js";const _={},e=t("<p><s>做一个库存商品的明细表</s></p><p>很多公司购买的低版本或盗版的财务软件没有进销存系统，但可以用Excel表格、自己做进销存的记录。</p><p>商业通用的成本核算方式是<strong>月末加权平均法</strong>：</p><ul><li>成本单价=（上月结存的金额+本月进货的总金额）除以（上月结存的数量+本月进货的总数量）</li></ul><blockquote><p>因为上月有结余，本月进货多次，每次的单价都不一样，所以要加权计算。</p></blockquote><p>这个成本单价同时也是本月结存的单价。</p><p>根据入库单和发票的明细，将数据录入表格时，不要只写一个总数，要把明细写清楚，如“=100+200”</p><p><s>新的一个月，就复制一个表格重命名，把上月结存复制一下，或者函数</s><br><s>这个表格打印出来就是原始凭证。</s></p><p>这个成本单价就是结转销售成本时，填入的金额的单价。</p><hr><p>库存商品：有发票、有入库单。</p><ul><li>借：库存商品；贷：应付账款。</li></ul><p>在途物资：有发票、无入库单</p><ul><li>借：在途物资；贷：应付账款。</li><li>借：库存商品；贷：在途物资。</li></ul><p>暂估入库：无发票、有入库单。</p><ul><li>即赊账、收到商品但没给钱，所以没有发票入账，先暂估入库、入库单有数量、金额看销售合同或估算一个。</li><li>借：库存商品；贷：应付账款-暂估。</li><li><strong>库存明细表直接增加即可，但要另外弄一个表格、记录暂估、防止忘记，收到发票后就删除记录，红字冲销，或反方向做分录，再做正常的入库分录。</strong></li></ul><blockquote><p>教科书上智能暂估一个月，多次暂估冲销很麻烦，实际工作中暂估一次即可。</p></blockquote>",17),s=[e];function i(c,r){return o(),p("div",null,s)}const a=l(_,[["render",i],["__file","商业成本核算（进销存）.html.vue"]]);export{a as default};

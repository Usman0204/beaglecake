(this.webpackJsonpyfeth=this.webpackJsonpyfeth||[]).push([[0],{119:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address payable","name":"routerAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nextAvailableClaimDate","type":"uint256"}],"name":"ClaimBNBSuccessfully","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_newValue","type":"uint256"}],"name":"ChangeMinTokenNumberToSell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_manualBurnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activateContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ofAddress","type":"address"}],"name":"calculateBNBReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newValue","type":"address"}],"name":"changeManualBurnAddres","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimBNBReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"disableEasyRewardFrom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disruptiveCoverageFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"disruptiveTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"disruptiveTransferEnabledFrom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"easyRewardCycleBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"geUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardCycleBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nextAvailableClaimDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakePair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeRouter","outputs":[{"internalType":"contract IPancakeRouter02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardCycleBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setExcludeFromMaxTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxPercent","type":"uint256"}],"name":"setMaxTxPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"threshHoldTopUpRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"winningDoubleRewardPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]')},297:function(e,t,s){},309:function(e,t,s){},310:function(e,t,s){},323:function(e,t){},345:function(e,t){},347:function(e,t){},419:function(e,t){},421:function(e,t){},454:function(e,t){},459:function(e,t){},461:function(e,t){},468:function(e,t){},481:function(e,t){},503:function(e,t){},510:function(e,t){},512:function(e,t){},526:function(e,t){},589:function(e,t,s){},597:function(e,t){},713:function(e,t){},726:function(e,t){},736:function(e,t){},740:function(e,t,s){},741:function(e,t,s){},742:function(e,t,s){},743:function(e,t,s){"use strict";s.r(t);var n=s(3),a=s.n(n),i=s(117),c=s.n(i),l=(s(309),s(310),s(10)),r=s.n(l),d=s(30),o=s(25),m=s(79),j=s.n(m),u=s(119),b={YfethContractAddress:"0xaFfd9488c8640f0eb005992F79163bBf8D0C7ab4"},p=function(){return new j.a(j.a.givenProvider||"ws://localhost:8545")},x=function(){return new(p().eth.Contract)(u,b.YfethContractAddress)},h=function(){if(window.web3){var e=new j.a(window.web3.currentProvider);return window.ethereum.enable(),e.eth.getAccounts()}return!1},y=p,O=function(e,t,s,n){return function(){var s=Object(d.a)(r.a.mark((function s(n){return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:t.methods.balanceOf(e).call().then((function(e){n({type:"BALANCE",payload:e})})),t.methods.calculateBNBReward(e).call().then((function(e){n({type:"USER_REWARD",payload:e})}));case 2:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},f=s(50),v=s(13),N=(s(589),s(300)),g=new(s.n(N).a)("54acfcc23a101895cef5a04b42e4a27006ac62ca08d6b7500e8dbf2f988250ac","https://data-seed-prebsc-1-s1.binance.org:8545/"),w=function(){return new j.a(g)},T=function(){return new(w().eth.Contract)(u,b.YfethContractAddress)},M=function(){var e=Object(d.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=T().methods._maxTxAmount().call(),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(d.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y(),s=t.eth.getBalance(b.YfethContractAddress),e.abrupt("return",s);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=s(0),A=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.UserReducer})).balance,s=a.a.useState(),i=Object(o.a)(s,2),c=i[0],l=i[1],m=a.a.useState(),j=Object(o.a)(m,2),u=j[0],b=j[1],p=a.a.useState(!1),y=Object(o.a)(p,2),N=y[0],g=y[1],w=function(){var e=Object(d.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!N||void 0===c){e.next=6;break}g(!1),console.log("disconnect"),l(void 0),e.next=12;break;case 6:return e.next=8,h();case 8:t=e.sent,console.log("here are the accounts====>",t),t&&(l(t[0]),s=x(),b(s)),g(!0);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){void 0!==c&&void 0!==u&&e(O(c,u))}),[c,u]),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"inner-content",children:[Object(C.jsx)(v.b,{children:Object(C.jsx)("img",{src:"assets/img/yfeth-assets/logo.svg",alt:"",width:"100px",className:"img-fluid"})}),Object(C.jsx)("p",{className:"pcolor",children:" A new way to earn BNB"}),Object(C.jsxs)("button",{className:"btn-common pt__20",children:[Object(C.jsx)("img",{src:"assets/img/yfeth-assets/buy-icon.svg",alt:""})," BUY $SMART"]}),Object(C.jsxs)("div",{className:"inner-tile text-left ptb10 pt__30",children:[Object(C.jsx)("h3",{children:"Wallet Information"}),Object(C.jsx)("h6",{children:"Your Address:"}),Object(C.jsx)("p",{children:c||""}),Object(C.jsxs)("div",{className:"row pt20",children:[Object(C.jsx)("div",{className:"col-sm-6",children:Object(C.jsx)("div",{className:"inner-side",children:Object(C.jsxs)(v.b,{className:"grey",children:[Object(C.jsx)("img",{src:"assets/img/yfeth-assets/copy-icon.svg",alt:"",className:"img-fluid"}),Object(C.jsx)("span",{children:" Copy Address"})]})})}),Object(C.jsx)("div",{className:"col-sm-6",children:Object(C.jsx)("div",{className:"inner-side",children:Object(C.jsxs)(v.b,{className:"grey",children:[Object(C.jsx)("img",{src:"assets/img/yfeth-assets/external-link-icon.svg",alt:"",className:"img-fluid"}),Object(C.jsx)("span",{children:" View on BscScan Explorer"})]})})})]}),Object(C.jsxs)("div",{className:"p15",children:[Object(C.jsx)("h4",{children:"Your Balance:"}),Object(C.jsx)("h6",{children:c?t:""}),Object(C.jsx)("h6",{children:"(50.20 $)"})]})]}),Object(C.jsx)("div",{className:"inner-tile1 text-left",children:Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsxs)(v.b,{className:"img-fluid",children:[Object(C.jsx)("img",{src:"assets/img/yfeth-assets/home-icon.svg",alt:"",className:"img-fluid"}),Object(C.jsx)("span",{children:" \xa0Homepage"})]})}),Object(C.jsx)("li",{children:Object(C.jsxs)(v.b,{className:"img-fluid",children:[Object(C.jsx)("img",{src:"assets/img/yfeth-assets/guide-icon.svg",alt:"",className:"img-fluid"}),Object(C.jsx)("span",{children:" \xa0Guide"})]})}),Object(C.jsx)("li",{children:Object(C.jsxs)(v.b,{className:"img-fluid",children:[Object(C.jsx)("img",{src:"assets/img/yfeth-assets/disclaimer-icon.svg",alt:"",className:"img-fluid"}),Object(C.jsx)("span",{children:" \xa0Disclaimer"})]})}),Object(C.jsx)("li",{children:Object(C.jsxs)(v.b,{className:"img-fluid",children:[Object(C.jsx)("img",{src:"assets/img/yfeth-assets/contract-icon.svg",alt:"",className:"img-fluid"}),Object(C.jsx)("span",{children:" \xa0Contract"})]})}),Object(C.jsx)("li",{children:Object(C.jsxs)(v.b,{className:"img-fluid",children:[Object(C.jsx)("img",{src:"assets/img/yfeth-assets/chart-icon.svg",alt:"",className:"img-fluid"}),Object(C.jsx)("span",{children:" \xa0Chart"})]})})]})}),Object(C.jsxs)("button",{className:"btn-common pt__20",onClick:w,children:[Object(C.jsx)("img",{src:"assets/img/yfeth-assets/disconnect-icon.svg",alt:"",className:"img-fluid"}),c?"Disconnect Wallet":" Connect Wallet"," "]})]})})},F=(s(740),function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"row marrgins_bottom",children:[Object(C.jsx)("div",{className:"col-sm-6",children:Object(C.jsx)("div",{className:"inner-contents",children:Object(C.jsxs)("ul",{className:"list-inline",children:[Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)(v.c,{exact:!0,activeClassName:"active",to:"/",children:"Claim BNB"})}),Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)(v.c,{exact:!0,activeClassName:"active",to:"/transfer",children:"Disruptive Transfer"})}),Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)(v.c,{exact:!0,activeClassName:"active",to:"/zcz",children:"Statistics"})})]})})}),Object(C.jsx)("div",{className:"col-sm-6 text-center",children:Object(C.jsx)("div",{className:"inner-content1",children:Object(C.jsxs)("ul",{className:"list-inline",children:[Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)(v.b,{children:Object(C.jsx)("img",{src:"assets/img/yfeth-assets/youtube-icon.svg",alt:"",className:"img-fluid "})})}),Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)(v.b,{children:Object(C.jsx)("img",{src:"assets/img/yfeth-assets/tiktok-icon.svg",alt:"",className:"img-fluid "})})}),Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)(v.b,{children:Object(C.jsx)("img",{src:"assets/img/yfeth-assets/reddit-icon.svg",alt:"",className:"img-fluid "})})}),Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)(v.b,{children:Object(C.jsx)("img",{src:"assets/img/yfeth-assets/facebook-icon.svg",alt:"",className:"img-fluid "})})}),Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)(v.b,{children:Object(C.jsx)("img",{src:"assets/img/yfeth-assets/discord-icon.svg",alt:"",className:"img-fluid "})})}),Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)(v.b,{children:Object(C.jsx)("img",{src:"assets/img/yfeth-assets/twitter-icon.svg",alt:"",className:"img-fluid "})})}),Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)(v.b,{children:Object(C.jsx)("img",{src:"assets/img/yfeth-assets/instagram-icon.svg",alt:"",className:"img-fluid "})})}),Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)(v.b,{children:Object(C.jsx)("img",{src:"assets/img/yfeth-assets/telegram-icon.svg",alt:"",className:"img-fluid "})})})]})})})]})})}),B=(s(297),function(){var e=a.a.useState(),t=Object(o.a)(e,2),s=t[0],n=t[1];(function(){var e=Object(d.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();var i=Object(f.c)((function(e){return e.UserReducer})).reward;return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("section",{className:"secondlast",children:Object(C.jsx)("div",{className:"col-sm-12 p_00",children:Object(C.jsx)("div",{className:"inner-tile-11",children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-sm-3",children:Object(C.jsxs)("div",{className:"inner-content2 text-center",children:[Object(C.jsx)("img",{src:"assets/img/yfeth-assets/reward-pool-image.svg",alt:"",className:"img-fluid"}),Object(C.jsx)("h4",{children:s})]})}),Object(C.jsx)("div",{className:"col-sm-9",children:Object(C.jsxs)("div",{className:" text-center",children:[Object(C.jsxs)("h4",{children:["My Reward: ",Object(C.jsxs)("strong",{children:[i," BNB"]})," "]}),Object(C.jsxs)("h5",{className:"ptb20",children:["You will be received ",i," BNB (ather tax)"]}),Object(C.jsxs)("button",{className:"btn-commonclaim",style:{marginTop:"10px"},children:[Object(C.jsx)("img",{src:"assets/img/yfeth-assets/claim-reward-icon.svg",alt:"",className:"img-fluid"}),Object(C.jsx)("span",{className:"",children:" Claim My Reward"})]})]})})]})})})})})}),k=function(){var e=a.a.useState(),t=Object(o.a)(e,2),s=t[0],n=t[1];return function(){var e=Object(d.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("section",{className:"last-section",children:[Object(C.jsxs)("div",{className:"row ptb20",children:[Object(C.jsx)("div",{className:"col-sm-6 p_00",children:Object(C.jsx)("div",{className:"inner-tile-11",children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-sm-3",children:Object(C.jsx)("div",{className:"inner-content2 text-center",children:Object(C.jsx)("img",{src:"assets/img/yfeth-assets/max-transaction-image.svg",alt:"",className:"img-fluid"})})}),Object(C.jsx)("div",{className:"col-sm-9",children:Object(C.jsxs)("div",{className:" text-center",children:[Object(C.jsx)("h5",{children:"Max Transaction Amount"}),Object(C.jsx)("ul",{className:"list-inline",children:Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsxs)(v.b,{children:[Object(C.jsxs)("span",{className:"size",children:["BEAGLECAKE ",s]}),"\xa0",Object(C.jsx)("img",{src:"assets/img/yfeth-assets/copy-icon.svg",alt:"",className:"img-fluid"})]})})})]})})]})})}),Object(C.jsx)("div",{className:"col-sm-6 p_00",children:Object(C.jsx)("div",{className:"inner-tile-11",children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-sm-3",children:Object(C.jsx)("div",{className:"inner-content2 text-center",children:Object(C.jsx)("img",{src:"assets/img/yfeth-assets/total-liquidity-pool-image.svg",alt:"",className:"img-fluid"})})}),Object(C.jsx)("div",{className:"col-sm-9",children:Object(C.jsxs)("div",{className:" text-center",children:[Object(C.jsx)("h5",{children:"Total Liquidity Pool"}),Object(C.jsxs)("ul",{className:"list-inline",children:[Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)("span",{children:"$ 123765658"})}),Object(C.jsx)("li",{className:"list-inline-item"})]})]})})]})})})]}),Object(C.jsxs)("div",{className:"row ptb20",children:[Object(C.jsx)("div",{className:"col-sm-6 p_00",children:Object(C.jsx)("div",{className:"inner-tile-11",children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-sm-3",children:Object(C.jsx)("div",{className:"inner-content2 text-center",children:Object(C.jsx)("img",{src:"assets/img/yfeth-assets/total-bnb-image.svg",alt:"",className:"img-fluid"})})}),Object(C.jsx)("div",{className:"col-sm-9",children:Object(C.jsxs)("div",{className:" text-center",children:[Object(C.jsx)("h5",{children:"Total BNB in liquidity pool"}),Object(C.jsxs)("ul",{className:"list-inline",children:[Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)(v.b,{children:Object(C.jsx)("span",{className:"size",children:"BNB 100,000,000,000"})})}),Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)("span",{className:"common-g",children:"|"})}),Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)(v.b,{children:Object(C.jsx)("span",{className:"size",children:"BUSD 1.7436"})})})]})]})})]})})}),Object(C.jsx)("div",{className:"col-sm-6 p_00",children:Object(C.jsx)("div",{className:"inner-tile-11",children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-sm-3",children:Object(C.jsx)("div",{className:"inner-content2 text-center",children:Object(C.jsx)("img",{src:"assets/img/yfeth-assets/current-one-mil-image.svg",alt:"",className:"img-fluid"})})}),Object(C.jsx)("div",{className:"col-sm-9",children:Object(C.jsxs)("div",{className:" text-center",children:[Object(C.jsx)("h5",{children:" BEAGLECAKE Price"}),Object(C.jsx)("ul",{className:"list-inline",children:Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)("span",{children:"$ 0.0023567789"})})})]})})]})})})]})]})})},R=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"container-fluid",children:Object(C.jsx)("div",{className:"row",children:Object(C.jsx)("div",{className:"col-sm-12 text-center",children:Object(C.jsxs)("div",{className:"inner-content-slider",children:[Object(C.jsx)("div",{className:"customslider"}),Object(C.jsx)(B,{}),Object(C.jsx)(k,{})]})})})})})},S=(s(741),function(){var e=Object(f.b)(),t=a.a.useState(),s=Object(o.a)(t,2),i=s[0],c=s[1],l=a.a.useState(),m=Object(o.a)(l,2),j=m[0],u=m[1],b=a.a.useState(!1),p=Object(o.a)(b,2),v=p[0],N=p[1],g=a.a.useState(),w=Object(o.a)(g,2),T=w[0],M=w[1];console.log("amount",T);var E=a.a.useState(),A=Object(o.a)(E,2),F=A[0],B=A[1];console.log("recipientAddress",F);var k=x(),R=function(){var e=Object(d.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v||void 0===i){e.next=6;break}N(!1),console.log("disconnect"),c(void 0),e.next=12;break;case 6:return e.next=8,h();case 8:t=e.sent,console.log("here are the accounts====>",t),t&&(c(t[0]),s=x(),u(s)),N(!0);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){T>=0&&alert("enter amount");y();void 0!==i&&void 0!==j?k.methods.disruptiveTransfer(T,F).send({from:i,recipientAddress:F,amount:T}).on("error",(function(e){console.log("Error",e)})):R()};return Object(n.useEffect)((function(){void 0!==i&&void 0!==j&&e(O(i,j))}),[i,j]),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{class:"container-fluid",children:Object(C.jsx)("div",{class:"row",children:Object(C.jsx)("div",{class:"col-sm-12 text-center",children:Object(C.jsx)("div",{class:"disrpt-content",children:Object(C.jsxs)("div",{class:"inner-tile",children:[Object(C.jsxs)("h4",{children:["Disuptive Transfer between 2 wallets ",Object(C.jsx)("span",{class:"circle",children:"?"})," "]}),Object(C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===T&&alert("enter amount")},children:[Object(C.jsx)("div",{class:"form-group",children:Object(C.jsx)("input",{type:"text",class:"form-control",name:"amount",id:"exampleInputEmail1",onChange:function(e){M(e.target.value)},"aria-describedby":"emailHelp",placeholder:"Recipient (address)"})}),Object(C.jsxs)("div",{class:"form-group",children:[Object(C.jsx)("input",{type:"number",class:"form-control",name:"recipientaddress",id:"exampleInputEmail1",onChange:function(e){B(e.target.value)},"aria-describedby":"emailHelp",placeholder:"Amount (YFETH)"}),Object(C.jsx)("span",{class:"common-g",children:"Max"})]}),Object(C.jsxs)("button",{class:"btn-common",onClick:S,children:[Object(C.jsx)("img",{src:"assets/img/yfeth-assets/send-icon.svg",alt:"",class:"img-fluid  "}),Object(C.jsx)("span",{children:i?"Send":"Connect Wallet"})]})]})]})})})})})})}),_=(s(742),function(){var e=a.a.useState(!0),t=Object(o.a)(e,2),s=t[0],n=t[1];return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("section",{className:"main-bg",children:Object(C.jsx)("div",{className:"container-fluid",children:Object(C.jsx)("div",{className:"farm-content",children:Object(C.jsxs)("div",{className:"inner-tile text-left",children:[Object(C.jsxs)("div",{className:"row brdr",children:[Object(C.jsx)("div",{className:"col-sm-10",children:Object(C.jsx)("ul",{className:"list-inline",children:Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsxs)(v.b,{children:[Object(C.jsx)("img",{src:"assets/img/yfeth-assets/yfeth-eth.svg",alt:"",className:"img-fluid"}),Object(C.jsx)("span",{children:" YFBTC/ETH "})]})})})}),Object(C.jsx)("div",{className:"col-sm-2",children:Object(C.jsx)("div",{className:"inner-circle",children:Object(C.jsx)("span",{children:"10x"})})})]}),Object(C.jsx)("div",{className:"row brdr ptb20",children:Object(C.jsxs)("div",{className:"col-sm-12",children:[Object(C.jsx)("h6",{className:"grey",children:"MY LP SHARE"}),Object(C.jsx)("h4",{children:"288.1344001"})]})}),Object(C.jsxs)("div",{className:"row ptb20",children:[Object(C.jsxs)("div",{className:"col-sm-8",children:[Object(C.jsxs)("h6",{className:"common-g",children:["YFETH ",Object(C.jsx)("span",{className:"grey",children:"EARN"})]}),Object(C.jsx)("h4",{children:"0.0000"})]}),Object(C.jsx)("div",{className:"col-sm-4",children:Object(C.jsx)("div",{className:"inner-circle",children:Object(C.jsx)("button",{type:"button",className:"btn btn-common",onClick:function(){},disabled:s,children:"Harvest"})})})]}),s?Object(C.jsx)("div",{className:"row brdr ptb20",children:Object(C.jsx)("div",{className:"col-sm-12",children:Object(C.jsx)("button",{className:"btn-common",onClick:function(){n(!s)},children:"Approve Contract"})})}):Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-sm-8",children:Object(C.jsx)("div",{className:"form-group",children:Object(C.jsx)("div",{className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:0,children:"0"})})}),Object(C.jsx)("div",{className:"col-sm-4",children:Object(C.jsxs)("ul",{className:"list-inline text-right",children:[Object(C.jsxs)("li",{className:"list-inline-item",children:[Object(C.jsx)("button",{type:"button",className:"btn-common plus","data-toggle":"modal","data-target":"#exampleModal1",children:"+"}),Object(C.jsx)("div",{className:"modal fade",id:"exampleModal1",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(C.jsx)("div",{className:"modal-dialog",role:"document",children:Object(C.jsxs)("div",{className:"modal-content",children:[Object(C.jsxs)("div",{className:"modal-header brdr",children:[Object(C.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Deposite YFETH/ETH LP Token"}),Object(C.jsx)("button",{type:"button",className:"common-g close","data-dismiss":"modal","aria-label":"Close",children:Object(C.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(C.jsxs)("div",{className:"modal-body",children:[Object(C.jsx)("div",{className:"row ptb20",children:Object(C.jsxs)("div",{className:"col-sm-12 text-right",children:[Object(C.jsx)("h5",{children:"371.866585213518513 YFETH/ETH LP Available"}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("input",{type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:0}),Object(C.jsx)("div",{className:"inner-max",children:Object(C.jsxs)("ul",{className:"list-inline",children:[Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)("span",{className:"size12",children:"YFETH/ETH LP"})}),Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)("button",{className:"btn-common size12",children:"MAX"})})]})})]})]})}),Object(C.jsx)("div",{className:"row ptb20",children:Object(C.jsx)("div",{className:"col-sm-12 text-center",children:Object(C.jsxs)("ul",{className:"list-inline",children:[Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)("button",{className:"btn-common",children:"Cancel"})}),Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)("button",{className:"btn-common",children:"Confirm"})})]})})})]})]})})})]}),Object(C.jsxs)("li",{className:"list-inline-item",children:[Object(C.jsx)("button",{type:"button",className:"btn-common minus","data-toggle":"modal","data-target":"#exampleModal2",children:"-"}),Object(C.jsx)("div",{className:"modal fade",id:"exampleModal2",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(C.jsx)("div",{className:"modal-dialog",role:"document",children:Object(C.jsxs)("div",{className:"modal-content",children:[Object(C.jsxs)("div",{className:"modal-header brdr",children:[Object(C.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Deposite YFETH/ETH LP Token"}),Object(C.jsx)("button",{type:"button",className:"common-g close","data-dismiss":"modal","aria-label":"Close",children:Object(C.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(C.jsxs)("div",{className:"modal-body",children:[Object(C.jsx)("div",{className:"row ptb20",children:Object(C.jsxs)("div",{className:"col-sm-12 text-right",children:[Object(C.jsx)("h5",{children:"371.866585213518513 YFETH/ETH LP Available"}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("input",{type:"number",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:0}),Object(C.jsx)("div",{className:"inner-max",children:Object(C.jsxs)("ul",{className:"list-inline",children:[Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)("span",{className:"size12",children:"YFETH/ETH LP"})}),Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)("button",{className:"btn-common size12",children:"MAX"})})]})})]})]})}),Object(C.jsx)("div",{className:"row ptb20",children:Object(C.jsx)("div",{className:"col-sm-12 text-center",children:Object(C.jsxs)("ul",{className:"list-inline",children:[Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)("button",{className:"btn-common",children:"Cancel"})}),Object(C.jsx)("li",{className:"list-inline-item",children:Object(C.jsx)("button",{className:"btn-common",children:"Confirm"})})]})})})]})]})})})]})]})})]}),Object(C.jsx)("div",{className:"row",children:Object(C.jsxs)("div",{className:"col-sm-12 text-center",children:[Object(C.jsx)(v.b,{className:"common-g",type:"button","data-toggle":"modal","data-target":"#exampleModal",children:"ROI"}),Object(C.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(C.jsx)("div",{className:"modal-dialog",role:"document",children:Object(C.jsxs)("div",{className:"modal-content",children:[Object(C.jsxs)("div",{className:"modal-header brdr",children:[Object(C.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"ROI"}),Object(C.jsx)("button",{type:"button",className:"close common-g","data-dismiss":"modal","aria-label":"Close",children:Object(C.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(C.jsxs)("div",{className:"modal-body ptb20 text-left",children:[Object(C.jsxs)("div",{className:"row",children:[Object(C.jsxs)("div",{className:"col-sm-4",children:[Object(C.jsx)("h5",{children:"TIMEFRAME"}),Object(C.jsx)("h6",{className:"grey",children:"1d"})]}),Object(C.jsxs)("div",{className:"col-sm-4",children:[Object(C.jsx)("h5",{children:"ROI"}),Object(C.jsx)("h6",{className:"grey",children:"0.15%"})]}),Object(C.jsxs)("div",{className:"col-sm-4",children:[Object(C.jsx)("h5",{children:"YFETH PER $1,000"}),Object(C.jsx)("h6",{className:"grey",children:"0.11"})]})]}),Object(C.jsx)("div",{className:"row ptb20",children:Object(C.jsxs)("div",{className:"col-sm-12 text-center",children:[Object(C.jsx)("p",{className:"grey",children:"Calculated based on current rates. Compounding 1x daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns."}),Object(C.jsxs)(v.b,{className:"common-g",children:[" ",Object(C.jsx)("span",{children:" Get YFETH-ETH LP"})," ",Object(C.jsx)("img",{src:"assets/img/yfeth-assets/external-link-icon.svg",alt:"",className:"img-fluid"})," "]})]})})]})]})})})]})})]})})})})})}),L=function(){return Object(C.jsx)("div",{children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-sm-6 p_remove",children:Object(C.jsx)(_,{})}),Object(C.jsx)("div",{className:"col-sm-6 p_00",children:Object(C.jsx)(_,{})}),Object(C.jsx)("div",{className:"col-sm-6 p_remove",children:Object(C.jsx)(_,{})}),Object(C.jsx)("div",{className:"col-sm-6 p_00",children:Object(C.jsx)(_,{})})]})})},H=s(17),P=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(v.a,{children:Object(C.jsx)("div",{className:"container-fluid",children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-sm-4 text-center",children:Object(C.jsx)(A,{})}),Object(C.jsxs)("div",{className:"col-sm-8",children:[Object(C.jsx)(F,{}),Object(C.jsxs)(H.c,{children:[Object(C.jsx)(H.a,{path:"/",exact:!0,component:R}),Object(C.jsx)(H.a,{path:"/transfer",component:S}),Object(C.jsx)(H.a,{path:"/farms",exact:!0,component:L})]})]})]})})})})},Y=s(80),I=s(302),D=s(96),q={},U=Object(Y.b)({UserReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,s=t.type,n=t.payload;switch(s){case"BALANCE":return Object(D.a)(Object(D.a)({},e),{},{balance:n});case"USER_REWARD":return Object(D.a)(Object(D.a)({},e),{},{reward:n});default:return e}}}),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.c,V=Object(Y.d)(U,z(Object(Y.a)(I.a)));var W=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(f.a,{store:V,children:Object(C.jsx)(P,{})})})},$=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,747)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),i(e),c(e)}))};c.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(W,{})}),document.getElementById("root")),$()}},[[743,1,2]]]);
//# sourceMappingURL=main.b302a8ad.chunk.js.map
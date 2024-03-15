import{r as t,c as i,g as s}from"./p-d5b54d3b.js";const h=class{constructor(s){t(this,s),this.viewPortItemsChanged=i(this,"viewPortItemsChanged",7),this.rowHeight=0,this.browserHeight=document.documentElement.clientHeight,this.hasGridScroll=!1,this.hasWindowScroll=!1,this.maxViewPortItems=1,this.resizeObserver=new ResizeObserver(this.resizeHandler.bind(this))}componentWillLoad(){this.gridMainEl=this.el.assignedSlot.parentElement,this.resizeObserver.observe(this.gridMainEl),this.resizeObserver.observe(document.documentElement)}componentDidLoad(){this.updateViewPortItems()}disconnectedCallback(){this.resizeObserver.disconnect()}itemsHandler(){this.gridMainEl&&this.updateViewPortItems()}rowHeightHandler(){this.gridMainEl&&this.updateViewPortItems()}maxViewPortItemsHandler(){this.gridMainEl&&this.updateViewPortItems()}hasScrollHandler(){this.hasGridScroll?this.gridMainEl.addEventListener("scroll",this.updateViewPortItems.bind(this),{passive:!0}):this.gridMainEl.removeEventListener("scroll",this.updateViewPortItems.bind(this)),this.updateViewPortItems()}hasWindowScrollHandler(){this.hasWindowScroll?document.addEventListener("scroll",this.updateViewPortItems.bind(this),{passive:!0}):document.removeEventListener("scroll",this.updateViewPortItems.bind(this)),this.updateViewPortItems()}resizeHandler(){const t=getComputedStyle(this.gridMainEl).gridTemplateRows.split(" ");this.browserHeight=document.documentElement.clientHeight,this.rowHeight=t.length>=4?parseInt(t[2]):0,this.rowHeight>0&&(this.hasGridScroll=this.gridMainEl.scrollHeight!=this.gridMainEl.clientHeight,this.hasWindowScroll=!this.hasGridScroll&&this.gridMainEl.clientHeight>this.browserHeight,this.maxViewPortItems=Math.ceil(this.browserHeight/this.rowHeight))}updateViewPortItems(t){const i=this.getPercentScroll();let s;s=i<=50?Math.floor(i*Math.max(this.items.length-this.maxViewPortItems,0)/100):Math.ceil(i*Math.max(this.items.length-this.maxViewPortItems,0)/100),this.el.style.paddingTop=s*this.rowHeight+"px",this.el.style.paddingBottom=(this.items.length-(s+Math.min(this.items.length,this.maxViewPortItems)))*this.rowHeight+"px",this.viewPortItems=this.items.slice(s,s+this.maxViewPortItems),this.viewPortItemsChanged.emit(),t&&(clearTimeout(this.timer),this.timer=setTimeout(this.updateViewPortItems.bind(this),100))}getPercentScroll(){let t=0,i=0;if(this.hasGridScroll)t=this.gridMainEl.scrollHeight-this.gridMainEl.clientHeight,i=this.gridMainEl.scrollTop;else if(this.hasWindowScroll){const s=this.gridMainEl.getBoundingClientRect();t=this.gridMainEl.clientHeight-this.browserHeight,i=Math.min(s.top>=0?0:-1*s.top,t)}return t>0?100*i/t:0}get el(){return s(this)}static get watchers(){return{items:["itemsHandler"],rowHeight:["rowHeightHandler"],maxViewPortItems:["maxViewPortItemsHandler"],hasGridScroll:["hasScrollHandler"],hasWindowScroll:["hasWindowScrollHandler"]}}};h.style='@layer ch-grid {\n  ch-grid-virtual-scroller {\n    display: contents;\n  }\n\n  ch-grid-virtual-scroller::before {\n    content: "";\n    height: 0;\n    padding-top: inherit;\n    grid-column: 1/-1;\n    grid-row: 2;\n  }\n\n  ch-grid-virtual-scroller::after {\n    content: "";\n    height: 0;\n    padding-bottom: inherit;\n    grid-column: 1/-1;\n  }\n}';export{h as ch_grid_virtual_scroller}
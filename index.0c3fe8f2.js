function e(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function t(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}var n=function(){function t(s,n,l,a){e(this,t),this.$el=s,this.x=l,this.y=a,this.cellClass=n,this.value=null,this.mergeValue=null}return s(t,[{key:"setValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.value=e,this.mergeValue=t,this.$el.innerText=this.value,this.$el.className=this.cellClass,null!==this.value&&this.$el.classList.add("".concat(this.cellClass,"--").concat(this.value))}},{key:"canMerge",value:function(e){return!this.value||!this.mergeValue&&this.value===e.value}}]),t}();new(function(){function t(){e(this,t),this.messageClass="message",this.messageHiddenClass="hidden",this.cellClass="field-cell",this.state="start",this.cells=[],this.$score=document.querySelector(".game-score"),this.$toggleBtn=document.querySelector(".button"),this.$messages=document.querySelectorAll(".".concat(this.messageClass)),this.$rows=document.querySelectorAll(".field-row")}return s(t,[{key:"init",value:function(){this.initCells(),this.initEvents()}},{key:"initCells",value:function(){var e=this;this.$rows.forEach(function(t,s){t.querySelectorAll(".".concat(e.cellClass)).forEach(function(t,l){e.cells.push(new n(t,e.cellClass,l,s))})})}},{key:"initEvents",value:function(){var e=this;this.$toggleBtn.addEventListener("click",function(t){t.preventDefault(),e.restart()}),document.addEventListener("keydown",this.handleKeyInput.bind(this))}},{key:"groupCellsByColumn",value:function(){return this.cells.reduce(function(e,t){return e[t.x]=e[t.x]||[],e[t.x][t.y]=t,e},[])}},{key:"groupCellsByRow",value:function(){return this.cells.reduce(function(e,t){return e[t.y]=e[t.y]||[],e[t.y][t.x]=t,e},[])}},{key:"getRandomEmptyCell",value:function(){var e=this.cells.filter(function(e){return!e.value}),t=Math.floor(Math.random()*e.length);return e[t]}},{key:"changeState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this;this.state=e,this.$messages.forEach(function(e){e.classList.contains("".concat(t.messageClass,"-").concat(t.state))?e.classList.remove(t.messageHiddenClass):e.classList.add(t.messageHiddenClass)}),"start"!==this.state&&(this.$toggleBtn.classList.remove("start"),this.$toggleBtn.classList.add("restart"),this.$toggleBtn.innerText="Restart")}},{key:"changeScore",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Number(this.$score.innerText);this.$score.innerText=e?t+e:0}},{key:"clearGrid",value:function(){this.cells.forEach(function(e){return e.setValue(null)}),this.changeScore()}},{key:"canMoveGroup",value:function(e){return e.some(function(e){return e.some(function(t,s){return 0!==s&&!!t.value&&e[s-1].canMerge(t)})})}},{key:"canMove",value:function(){return[this.groupCellsByColumn(),this.groupCellsByColumn().map(function(e){return e.reverse()}),this.groupCellsByRow(),this.groupCellsByRow().map(function(e){return e.reverse()})].some(this.canMoveGroup)}},{key:"mergeCells",value:function(){var e=this;this.cells.forEach(function(t){if(t.mergeValue){var s=t.value+t.mergeValue;t.setValue(s),t.mergeValue=null,e.changeScore(s),s>=2048&&e.changeState("win")}})}},{key:"moveCells",value:function(e){if("start"===this.state)return this.restart();!["win","lose"].includes(this.state)&&this.canMoveGroup(e)&&(e.forEach(function(e){for(var t=1;t<e.length;t++)if(e[t].value){for(var s=e[t],n=void 0,l=t-1;l>=0&&e[l].canMerge(s);)n=e[l],l--;n&&(n.setValue(s.value,n.value),s.setValue(null))}}),this.mergeCells(),this.getRandomEmptyCell().setValue(Math.random()>.5?2:4),this.canMove()||this.changeState("lose"))}},{key:"handleKeyInput",value:function(e){switch(e.key){case"ArrowUp":this.moveCells(this.groupCellsByColumn());break;case"ArrowDown":this.moveCells(this.groupCellsByColumn().map(function(e){return e.reverse()}));break;case"ArrowLeft":this.moveCells(this.groupCellsByRow());break;case"ArrowRight":this.moveCells(this.groupCellsByRow().map(function(e){return e.reverse()}))}}},{key:"restart",value:function(){this.clearGrid(),this.changeState(),this.getRandomEmptyCell().setValue(Math.random()>.5?2:4),this.getRandomEmptyCell().setValue(Math.random()>.5?2:4)}}]),t}())().init();
//# sourceMappingURL=index.0c3fe8f2.js.map
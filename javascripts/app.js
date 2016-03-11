(function(){var t,i;t=function(){function t(){}return t.prototype.go=function(t,i){return t=$(t),$("html, body").animate({scrollTop:t.offset().top},{duration:Math.sqrt(100*Math.abs(i.offset().top-t.offset().top)),queue:!1})},t}(),i=new t,$("[data-scrollto]").on("click",function(t){return t.preventDefault(),i.go($(this).data("scrollto"),$(this))})}).call(this),function(){var t;new(t=function(){function t(t,i,e,n){this.el=t,null==i&&(i="*"),this.min=null!=e?e:0,this.max=null!=n?n:1/0,this.speed=this.el.data("resize-speed")||0,this.tallest=0,this.columns=this.el.children(i),$(window).on("resize.columns",function(t){return function(){var i;return t.min<(i=$(window).width())&&i<t.max?t.calc():t.reset()}}(this))}return t.prototype.calc=function(){var t;return this.last=this.tallest,this.reset(),t=0,$.each(this.columns,function(i){return function(e,n){return t=$(n).outerHeight(),t>i.tallest?i.tallest=t:void 0}}(this)),this.set()},t.prototype.reset=function(){return this.tallest=0,this.columns.css("height","")},t.prototype.set=function(){return this.columns.css("height",this.last),this.columns.animate({height:this.tallest},{duration:this.speed,queue:!1})},t}())($(".action article"),"*",1024)}.call(this),function(){var t,i;i=function(){function i(t){this.context=t,this.canvas={width:1.5*this.context.outerWidth(),height:1.5*this.context.outerHeight()},this.container=$("<div/>").addClass("wrapper").width(this.canvas.width).height(this.canvas.height),this.context.append(this.container),this.cell={width:32,height:32},this.columns=Math.floor(this.canvas.width/this.cell.width),this.rows=Math.floor(this.canvas.height/this.cell.height),this.cells=[],this.spawn_tiles(this.columns*this.rows),this.reveal()}return i.prototype.spawn_tiles=function(i){var e,n,s,o,r,h,l,u;for(s=n=0,h=i;h>=0?h>=n:n>=h;s=h>=0?++n:--n)e=$("<div/>").addClass("cell").addClass(Math.random()>.5?"one":"zero").data("cell-id",s),this.cells.push(new t(e));for(l=this.cells,u=[],o=0,r=l.length;r>o;o++)e=l[o],u.push(this.container.append(e.el));return u},i.prototype.reveal=function(){return this.show_random(!0)},i.prototype.show_random=function(t){var i,e,n;return e=function(){var t,e,s,o;for(s=this.cells,o=[],n=t=0,e=s.length;e>t;n=++t)i=s[n],i.visible||o.push(n);return o}.call(this),e.length?(this.show(e[Math.floor(Math.random()*e.length)]),window.setTimeout(function(i){return function(){return i.show_random(t)}}(this),50)):void 0},i.prototype.show=function(t){return this.cells[t].show()},i}(),t=function(){function t(t){this.el=t,this.visible=!1,this.el.on("mouseenter touchmove",function(t){return function(){return t.show()}}(this))}return t.prototype.show=function(){return this.visible=!0,this.el.addClass("visible")},t.prototype.hide=function(){return this.visible=!1,this.el.removeClass("visible")},t}(),new i($("aside.visualizer"))}.call(this),function(){var t;t=function(){function t(t){this.el=t,this.target=$(this.el.data("scrollto")),$(window).on("resize.Waypoint",function(t){return function(i){return t.measure()}}(this)),$(window).on("scroll.Waypoint",function(t){return function(i){return t.poll()}}(this))}return t.prototype.measure=function(){return this.offset={top:this.target.offset().top,bottom:this.target.offset().top+this.target.outerHeight()}},t.prototype.poll=function(){return this.in_view()?this.el.addClass("in-view"):this.el.removeClass("in-view")},t.prototype.in_view=function(){var t;return this.offset.top<(t=$(window).scrollTop()+$(window).height()/2)&&t<this.offset.bottom},t}(),$("[data-scrollto]").each(function(i,e){return new t($(e))})}.call(this),function(){$(window).trigger("resize")}.call(this);
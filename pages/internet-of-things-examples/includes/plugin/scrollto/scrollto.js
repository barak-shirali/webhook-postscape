/**
 * jQuery Scroll To Plugin
 * Copyright © 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(!e)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 2.1
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */
(function(a,b,c,d){var e=function(d,e){this.elem=d;this.$elem=a(d);this.options=e;this.metadata=this.$elem.data("plugin-options");this.$nav=this.$elem.find("a");this.$win=a(b);this.sections={};this.didScroll=false;this.$doc=a(c);this.docHeight=this.$doc.height()};e.prototype={defaults:{currentClass:"current",changeHash:false,easing:"swing",filter:"",scrollSpeed:750,scrollOffset:0,scrollThreshold:.5,begin:false,end:false,scrollChange:false},init:function(){var b=this;b.config=a.extend({},b.defaults,b.options,b.metadata);if(b.config.filter!==""){b.$nav=b.$nav.filter(b.config.filter)}b.$nav.on("click.onePageNav",a.proxy(b.handleClick,b));b.getPositions();b.bindInterval();b.$win.on("resize.onePageNav",a.proxy(b.getPositions,b));return this},adjustNav:function(a,b){a.$elem.find("."+a.config.currentClass).removeClass(a.config.currentClass);b.addClass(a.config.currentClass)},bindInterval:function(){var a=this;var b;a.$win.on("scroll.onePageNav",function(){a.didScroll=true});a.t=setInterval(function(){b=a.$doc.height();if(a.didScroll){a.didScroll=false;a.scrollChange()}if(b!==a.docHeight){a.docHeight=b;a.getPositions()}},250)},getHash:function(a){return a.attr("href").split("#")[1]},getPositions:function(){var b=this;var c;var d;b.$nav.each(function(){c=b.getHash(a(this));d=a("#"+c).offset().top;b.sections[c]=Math.round(d)-b.config.scrollOffset})},getSection:function(a){var b=null;var c=Math.round(this.$win.height()*this.config.scrollThreshold);for(var d in this.sections){if(this.sections[d]-c<a){b=d}}return b},handleClick:function(c){var d=this;var e=a(c.currentTarget);var f=e.parent();var g="#"+d.getHash(e);if(!f.hasClass(d.config.currentClass)){if(d.config.begin){d.config.begin()}d.adjustNav(d,f);d.unbindInterval();a.scrollTo(g,d.config.scrollSpeed,{axis:"y",easing:d.config.easing,offset:{top:-d.config.scrollOffset},onAfter:function(){if(d.config.changeHash){b.location.hash=g}d.bindInterval();if(d.config.end){d.config.end()}}})}c.preventDefault()},scrollChange:function(){var a=this.$win.scrollTop();var b=this.getSection(a);var c;if(b!==null){c=this.$elem.find('a[href$="#'+b+'"]').parent();if(!c.hasClass(this.config.currentClass)){this.adjustNav(this,c);if(this.config.scrollChange){this.config.scrollChange(c)}}}},unbindInterval:function(){clearInterval(this.t);this.$win.unbind("scroll.onePageNav")}};e.defaults=e.prototype.defaults;a.fn.onePageNav=function(a){return this.each(function(){(new e(this,a)).init()})}})(jQuery,window,document)
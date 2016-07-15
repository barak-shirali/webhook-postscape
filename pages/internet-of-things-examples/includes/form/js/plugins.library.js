/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Copyright © 2008 George McGinley Smith
 * Open source under the BSD License.  
*/
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});

/* 
 * Tipsy - Facebook Style Tooltips For jQuery
 * version 1.0.0a
 * Copyright © 2008-2010 jason frame [jason@onehackoranother.com]
 * releated under the MIT license
*/
(function(a){function b(a){if(a.attr("title")||typeof a.attr("original-title")!="string"){a.attr("original-title",a.attr("title")||"").removeAttr("title")}}function c(c,d){this.$element=a(c);this.options=d;this.enabled=true;b(this.$element)}c.prototype={show:function(){var b=this.getTitle();if(b&&this.enabled){var c=this.tip();c.find(".tipsy-inner")[this.options.html?"html":"text"](b);c[0].className="tipsy";c.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).appendTo(document.body);var d=a.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});var e=c[0].offsetWidth,f=c[0].offsetHeight;var g=typeof this.options.gravity=="function"?this.options.gravity.call(this.$element[0]):this.options.gravity;var h;switch(g.charAt(0)){case"n":h={top:d.top+d.height+this.options.offset,left:d.left+d.width/2-e/2};break;case"s":h={top:d.top-f-this.options.offset,left:d.left+d.width/2-e/2};break;case"e":h={top:d.top+d.height/2-f/2,left:d.left-e-this.options.offset};break;case"w":h={top:d.top+d.height/2-f/2,left:d.left+d.width+this.options.offset};break}if(g.length==2){if(g.charAt(1)=="w"){h.left=d.left+d.width/2-15}else{h.left=d.left+d.width/2-e+15}}c.css(h).addClass("tipsy-"+g);if(this.options.fade){c.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity})}else{c.css({visibility:"visible",opacity:this.options.opacity})}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){a(this).remove()})}else{this.tip().remove()}},getTitle:function(){var a,c=this.$element,d=this.options;b(c);var a,d=this.options;if(typeof d.title=="string"){a=c.attr(d.title=="title"?"original-title":d.title)}else if(typeof d.title=="function"){a=d.title.call(c[0])}a=(""+a).replace(/(^\s*|\s*$)/,"");return a||d.fallback},tip:function(){if(!this.$tip){this.$tip=a('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>')}return this.$tip},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};a.fn.tipsy=function(b){function d(d){var e=a.data(d,"tipsy");if(!e){e=new c(d,a.fn.tipsy.elementOptions(d,b));a.data(d,"tipsy",e)}return e}function e(){var a=d(this);a.hoverState="in";if(b.delayIn==0){a.show()}else{setTimeout(function(){if(a.hoverState=="in")a.show()},b.delayIn)}}function f(){var a=d(this);a.hoverState="out";if(b.delayOut==0){a.hide()}else{setTimeout(function(){if(a.hoverState=="out")a.hide()},b.delayOut)}}if(b===true){return this.data("tipsy")}else if(typeof b=="string"){return this.data("tipsy")[b]()}b=a.extend({},a.fn.tipsy.defaults,b);if(!b.live)this.each(function(){d(this)});if(b.trigger!="manual"){var g=b.live?"live":"bind",h=b.trigger=="hover"?"mouseenter":"focus",i=b.trigger=="hover"?"mouseleave":"blur";this[g](h,e)[g](i,f)}return this};a.fn.tipsy.defaults={delayIn:0,delayOut:0,fade:false,fallback:"",gravity:"n",html:false,live:false,offset:0,opacity:.8,title:"title",trigger:"hover"};a.fn.tipsy.elementOptions=function(b,c){return a.metadata?a.extend({},c,a(b).metadata()):c};a.fn.tipsy.autoNS=function(){return a(this).offset().top>a(document).scrollTop()+a(window).height()/2?"s":"n"};a.fn.tipsy.autoWE=function(){return a(this).offset().left>a(document).scrollLeft()+a(window).width()/2?"e":"w"}})(jQuery);

/*
 * Equal Heights Plugin
 * Version 1.0
 * Copyright (c) 2008 Rob Glazebrook (cssnewbie.com) 
 * Open source MIT License. 
*/
(function(a){a.fn.equalHeights=function(b,c){tallest=b?b:0;this.each(function(){if(a(this).height()>tallest){tallest=a(this).height()}});if(c&&tallest>c)tallest=c;return this.each(function(){a(this).height(tallest).css("overflow","auto")})}})(jQuery);

/*
 * jQuery Google Maps Plugin v1.01
 * Home: http://www.mayzes.org/googlemaps.jquery.html
 * Code: http://www.mayzes.org/js/jquery.googlemaps1.01.js
 * Dual licensed under the MIT and GPL licenses.
*/
jQuery.fn.googleMaps=function(a){if(!window.GBrowserIsCompatible||!GBrowserIsCompatible()){return this}var b=$.extend({},$.googleMaps.defaults,a);return this.each(function(){$.googleMaps.gMap=new GMap2(this,b);$.googleMaps.mapsConfiguration(b)})};$.googleMaps={mapsConfiguration:function(a){if(a.geocode){geocoder=new GClientGeocoder;geocoder.getLatLng(a.geocode,function(b){if(!b){alert(address+" not found")}else{$.googleMaps.gMap.setCenter(b,a.depth);$.googleMaps.latitude=b.x;$.googleMaps.longitude=b.y}})}else{var b=$.googleMaps.mapLatLong(a.latitude,a.longitude);$.googleMaps.gMap.setCenter(b,a.depth)}if(a.polyline)$.googleMaps.gMap.addOverlay($.googleMaps.mapPolyLine(a.polyline));if(a.geodesic){$.googleMaps.mapGeoDesic(a.geodesic)}if(a.pan){a.pan=$.googleMaps.mapPanOptions(a.pan);window.setTimeout(function(){$.googleMaps.gMap.panTo($.googleMaps.mapLatLong(a.pan.panLatitude,a.pan.panLongitude))},a.pan.timeout)}if(a.layer)$.googleMaps.gMap.addOverlay(new GLayer(a.layer));if(a.markers)$.googleMaps.mapMarkers(b,a.markers);if(a.controls.type||a.controls.zoom||a.controls.mapType){$.googleMaps.mapControls(a.controls)}else{if(!a.controls.hide)$.googleMaps.gMap.setUIToDefault()}if(a.scroll)$.googleMaps.gMap.enableScrollWheelZoom();else if(!a.scroll)$.googleMaps.gMap.disableScrollWheelZoom();if(a.controls.localSearch)$.googleMaps.gMap.enableGoogleBar();else $.googleMaps.gMap.disableGoogleBar();if(a.feed)$.googleMaps.gMap.addOverlay(new GGeoXml(a.feed));if(a.trafficInfo){var c={incidents:true};trafficInfo=new GTrafficOverlay(c);$.googleMaps.gMap.addOverlay(trafficInfo)}if(a.directions){$.googleMaps.directions=new GDirections($.googleMaps.gMap,a.directions.panel);$.googleMaps.directions.load(a.directions.route)}if(a.streetViewOverlay){svOverlay=new GStreetviewOverlay;$.googleMaps.gMap.addOverlay(svOverlay)}},mapGeoDesic:function(a){geoDesicDefaults={startLatitude:37.4419,startLongitude:-122.1419,endLatitude:37.4519,endLongitude:-122.1519,color:"#ff0000",pixels:2,opacity:10};a=$.extend({},geoDesicDefaults,a);var b={geodesic:true};var c=new GPolyline([new GLatLng(a.startLatitude,a.startLongitude),new GLatLng(a.endLatitude,a.endLongitude)],a.color,a.pixels,a.opacity,b);$.googleMaps.gMap.addOverlay(c)},localSearchControl:function(a){var b=$.googleMaps.mapControlsLocation(a.location);$.googleMaps.gMap.addControl(new $.googleMaps.gMap.LocalSearch,new GControlPosition(b,new GSize(a.x,a.y)))},getLatitude:function(){return $.googleMaps.latitude},getLongitude:function(){return $.googleMaps.longitude},directions:{},latitude:"",longitude:"",latlong:{},maps:{},marker:{},gMap:{},defaults:{latitude:37.4419,longitude:-122.1419,depth:13,scroll:true,trafficInfo:false,streetViewOverlay:false,controls:{hide:false,localSearch:false},layer:null},mapPolyLine:function(a){polylineDefaults={startLatitude:37.4419,startLongitude:-122.1419,endLatitude:37.4519,endLongitude:-122.1519,color:"#ff0000",pixels:2};a=$.extend({},polylineDefaults,a);return new GPolyline([$.googleMaps.mapLatLong(a.startLatitude,a.startLongitude),$.googleMaps.mapLatLong(a.endLatitude,a.endLongitude)],a.color,a.pixels)},mapLatLong:function(a,b){return new GLatLng(a,b)},mapPanOptions:function(a){var b={panLatitude:37.4569,panLongitude:-122.1569,timeout:0};return a=$.extend({},b,a)},mapMarkersOptions:function(a){var b=new GIcon(G_DEFAULT_ICON);if(a.image)b.image=a.image;if(a.shadow)b.shadow=a.shadow;if(a.iconSize)b.iconSize=new GSize(a.iconSize);if(a.shadowSize)b.shadowSize=new GSize(a.shadowSize);if(a.iconAnchor)b.iconAnchor=new GPoint(a.iconAnchor);if(a.infoWindowAnchor)b.infoWindowAnchor=new GPoint(a.infoWindowAnchor);if(a.dragCrossImage)b.dragCrossImage=a.dragCrossImage;if(a.dragCrossSize)b.dragCrossSize=new GSize(a.dragCrossSize);if(a.dragCrossAnchor)b.dragCrossAnchor=new GPoint(a.dragCrossAnchor);if(a.maxHeight)b.maxHeight=a.maxHeight;if(a.PrintImage)b.PrintImage=a.PrintImage;if(a.mozPrintImage)b.mozPrintImage=a.mozPrintImage;if(a.PrintShadow)b.PrintShadow=a.PrintShadow;if(a.transparent)b.transparent=a.transparent;return b},mapMarkers:function(a,b){if(typeof b.length=="undefined")b=[b];var c=0;for(i=0;i<b.length;i++){var d=null;if(b[i].icon){d=$.googleMaps.mapMarkersOptions(b[i].icon)}if(b[i].geocode){var e=new GClientGeocoder;e.getLatLng(b[i].geocode,function(a){if(!a)alert(address+" not found");else $.googleMaps.marker[i]=new GMarker(a,{draggable:b[i].draggable,icon:d})})}else if(b[i].latitude&&b[i].longitude){a=$.googleMaps.mapLatLong(b[i].latitude,b[i].longitude);$.googleMaps.marker[i]=new GMarker(a,{draggable:b[i].draggable,icon:d})}$.googleMaps.gMap.addOverlay($.googleMaps.marker[i]);if(b[i].info){$(b[i].info.layer).hide();if(b[i].info.popup)$.googleMaps.marker[i].openInfoWindowHtml($(b[i].info.layer).html());else $.googleMaps.marker[i].bindInfoWindowHtml($(b[i].info.layer).html().toString())}}},mapControlsLocation:function(a){switch(a){case"G_ANCHOR_TOP_RIGHT":return G_ANCHOR_TOP_RIGHT;break;case"G_ANCHOR_BOTTOM_RIGHT":return G_ANCHOR_BOTTOM_RIGHT;break;case"G_ANCHOR_TOP_LEFT":return G_ANCHOR_TOP_LEFT;break;case"G_ANCHOR_BOTTOM_LEFT":return G_ANCHOR_BOTTOM_LEFT;break}return},mapControl:function(a){switch(a){case"GLargeMapControl3D":return new GLargeMapControl3D;break;case"GLargeMapControl":return new GLargeMapControl;break;case"GSmallMapControl":return new GSmallMapControl;break;case"GSmallZoomControl3D":return new GSmallZoomControl3D;break;case"GSmallZoomControl":return new GSmallZoomControl;break;case"GScaleControl":return new GScaleControl;break;case"GMapTypeControl":return new GMapTypeControl;break;case"GHierarchicalMapTypeControl":return new GHierarchicalMapTypeControl;break;case"GOverviewMapControl":return new GOverviewMapControl;break;case"GNavLabelControl":return new GNavLabelControl;break}return},mapTypeControl:function(a){switch(a){case"G_NORMAL_MAP":return G_NORMAL_MAP;break;case"G_SATELLITE_MAP":return G_SATELLITE_MAP;break;case"G_HYBRID_MAP":return G_HYBRID_MAP;break}return},mapControls:function(a){controlsDefaults={type:{location:"G_ANCHOR_TOP_RIGHT",x:10,y:10,control:"GMapTypeControl"},zoom:{location:"G_ANCHOR_TOP_LEFT",x:10,y:10,control:"GLargeMapControl3D"}};a=$.extend({},controlsDefaults,a);a.type=$.extend({},controlsDefaults.type,a.type);a.zoom=$.extend({},controlsDefaults.zoom,a.zoom);if(a.type){var b=$.googleMaps.mapControlsLocation(a.type.location);var c=new GControlPosition(b,new GSize(a.type.x,a.type.y));$.googleMaps.gMap.addControl($.googleMaps.mapControl(a.type.control),c)}if(a.zoom){var b=$.googleMaps.mapControlsLocation(a.zoom.location);var c=new GControlPosition(b,new GSize(a.zoom.x,a.zoom.y));$.googleMaps.gMap.addControl($.googleMaps.mapControl(a.zoom.control),c)}if(a.mapType){if(a.mapType.length>=1){for(i=0;i<a.mapType.length;i++){if(a.mapType[i].remove)$.googleMaps.gMap.removeMapType($.googleMaps.mapTypeControl(a.mapType[i].remove));if(a.mapType[i].add)$.googleMaps.gMap.addMapType($.googleMaps.mapTypeControl(a.mapType[i].add))}}else{if(a.mapType.add)$.googleMaps.gMap.addMapType($.googleMaps.mapTypeControl(a.mapType.add));if(a.mapType.remove)$.googleMaps.gMap.removeMapType($.googleMaps.mapTypeControl(a.mapType.remove))}}},geoCode:function(a){geocoder=new GClientGeocoder;geocoder.getLatLng(a.address,function(b){if(!b)alert(address+" not found");else $.googleMaps.gMap.setCenter(b,a.depth)})}};

/*
* FitVids 1.0
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*/
(function(a){a.fn.fitVids=function(b){var c={customSelector:null};var d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];d.className="fit-vids-style";d.innerHTML="­<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";e.parentNode.insertBefore(d,e);if(b){a.extend(c,b)}return this.each(function(){var b=["iframe[src^='http://player.vimeo.com']","iframe[src^='http://www.youtube.com']","iframe[src^='http://www.kickstarter.com']","object","embed"];if(c.customSelector){b.push(c.customSelector)}var d=a(this).find(b.join(","));d.each(function(){var b=a(this);if(this.tagName.toLowerCase()=="embed"&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length){return}var c=this.tagName.toLowerCase()=="object"?b.attr("height"):b.height(),d=c/b.width();if(!b.attr("id")){var e="fitvid"+Math.floor(Math.random()*999999);b.attr("id",e)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",d*100+"%");b.removeAttr("height").removeAttr("width")})})}})(jQuery);

/*
* jQuery Innerfade
* Copyright 2011, Torsten Baldes
* Open source MIT License. 
*/
function removeFilter(a){if(a.style.removeAttribute){a.style.removeAttribute("filter")}}(function(a){a.fn.innerfade=function(b){return this.each(function(){a.innerfade(this,b)})};a.innerfade=function(b,c){var d={animationtype:"fade",speed:"normal",type:"sequence",timeout:2e3,containerheight:"auto",runningclass:"innerfade",children:null};if(c)a.extend(d,c);if(d.children===null)var e=a(b).children();else var e=a(b).children(d.children);if(e.length>1){a(b).css("position","relative").addClass(d.runningclass);for(var f=0;f<e.length;f++){a(e[f]).css("z-index",String(e.length-f)).css("position","absolute").hide()}if(d.type=="sequence"){a(b).css("height",a(e[0]).height());setTimeout(function(){a.innerfade.next(e,d,1,0,b)},d.timeout);a(e[0]).show()}else if(d.type=="random"){var g=Math.floor(Math.random()*e.length);a(b).height(a(e[g]).height());setTimeout(function(){do{h=Math.floor(Math.random()*e.length)}while(g==h);a.innerfade.next(e,d,h,g,b)},d.timeout);a(e[g]).show()}else if(d.type=="random_start"){d.type="sequence";var h=Math.floor(Math.random()*e.length);a(b).height(a(e[h]).height());setTimeout(function(){a.innerfade.next(e,d,(h+1)%e.length,h,b)},d.timeout);a(e[h]).show()}else{alert("Innerfade-Type must either be 'sequence', 'random' or 'random_start'")}}};a.innerfade.next=function(b,c,d,e,f){if(c.animationtype=="slide"){a(f).animate({height:a(b[d]).height()});a(b[e]).slideUp(c.speed);a(b[d]).slideDown(c.speed)}else if(c.animationtype=="fade"){a(b[e]).fadeOut(c.speed);a(b[d]).fadeIn(c.speed,function(){removeFilter(a(this)[0])});a(f).animate({height:a(b[d]).height()})}else alert("Innerfade-animationtype must either be 'slide' or 'fade'");if(c.type=="sequence"){if(d+1<b.length){d=d+1;e=d-1}else{d=0;e=b.length-1}}else if(c.type=="random"){e=d;while(d==e)d=Math.floor(Math.random()*b.length)}else alert("Innerfade-Type must either be 'sequence', 'random' or 'random_start'");setTimeout(function(){a.innerfade.next(b,c,d,e,f)},c.timeout)}})(jQuery);

/**
 * jQuery Plugin - Jribbble v0.11.0
 * Copyright (c) 2011 Tyler Gaw
 * Open source MIT License. 
*/
(function(a){"use strict",a.fn.jribbble=function(){this.makeRequest=function(b,c,d){var e=function(b){a.isFunction(c)&&c(b)},f=b.replace("//","/");a.ajax({data:d,dataType:"jsonp",success:e,type:"GET",url:a.jribbble.baseUrl+f})};return this},a.jribbble={},a.jribbble.baseUrl="http://api.dribbble.com",a.jribbble.paths={shots:"/shots/",rebounds:"/rebounds/",following:"/following/",players:"/players/",followers:"/followers/",draftees:"/draftees/",comments:"/comments/"},a.jribbble.getShotById=function(b,c){var d=a.jribbble.paths.shots+b;a.fn.jribbble().makeRequest(d,c)},a.jribbble.getReboundsOfShot=function(b,c,d){var e=a.jribbble.paths.shots+b+a.jribbble.paths.rebounds;a.fn.jribbble().makeRequest(e,c,d)},a.jribbble.getShotsByList=function(b,c,d){var e=a.jribbble.paths.shots+b;a.fn.jribbble().makeRequest(e,c,d)},a.jribbble.getShotsByPlayerId=function(b,c,d){var e=a.jribbble.paths.players+b+a.jribbble.paths.shots;a.fn.jribbble().makeRequest(e,c,d)},a.jribbble.getShotsThatPlayerFollows=function(b,c,d){var e=a.jribbble.paths.players+b+a.jribbble.paths.shots+a.jribbble.paths.following;a.fn.jribbble().makeRequest(e,c,d)},a.jribbble.getPlayerById=function(b,c){var d=a.jribbble.paths.players+b;a.fn.jribbble().makeRequest(d,c)},a.jribbble.getPlayerFollowers=function(b,c,d){var e=a.jribbble.paths.players+b+a.jribbble.paths.followers;a.fn.jribbble().makeRequest(e,c,d)},a.jribbble.getPlayerFollowing=function(b,c,d){var e=a.jribbble.paths.players+b+a.jribbble.paths.following;a.fn.jribbble().makeRequest(e,c,d)},a.jribbble.getPlayerDraftees=function(b,c,d){var e=a.jribbble.paths.players+b+a.jribbble.paths.draftees;a.fn.jribbble().makeRequest(e,c,d)},a.jribbble.getCommentsOfShot=function(b,c,d){var e=a.jribbble.paths.shots+b+a.jribbble.paths.comments;a.fn.jribbble().makeRequest(e,c,d)}})(jQuery);
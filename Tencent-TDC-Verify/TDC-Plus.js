if(typeof JSON!=="object"){JSON={};}(function(){"use strict";var rx_one=/^[\],:{}\s]*$/;var rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;var rx_four=/(?:^|:|,)(?:\s*\[)+/g;var rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(n){return n<10?"0"+n:n;}
function this_value(){return this.valueOf();}
if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}
var gap;var indent;var meta;var rep;function quote(string){rx_escapable.lastIndex=0;return rx_escapable.test(string)?"\""+string.replace(rx_escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);})+"\"":"\""+string+"\"";}
function str(key,holder){var i;var k;var v;var length;var mind=gap;var partial;var value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key);}
if(typeof rep==="function"){value=rep.call(holder,key,value);}
switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null";}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null";}
v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v;}
if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v);}}}}
v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v;}}
if(typeof JSON.stringify!=="function"){meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"};JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" ";}}else if(typeof space==="string"){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify");}
return str("",{"":value});};}
if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k;var v;var value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);rx_dangerous.lastIndex=0;if(rx_dangerous.test(text)){text=text.replace(rx_dangerous,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);});}
if(rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,""))){j=eval("("+text+")");return(typeof reviver==="function")?walk({"":j},""):j;}
throw new SyntaxError("JSON.parse");};}}());

var RanValue=function(min,max){return min+Math.floor(Math.random()*(max-min));}
var RanStr = function(index){
	var S = "ABCDEFGHIJKLMNOQPRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+",str = "";
	for(var i = 0; i < index; i ++){
		str += S.substr(RanValue(0,S.length-1),1);
	}
	return str;
}

var move_build=function(index){var totalx=RanValue(45,55);var totaltime=RanValue(5000,10000);var totaly=RanValue(195,205);var startx=totalx;var move=[];var endx=index+24-startx;move.push([totalx,totaly,totaltime]);totalx=totalx+RanValue(6,10);totaly=totaly+RanValue(0,1);totaltime=totaltime+RanValue(30,50);move.push([totalx,totaly,totaltime]);while(totalx<endx+startx){if(totalx<endx/5+startx){totalx=totalx+RanValue(2,5);totaltime=totaltime+RanValue(15,16);}else if(totalx>endx*4/5+startx){if(totalx>index-5&&totalx<index-1){totalx=index;totaltime=totaltime+RanValue(30,40);}else{totalx=totalx+(RanValue(1,100)>90?2:1);if(totalx==endx-5)totaltime=totaltime+RanValue(400,500);else if(totalx>endx-10+startx&&totalx<endx+startx)totaltime=totaltime+RanValue(17,50);else totaltime=totaltime+RanValue(15,17);}}else{totalx=totalx+(RanValue(1,100)>90?RanValue(6,9):RanValue(2,4));totaltime=totaltime+RanValue(15,16);}
totaly=totaly+(RanValue(1,100)>70?RanValue(0,1):0);move.push([totalx,totaly,totaltime]);}
return move;}

var slide_build=function(index,cdata){function s(t,s){s=parseInt(s);for(var e,n=[],o=0;o<t.length;o++){var a=t[o];n.push(0==o?[a[0],a[1],a[2]]:[a[0]-e[0],a[1]-e[1],Number((a[2]-e[2]).toFixed(3))]),e=a}
return n.push([0,0,s]),n;}
var totalx=RanValue(45,55);var totaltime=RanValue(500,1000);var totaly=RanValue(195,205);var startx=totalx;var move=[];var endx=index+30-startx;move.push([totalx,totaly,totaltime]);totalx=totalx+RanValue(6,10);totaltime=totaltime+RanValue(30,50);totaly=totaly+RanValue(0,1);move.push([totalx,totaly,totaltime]);while(totalx<endx+startx){if(totalx<endx/5+startx){totalx=totalx+RanValue(2,5);totaltime=totaltime+RanValue(15,16);}else if(totalx>endx*4/5+startx){if(totalx>index-5&&totalx<index-1){totalx=index;totaltime=totaltime+RanValue(30,40);}else{totalx=totalx+(RanValue(1,100)>90?2:1);if(totalx==endx-5)totaltime=totaltime+RanValue(400,500);else if(totalx>endx-10+startx&&totalx<endx+startx)totaltime=totaltime+RanValue(17,50);else totaltime=totaltime+RanValue(15,17);}}else{totalx=totalx+(RanValue(1,100)>90?RanValue(6,9):RanValue(2,4));totaltime=totaltime+RanValue(15,16);}
totaly=totaly+(RanValue(1,100)>70?RanValue(0,1):0);move.push([totalx,totaly,totaltime]);}
return s(move,cdata);}

var toDataURLvalue = "This is canvas.toDataURL value";

var BatteryManager = {
	charging: true,
	chargingTime: 0,
	dischargingTime: Infinity,
	level: 1,
	onchargingchange: null,
	onchargingtimechange: null,
	ondischargingtimechange: null,
	onlevelchange: null
};
var FuncArr = {length:0};
var EmptyFunc = function(){};
var DeviceoriEvent = {
		alpha: null,
		beta: null,
		gamma: null
};
var WebGLRenderingContext = EmptyFunc;
var WebGLDebugRendererInfo = {
		"tu":1
};
var span = {
	setAttribute : EmptyFunc,
	removeAttribute : EmptyFunc,
	removeChild : EmptyFunc
};
var canvas = {
		style : {},
		getContext : function(){
			return {
				getParameter : function() {
					    return "ANGLE(NVIDIAGeForceGTX1060Direct3D11vs_5_0ps_5_0)";
				},
				getExtension : function(n) {
					    if (n == "WEBGL_debug_renderer_info") return WebGLDebugRendererInfo;
					    return {}
				},
				beginPath : EmptyFunc,
				arc : EmptyFunc,
				closePath : EmptyFunc,
				fill : EmptyFunc,
				rect : EmptyFunc,
				isPointInPath : EmptyFunc,
				fillRect : EmptyFunc,
				fillText : EmptyFunc
			}
		},
		toDataURL : function() {
			return toDataURLvalue;
		}
};
var addEventListener = function(type, listener, options) {
	type = type.toLowerCase();
	if (type == "load") timeplus = 1000,listener();
	//else if(type == "deviceorientation") listener(DeviceoriEvent);
	else if(type == "mousemove" || type == "mousedown" || type == "mouseup" || type == "click"){
		if (FuncArr.length == 4) return;
		for (var i in FuncArr)  if (i == type) return;
		FuncArr[type] = listener,FuncArr.length +=1;
	}
}

var window = this;

/*{
	Date : Date,
	Array : Array,
	Object : Object,
	String : String
};*/

window.addEventListener = addEventListener;
window.document = {
		location: {
			href: "",
			protocol: "https:"
		},
		referrer: "https://xui.ptlogin2.qq.com/cgi-bin/xlogin?",
		addEventListener: addEventListener,
		body: {
		    scrollLeft: 100,
		    clientLeft: 100,
		    scrollTop: 100,
		    clientTop: 100,
		    clientWidth: 1920,
		    clientHeight: 1080,
		    appendChild: EmptyFunc,
		    removeChild: EmptyFunc
		},
		createElement: function(n) {
		    if (n == "canvas") return canvas;
		    else if (n == "span") return span;
		    else return {
			addEventListener: addEventListener,
			contentWindow: {}
		    };
		},
		cookie: "",
		documentElement: {
		    clientWidth: 1920,
		    clientHeight: 1080
		},
		charset: "UTF-8",
		getElementsByTagName: function(){
			return [{appendChild:EmptyFunc,removeChild:EmptyFunc}];
		},
		getElementById: function(){
			return span
		}
};
window.navigator = {
		userAgent: "",
		getBattery: function() {
			return new Promise(function(resolve, reject) {
				resolve(BatteryManager);
			});
		},
		languages: ["zh-CN", "zh"],
		plugins: [{},{},{}],
		cookieEnabled: true,
		"[CODE_VERIFY]iframes": EmptyFunc
}
window.Event = function(x,y,type){
		this.x = this.clientX = this.offsetX = this.screenX = this.pageX = x,
		this.y = this.clientY = this.offsetY = this.screenX = this.pageY = y,
		this.type = type,
		this.toElement = this.srcElement = {},
		this.button = this.keyCode = 0,
		this.altKey = this.shiftKey = this.ctrlKey = false;
		this.isTrusted = true;
		return this;
};

window.location = window.document.location;
window.addEventListener = addEventListener;
window.Promise = function() {
		this.status = 'pending';
		this.msg = '';
		var process = arguments[0];
		var that = this;
		process &&  process(function() {
		    that.status = 'resolve';
		    that.msg = arguments[0];
		},
		function() {
		    that.status = 'reject';
		    that.msg = arguments[0];
		});
		this.then = function() {
			if (this.status == 'resolve') {
			    arguments[0](this.msg);
			}
			if (this.status == 'reject' && arguments[1]) {
			    arguments[1](this.msg);
			}
		};
		return this;
};
window.innerWidth = 300;
window.innerHeight = 230;
window.outerWidth = 1274;
window.outerHeight = 934;
window.screen = {
		availHeight: 1040,
		availLeft: 0,
		availTop: 0,
		availWidth: 1920,
		colorDepth: 24,
		height: 1080,
		pixelDepth: 24,
		width: 1920
};

toDataURLvalue = RanStr(32);
window.document.body.clientWidth =  window.document.documentElement.clientWidth = window.screen.availWidth = window.screen.width = RanValue(800,2560);
window.document.body.clientHeight = window.document.documentElement.clientHeight = window.screen.height = RanValue(600,window.screen.width);
window.screen.availHeight = window.screen.height - 40;
window.outerWidth =  window.screen.width - RanValue(300,600);
window.outerHeight =  window.screen.height - RanValue(100,200);

var Date_ = Date;
var timeplus = 0,startime = 0;
Date = function(){
	var timeX = new Date_;
	timeX.setTime(startime + timeplus);
	return timeX;
};
Date.parse = Date_.parse;

function getvalue(time, cookie, sid, index, cdata, ua) {
	startime = parseInt(time);
	window.location.href = "https://ssl.captcha.qq.com/cap_union_new_show?sid=" + sid;
	window.navigator.userAgent = ua;
	window.document.cookie = cookie;
	index = parseInt(index);
	cdata = parseInt(cdata);
	var moveValue = move_build(index);
	var slideValue = slide_build(index, cdata);
	var x = RanValue(50, 65),y = RanValue(195, 205),t = RanValue(3000, 7000);
	var downValue = [[x, y, t]];
	var upValue = [[index - 24, y + RanValue(1, 4), t + RanValue(4000, 6000)]]; 
	[TDCJS]
	var TDC = window.TDC;
	TDC.setData({
	    clientType: "2",
	    coordinate: [10, 24, 0.4118]
	}),
	TDC.setData({
	    trycnt: 1,
	    refreshcnt: 0,
	    slideValue: slideValue,
	    dragobj: 1
	}),
	TDC.setData({
	    ft: "qf_7P_n_H"
	});
	var i = 0;//"mousemove" || type == "mousedown" || type == "mouseup" || type == "click"
	var EventX = {};
	EventX = new window.Event(downValue[0][0],downValue[0][1],"mousedown");
	timeplus = downValue[0][2];
	FuncArr["mousedown"](EventX);
	for(i = 0;i<moveValue.length;i++){
		EventX = new window.Event(moveValue[i][0],moveValue[i][1],"mousemove");
		timeplus = moveValue[i][2];
		FuncArr["mousemove"](EventX);
	}
	EventX = new window.Event(upValue[0][0],upValue[0][1],"mouseup");
	timeplus = upValue[0][2];
	FuncArr["mouseup"](EventX);
	EventX = new window.Event(upValue[0][0],upValue[0][1],"click");
	timeplus = upValue[0][2];
	FuncArr["click"](EventX);
	return decodeURIComponent(TDC.getData());
}

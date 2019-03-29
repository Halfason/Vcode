typeof Object.assign!=="function"&&(Object.assign=function(d){var c=arguments;if(null==d)
throw new TypeError("Cannot convert undefined or null to object");d=Object(d);for(var f=1;f<arguments.length;f++){var e=c[f];if(null!=e)
for(var g in e)
Object.prototype.hasOwnProperty.call(e,g)&&(d[g]=e[g])}
return d});

var toDataURLvalue = "data:image/png;base64,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";
//canvas.toDataURL值
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
throw new SyntaxError("JSON.parse");};}}());//JSON对象增量

var RandomValue=function(min,max){return min+Math.floor(Math.random()*(max-min));}

var move_build=function(index){var totalx=RandomValue(45,55);var totaltime=RandomValue(5000,10000);var totaly=RandomValue(195,205);var startx=totalx;var move=[];var endx=index+24-startx;move.push([totalx,totaly,totaltime]);totalx=totalx+RandomValue(6,10);totaly=totaly+RandomValue(0,1);totaltime=totaltime+RandomValue(30,50);move.push([totalx,totaly,totaltime]);while(totalx<endx+startx){if(totalx<endx/5+startx){totalx=totalx+RandomValue(2,5);totaltime=totaltime+RandomValue(15,16);}else if(totalx>endx*4/5+startx){if(totalx>index-5&&totalx<index-1){totalx=index;totaltime=totaltime+RandomValue(30,40);}else{totalx=totalx+(RandomValue(1,100)>90?2:1);if(totalx==endx-5)totaltime=totaltime+RandomValue(400,500);else if(totalx>endx-10+startx&&totalx<endx+startx)totaltime=totaltime+RandomValue(17,50);else totaltime=totaltime+RandomValue(15,17);}}else{totalx=totalx+(RandomValue(1,100)>90?RandomValue(6,9):RandomValue(2,4));totaltime=totaltime+RandomValue(15,16);}
totaly=totaly+(RandomValue(1,100)>70?RandomValue(0,1):0);move.push([totalx,totaly,totaltime]);}
return move;}//轨迹生成

var slide_build=function(index,cdata){function s(t,s){s=parseInt(s);for(var e,n=[],o=0;o<t.length;o++){var a=t[o];n.push(0==o?[a[0],a[1],a[2]]:[a[0]-e[0],a[1]-e[1],Number((a[2]-e[2]).toFixed(3))]),e=a}
return n.push([0,0,s]),n;}
var totalx=RandomValue(45,55);var totaltime=RandomValue(500,1000);var totaly=RandomValue(195,205);var startx=totalx;var move=[];var endx=index+30-startx;move.push([totalx,totaly,totaltime]);totalx=totalx+RandomValue(6,10);totaltime=totaltime+RandomValue(30,50);totaly=totaly+RandomValue(0,1);move.push([totalx,totaly,totaltime]);while(totalx<endx+startx){if(totalx<endx/5+startx){totalx=totalx+RandomValue(2,5);totaltime=totaltime+RandomValue(15,16);}else if(totalx>endx*4/5+startx){if(totalx>index-5&&totalx<index-1){totalx=index;totaltime=totaltime+RandomValue(30,40);}else{totalx=totalx+(RandomValue(1,100)>90?2:1);if(totalx==endx-5)totaltime=totaltime+RandomValue(400,500);else if(totalx>endx-10+startx&&totalx<endx+startx)totaltime=totaltime+RandomValue(17,50);else totaltime=totaltime+RandomValue(15,17);}}else{totalx=totalx+(RandomValue(1,100)>90?RandomValue(6,9):RandomValue(2,4));totaltime=totaltime+RandomValue(15,16);}
totaly=totaly+(RandomValue(1,100)>70?RandomValue(0,1):0);move.push([totalx,totaly,totaltime]);}
return s(move,cdata);}//轨迹生成



var addEventListener = function(type, listener, options) {
	type = type.toLowerCase();
	if (type == "load") listener();
	else if(type == "deviceorientation") listener(DeviceoriEvent);
	else if(type == "touchmove" || type == "mousedown" || type == "mouseup" || type == "click"){
		if (FuncArr.length == 4) return;
		for (var i in FuncArr)  if (i == type) return;
		FuncArr[type] = listener,FuncArr.length +=1;
	}
}

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

var Date_ = Date;
var timeplus = 0;
Date = function(){
	var timeX = new Date_;
	timeX.setTime(startime + timeplus);
	return timeX;
};
Date.parse = Date_.parse;

var window = Object.assign(this,new function(){
	this.changedTouches = this.touches = [{clientX:0,clientY:0,pageX:0,pageY:0}];
	this.FuncArr = {};
	this.canvas = new function(){
		this.style = {},
		this.getContext = new function() {
			    this.getParameter = function() {
				    return "ANGLE(NVIDIAGeForceGTX1060Direct3D11vs_5_0ps_5_0)";
			    };
			    this.getExtension = function(n) {
				    if (n == "WEBGL_debug_renderer_info") return WebGLDebugRendererInfo;
				    return {}
			    };
			 this.beginPath =this.arc = this.closePath = this.fill = function(){};
			 this.rect = this.isPointInPath = this.fillRect = this.fillText = function(){};
			return this;
		},
		this.toDataURL = function() {
			return toDataURLvalue;
		};
		return this;
	},
	this.span = new function(){
		this.setAttribute = this.removeAttribute = this.removeChild =function(n) {};
		return this;
	},
	this.document = {
		location: {
			href: "",
			protocol: "https:"
		},
		referrer: "https://ssl.captcha.qq.com/template/pc_qq_captcha.html?sp_width=",
		addEventListener: addEventListener,
		body: {
		    scrollLeft: 100,
		    clientLeft: 100,
		    scrollTop: 100,
		    clientTop: 100,
		    clientWidth: 1920,
		    clientHeight: 1080,
		    appendChild: function(){},
		    removeChild: function(){}
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
			return [{appendChild:function(){},removeChild:function(){}}];
		},
		getElementById: function(){
			return span
		}
	};
	this.navigator = {
		userAgent: "",
		getBattery: function() {
			return new Promise(function(resolve, reject) {
				resolve(BatteryManager);
			});
		},
		languages: ["zh-CN", "zh"],
		plugins: [{},{},{}],
		cookieEnabled: true,
		"[CODE_VERIFY]iframes": function(){},
		platform:"Win32"
	},
	this.Event = function(x,y,type,time){
		this.x = this.clientX = this.offsetX = this.screenX = this.pageX = x,
		this.y = this.clientY = this.offsetY = this.screenX = this.pageY = y,
		this.type = type,
		this.toElement = this.srcElement = {},
		this.button = this.keyCode = 0,
		this.altKey = this.shiftKey = this.ctrlKey = false;
		return this;
	},
	this.DeviceoriEvent = {
		alpha: 0,
		beta: 0,
		gamma: 0
	},
	this.location = this.document.location,
	this.addEventListener = addEventListener,
	this.innerWidth = 300,
	this.innerHeight = 230,
	this.Promise = function() {
		this.status = 'pending';
		this.msg = '';
		var process = arguments[0];
		var that = this;
		process(function() {
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
	},
	this.WebGLRenderingContext = function(){},
	this.screen = {
		availHeight: 1040,
		availLeft: 0,
		availTop: 0,
		availWidth: 1920,
		colorDepth: 24,
		height: 1080,
		pixelDepth: 24,
		width: 1920
	},
	this.WebGLDebugRendererInfo = {
		"tu":1
	};
	return this;
});

function getvalue(time, cookie, sid, index, cdata, ua) {
	startime = parseInt(time);
	location.href = "https://ssl.captcha.qq.com/cap_union_new_show?sid=" + sid;
	navigator.userAgent = ua;
	document.cookie = cookie;
	index = parseInt(index);
	cdata = parseInt(cdata);
	var moveValue = move_build(index);
	var slideValue = slide_build(index, cdata);
	var x = RandomValue(50, 65),y = RandomValue(195, 205),t = RandomValue(30, 70);
	var downValue = [[x, y, t]];
	var upValue = [[index - 24, y + RandomValue(1, 4), t + RandomValue(4, 6)]]; 
	[TDCJS]//此处是tdc.js文件内容
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
	var i = 0;//"touchmove" || type == "mousedown" || type == "mouseup" || type == "click"
	var EventX = {};
	EventX = new Event(downValue[0][0],downValue[0][1],"mousedown");
	timeplus = downValue[0][2];
	FuncArr["mousedown"](EventX);
	for(i = 0;i<moveValue.length;i++){
		EventX = new Event(moveValue[i][0],moveValue[i][1],"touchmove");//此处亦可直接对EventX对象进行修改
		timeplus = moveValue[i][2];
		FuncArr["touchmove"](EventX);
	}
	EventX = new Event(upValue[0][0],upValue[0][1],"mouseup");
	timeplus = upValue[0][2];
	FuncArr["mouseup"](EventX);
	EventX = new Event(upValue[0][0],upValue[0][1],"click");
	timeplus = upValue[0][2];
	FuncArr["click"](EventX);
	return decodeURIComponent(TDC.getData());
}

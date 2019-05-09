var RanV= function(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}
var RanStr = function(index) {
    var S = "ABCDEFGHIJKLMNOQPRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+",
        str = "";
    for (var i = 0; i < index; i++) {
        str += S.substr(RanV(0, S.length - 1), 1);
    }
    return str;
}
var RanGPU = function(){
	var Str = "",Model = [], RanArr = [], TempStr = "";
	if(RanV(1,100) > 70){
		Brand= "NVIDIA";
		Model = ["GeForce20","GeForce10","GeForce9","GeForce7","GeForce6","GeForce5","GeForce4","GeForce2"];
	}else{
		Brand= "AMD";	
		Model = ["RX4","RX5","R93","R92"];
	}
	Str += Brand + Model[RanV(0,Model.length-1)]  + RanV(1,9) * 10;
	Str += "Direct3D" + RanV(7,11);
	Str += "vs_"+RanV(1,10)+"_"+RanV(1,10);
	Str += "ps_"+RanV(1,10)+"_"+RanV(1,10);
	return "ANGLE("+ Str+")";
}
var FuncArr = {
    length: 0
};
var EmptyFunc = function() {};

var toDataURLvalue = "This is canvas.toDataURL value";
var GPUValue = "This is GPU value";
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
var DeviceoriEvent = {
    alpha: null,
    beta: null,
    gamma: null
};
var WebGLRenderingContext = EmptyFunc;
var WebGLDebugRendererInfo = {
    "tu": 1
};

var span = {
    setAttribute: EmptyFunc,
    removeAttribute: EmptyFunc,
    removeChild: EmptyFunc
};

var canvas = {
    style: {},
    getContext: function() {
        return new function(){
            this.getParameter= function() {
                return GPUValue;
            },
            this.getExtension= function(n) { //此处方法和前一个方法组成，用于获取显卡名称，若未正确运行则返回一串Hash值，成功运行返回GPUValue
                return n == "WEBGL_debug_renderer_info" ? WebGLDebugRendererInfo : {}
            },
            this.beginPath=this.arc=this.closePath=this.fill=this.rect=this. isPointInPath=this.fillRect=this.fillText=EmptyFunc;
		return this;
        }
    },
    toDataURL: function() {
        return toDataURLvalue;
    }
};


var addEventListener = function(type, listener, options) {//此处type在某些地方可能会用到deviceorientation,自行listener(DeviceoriEvent)即可
    type = type.toLowerCase();
    if (type == "load") listener();
    else if (["mousedown","mousemove","mouseup","click"].includes(type)) {
        if (FuncArr.length == 4) return;
        for (var i in FuncArr) if (i == type) return;
        FuncArr[type] = listener, FuncArr.length += 1;
    }
}


var window = this;
var location = {
    href: "",
    protocol: "https:"
};
var document = {
    location: location,
    referrer: "",
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
        return "canvas" == n ? canvas : "span" == n ? span : {//default值亦为遗留版本，不做更改
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
    getElementsByTagName: function() {
        return [{
            appendChild: EmptyFunc,
            removeChild: EmptyFunc
        }];
    },
    getElementById: function() {
        return span
    }
};
var navigator = {
    userAgent: "",
    getBattery: function() {			//此处在tdc.js中测试与浏览器运行流程一致。基本都会检测是否支持getBattery
	var func = function(resolve, reject) {		
            resolve(BatteryManager);
        }
        return obj = new Promise(func),obj.then = func,obj;
    },
    languages: ["zh-CN", "zh"],
    plugins: [],
    cookieEnabled: true,
    "[CODE_VERIFY]iframes": EmptyFunc		//较老版本遗留下来的方法，可能是发生错误导致的，但最后不做更改
}

var Event = function(x, y, type) {		//某些JS会检查toElement或srcElement的class来源，如117.js   需要的话自行更改
    this.x = this.clientX = this.offsetX = this.screenX = this.pageX = x,
    this.y = this.clientY = this.offsetY = this.screenY = this.pageY = y,
    this.touches = this.targetTouches = this.changedTouches = [this],
    this.type = type,
    this.toElement = this.srcElement = {},
    this.button = this.keyCode = 0,
    this.altKey = this.shiftKey = this.ctrlKey = false;
    this.isTrusted = true;
    return this;
};


var outerWidth = 1274;
var outerHeight = 934;
var innerWidth = 300;
var innerHeight = 230;
var screen = {
    availHeight: 1040,
    availLeft: 0,
    availTop: 0,
    availWidth: 1920,
    colorDepth: 24,
    height: 1080,
    pixelDepth: 24,
    width: 1920
};

var Date_ = Date;
var timeplus = 0,		//时间增量，起始时间
    startime = 0;
Date = function() {
    var timeX = new Date_;
    timeX.setTime(startime + timeplus);
    return timeX;
};
Date.parse = Date_.parse;	//除了new Date外也会从parse得到时间，此处最好直接复制Date_全部方法

var Feature = {				//滑块特征，每个页面不一样
    clientType: "2",
    coordinate: [10, 24, 0.4118],
    trycnt: 1,
    refreshcnt: 0,
    slideValue: [
        []
    ],
    dragobj: 1,
    ft: "qf_7P_n_H"
}

var Track_Build = function(startx,index, select){//Track_Build(起始位置，滑块位置，是否为slideValue)
	var $t = select ? RanV(500, 1000) : RanV(2000, 3000),$x = startx,$y = RanV(190,200),$startx = $x;
	var Arr = [];
	Arr.push([$x,$y,$t]);
	$t += RanV(190,250),$x += RanV(1,2);
	Arr.push([$x,$y,$t]);
	while($x < index){
		if(($x-$startx) < (index-$startx )/8) $t += (RanV(1,100) < 90 ? RanV(6,11) : RanV(13,16)), $x+= RanV(1,4);
		else if(($x-$startx) < (index-$startx ) - 8){ 
			$t +=  (RanV(1,100) < 90 ? RanV(6,9) : RanV(11,13));
			if(($x-$startx) < (index-$startx ) / 2) $x+= RanV(8,12), $y+=(RanV(1,100) > 80 ? RanV(1,2) : 0);
			else if(($x-$startx) < (index-$startx ) * 5 / 8)  $x+= RanV(3,6), $y+=(RanV(1,100) > 95 ? RanV(1,2) : 0);
			else if(($x-$startx) < (index-$startx ) * 6 / 8)  $x+= RanV(2,4);
			else $x+= RanV(1,3);			
		}
		else $t +=  (RanV(1,100) > 50 ? RanV(6,9) : RanV(20,50)), $x+= 1;
		Arr.push([$x,$y,$t]);	
	}
	return Arr;
}

var slide_build = function(t, s) { //slide_build(slideValue,cdata)
    s = parseInt(s);
    for (var e, n = [], o = 0; o < t.length; o++) {
        var a = t[o];
        n.push(0 == o ? [a[0], a[1], a[2]] : [a[0] - e[0], a[1] - e[1], Number((a[2] - e[2]).toFixed(3))]),
        e = a
    }
    return n.push([0, 0, s]), n;
}

var Init = function(time, sid, ua, cookie) {
    toDataURLvalue = RanStr(32);			//canvas.toDataURL(), 随机值。此处会对其做hash，所以任意值即可。
    GPUValue = RanGPU();							//原文，不Hash
    document.body.clientWidth = document.documentElement.clientWidth = screen.availWidth = screen.width = RanV(80,256) * 10;
    document.body.clientHeight = screen.availHeight = document.documentElement.clientHeight = screen.height = RanV(60, screen.width / 10) * 10;
    outerWidth = screen.width - RanV(300, 600);
    outerHeight = screen.height - RanV(100, 200);				//此处还有innerWidth、和innerWidth。未给出
    startime = parseInt(time);							//自定义起始时间
    location.href = "https://ssl.captcha.qq.com/cap_union_new_show?sid=" + sid;	//此处若不为闭包调试，浏览器将自行跳转
    navigator.userAgent = ua;							
    document.referrer="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?";		//prehandle的referrer
    document.cookie = cookie;	//cookie，重要！无CK可能会返回错误结果或直接异常	//TDC_itoken
}

function getvalue(time, cookie, sid, index, cdata, ua) {
    Init(time, sid, ua, cookie);
    index = parseInt(index);//滑块位置，最左边
    cdata = parseInt(cdata);//cdata，用于slideValue末后缀
	var startx =  Feature.coordinate[1] + RanV(1, Math.floor(Feature.coordinate[1] / 2));
	var moveValue = Track_Build(startx,index), slideValue = Track_Build(startx,index, true);
	//moveValue为屏幕鼠标轨迹数据，不只是滑块。slideValue为滑块轨迹数据
	var downValue = [slideValue[0]], upValue = [slideValue[slideValue.length - 1]];		//模拟mousedown、mouseup坐标
	upValue[0][0] = index;
	Feature.slideValue = slide_build(slideValue, cdata);	//置入slideValue滑块轨迹数据
    [TDCJS]							//此处是tdc.js文件数据,直接替换即可
    var TDC = window.TDC;
    TDC.setData(Feature);
    EventX = new window.Event(downValue[0][0], downValue[0][1], "mousedown"), timeplus = downValue[0][2];
    FuncArr["mousedown"](EventX);				//触发mousedown事件
    for (var i = 0; i < moveValue.length; i++) {
        EventX = new window.Event(moveValue[i][0], moveValue[i][1], "mousemove"), timeplus = moveValue[i][2];
        FuncArr["mousemove"](EventX);				//触发mousemove事件
    }
    EventX = new window.Event(upValue[0][0], upValue[0][1], "mouseup"), timeplus = upValue[0][2];
    FuncArr["mouseup"](EventX);					//触发mouseup事件
    EventX.type = "click";
    FuncArr["click"](EventX);					//click与mouseup事件一致
    return decodeURIComponent(TDC.getData());			//getData
}

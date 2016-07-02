function initialize() {
	var map = new BMap.Map('baidu-map-api', {enableMapClick:false});
	var point = new BMap.Point(121.5, 31.3);
	map.centerAndZoom(point, 12);
	map.enableScrollWheelZoom(true);

}

function loadScript() {
	var script = document.createElement("script");
	script.src = "http://api.map.baidu.com/api?v=2.0&ak=OrIjMGkjQSIsVlr5mIYpAzTFuePKAk1h&callback=initialize";//此为v2.0版本的引用方式
	// http://api.map.baidu.com/api?v=1.4&ak=您的密钥&callback=initialize"; //此为v1.4版本及以前版本的引用方式
	document.body.appendChild(script);
	window.location.href = "#";
}
window.onload = loadScript;


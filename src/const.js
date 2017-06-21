global.rankListArry = [{
	value: 1,
	weight: "重量级",
	pound: '200磅 ↑',
	label: '90.720kg ↑'
}, {
	value: 2,
	weight: "次重量级",
	pound: '200磅 ↓',
	label: '90.720kg ↓'
}, {
	value: 3,
	weight: "轻重量级",
	pound: '175磅 ↓',
	label: '79.380kg ↓'
}, {
	value: 4,
	weight: "超中量级",
	pound: '168磅 ↓',
	label: '76.204kg ↓'
}, {
	value: 5,
	weight: "中量级",
	pound: '160磅 ↓',
	label: '72.570kg ↓'
}, {
	value: 6,
	weight: "超次中量级",
	pound: '154磅 ↓',
	label: '69.850kg ↓'
}, {
	value: 7,
	weight: "次中量级",
	pound: '147磅 ↓',
	label: '66.850kg ↓'
}, {
	value: 8,
	weight: "超轻量级",
	pound: '140磅 ↓',
	label: '63.504kg ↓'
}, {
	value: 9,
	weight: "轻量级",
	pound: '135磅 ↓',
	label: '61.230kg ↓'
}, {
	value: 10,
	weight: "超次轻量级",
	pound: '130磅 ↓',
	label: '58.970kg ↓'
}, {
	value: 11,
	weight: "次轻量级",
	pound: '126磅 ↓',
	label: '57.150kg ↓'
}, {
	value: 12,
	weight: "超最轻量级",
	pound: '122磅 ↓',
	label: '55.340kg ↓'
}, {
	value: 13,
	weight: "最轻轻量级",
	pound: '118磅 ↓',
	label: '53.520kg ↓'
}, {
	value: 14,
	weight: "超次最轻量级",
	pound: '115磅 ↓',
	label: '52.160kg ↓'
}, {
	value: 15,
	weight: "次最轻量级",
	pound: '112磅 ↓',
	label: '50.800kg ↓'
}, {
	value: 16,
	weight: "最次轻量级",
	pound: '108磅 ↓',
	label: '48.980kg ↓'
}, {
	value: 17,
	weight: "迷你轻量级",
	pound: '105磅 ↓',
	label: '47.627kg ↓'
}];

global.gameStateArry = [{
	value: 1,
	label: "未发布"
}, {
	value: 2,
	label: "已发布"
}, {
	value: 3,
	label: "进行中"
}, {
	value: 4,
	label: "已下线"
}, {
	value: 5,
	label: "已结束"
}, {
	value: 6,
	label: "已下线"
}];

global.gameLiveStateArry = [{
	value: 1,
	label: "未开始"
}, {
	value: 2,
	label: "进行中"
}, {
	value: 3,
	label: "已结束"
}, {
	value: 4,
	label: "提前终止"
}];

global.bgChange = function(bg_img,id) {
	console.log(bg_img);
	var url = document.getElementById(bg_img).src;
	document.getElementById(id).style.backgroundImage="url("+ url +")";
}
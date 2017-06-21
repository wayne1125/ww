<template>
  <div class="content" v-bind:style="{height: css.height_content}">
    	<div class="top">
    		<img id="head_image" alt="" src="../../static/img/1663d53f1f674812ad4081f73295444d.png"/>
    	</div>
    	<div class="hide">
    		<img id="bg_image" src="../../static/img/bg.png" alt="" />
    	</div>
    	<div class="center">
    		<div class="title tc">报名资料</div>
    		<div class="line"></div>
    		<form class="submitForm" enctype="multipart/form-data" method="post">
    			<span><i>*</i> 姓名</span>
    			<input type="text" v-model="applyInfo.name" placeholder="请填写真实姓名"/>
    			<div class="lineBottom"></div>
    			<span><i>*</i> 手机</span>
    			<input type="text" v-model="applyInfo.mobileNumber" placeholder="请填写手机号"/>
    			<div class="lineBottom"></div>
    			<span><i>*</i> 性别</span>
    			<input type="radio" v-model="applyInfo.gender" class="radio" name="sex" value="1" /> <label>男</label> 
    			<input type="radio" v-model="applyInfo.gender" class="radio" name="sex" value="2" /> <label>女</label>
    			<div class="lineBottom"></div>
    			<span><i>*</i> 年龄</span>
    			<input type="text" v-model="applyInfo.age" placeholder="岁"/>
    			<div class="line"></div>
    			<span><i>*</i> 身高</span>
    			<input type="text" v-model="applyInfo.height" placeholder="cm"/>
    			<div class="lineBottom"></div>
    			<span><i>*</i> 体重</span>
    			<input type="text" v-model="applyInfo.weight" placeholder="kg"/>
    			<div class="lineBottom"></div>
    			<span><i>*</i> 拳龄</span>
    			<input type="text" v-model="applyInfo.boxerYears" placeholder="年"/>
    			<div class="line"></div>
    			<span><i>*</i> 所属俱乐部</span>
    			<input type="text" v-model="applyInfo.clubName" class="club" placeholder="请填写俱乐部"/>
    			<div class="lineBottom"></div>
    			<span><i>*</i> 证件类型</span>
    			<input type="radio" v-model="applyInfo.idType" class="radio" name="ident" value="1" /> <label>身份证</label> 
    			<input type="radio" v-model="applyInfo.idType" class="radio" name="ident" value="2" /> <label>护照</label>
    			<div class="lineBottom"></div>
    			<span><i>*</i> 证件号码</span>
    			<input type="text" v-model="applyInfo.idNumber" class="idType" placeholder="请填写证件号码"/>
    		</form>
    	</div>
    	<div class="bottom">
    		<div class="alert" v-if="alertshow">
    			{{alertCon}}
    		</div>
    		<div class="submit tc" v-tap="{methods:submitInfo}">提交</div>
    		<div class="pb20 tc">
    			<input type="checkbox" v-model="agree" class="checkbox" /> 
    			<span class="read">我已阅读</span>
    			<span class="applyKnow" v-tap="{methods:applyKonwInfo}">&lt;&lt;报名须知&gt;&gt;</span>
    		</div>
    	</div>
    	<MaskCas :show="maskshow"></MaskCas>
    	<transition name="slider-fade">
    		<!--<div class="alertInfo tc" v-bind:style="{top: css.height_content}"  v-tap="{methods:closeAlert}">
    			<i class="fa fa-exclamation-triangle f30 red"></i><p>{{alertInfo}}</p>
    		</div>-->
    		<div class="applyCon tc" v-bind:style="{top: css.height_content}" v-if="applyshow" v-tap="{methods:closeAlert}">
    			<div class="pb10">报名须知</div>
    			<div class="lineBottom"></div>
    			<p>{{alertInfo}}</p>
    			<div class="lineBottom"></div>
    			<div class="pt15 pb15">确定</div>
    		</div>
    	</transition>
  </div>
</template>

<script>
	var window_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var window_width = window.innerWidth || document.documentElement.clientWidth  || document.body.clientWidth;
	import axios from 'axios';
	import MaskCas from './MaskCas'
	import vueTap from 'v-tap';
	export default {
		components: {
			MaskCas,
		},
	    data () {
	    return {
	    	css: {
					"height_content": window_height + "px",
				},
				maskshow: false,
				alertshow: false,
				applyshow: false,
				alertInfo: "",
				agree: true,
				alertCon: '',
				applyInfo:{
					"name": "",
					"mobileNumber": "",
					"gender": "1",
					"age": "",
					"height": "",
					"weight": "",
					"boxerYears": "",
					"clubName": "",
					"idType": "1",
					"idNumber": ""
				}
	      
	    	}
	  	},
		watch: {
		  	alertshow: function () {
		  		var that = this;
		  		setTimeout(function(){
		  			//that.maskshow =  false;
						that.alertshow = false;
		  		},700);
		  	}
		},
	  mounted() {
	  	//alert(window_width);
	  	//document.getElementById("head_image").src = "";
	  	//var url = document.getElementById("bg_image").src;
	  	//var index = url.lastIndexOf("/");
	  	//url = url.substring(0,index+1);
	  	//document.getElementById("head_image").src=url + this.$route.query.code +".png?"+ Math.random() +"";
	  	
	  },
		methods:{
		  	submitInfo () {
		  		if(!this.alertshow){
		  			var nameReg = /^[\u4e00-\u9fa5_a-zA-Z. ]{1,50}$/;
				  		var phoneReg = new RegExp("^[1][0-9]{10}$");//220182198401252119
				  		var numTest = new RegExp("^[0-9]+$");
				  		if(this.nullUndefined(this.applyInfo.name)) {
								this.swal("请输入姓名");
							} else if(!this.applyInfo.name.match(nameReg)){
								this.swal("姓名输入有误");
							} else if(this.nullUndefined(this.applyInfo.mobileNumber)){
								this.swal("请输入手机号");
							} else if(!this.applyInfo.mobileNumber.match(phoneReg)){
								this.swal("手机号输入有误");
							} else if(this.nullUndefined(this.applyInfo.age)){
								this.swal("请输入年龄");
							} else if(!this.applyInfo.age.match(numTest)){
								this.swal("年龄输入有误");
							} else if(this.nullUndefined(this.applyInfo.height)){
								this.swal("请输入身高");
							} else if(!this.applyInfo.height.match(numTest)){
								this.swal("身高输入有误");
							} else if(this.nullUndefined(this.applyInfo.weight)){
								this.swal("请输入体重");
							} else if(!this.applyInfo.weight.match(numTest)){
								this.swal("体重输入有误");
							} else if(this.nullUndefined(this.applyInfo.boxerYears)){
								this.swal("请输入拳龄");
							} else if(!this.applyInfo.boxerYears.match(numTest)){
								this.swal("拳龄输入有误");
							} else if(this.nullUndefined(this.applyInfo.clubName)) {
								this.swal("请输入俱乐部");
							} else if(!this.applyInfo.clubName.match(nameReg)){
								this.swal("俱乐部输入有误");
							} else if(this.nullUndefined(this.applyInfo.idNumber)) {
								this.swal("请输入证件号码");
							} else if(!this.agree){
								this.swal("请勾选阅读须知");
							} else{
								var obj = JSON.stringify({
									  "seriesCode" : this.$route.query.code,
										"name": this.applyInfo.name,
										"mobileNumber": this.applyInfo.mobileNumber,
										"gender": this.applyInfo.gender,
										"age": this.applyInfo.age,
										"height": this.applyInfo.height,
										"weight": this.applyInfo.weight,
										"boxerYears": this.applyInfo.boxerYears,
										"clubName": this.applyInfo.clubName,
										"idType": this.applyInfo.idType,
										"idNumber": this.applyInfo.idNumber
								});
								var that = this;
								axios.post('/hd-data-webapp/rest/match/series/appply/add', obj).then(function (response) {
									  //console.log(response.data);
								    if(response.data.code == 0){
								    	that.swal("报名成功");
								    } else{
								    	that.swal(response.data.msg);
								    }
								}).catch(function (error) {
								    //console.log(error);
								    that.swal(response.data.msg);
								});
						}
		  		}
				  		
		  	},
		  	swal (val) {
		  		this.alertCon = val;
		  		//this.maskshow =  true;
					this.alertshow = true;
		  	},
		  	closeAlert () {
		  		this.maskshow =  false;
					this.alertshow = false;
					this.applyshow = false;
		  	},
		  	applyKonwInfo () {
		  		this.maskshow =  true;
				this.applyshow = true;
				this.alertInfo = "凡年龄在16周岁以上（注：16周——17周岁需本人的父母或法定监护人签字同意）热爱职业拳击运动，并经过专业拳击训练的拳手，均可报名，报名资料必须真实，如有弄虚作假则取消报名及比赛资格。";
		  	},
		  	nullUndefined (val) {
		    	return val == null || val == undefined || val == "";
		    },
		    
		    
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	.applyCon,.alertInfo {
		min-height: 40px;
		width: 50%;
		padding: 5%;
		position: fixed;
		left: 20%; 
		margin-top: -110%;
		background: white;
		z-index: 1000;
		border-radius: 5px;
	}
	
	.alertInfo p , .applyCon p{
		word-break:break-all; 
		width:101%;
		line-height: 24px;
	}
	
	.applyCon {
		margin-top: -125%;
		padding: 5% 5% 0% 5%;
	}
	
	.applyCon p{
		font-size: 15px;
		text-align: left;
	}
	
	
	.lineBottom{
		height: 1px;
		width: 94%;
		margin: 0 3%;
		background: #d7d7d7;
	}
	
	.line{
		background: #f2f2f2;
		height: 8px;
		width: 100%;
	}
	
	
</style>

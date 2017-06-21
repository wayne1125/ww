<template>
  <div id="content" class="content" v-bind:style="{height: css.height_content}">
    	<div class="conBottom">
    		<img v-tap="{methods:storeDown}" v-if="bottomShow" src="../../static/img/bottom.png" alt="" />
    	</div>
    	<div class="hide">
    		<img id="bg_image" v-tap="{methods:storeDown}" src="../../static/img/bg.png" alt="" />
    	</div>
    	<transition name="slider-fade">
			<div class="alertInfo tc" v-bind:style="{top: css.height_content}" v-if="alertshow">
    			<p>{{alertInfo}}</p>
    			<div class="lineBottom"></div>
				<div>
					<span v-tap="{methods: cancel}">取消</span>
					<span class="line" v-tap="{methods:openStore}">确定</span>
				</div>
    		</div>
    	</transition>
    	<MaskCas :show="maskshow"></MaskCas>
  </div>
</template>

<script>
	var window_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
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
				"bg_img": "../../static/img/bg.png"
			},
			bottomShow: false,
			maskshow: false,
			alertshow: false,
			alertInfo: "即将离开微信，前往“APP Store”"
	    }
	  },
	  watch: {
				show: function() {
					this.countryList = global.countryArry;
					this.cityAllArry = global.cityAllArry;
					this.proviceArry = global.provinceArry;

				}
		},
	  mounted() {
	  	var type = this.$route.query.category;
	  	var code = this.$route.query.code;
	  	if(!this.nullUndefined(type) && !this.nullUndefined(code)){
	  		if(type == 'news_detail' || type == 'photos_detail' || type == 'videos_detail'){
	  			window.location.href = window.location.protocol + '//'+ window.location.host +'/hdshare/#/?id='+ code +'&app=false';
	  		} else if(type == 'boxers_detail'){
	  			window.location.href = window.location.protocol + '//'+ window.location.host +'/hdwechat/#/boxer_share?code='+code;
	  		} else if(type == 'clubs_detail'){
	  			window.location.href = window.location.protocol + '//'+ window.location.host +'/hdwechat/#/club_share?code='+code;
	  		} else if(type == 'girls_detail'){
	  			window.location.href = window.location.protocol + '//'+ window.location.host +'/hdwechat/#/baby_share?id='+code;
	  		} else if(type == 'series_detail'){
	  			window.location.href = window.location.protocol + '//'+ window.location.host +'/hdwechat/#/series_detail?id='+code;
	  		} else if(type == 'matchs_detail'){
	  			window.location.href = window.location.protocol + '//'+ window.location.host +'/hdwechat/#/match_share?code='+code;
	  		} else if(type == 'events_detail'){
	  			window.location.href = window.location.protocol + '//'+ window.location.host +'/hdwechat/#/matchlive_share?code='+code;
	  		} else{
		  			this.bottomShow = true;
				  	var url = document.getElementById("bg_image").src;
				  	document.getElementById("content").style.backgroundImage="url("+ url +")";
	  		}
	  	} else{
	  		var that = this;
	  		setTimeout(function(){
	  			that.bottomShow = true;
			  	var url = document.getElementById("bg_image").src;
			  	document.getElementById("content").style.backgroundImage="url("+ url +")";
	  		},500);
	  	}
	  	
	  	
	  },
	  methods: {
	  	openStore () {
	  		//this.$router.push('/apply_page');
	  		//this.maskshow =  false;
				//this.alertshow = false;
	  	},
  		operateSystem(){
//			if(/android/i.test(navigator.userAgent)){
//				alert("This is Android'browser.");//这是Android平台下浏览器
//			}
				if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
					//alert("This is iOS'browser.");//这是iOS平台下浏览器
					window.location.href="https://itunes.apple.com/cn/app/com.zjtachao.tianmushan/id1233526576?mt=8";
				} else{
					//alert("This is Android'browser.");
				}
	//			if(/Linux/i.test(navigator.userAgent)){
	//				//console.log("This is Linux'browser.");//这是Linux平台下浏览器
	//			}
		},
	  	storeDown () {
	  		this.operateSystem();
			//this.maskshow =  true;
			//this.alertshow = true;
	  	},
	  	cancel () {
	  		this.maskshow =  false;
			this.alertshow = false;
	  	},
	  	nullUndefined (val) {
	    	return val == null || val == undefined || val == "";
	    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.slider-fade-enter-active,
	.slider-fade-leave-active{
		transition: all .3s ease;
	}
	
	.slider-fade-enter,
	.slider-fade-leave-active{
		transform: translateY(-50px);
		opacity: 0;
	}

	.content{
		width: 100%;
		background-size:100% 100%;
		background-repeat: no-repeat;
		overflow: hidden;
		position: relative;
	}
	
	.conBottom{
		width: 100%;
		position: absolute;
		bottom: -3px;
	}
	.conBottom img{
		width: 100%;
	}
	
	.alertInfo {
		min-height: 40px;
		width: 58%;
		position: fixed;
		left: 21%; 
		margin-top: -110%;
		background: white;
		z-index: 1000;
		border-radius: 5px;
	}
	
	.alertInfo p{
		word-break:break-all; 
		width:94%;
		line-height: 24px;
		font-size: 22px;
		padding: 0 3%;
	}
	
	.alertInfo span{
		display: inline-block;
		width: 45%;
		line-height: 48px;
	}
	
	.alertInfo span.line{
		border-left: 1px solid #d7d7d7;
	}
	
	.red{
		font-size: 40px;
		color: red;
	}
	
	.lineBottom{
		height: 1px;
		width: 100%;
		background: #d7d7d7;
	}
</style>

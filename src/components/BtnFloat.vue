<template>
	<div align="center" class="btnDownWapper" v-tap="{methods:openApp}">
		<div class="fl">
			<span class="ml10">
				<img width="25" src="../../static/img/logo.png"/>
			</span>
			<span class="ml5">
				来来打拳 为你而战
			</span>
		</div>
		<div class="fr">
			<span>
				立即下载
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			openApp: function() {
				if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
					window.location.href="https://itunes.apple.com/cn/app/com.zjtachao.tianmushan/id1233526576?mt=8";
				} else{
					alert("open_app");
				}
			}
		}

	}
</script>
<style scoped>
	.btnDownWapper {
		height: 48px;
		background: rgba(231, 20, 41, .5);
		position: fixed;
		width: 100%;
		bottom: 0;
	}
	
	.btnDownWapper .fl span {
		color: white;
		margin-top: 12px;
		display: inline-block;
	}
	
	.btnDownWapper .fl span img {
		vertical-align: -6px;
	}
	
	.btnDownWapper .fr span {
		background: white;
		padding: 5px 7px;
		border-radius: 5px;
		font-size: 12px;
		margin-right: 10px;
		color: #e71429;
		margin-top: 12px;
		display: inline-block;
	}
	
	
</style>

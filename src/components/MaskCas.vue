<template>
	<transition name="fade">
		<div align="center" class="mask" v-if="show"></div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {

			}
		}, props: {
			show: {
				type: Boolean,
				default: false
			}
		}, watch: {
			show: function() {
//				console.log(this.show);
				
			}

		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.mask {
		position: fixed;
		background: rgba(0, 0, 0, .5);
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 100;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: all 0.5s ease
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
</style>
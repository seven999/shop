<template>
  <div id="box">
  	<div class="footer">
  		<div id="btn">
  			<router-link to="/login">
  				<button class="btn btn-success"><span class="glyphicon glyphicon-cd" style="margin-right: 10px;"></span>微信一键登录</button>
  			</router-link>
  		</div>
  		<div class="btn">
  			<router-link to="/login"><button class="dl">登录</button></router-link>
			<router-link to="/register"><button id="zc">新用户</button></router-link>
  		</div>
  	</div>
  	
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style type="text/css" scoped="scoped"> 
	*{
		margin: 0;
		padding: 0;
	}
	#box{
		width: 100%;
		height: 100vh;
		background-image:url(../../assets/5.jpg);
		background-repeat: no-repeat;
		background-size: 100%;
	}

	.footer{
		width: 100%;
		position: fixed;
		bottom: 50px;
		text-align: center;
	}
	#btn{
		width: 90%;
		margin: 0 auto;
		text-align: center;
	}
	#btn button{
		width: 100%;
		height: 40px;
	}
	.btn{
		width: 90%;
		margin: 0 auto;
		padding: 0;
	}
	.dl a{
		color: #C92C2C;
	}
	a #zc{
		color:white;
	}
	.btn button{
		margin-top: 20px;
		width: 47%;
		height: 40px;
		border-radius: 5px;
		border: none;
		background: white;
		color: #C92C2C;
		text-align: center;
	}
  	#zc{
		margin-left: 4%;
		background: none;
		border: 1px solid white;
	}
</style>

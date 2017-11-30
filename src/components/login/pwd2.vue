<template>
	<div>
		<header>
			<span id="span"><router-link to="/pwd1"><span class="glyphicon glyphicon-menu-left"></span>返回</router-link></span>
			<p id="p"></span>找回密码</p>
		</header>
		<p id="p1">短信验证码已发送，请输入验证码</p>
		<div id="input"><input type="text" value="验证码"/></div>
		<div id="btn1"><button class="btn btn-danger"><router-link to="/pwd3">下一步</router-link></button></div>
		<p id="p2">28′后重新发送</p>
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
	header{
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: #CA3232;
		position: relative;
	}
	#p{
		text-align: center;
		font-size: 18px;
		color: white;
	}
	#span{
		position: absolute;
		left: 3%;
		top: 0px;
	}
	#span a{
		color: white;
	}
	#p1{
		text-align: center;
		margin-top: 17%;
		font-size: 18px;
		color: #505050;
	}
	#input{
		width: 90%;
		margin: 0 auto;
		margin-top: 8%;
		border-bottom: 1px solid #F1F1F1;
		padding-bottom: 10px;
	}
	#input input{
		text-align: center;
		color: #C8C8C8;
		border: none;
		width: 100%;
		height: 40px;
	}
	#btn1{
		width: 84%;
		margin: 0 auto;
		margin-top: 15%;
	}
	#btn1 button{
		width: 100%;
		height: 40px;
	}
	#btn1 a{
		color: white;
	}
	#p2{
		color: #CD4545;
		text-align: center;
		margin-top: 6%;
	}
</style>

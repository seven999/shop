<template>
	<div>
		<header>
			<span id="span"><router-link to="/pwd2"><span class="glyphicon glyphicon-menu-left"></span>返回</router-link></span>
			<p id="p"></span>找回密码</p>
		</header>
		<p id="p1">设置新密码</p>
		<div id="input"><input type="text" value="新密码"/></div>
		<div id="input"><input type="text" value="确认新密码"/></div>
		<div id="btn1"><button class="btn btn-danger"><router-link to="/login">完成</router-link></button></div>
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
		padding-bottom: 8px;
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
</style>

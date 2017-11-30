<template>
	<div>

	    <header>
	    	<span id="span"><router-link to="/home"><span class="glyphicon glyphicon-menu-left"></span>返回</router-link></span>
			<img src="../../assets/a_01.jpg"/>
		</header>
		<div class="login">
			<div class="left"><router-link to="/login">登录</router-link></div>
			<div class="right"><router-link to="/register">注册</router-link><div id="s"></div></div>
		</div>
		<div class="form">
			<span class="glyphicon glyphicon-phone"></span>
			<input type="text" placeholder="请输入您的手机号" v-model="phone"/>
		</div>
		<div class="form">
			<span class="glyphicon glyphicon-grain"></span>
			<input type="text" placeholder="请输入验证码"/>
		</div>
		<div class="form">
			<span class="glyphicon glyphicon-fire"></span>
			<input type="password" placeholder="请输入密码" v-model="password"/>
		</div>
		<div class="form">
			<span class="glyphicon glyphicon-asterisk"></span>
			<input type="password" placeholder="确认密码"/>
		</div>
		<div class="btn">
			<button class="btn btn-danger" @click="submit()">注册</button>
		</div>
	</div>

</template>


<script type="text/javascript">
	export default {
	  name: 'app',
	  data () {
	   	return {
	   		phone:'',
	   		password:''
	   	}
	  },
	  methods:{
	  	submit(){
	  		var url="http://114.55.249.153:8028/login/register"
	  		var options={emulateJSON:true}
	  		var param={
	  				phone:this.phone,
	  				password:this.password
	  		}
	  		this.$http.post(url,param,options).then((res)=>{
	  			console.log("注册成功")
	  		})
	  	}
	  }
	}
</script>



<style scoped="scoped">
	*{
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
	}
	header{
		width: 100%;
		height:auto;
		position: relative;
	}
	header img{
		width: 100%;
		height:auto;
	}
	header #span{
		position: absolute;
		left: 3%;
		top: 7%;
	}
	header span a{
		color: white;
	}
	.login{
		width: 100%;
		height: 50px;
		line-height: 50px;
		background: #f3f3f3;
		display: flex;
	}
	.login a{
		color: #bbbbbb;
	}
	.left,.right{
		width: 50%;
		text-align: center;	
	}
	.right a{
		color: #777777;
	}
	.right{
		position: relative;
	}
	.form{
		width: 84%;
		height:25%;
		margin:0 auto;
		margin-top:22px;
		border-bottom: 1px solid #E8E8E8;
		color: #bbbbbb;
	}
	.form input{
		height: 35px;
		border: none;
		width:80%;
		margin-left: 12px;
	}
	.form span{
		color: #bbbbbb;
		font-size: 20px;
		margin-left: 5px;
	}
	.btn{
		width: 100%;
		margin-top: 15px;
	}
	.btn button{
		width: 82%;
		height: 45px;
	}
	#s{
		width: 0px;
		height: 0px;
		border-left:6px solid transparent;
		border-right:6px solid transparent;
		border-bottom: 11px solid white;
		position: absolute;
		left: 47%;
		bottom: 0%;
	}

</style>
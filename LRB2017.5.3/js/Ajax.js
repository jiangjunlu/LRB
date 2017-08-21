function denglu(){
	var xmlhttp;
	startRequest();
	
	function createXMLHttpRequest()
	{
		if(window.ActiveXObject)
		{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		else if(window.XMLHttpRequest)
		{
			xmlhttp=new XMLHttpRequest();
		}
	}
	function startRequest()
	{
		var uid=document.getElementById('username').value;
		localStorage.uid=uid;
		var pwd=document.getElementById('password').value;
		var url="http://59.110.31.72:80/LRB/php/user.php?uid="+uid+"&pwd="+pwd+"&tp=dl";		
		createXMLHttpRequest();
		xmlhttp.onreadystatechange=handlestate;
		xmlhttp.open('GET',url,false);
		//alert(url);
		xmlhttp.send(null);
	}
	function  handlestate()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				var jsonStr=JSON.parse(xmlhttp.responseText);
			//	alert(jsonStr.code);
				//alert(xmlhttp.responseText);
				if(jsonStr.code=="NO"){
					localStorage.clear();
					alertxx("帐号或密码错误,请重新输入");
					return;
				}
				else if(jsonStr.code=="F"){
					localStorage.clear();
					alertxx("账户不存在");
					return;
				}
				else{
					//alert(xmlhttp.responseText);
					localStorage.uname=jsonStr.nicheng;
					localStorage.yhid=jsonStr.id;
					clickback();
					onwo("wode.html");
					//plus.webview.getWebviewById('wode.html').reload();为毛不行？
					toastxx("登录成功");
				}
			}
		}
	}
}

function zhuce(){
	var xmlhttp;
	startRequest();
	
	function createXMLHttpRequest()
	{
		if(window.ActiveXObject)
		{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		else if(window.XMLHttpRequest)
		{
			xmlhttp=new XMLHttpRequest();
		}
	}
	function startRequest()
	{
		var uname=document.getElementById('username').value;
		var uid=document.getElementById('dh').value;
		var pwd=document.getElementById('password1').value;
		var url="http://59.110.31.72:80/LRB/php/user.php?uid="+uid+"&uname="+uname+"&pwd="+pwd+"&tp=zc";		
		createXMLHttpRequest();
		xmlhttp.onreadystatechange=handlestate;
		xmlhttp.open('GET',url,false);
		//alert(url);
		xmlhttp.send(null);
	}
	function  handlestate()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				//alert(xmlhttp.responseText);
				if(xmlhttp.responseText=='YES'){
					clickback();
					toastxx("注册成功");
				}
				else if(xmlhttp.responseText=="NO"){
					alertxx("注册失败,请重新填写信息");
					return;
				}
				else if(xmlhttp.responseText=="F"){
					alertxx("此手机号已被注册");
					return;
				}
			}
		}
	}
}

function gerendd(){
	var xmlhttp;
	startRequest();
	if(localStorage.uid==undefined){
		alertxx("未登录");return;
	}
	
	function createXMLHttpRequest()
	{
		if(window.ActiveXObject)
		{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		else if(window.XMLHttpRequest)
		{
			xmlhttp=new XMLHttpRequest();
		}
	}
	function startRequest()
	{
		var url="http://59.110.31.72:80/LRB/php/user.php?uid="+localStorage.uid+"&tp=grdd";		
		createXMLHttpRequest();
		xmlhttp.onreadystatechange=handlestate;
		xmlhttp.open('GET',url,false);
		//alert(url);
		xmlhttp.send(null);
	}
	function  handlestate()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				//alert(xmlhttp.responseText);
				document.getElementById('grdd').innerHTML=xmlhttp.responseText;
			}
		}
	}
}

function onwo(id){
	if(phone()){
		var sty={
			top:'51px',
			bottom:'51px'
		};
		var pg=plus.webview.getLaunchWebview();
		var pageid=plus.webview.getWebviewById(id); 
		if(pageid==pg){
			pageid.reload();
		}
		else{
			var pg=plus.webview.create(id,id,sty);
			pg.show();
		}
		}
	else{
			onpage(id,swi);
		}
}

function phone()//判断设备
{
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return true;
	}else{
    return false;
	}
}

function toastxx(mes){//android自动消失提示
	if(phone()) plus.nativeUI.toast(mes);
	else alert(mes);
}

function clickopen(id) { //list点击item后的事件  
	if(phone()){
		//alert(plus.networkinfo.getCurrentType());
		if(plus.networkinfo.getCurrentType()==0||plus.networkinfo.getCurrentType()==1){
			toastxx("网络不可用");return;
		}
	}
	    var nwaiting = plus.nativeUI.showWaiting("请稍后...");//显示原生等待框 
	    if(document.getElementById('dis')!=null)
	    	document.getElementById('dis').setAttribute("class","disa");
    	webviewShow = plus.webview.create(id);//后台创建webview并打开show.html  
	if(id=="denglu.html"){
		   webviewShow.addEventListener("loaded", function() { //注册新webview的载入完成事件  
        nwaiting.close(); //新webview的载入完毕后关闭等待框  
       
        webviewShow.show("slide-in-bottom",400); //把新webview窗体显示出来，显示动画效果为速度300毫秒的右侧移入动画  
    	}, false);   
    	if(document.getElementById('dis')!=null)
    		setTimeout("document.getElementById('dis').setAttribute('class','disb')",5000);
	}
	else{
		   	webviewShow.addEventListener("loaded", function() { //注册新webview的载入完成事件  
        nwaiting.close(); //新webview的载入完毕后关闭等待框  
 
        webviewShow.show("slide-in-right",300); //把新webview窗体显示出来，显示动画效果为速度300毫秒的右侧移入动画  
    	}, false); 
    	if(document.getElementById('dis')!=null)
    		setTimeout("document.getElementById('dis').setAttribute('class','disb')",5000);
    	
	}
	

}
    
function clickhide()//隐藏webview
{
	var currentview=plus.webview.currentWebview();
	currentview.close();
}

function clickforward(url)//点击进入
{
	if(phone())
	{
		clickopen(url);
	}
	else{
		window.location.href=url;
	}
}
	
function clickback()//返回键
{
	if(phone())
	{
		clickhide();
	}
	else{
		history.go(-1);
	}
}

function alertxx(mes){//android提示
	if(phone()) plus.nativeUI.alert(mes);
	else alert(mes);
}

function toastxx(mes){//android自动消失提示
	if(phone()) plus.nativeUI.toast(mes);
	else alert(mes);
}
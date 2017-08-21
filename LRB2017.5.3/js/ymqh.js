function onpage(url,id){
	var sy_nav=document.getElementById('sy_nav');
	var dd_nav=document.getElementById('dd_nav');
	var cx_nav=document.getElementById('cx_nav');
	var wd_nav=document.getElementById('wd_nav');
	
	var sy_z=document.getElementById('sy_z');
	var dd_z=document.getElementById('dd_z');
	var cx_z=document.getElementById('cx_z');
	var wd_z=document.getElementById('wd_z');
	
	var sy_t=document.getElementById('sy_t');
	var dd_t=document.getElementById('dd_t');
	var cx_t=document.getElementById('cx_t');
	var wd_t=document.getElementById('wd_t');

	if(id==1){
		sy_nav.style.display="block";dd_nav.style.display="none";cx_nav.style.display="none";wd_nav.style.display="none";	
		document.getElementById("sy_z").style.color="#10a2cd";
		document.getElementById("sy_t").style.color="#10a2cd";
				document.getElementById("dd_z").style.color="#000";
		document.getElementById("dd_t").style.color="#929292";
		document.getElementById("cx_z").style.color="#000";
		document.getElementById("cx_t").style.color="#929292";
		document.getElementById("wd_z").style.color="#000";
		document.getElementById("wd_t").style.color="#929292";
		//document.getElementById('sy_iframe').src="shouye.html";
	}
	if(id==2){
		sy_nav.style.display="none";dd_nav.style.display="block";cx_nav.style.display="none";wd_nav.style.display="none";	
		document.getElementById("sy_z").style.color="#000";
		document.getElementById("sy_t").style.color="#929292";
				document.getElementById("dd_z").style.color="#10a2cd";
		document.getElementById("dd_t").style.color="#10a2cd";
		document.getElementById("cx_z").style.color="#000";
		document.getElementById("cx_t").style.color="#929292";
		document.getElementById("wd_z").style.color="#000";
		document.getElementById("wd_t").style.color="#929292";
		//document.getElementById('sy_iframe').src="dingdan.html";
	}
		if(id==3){
		sy_nav.style.display="none";dd_nav.style.display="none";cx_nav.style.display="block";wd_nav.style.display="none";
		document.getElementById("sy_z").style.color="#000";
		document.getElementById("sy_t").style.color="#929292";
				document.getElementById("dd_z").style.color="#000";
		document.getElementById("dd_t").style.color="#929292";
		document.getElementById("cx_z").style.color="#10a2cd";
		document.getElementById("cx_t").style.color="#10a2cd";
		document.getElementById("wd_z").style.color="#000";
		document.getElementById("wd_t").style.color="#929292";
		//document.getElementById('sy_iframe').src="kuaidichaxun.html";
	}
		if(id==4){
		sy_nav.style.display="none";dd_nav.style.display="none";cx_nav.style.display="none";wd_nav.style.display="block";
		document.getElementById("sy_z").style.color="#000";
		document.getElementById("sy_t").style.color="#929292";
				document.getElementById("dd_z").style.color="#000";
		document.getElementById("dd_t").style.color="#929292";
		document.getElementById("cx_z").style.color="#000";
		document.getElementById("cx_t").style.color="#929292";
		document.getElementById("wd_z").style.color="#10a2cd";
		document.getElementById("wd_t").style.color="#10a2cd";
		//document.getElementById('sy_iframe').src="wode.html";
	}
}

$(function(){
    /*设计图纸尺寸*/
    function resize(originsize,type){
        var type=type || "x";
        if(type=="x"){
            var widths=document.documentElement.clientWidth;
            var scale=widths/originsize*100+"px";
        }else if(type=="y"){
            var heights=document.documentElement.clientHeight;
            var scale=heights/originsize*100+"px";
        }
        document.getElementsByTagName("html")[0].style.fontSize=scale;
    }
    resize(720,"x");
    
    
    /*滚动条*/
    var myScroll;
	function loaded () {
	myScroll = new IScroll('#wrapper', { 
			scrollbars: false,
			bounce:true
		});
	}
	loaded();
	document.addEventListener('touchmove', function (e) {
		e.preventDefault();
	},false);
	
	
	/*轮播*/
})
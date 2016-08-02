window.onload = function Move(){
	var a = document.getElementsByClassName('move');
	for(var i=0; i<a.length; i++){
		a[i].onmouseover = function(){
			this.style.top = -5 + 'px';
		}
		a[i].onmouseout = function(){
			this.style.top = 5 + 'px';
		}			
	}
}

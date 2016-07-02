(function() {
    var tabs = [].slice.call(document.querySelectorAll('#myTab .tab'));
	
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            var target = this;
            tabs.forEach(function(tab, i) {
                if (target === tab) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
        }, false);
    });
})();

var button = document.getElementById("caidan");
var bar = document.getElementById("open");
button.onclick=function(){ 
    if (bar.style.display == "none"){
        bar.style.display = "block";
    }
	else {
		bar.style.display = "none";
	}
}

var program = document.getElementById("xiangmu");
var programbar = document.getElementById("open2");
program.onclick=function(){ 
    if (programbar.style.display == "none"){
        programbar.style.display = "block";
    }
	else {
		programbar.style.display = "none";
	}
}

var around = document.getElementById("fujin");
var aroundbar = document.getElementById("open3");
around.onclick=function(){ 
    if (aroundbar.style.display == "none"){
        aroundbar.style.display = "block";
    }
	else {
		aroundbar.style.display = "none";
	}
}

var h = document.getElementById("lishi");
var hbar = document.getElementById("open4");
h.onclick=function(){ 
    if (hbar.style.display == "none"){
        hbar.style.display = "block";
    }
	else {
		hbar.style.display = "none";
	}
}


var mine = document.getElementById("wode");
var bottombar = document.getElementById("open5");
mine.onclick=function(){ 
    if (bottombar.style.display == "none"){
        bottombar.style.display = "block";
    }
	else {
		bottombar.style.display = "none";
	}
}


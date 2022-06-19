function display(id){
	id.style.display = "block";
	return;
}

function hide(id){
	id.style.display = "none";
	return;
}

function search_it(){
	var url;
	display(document.getElementById("search_div"));
	window.location.href = url;
	return;
}

function display_it(){
	display(document.getElementById("article_list"));
	document.getElementById("over").src = "graph/up.png";
	return;
}

function hide_it(){
	hide(document.getElementById("article_list"));
	document.getElementById("over").src = "graph/down.png";
	return;
}

function display(class_name){
	class_name.setAttribute("display", "inherit");
	return;
}

function hide(class_name){
	class_name.setAttribute("display", "none");
	return;
}

function search_it(){
	var url;
	display(document.getElementsByClassName("search_div")[0]);
	window.location.href = url;
	return;
}

function display_it(){
	display(document.getElementsByClassName("article_list")[0]);
	document.getElementById("over").src =  "graph/up.png";
	return;
}

function hide_it(){
	hide(document.getElementsByClassName("article_list")[0]);
	document.getElementById("over").src =  "graph/down.png";
	return;
}

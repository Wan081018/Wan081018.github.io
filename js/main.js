function search_it(){
	var url = prompt(
		"Please enter which article you want to go:",
		"article"
	);
	if(url=="" || url==null) return;
	window.location.href = url;
	return;
}
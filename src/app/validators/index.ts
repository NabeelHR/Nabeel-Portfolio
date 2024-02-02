function validateEmail(email: string) {
	var filter =
		/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
	return String(email).search(filter) != -1;
}

export { validateEmail };

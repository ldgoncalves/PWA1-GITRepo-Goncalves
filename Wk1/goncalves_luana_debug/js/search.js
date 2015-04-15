// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), //initialize search be for input
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
	
	// Validates search query
	//Once input is entered, validate function query
	var validqte == function(query){ //only need one "=" to assign variable
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){//execute if true if false, go to next while loop
			query = query.substring(1, query.length);
		};
		while(query.charAt(query.length-1) === ""){//this loop check if there is no whitespace
			query = query.substring(0, query.length-1);
		;
		
		// Check search length, must have 3 characters
		if(query.length < 3){
			//in order to move on, query has to be more than 3
			alert("Your search query is too small, try again.);

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); //focus on element search.Input
			return; //return validated query to be entered in the database
		};
		
		search(query); //call function
	};
	
	// Finds search matches
	var search = function(query) //search function begins here //forgot (){}
		
		// split the user's search query string into an array
		var queryArray = query.join(" ");
		
		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); //return the position of "|" after each index in the array
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); //two methods for one var?
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
				var qitem = queryArray[ii].tolowercase();
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);
				if(compare !== -1){
					results.push(db[i]);
				};
			;
		;
		
		results.sort();// sort results in array
		
		// Check that matches were found, and run output functions
		if(results.length = 0){
			noMatch();
		}else{
			showMatches(results);
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ //display suggestion for what to search
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html; //this replaces document.write to create a div in a html doc
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', //display results in html format
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);//substring in case-sensitive
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT. //create a div in the html to display
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){ //submits form
		var query = searchInput.value; //assign value property once form is submitted
		validqte(query); //call function validate query

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})(); //end process //extra parentheses